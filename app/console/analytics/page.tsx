'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BarChart, TrendingUp, AlertTriangle, Shield, ArrowLeft, Eye, Download, RefreshCw, Activity, Sparkles, Zap, Clock, Database, Users } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import ConsoleSidebar, { useSidebar, SidebarProvider, useMainContentClass } from '../../../components/ConsoleSidebar'
import ConsoleFooter from '../../../components/ConsoleFooter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface BiasMetric {
  name: string
  score: number
  status: 'Good' | 'Warning' | 'Critical'
  description: string
}

interface QualityMetric {
  name: string
  value: number
  unit: string
  trend: 'up' | 'down' | 'stable'
  change: number
}

export default function Analytics() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState('all')
  const [timeRange, setTimeRange] = useState('30d')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)
  const [liveStats, setLiveStats] = useState({
    activeAnalyses: 8,
    dataProcessed: 2.4,
    lastUpdate: new Date()
  })
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Professional',
    dataGenerated: 2450000,
    dataLimit: 5000000,
    activeProjects: 12,
    totalDownloads: 48
  })

  const projects = [
    { id: 'all', name: 'All Projects' },
    { id: '1', name: 'Customer Analytics Dataset' },
    { id: '2', name: 'Financial Transactions' },
    { id: '3', name: 'Healthcare Records' },
    { id: '4', name: 'Manufacturing Sensor Data' }
  ]

  const biasMetrics: BiasMetric[] = [
    {
      name: 'Statistical Parity',
      score: 0.92,
      status: 'Good',
      description: 'Equal positive prediction rates across demographic groups'
    },
    {
      name: 'Equalized Odds',
      score: 0.88,
      status: 'Good',
      description: 'Equal true positive and false positive rates across groups'
    },
    {
      name: 'Demographic Parity',
      score: 0.75,
      status: 'Warning',
      description: 'Equal outcome distribution across demographic groups'
    },
    {
      name: 'Individual Fairness',
      score: 0.95,
      status: 'Good',
      description: 'Similar individuals receive similar predictions'
    }
  ]

  const qualityMetrics: QualityMetric[] = [
    {
      name: 'Statistical Fidelity',
      value: 98.5,
      unit: '%',
      trend: 'up',
      change: 2.3
    },
    {
      name: 'Privacy Score',
      value: 100,
      unit: '%',
      trend: 'stable',
      change: 0
    },
    {
      name: 'Correlation Preservation',
      value: 96.8,
      unit: '%',
      trend: 'up',
      change: 1.5
    },
    {
      name: 'Data Utility',
      value: 94.2,
      unit: '%',
      trend: 'down',
      change: -0.8
    }
  ]

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
      return
    }
    setLoading(false)
  }, [router])

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeAnalyses: prev.activeAnalyses + Math.floor(Math.random() * 3 - 1),
        dataProcessed: prev.dataProcessed + Math.random() * 0.1,
        lastUpdate: new Date()
      }))
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsRefreshing(false)
  }

  const getBiasStatusColor = (status: string) => {
    switch (status) {
      case 'Good':
        return 'text-green-600 bg-green-100'
      case 'Warning':
        return 'text-yellow-600 bg-yellow-100'
      case 'Critical':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case 'down':
        return <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />
      case 'stable':
        return <div className="h-4 w-4 border-t-2 border-gray-400"></div>
      default:
        return null
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <ConsoleSidebar user={user} />
        
        {/* Main Content */}
        <div className="flex-1">
          <AnalyticsMainContent 
            user={user}
            projects={projects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            qualityMetrics={qualityMetrics}
            biasMetrics={biasMetrics}
            getBiasStatusColor={getBiasStatusColor}
            getTrendIcon={getTrendIcon}
            isRefreshing={isRefreshing}
            handleRefresh={handleRefresh}
            hoveredMetric={hoveredMetric}
            setHoveredMetric={setHoveredMetric}
            liveStats={liveStats}
          />
        </div>
        
        <ConsoleFooter />
      </div>
    </SidebarProvider>
  )
}

// Separate component to use the sidebar context
function AnalyticsMainContent({ 
  user, 
  projects, 
  selectedProject, 
  setSelectedProject, 
  timeRange, 
  setTimeRange, 
  qualityMetrics, 
  biasMetrics, 
  getBiasStatusColor, 
  getTrendIcon,
  isRefreshing,
  handleRefresh,
  hoveredMetric,
  setHoveredMetric,
  liveStats
}: any) {
  const mainContentClass = useMainContentClass()
  
  return (
    <div className={mainContentClass}>
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              href="/console"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors duration-200" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold font-garnett text-gray-900 flex items-center">
                Analytics & Insights
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="ml-2"
                >
                  <BarChart className="h-5 w-5 text-primary" />
                </motion.div>
              </h1>
              <p className="text-gray-600 font-segoe text-sm mt-1">
                Monitor bias, quality metrics, and data insights
              </p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center text-sm disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 hover:shadow-lg transition-all duration-200 flex items-center text-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Filters */}
        <motion.div
          
          
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold font-garnett text-gray-900 flex items-center">
              <Activity className="h-5 w-5 text-primary mr-2" />
              Analytics Filters
            </h3>
            <div className="text-sm text-gray-500 font-segoe">
              Customize your view
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                Project Selection
              </label>
              <div className="relative">
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500  appearance-none cursor-pointer hover:border-green-400 font-segoe text-sm"
                >
                  {projects.map((project: any) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <motion.div
                    animate={{ rotate: selectedProject ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 font-segoe">
                {projects.find((p: any) => p.id === selectedProject)?.name === 'All Projects' 
                  ? 'Analyzing all projects' 
                  : 'Single project analysis'}
              </div>
            </div>

            {/* Time Range Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                Time Range
              </label>
              <div className="relative">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500  appearance-none cursor-pointer hover:border-green-400 font-segoe text-sm"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <motion.div
                    animate={{ rotate: timeRange ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 font-segoe flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {timeRange === '7d' ? 'Recent data' : 
                 timeRange === '30d' ? 'Monthly trends' :
                 timeRange === '90d' ? 'Quarterly analysis' : 'Annual overview'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quality Metrics Overview */}
        <section className="mb-6 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          <h2 className="text-lg font-bold font-garnett text-gray-900 mb-4">
            Quality Metrics Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityMetrics.map((metric: any, index: number) => (
              <motion.div
                key={metric.name}
                
                
                
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600 font-segoe">
                    {metric.name}
                  </h3>
                  {getTrendIcon(metric.trend)}
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900 font-garnett">
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-600 ml-1">
                    {metric.unit}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className={`text-xs font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}% from last period
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bias Analysis */}
        <section className="mb-6 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          <h2 className="text-lg font-bold font-garnett text-gray-900 mb-4">
            Bias Analysis Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {biasMetrics.map((metric: any, index: number) => (
              <motion.div
                key={metric.name}
                
                
                
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 font-garnett text-sm">
                    {metric.name}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getBiasStatusColor(metric.status)}`}>
                    {metric.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Score</span>
                    <span>{(metric.score * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                        metric.status === 'Good' ? 'bg-green-500' :
                        metric.status === 'Warning' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${metric.score * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 font-segoe">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Data Distribution */}
        <section className="mb-6 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          <h2 className="text-lg font-bold font-garnett text-gray-900 mb-4">
            Data Distribution Analysis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 font-garnett mb-4 text-sm">
                Gender Distribution
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Male</span>
                  <span className="text-sm font-medium">48.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '48.2%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Female</span>
                  <span className="text-sm font-medium">51.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: '51.8%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 font-garnett mb-4 text-sm">
                Age Demographics
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">18-25</span>
                  <span className="text-sm font-medium">22.1%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '22.1%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">26-35</span>
                  <span className="text-sm font-medium">31.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '31.5%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">36-50</span>
                  <span className="text-sm font-medium">28.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '28.7%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">50+</span>
                  <span className="text-sm font-medium">17.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '17.7%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="mb-6 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          <h2 className="text-lg font-bold font-garnett text-gray-900 mb-4">
            Privacy & Security Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Shield className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-900 font-garnett text-sm">
                  Data Leakage
                </h3>
              </div>
              <div className="text-2xl font-bold text-green-600 font-garnett">
                0%
              </div>
              <p className="text-xs text-gray-600 font-segoe mt-1">
                No sensitive data detected
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900 font-garnett text-sm">
                  Statistical Accuracy
                </h3>
              </div>
              <div className="text-2xl font-bold text-blue-600 font-garnett">
                98.5%
              </div>
              <p className="text-xs text-gray-600 font-segoe mt-1">
                High fidelity maintained
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Eye className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900 font-garnett text-sm">
                  Anonymization Score
                </h3>
              </div>
              <div className="text-2xl font-bold text-purple-600 font-garnett">
                100%
              </div>
              <p className="text-xs text-gray-600 font-segoe mt-1">
                Complete anonymization
              </p>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-lg font-bold font-garnett text-gray-900 mb-4">
            Recommendations
          </h2>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 font-garnett text-sm">
                    Improve Demographic Parity
                  </h3>
                  <p className="text-sm text-gray-600 font-segoe mt-1">
                    Consider adjusting the generation parameters to improve demographic parity score from 75% to above 85%.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 font-garnett text-sm">
                    Optimize Data Utility
                  </h3>
                  <p className="text-sm text-gray-600 font-segoe mt-1">
                    Data utility has decreased by 0.8%. Review correlation preservation settings to maintain higher utility scores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 