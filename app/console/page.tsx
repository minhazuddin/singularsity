'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Database, Download, BarChart, Users, Clock, Settings, Plus, TrendingUp, Shield, Zap, Activity, Sparkles, RefreshCw, Eye, ArrowUp, ArrowDown } from 'lucide-react'
import Navigation from '../../components/Navigation'
import ConsoleSidebar, { useSidebar, SidebarProvider, useMainContentClass } from '../../components/ConsoleSidebar'
import ConsoleFooter from '../../components/ConsoleFooter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface User {
  name: string
  email: string
  plan: string
  dataGenerated: number
  dataLimit: number
  activeProjects: number
  totalDownloads: number
}

export default function Console() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Mock authentication check
  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      if (!isLoggedIn) {
        router.push('/login')
        return
      }
      
      // Mock user data
      setUser({
        name: 'John Doe',
        email: 'john@example.com',
        plan: 'Professional',
        dataGenerated: 2450000,
        dataLimit: 5000000,
        activeProjects: 12,
        totalDownloads: 48
      })
      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <ConsoleSidebar user={user} />
        
        {/* Main Content */}
        <div className="flex-1">
          <ConsoleMainContent user={user} />
        </div>
        
        <ConsoleFooter />
      </div>
    </SidebarProvider>
  )
}

// Separate component to use the sidebar context
function ConsoleMainContent({ user }: { user: User }) {
  const mainContentClass = useMainContentClass()
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [hoveredStat, setHoveredStat] = useState<string | null>(null)
  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    // Check localStorage to see if user has visited dashboard before
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('dashboardVisited')
    }
    return true
  })
  const [liveStatus, setLiveStatus] = useState({
    activeGenerations: 8,
    queueLength: 12,
    systemHealth: 98,
    dataProcessed: 2.4,
    apiRequests: 156
  })

  // Simulate live status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStatus(prev => ({
        activeGenerations: Math.max(0, prev.activeGenerations + Math.floor(Math.random() * 3 - 1)),
        queueLength: Math.max(0, prev.queueLength + Math.floor(Math.random() * 5 - 2)),
        systemHealth: Math.max(85, Math.min(100, prev.systemHealth + Math.floor(Math.random() * 3 - 1))),
        dataProcessed: prev.dataProcessed + Math.random() * 0.2,
        apiRequests: prev.apiRequests + Math.floor(Math.random() * 10)
      }))
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  // Set first visit to false after initial load and mark in localStorage
  useEffect(() => {
    if (isFirstVisit) {
      setTimeout(() => {
        setIsFirstVisit(false)
        localStorage.setItem('dashboardVisited', 'true')
      }, 2500) // Wait for animations to complete
    }
  }, [isFirstVisit])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsRefreshing(false)
  }
  
  const recentProjects = [
    {
      id: 1,
      name: 'Customer Analytics Dataset',
      type: 'Customer Data',
      records: 100000,
      status: 'Completed',
      createdAt: '2024-01-15',
      accuracy: 98.5
    },
    {
      id: 2,
      name: 'Financial Transactions',
      type: 'Financial Data',
      records: 250000,
      status: 'Processing',
      createdAt: '2024-01-14',
      accuracy: 97.8
    },
    {
      id: 3,
      name: 'Healthcare Records',
      type: 'Healthcare Data',
      records: 75000,
      status: 'Completed',
      createdAt: '2024-01-13',
      accuracy: 99.2
    }
  ]

  const quickStats = [
    {
      id: 'data',
      label: 'Data Generated',
      value: `${(user.dataGenerated / 1000000).toFixed(1)}M`,
      subtitle: `of ${(user.dataLimit / 1000000)}M records`,
      icon: Database,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      change: '+12.5%',
      trend: 'up',
      description: 'Total synthetic data records generated this month'
    },
    {
      id: 'projects',
      label: 'Active Projects',
      value: user.activeProjects,
      subtitle: 'projects running',
      icon: BarChart,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      change: '+3',
      trend: 'up',
      description: 'Currently active data generation projects'
    },
    {
      id: 'downloads',
      label: 'Downloads',
      value: user.totalDownloads,
      subtitle: 'this month',
      icon: Download,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      change: '+8.2%',
      trend: 'up',
      description: 'Dataset downloads completed this month'
    },
    {
      id: 'plan',
      label: 'Plan Status',
      value: user.plan,
      subtitle: 'current plan',
      icon: Users,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-orange-600',
      change: 'Active',
      trend: 'stable',
      description: 'Your current subscription plan status'
    }
  ]
  
  return (
    <div className={mainContentClass}>
      {/* Console Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div>
              <h1 className="text-2xl font-bold font-space-grotesk text-gray-900 flex items-center">
                Dashboard
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="ml-2"
                >
                  <Sparkles className="h-5 w-5 text-primary" />
                </motion.div>
              </h1>
              <p className="text-gray-600 font-segoe text-sm mt-1">
                Welcome back, {user.name}
              </p>
            </div>
            
            {/* Live Status Indicators */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600 font-segoe">
                  <span className="font-medium text-green-600">{liveStatus.activeGenerations}</span> generating
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-3 w-3 text-blue-500" />
                <span className="text-xs text-gray-600 font-segoe">
                  <span className="font-medium text-blue-600">{liveStatus.queueLength}</span> in queue
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  liveStatus.systemHealth >= 95 ? 'bg-green-500' : 
                  liveStatus.systemHealth >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-xs text-gray-600 font-segoe">
                  <span className={`font-medium ${
                    liveStatus.systemHealth >= 95 ? 'text-green-600' : 
                    liveStatus.systemHealth >= 90 ? 'text-yellow-600' : 'text-red-600'
                  }`}>{liveStatus.systemHealth}%</span> health
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Database className="h-3 w-3 text-purple-500" />
                <span className="text-xs text-gray-600 font-segoe">
                  <span className="font-medium text-purple-600">{liveStatus.dataProcessed.toFixed(1)}M</span> processed
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Activity className="h-3 w-3 text-orange-500" />
                <span className="text-xs text-gray-600 font-segoe">
                  <span className="font-medium text-orange-600">{liveStatus.apiRequests}</span> API calls
                </span>
              </motion.div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            
            <Link
              href="/console/generate"
              className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all duration-200 flex items-center text-sm shadow-lg"
            >
              <Plus className="h-4 w-4 mr-2" />
              Generate Data
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="p-6 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon
            const TrendIcon = stat.trend === 'up' ? ArrowUp : stat.trend === 'down' ? ArrowDown : Activity
            return (
              <motion.div
                key={stat.id}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredStat(stat.id)}
                onHoverEnd={() => setHoveredStat(null)}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                      stat.trend === 'up' ? 'bg-green-100 text-green-700' :
                      stat.trend === 'down' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      <TrendIcon className="h-3 w-3" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-2xl font-bold font-space-grotesk text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700 font-segoe">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500 font-segoe">
                      {stat.subtitle}
                    </div>
                  </div>
                  
                  {/* Tooltip on hover */}
                  <AnimatePresence>
                    {hoveredStat === stat.id && (
                      <motion.div
                        
                        
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-2 left-0 right-0 bg-gray-900 text-white text-xs p-2 rounded-lg shadow-lg z-10"
                      >
                        {stat.description}
                        <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Usage Progress */}
      <section className="px-6 pb-6 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <motion.div
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Database className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-space-grotesk text-gray-900">
                  Plan Usage
                </h2>
                <p className="text-sm text-gray-600 font-segoe">
                  {user.plan} Plan • Resets monthly
                </p>
              </div>
            </div>
            <Link
              href="/console/settings"
              className="text-primary hover:text-primary-dark transition-all duration-200 flex items-center text-sm font-medium hover:scale-105 bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg"
            >
              <Settings className="h-4 w-4 mr-1" />
              Manage Plan
            </Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 font-segoe flex items-center">
                <Activity className="h-4 w-4 mr-2 text-green-500" />
                Data Generation
              </span>
              <div className="text-right">
                <span className="text-lg font-bold text-gray-900 font-space-grotesk">
                  {((user.dataGenerated / user.dataLimit) * 100).toFixed(1)}%
                </span>
                <span className="text-sm text-gray-600 font-segoe ml-1">used</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={isFirstVisit ? { width: 0 } : { width: `${(user.dataGenerated / user.dataLimit) * 100}%` }}
                  animate={{ width: `${(user.dataGenerated / user.dataLimit) * 100}%` }}
                  transition={isFirstVisit ? { duration: 2, ease: "easeOut" } : { duration: 0 }}
                  className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 h-4 rounded-full relative overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <motion.div
                    initial={isFirstVisit ? { x: '-100%' } : { x: '100%' }}
                    animate={{ x: '100%' }}
                    transition={isFirstVisit ? { 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "easeInOut" 
                    } : { duration: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>
              
              {/* Usage indicator */}
              <div 
                className="absolute top-0 h-4 w-1 bg-white shadow-lg rounded-full transform -translate-x-1/2"
                style={{ left: `${(user.dataGenerated / user.dataLimit) * 100}%` }}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 font-space-grotesk">
                  {(user.dataGenerated / 1000000).toFixed(1)}M
                </div>
                <div className="text-xs text-gray-600 font-segoe">Used</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600 font-space-grotesk">
                  {((user.dataLimit - user.dataGenerated) / 1000000).toFixed(1)}M
                </div>
                <div className="text-xs text-gray-600 font-segoe">Remaining</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 font-space-grotesk">
                  {(user.dataLimit / 1000000).toFixed(0)}M
                </div>
                <div className="text-xs text-gray-600 font-segoe">Total Limit</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recent Projects */}
      <section className="px-6 pb-6 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-space-grotesk text-gray-900">
                    Recent Projects
                  </h2>
                  <p className="text-sm text-gray-600 font-segoe">
                    Your latest data generation projects
                  </p>
                </div>
              </div>
              <Link
                href="/console/projects"
                className="text-primary hover:text-primary-dark transition-all duration-200 text-sm font-medium hover:scale-105 bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg flex items-center"
              >
                <Eye className="h-4 w-4 mr-1" />
                View All
              </Link>
            </div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.2 }
                }}
                className="p-6 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary/5 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-600'
                        : project.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-gray-100 text-gray-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {project.status === 'Processing' ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <RefreshCw className="h-5 w-5" />
                        </motion.div>
                      ) : (
                        <Database className="h-5 w-5" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 font-space-grotesk text-base group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-600 font-segoe bg-gray-100 px-2 py-1 rounded-full">
                          {project.type}
                        </span>
                        <span className="text-sm text-gray-600 font-segoe flex items-center">
                          <Database className="h-3 w-3 mr-1" />
                          {project.records.toLocaleString()} records
                        </span>
                        <span className="text-sm text-gray-600 font-segoe flex items-center">
                          <Shield className="h-3 w-3 mr-1" />
                          {project.accuracy}% accuracy
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                      <div className="text-xs text-gray-500 font-segoe mt-1">
                        {project.createdAt}
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 bg-gray-100 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Eye className="h-4 w-4 text-gray-600 hover:text-primary" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Actions */}
      <section className="px-6 pb-6 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <motion.div
        >
          <div className="mb-4">
            <h2 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
              Quick Actions
            </h2>
            <p className="text-sm text-gray-600 font-segoe">
              Jump into your most common tasks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/console/generate"
                className="block bg-gradient-to-br from-primary via-primary to-secondary text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Animated background effect */}
                <motion.div
                  initial={{ x: '-100%', y: '-100%' }}
                  animate={{ x: '100%', y: '100%' }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 2,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Plus className="h-6 w-6 text-white" />
                    </div>
                    <Zap className="h-5 w-5 text-yellow-300" />
                  </div>
                  <h3 className="font-bold font-space-grotesk text-lg mb-2">Generate New Data</h3>
                  <p className="text-sm opacity-90 font-segoe">Create high-quality synthetic datasets with AI</p>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/console/projects"
                className="block bg-white border border-gray-200 p-6 rounded-xl hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-purple/5 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-bold font-space-grotesk text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  Manage Projects
                </h3>
                <p className="text-sm text-gray-600 font-segoe">View, organize and download your datasets</p>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/console/analytics"
                className="block bg-white border border-gray-200 p-6 rounded-xl hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-blue/5 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                  />
                </div>
                <h3 className="font-bold font-space-grotesk text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  View Analytics
                </h3>
                <p className="text-sm text-gray-600 font-segoe">Detailed insights and performance reports</p>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 