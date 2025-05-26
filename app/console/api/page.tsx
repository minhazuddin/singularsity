'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Key, Code, BarChart, Activity, ArrowLeft, Copy, Play, Download, RefreshCw, Eye, EyeOff, CheckCircle, AlertTriangle, Clock, Database, TrendingUp, Zap, Globe, Shield, Book, Terminal, FileText, Settings } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import ConsoleSidebar, { useSidebar, SidebarProvider, useMainContentClass } from '../../../components/ConsoleSidebar'
import ConsoleFooter from '../../../components/ConsoleFooter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ApiEndpoint {
  method: string
  path: string
  description: string
  parameters: string[]
  example: string
}

interface ApiUsageStats {
  totalRequests: number
  successRate: number
  avgResponseTime: number
  requestsToday: number
  requestsThisMonth: number
  topEndpoints: { endpoint: string; requests: number }[]
}

export default function ApiPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null)
  const [testResponse, setTestResponse] = useState<string | null>(null)
  const [isTestingApi, setIsTestingApi] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [liveStats, setLiveStats] = useState({
    activeRequests: 23,
    queuedRequests: 5,
    errorRate: 0.2,
    avgLatency: 145
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

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart, description: 'API usage and statistics' },
    { id: 'documentation', name: 'Documentation', icon: Book, description: 'API endpoints and examples' },
    { id: 'testing', name: 'API Testing', icon: Terminal, description: 'Test API endpoints' },
    { id: 'keys', name: 'API Keys', icon: Key, description: 'Manage your API keys' },
    { id: 'logs', name: 'Request Logs', icon: FileText, description: 'View API request logs' }
  ]

  const apiEndpoints: ApiEndpoint[] = [
    {
      method: 'POST',
      path: '/api/v1/generate',
      description: 'Generate synthetic data',
      parameters: ['data_type', 'record_count', 'format', 'columns'],
      example: `{
  "data_type": "customer",
  "record_count": 1000,
  "format": "csv",
  "columns": ["name", "email", "age", "location"]
}`
    },
    {
      method: 'GET',
      path: '/api/v1/projects',
      description: 'List all projects',
      parameters: ['limit', 'offset', 'status'],
      example: `{
  "limit": 10,
  "offset": 0,
  "status": "completed"
}`
    },
    {
      method: 'GET',
      path: '/api/v1/projects/{id}',
      description: 'Get project details',
      parameters: ['id'],
      example: `{
  "id": "proj_123456789"
}`
    },
    {
      method: 'GET',
      path: '/api/v1/download/{id}',
      description: 'Download generated data',
      parameters: ['id', 'format'],
      example: `{
  "id": "proj_123456789",
  "format": "csv"
}`
    },
    {
      method: 'POST',
      path: '/api/v1/analyze',
      description: 'Analyze data for bias and quality',
      parameters: ['project_id', 'metrics'],
      example: `{
  "project_id": "proj_123456789",
  "metrics": ["bias", "quality", "privacy"]
}`
    }
  ]

  const usageStats: ApiUsageStats = {
    totalRequests: 45230,
    successRate: 99.8,
    avgResponseTime: 245,
    requestsToday: 1240,
    requestsThisMonth: 18650,
    topEndpoints: [
      { endpoint: '/api/v1/generate', requests: 15420 },
      { endpoint: '/api/v1/projects', requests: 8930 },
      { endpoint: '/api/v1/download', requests: 6780 },
      { endpoint: '/api/v1/analyze', requests: 4320 }
    ]
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
      return
    }
    setLoading(false)
  }, [router])

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeRequests: Math.max(0, prev.activeRequests + Math.floor(Math.random() * 6 - 3)),
        queuedRequests: Math.max(0, prev.queuedRequests + Math.floor(Math.random() * 4 - 2)),
        errorRate: Math.max(0, Math.min(5, prev.errorRate + (Math.random() - 0.5) * 0.1)),
        avgLatency: Math.max(50, Math.min(500, prev.avgLatency + Math.floor(Math.random() * 20 - 10)))
      }))
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const handleCopyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const handleTestApi = async (endpoint: ApiEndpoint) => {
    setIsTestingApi(true)
    setSelectedEndpoint(endpoint.path)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const mockResponse = {
      status: 200,
      data: {
        success: true,
        message: `${endpoint.method} ${endpoint.path} executed successfully`,
        timestamp: new Date().toISOString(),
        response_time: Math.floor(Math.random() * 300 + 100) + 'ms'
      }
    }
    
    setTestResponse(JSON.stringify(mockResponse, null, 2))
    setIsTestingApi(false)
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
          <ApiMainContent 
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
            apiEndpoints={apiEndpoints}
            usageStats={usageStats}
            liveStats={liveStats}
            selectedEndpoint={selectedEndpoint}
            setSelectedEndpoint={setSelectedEndpoint}
            testResponse={testResponse}
            isTestingApi={isTestingApi}
            handleTestApi={handleTestApi}
            copiedCode={copiedCode}
            handleCopyCode={handleCopyCode}
          />
        </div>
        
        <ConsoleFooter />
      </div>
    </SidebarProvider>
  )
}

// Separate component to use the sidebar context
function ApiMainContent({ 
  user, 
  activeTab, 
  setActiveTab, 
  tabs, 
  apiEndpoints, 
  usageStats, 
  liveStats,
  selectedEndpoint,
  setSelectedEndpoint,
  testResponse,
  isTestingApi,
  handleTestApi,
  copiedCode,
  handleCopyCode
}: any) {
  const mainContentClass = useMainContentClass()
  
  return (
    <div className={mainContentClass}>
      {/* Enhanced Header */}
      <motion.div 
        className="bg-white border-b px-6 py-4"
        
        
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              href="/console"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors duration-200" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold font-space-grotesk text-gray-900 flex items-center">
                API Management
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="ml-2"
                >
                  <Code className="h-5 w-5 text-primary" />
                </motion.div>
              </h1>
              <p className="text-gray-600 font-segoe text-sm mt-1">
                Manage your API keys, view documentation, and monitor usage
              </p>
            </div>
            
            {/* Live API Stats */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600 font-segoe">
                  <span className="font-medium text-green-600">{liveStats.activeRequests}</span> active
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-3 w-3 text-blue-500" />
                <span className="text-xs text-gray-600 font-segoe">
                  <span className="font-medium text-blue-600">{liveStats.avgLatency}ms</span> latency
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  liveStats.errorRate < 1 ? 'bg-green-500' : 
                  liveStats.errorRate < 3 ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-xs text-gray-600 font-segoe">
                  <span className={`font-medium ${
                    liveStats.errorRate < 1 ? 'text-green-600' : 
                    liveStats.errorRate < 3 ? 'text-yellow-600' : 'text-red-600'
                  }`}>{liveStats.errorRate.toFixed(1)}%</span> errors
                </span>
              </motion.div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center text-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Logs
            </motion.button>
            
            <Link
              href="/console/settings?tab=api"
              className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 hover:shadow-lg transition-all duration-200 flex items-center text-sm"
            >
              <Settings className="h-4 w-4 mr-2" />
              API Settings
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="p-6">
        {/* Enhanced Tab Navigation */}
        <motion.div 
          className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 mb-6"
          
          
          
        >
          <nav className="flex space-x-2">
            {tabs.map((tab: any, index: number) => {
              const IconComponent = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-sm relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  
                  
                  
                >
                  <IconComponent className={`h-4 w-4 mr-2 ${
                    isActive ? 'text-white' : 'text-gray-500'
                  }`} />
                  <span className="font-medium">{tab.name}</span>
                  
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-2 w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              
              
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Usage Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <BarChart className="h-6 w-6 text-white" />
                    </div>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 font-space-grotesk">
                    {usageStats.totalRequests.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 font-segoe">Total Requests</div>
                  <div className="text-xs text-green-600 mt-1">+12.5% this month</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 font-space-grotesk">
                    {usageStats.successRate}%
                  </div>
                  <div className="text-sm text-gray-600 font-segoe">Success Rate</div>
                  <div className="text-xs text-green-600 mt-1">Excellent performance</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <Clock className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 font-space-grotesk">
                    {usageStats.avgResponseTime}ms
                  </div>
                  <div className="text-sm text-gray-600 font-segoe">Avg Response Time</div>
                  <div className="text-xs text-purple-600 mt-1">Fast & reliable</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-xs text-gray-500">Today</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 font-space-grotesk">
                    {usageStats.requestsToday.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 font-segoe">Requests Today</div>
                  <div className="text-xs text-orange-600 mt-1">+8.2% vs yesterday</div>
                </motion.div>
              </div>

              {/* Top Endpoints */}
              <motion.div
                
                
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-4">
                  Top API Endpoints
                </h3>
                <div className="space-y-4">
                  {usageStats.topEndpoints.map((endpoint: any, index: number) => (
                    <motion.div
                      key={endpoint.endpoint}
                      
                      
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <code className="text-sm font-mono text-gray-700">{endpoint.endpoint}</code>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-900">
                          {endpoint.requests.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">requests</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Documentation Tab */}
          {activeTab === 'documentation' && (
            <motion.div
              key="documentation"
              
              
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-4">
                  API Endpoints
                </h3>
                <div className="space-y-6">
                  {apiEndpoints.map((endpoint: any, index: number) => (
                    <motion.div
                      key={endpoint.path}
                      
                      
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary/30 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 text-xs font-bold rounded ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-700">{endpoint.path}</code>
                        </div>
                        <motion.button
                          onClick={() => handleCopyCode(endpoint.example, endpoint.path)}
                          className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {copiedCode === endpoint.path ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </motion.button>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{endpoint.description}</p>
                      
                      <div className="mb-3">
                        <div className="text-xs font-medium text-gray-700 mb-2">Parameters:</div>
                        <div className="flex flex-wrap gap-2">
                          {endpoint.parameters.map((param: string) => (
                            <span key={param} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {param}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-medium text-gray-700 mb-2">Example Request:</div>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                          {endpoint.example}
                        </pre>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* API Testing Tab */}
          {activeTab === 'testing' && (
            <motion.div
              key="testing"
              
              
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* Test Endpoints */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-4">
                  Test API Endpoints
                </h3>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint: any, index: number) => (
                    <motion.div
                      key={endpoint.path}
                      
                      
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary/30 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 text-xs font-bold rounded ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-700">{endpoint.path}</code>
                        </div>
                        <motion.button
                          onClick={() => handleTestApi(endpoint)}
                          disabled={isTestingApi}
                          className="gradient-bg text-white px-3 py-1 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center text-sm disabled:opacity-50"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isTestingApi && selectedEndpoint === endpoint.path ? (
                            <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                          ) : (
                            <Play className="h-3 w-3 mr-1" />
                          )}
                          Test
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Test Response */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-4">
                  Response
                </h3>
                {testResponse ? (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Last Test Result:</span>
                      <motion.button
                        onClick={() => handleCopyCode(testResponse, 'response')}
                        className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {copiedCode === 'response' ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </motion.button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto max-h-96">
                      {testResponse}
                    </pre>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Terminal className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-sm">Select an endpoint to test and see the response here</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 