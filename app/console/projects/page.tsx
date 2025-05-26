'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Search, Filter, Download, Eye, Trash2, MoreHorizontal, ArrowLeft, CheckCircle, Clock, AlertCircle, Pause, List, Grid, Plus, Sparkles, Activity, TrendingUp, RefreshCw, Database, Shield } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import ConsoleSidebar, { useSidebar, SidebarProvider, useMainContentClass } from '../../../components/ConsoleSidebar'
import ConsoleFooter from '../../../components/ConsoleFooter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Project {
  id: number
  name: string
  type: string
  records: number
  status: 'Completed' | 'Processing' | 'Failed' | 'Queued'
  accuracy: number
  fileSize: string
  downloadCount: number
  createdAt: string
  progress?: number
}

export default function Projects() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [viewMode, setViewMode] = useState('grid')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [selectedProjects, setSelectedProjects] = useState<number[]>([])
  const [showBulkActions, setShowBulkActions] = useState(false)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Professional',
    dataGenerated: 2450000,
    dataLimit: 5000000,
    activeProjects: 12,
    totalDownloads: 48
  })

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
      return
    }
    
    // Check for URL parameters to set initial filters
    const urlParams = new URLSearchParams(window.location.search)
    const filterParam = urlParams.get('filter')
    if (filterParam === 'completed') {
      setStatusFilter('completed')
    }
    
    setLoading(false)
  }, [router])

  const projects: Project[] = [
    {
      id: 1,
      name: 'Customer Analytics Dataset',
      type: 'Customer Data',
      records: 100000,
      status: 'Completed',
      accuracy: 98.5,
      fileSize: '45.2 MB',
      downloadCount: 12,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Financial Transactions',
      type: 'Financial Data',
      records: 250000,
      status: 'Processing',
      accuracy: 97.8,
      fileSize: '112.8 MB',
      downloadCount: 0,
      createdAt: '2024-01-14',
      progress: 65
    },
    {
      id: 3,
      name: 'Healthcare Records',
      type: 'Healthcare Data',
      records: 75000,
      status: 'Completed',
      accuracy: 99.2,
      fileSize: '28.4 MB',
      downloadCount: 8,
      createdAt: '2024-01-13'
    },
    {
      id: 4,
      name: 'IoT Sensor Data',
      type: 'IoT Data',
      records: 500000,
      status: 'Failed',
      accuracy: 0,
      fileSize: '0 MB',
      downloadCount: 0,
      createdAt: '2024-01-12'
    },
    {
      id: 5,
      name: 'E-commerce Product Catalog',
      type: 'E-commerce Data',
      records: 50000,
      status: 'Queued',
      accuracy: 0,
      fileSize: '0 MB',
      downloadCount: 0,
      createdAt: '2024-01-11'
    }
  ]

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsRefreshing(false)
  }

  const handleSelectProject = (projectId: number) => {
    setSelectedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    )
  }

  const handleSelectAll = () => {
    if (selectedProjects.length === filteredProjects.length) {
      setSelectedProjects([])
    } else {
      setSelectedProjects(filteredProjects.map(p => p.id))
    }
  }

  // Update bulk actions visibility
  useEffect(() => {
    setShowBulkActions(selectedProjects.length > 0)
  }, [selectedProjects])

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status.toLowerCase() === statusFilter
    const matchesType = typeFilter === 'all' || project.type.toLowerCase().includes(typeFilter.toLowerCase())
    
    return matchesSearch && matchesStatus && matchesType
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'records':
        return b.records - a.records
      case 'date':
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'Processing':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'Failed':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      case 'Queued':
        return <Pause className="h-4 w-4 text-gray-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'Failed':
        return 'bg-red-100 text-red-800'
      case 'Queued':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
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
          <ProjectsMainContent 
            user={user}
            projects={projects}
            filteredProjects={filteredProjects}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
            getStatusColor={getStatusColor}
            getStatusIcon={getStatusIcon}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
            isRefreshing={isRefreshing}
            handleRefresh={handleRefresh}
            selectedProjects={selectedProjects}
            handleSelectProject={handleSelectProject}
            handleSelectAll={handleSelectAll}
            showBulkActions={showBulkActions}
          />
        </div>
        
        <ConsoleFooter />
      </div>
    </SidebarProvider>
  )
}

// Separate component to use the sidebar context
function ProjectsMainContent({ 
  user, 
  projects, 
  filteredProjects, 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  typeFilter, 
  setTypeFilter, 
  sortBy, 
  setSortBy, 
  viewMode, 
  setViewMode, 
  getStatusColor, 
  getStatusIcon,
  hoveredProject,
  setHoveredProject,
  isRefreshing,
  handleRefresh,
  selectedProjects,
  handleSelectProject,
  handleSelectAll,
  showBulkActions
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
              <h1 className="text-2xl font-bold font-space-grotesk text-gray-900 flex items-center">
                Projects
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  className="ml-2"
                >
                  <Database className="h-5 w-5 text-primary" />
                </motion.div>
              </h1>
              <p className="text-gray-600 font-segoe text-sm mt-1">
                Manage your synthetic data projects • {filteredProjects.length} projects
              </p>
            </div>
            
            {/* Project Stats */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600 font-segoe">
                  {projects.filter((p: Project) => p.status === 'Completed').length} completed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="h-3 w-3 text-yellow-500" />
                <span className="text-xs text-gray-600 font-segoe">
                  {projects.filter((p: Project) => p.status === 'Processing').length} processing
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 flex items-center text-sm"
            >
              {viewMode === 'grid' ? <List className="h-4 w-4 mr-2" /> : <Grid className="h-4 w-4 mr-2" />}
              {viewMode === 'grid' ? 'List View' : 'Grid View'}
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link
              href="/console/generate"
                className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 hover:shadow-lg transition-all duration-200 flex items-center text-sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Bulk Actions Bar */}
        <AnimatePresence>
          {showBulkActions && (
            <motion.div
              
              
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-900">
                    {selectedProjects.length} project{selectedProjects.length !== 1 ? 's' : ''} selected
                  </span>
                  <button
                    onClick={handleSelectAll}
                    className="text-sm text-primary hover:text-primary-dark transition-colors duration-200"
                  >
                    {selectedProjects.length === filteredProjects.length ? 'Deselect All' : 'Select All'}
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors duration-200"
                  >
                    <Download className="h-3 w-3 mr-1 inline" />
                    Download
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors duration-200"
                  >
                    <Trash2 className="h-3 w-3 mr-1 inline" />
                    Delete
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filters */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors duration-200" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white  text-sm font-segoe placeholder-gray-400"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            {/* Status Filter */}
            <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500  appearance-none cursor-pointer hover:border-green-400 text-sm font-segoe min-w-[120px]"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="processing">Processing</option>
              <option value="failed">Failed</option>
              <option value="queued">Queued</option>
            </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {/* Type Filter */}
            <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500  appearance-none cursor-pointer hover:border-green-400 text-sm font-segoe min-w-[120px]"
            >
              <option value="all">All Types</option>
              <option value="customer">Customer</option>
              <option value="financial">Financial</option>
              <option value="healthcare">Healthcare</option>
              <option value="iot">IoT</option>
              <option value="ecommerce">E-commerce</option>
            </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {/* Sort Filter */}
            <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500  appearance-none cursor-pointer hover:border-green-400 text-sm font-segoe min-w-[140px]"
            >
              <option value="date">Sort by Date</option>
              <option value="name">Sort by Name</option>
              <option value="records">Sort by Records</option>
            </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="p-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Download className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' || typeFilter !== 'all'
                ? 'Try adjusting your filters or search terms.'
                : 'Get started by generating your first synthetic dataset.'}
            </p>
            <Link
              href="/console/generate"
              className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 inline-flex items-center"
            >
              <Download className="h-5 w-5 mr-2" />
              Generate Data
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                
                
                
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 font-space-grotesk mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-segoe">
                      {project.type}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(project.status)}
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Records:</span>
                    <span className="font-medium">{project.records.toLocaleString()}</span>
                  </div>
                  
                  {project.status === 'Completed' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Accuracy:</span>
                        <span className="font-medium">{project.accuracy}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">File Size:</span>
                        <span className="font-medium">{project.fileSize}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Downloads:</span>
                        <span className="font-medium">{project.downloadCount}</span>
                      </div>
                    </>
                  )}

                  {project.status === 'Processing' && project.progress && (
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress:</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full "
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Created:</span>
                    <span className="font-medium">{project.createdAt}</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-2">
                  {project.status === 'Completed' && (
                    <>
                      <button className="flex-1 gradient-bg text-white px-3 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-colors duration-200 flex items-center justify-center">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </button>
                      <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
                        <Eye className="h-4 w-4" />
                      </button>
                    </>
                  )}
                  
                  {project.status === 'Failed' && (
                    <button className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200">
                      Retry
                    </button>
                  )}
                  
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 