'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Database, Settings, Download, BarChart, AlertTriangle, CheckCircle, ArrowLeft, Play, Pause, RefreshCw, Save, Upload, Sparkles, Zap, Activity, Eye, Clock, Shield, TrendingUp, FileText, X, ArrowRight } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import ConsoleSidebar, { useSidebar, SidebarProvider, useMainContentClass } from '../../../components/ConsoleSidebar'
import ConsoleFooter from '../../../components/ConsoleFooter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDropzone } from 'react-dropzone'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Import sample datasets from synthetic-data utils
import { sampleDatasets, generateSampleData } from '../synthetic-data/utils/dataProcessing'

interface DataType {
  id: string
  name: string
  description: string
  columns: string[]
  icon: string
}

interface MLModel {
  id: string
  name: string
  description: string
  accuracy: number
  speed: string
  privacy: string
}

interface FairnessMetric {
  id: string
  name: string
  description: string
}

interface GenerationConfig {
  dataType: string
  recordCount: number
  format: string
  columns: string[]
  biasSettings: {
    detectBias: boolean
    fairnessMetrics: string[]
    sensitiveAttributes: string[]
  }
  modelSettings: {
    model: string
    accuracy: number
    privacy: string
  }
  advancedSettings: {
    correlations: boolean
    outliers: number
    seasonality: boolean
    missingData: number
  }
}

export default function GenerateData() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [hoveredDataType, setHoveredDataType] = useState<string | null>(null)
  const [hoveredModel, setHoveredModel] = useState<string | null>(null)
  const [estimatedTime, setEstimatedTime] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const [showSampleDatasets, setShowSampleDatasets] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [liveStats, setLiveStats] = useState({
    queuePosition: 3,
    estimatedWait: 45,
    activeGenerations: 12
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
  const [config, setConfig] = useState<GenerationConfig>({
    dataType: 'customer',
    recordCount: 10000,
    format: 'csv',
    columns: [],
    biasSettings: {
      detectBias: true,
      fairnessMetrics: ['statistical_parity', 'equalized_odds'],
      sensitiveAttributes: []
    },
    modelSettings: {
      model: 'transformer',
      accuracy: 95,
      privacy: 'high'
    },
    advancedSettings: {
      correlations: true,
      outliers: 5,
      seasonality: false,
      missingData: 2
    }
  })

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
      return
    }
    setLoading(false)
  }, [router])

  // Update estimated time based on config
  useEffect(() => {
    const baseTime = config.recordCount / 1000 // 1 second per 1000 records
    const modelMultiplier = config.modelSettings.model === 'transformer' ? 2 : 
                           config.modelSettings.model === 'copulagan' ? 3 : 1
    const complexityMultiplier = config.advancedSettings.correlations ? 1.5 : 1
    setEstimatedTime(Math.ceil(baseTime * modelMultiplier * complexityMultiplier))
  }, [config])

  // Simulate live queue updates
  useEffect(() => {
    if (!generating) return
    
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        queuePosition: Math.max(0, prev.queuePosition - 1),
        estimatedWait: Math.max(0, prev.estimatedWait - 5),
        activeGenerations: prev.activeGenerations + Math.floor(Math.random() * 3 - 1)
      }))
    }, 2000)
    
    return () => clearInterval(interval)
  }, [generating])

  const dataTypes = [
    {
      id: 'customer',
      name: 'Customer Data',
      description: 'Customer profiles, preferences, and behavior data',
      columns: ['customer_id', 'age', 'gender', 'income', 'location', 'purchase_history', 'preferences'],
      icon: '👥',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      popularity: 85,
      avgAccuracy: 96.5
    },
    {
      id: 'financial',
      name: 'Financial Data',
      description: 'Transactions, account data, and financial records',
      columns: ['transaction_id', 'amount', 'currency', 'merchant', 'card_type', 'timestamp', 'fraud_flag'],
      icon: '💳',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      popularity: 92,
      avgAccuracy: 98.2
    },
    {
      id: 'healthcare',
      name: 'Healthcare Data',
      description: 'Patient records, medical data, and health metrics',
      columns: ['patient_id', 'age', 'gender', 'diagnosis', 'treatment', 'vital_signs', 'medications'],
      icon: '🏥',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      popularity: 78,
      avgAccuracy: 94.8
    },
    {
      id: 'iot',
      name: 'IoT Sensor Data',
      description: 'Device sensors, telemetry, and monitoring data',
      columns: ['device_id', 'timestamp', 'temperature', 'humidity', 'pressure', 'battery', 'status'],
      icon: '📡',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      popularity: 71,
      avgAccuracy: 97.1
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Data',
      description: 'Product catalog, orders, and user interactions',
      columns: ['product_id', 'category', 'price', 'rating', 'reviews', 'inventory', 'sales_volume'],
      icon: '🛒',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      popularity: 88,
      avgAccuracy: 95.7
    },
    {
      id: 'custom',
      name: 'Custom Schema',
      description: 'Define your own data structure and attributes',
      columns: [],
      icon: '⚙️',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      popularity: 65,
      avgAccuracy: 93.2
    }
  ]

  const mlModels = [
    {
      id: 'transformer',
      name: 'Transformer GAN',
      description: 'State-of-the-art model for high-quality synthetic data',
      accuracy: 98,
      speed: 'Medium',
      privacy: 'High',
      color: 'from-primary to-secondary',
      recommended: true,
      timeMultiplier: 2,
      features: ['High Accuracy', 'Complex Patterns', 'Privacy Preserving']
    },
    {
      id: 'tabgan',
      name: 'TabGAN',
      description: 'Specialized for tabular data generation',
      accuracy: 95,
      speed: 'Fast',
      privacy: 'High',
      color: 'from-green-500 to-green-600',
      recommended: false,
      timeMultiplier: 1,
      features: ['Fast Generation', 'Tabular Focus', 'Good Balance']
    },
    {
      id: 'ctgan',
      name: 'CTGAN',
      description: 'Conditional tabular GAN for mixed data types',
      accuracy: 93,
      speed: 'Fast',
      privacy: 'Medium',
      color: 'from-blue-500 to-blue-600',
      recommended: false,
      timeMultiplier: 1,
      features: ['Mixed Data Types', 'Conditional Generation', 'Fast Speed']
    },
    {
      id: 'copulagan',
      name: 'CopulaGAN',
      description: 'Preserves complex correlations in data',
      accuracy: 90,
      speed: 'Slow',
      privacy: 'High',
      color: 'from-purple-500 to-purple-600',
      recommended: false,
      timeMultiplier: 3,
      features: ['Complex Correlations', 'Statistical Accuracy', 'Privacy Focus']
    }
  ]

  const fairnessMetrics = [
    { id: 'statistical_parity', name: 'Statistical Parity', description: 'Equal positive rates across groups' },
    { id: 'equalized_odds', name: 'Equalized Odds', description: 'Equal true/false positive rates' },
    { id: 'demographic_parity', name: 'Demographic Parity', description: 'Equal outcome distribution' },
    { id: 'individual_fairness', name: 'Individual Fairness', description: 'Similar individuals get similar outcomes' }
  ]

  const handleDataTypeChange = (typeId: string) => {
    const selectedType = dataTypes.find(type => type.id === typeId)
    setConfig(prev => ({
      ...prev,
      dataType: typeId,
      columns: selectedType?.columns || []
    }))
  }

  const handleSampleDataset = async (datasetId: string) => {
    try {
      toast.info('Loading sample dataset...')
      
      const sampleData = generateSampleData(datasetId, 1000)
      
      // Set the data type based on the sample dataset category
      const dataset = sampleDatasets.find(ds => ds.id === datasetId)
      let dataType = 'custom'
      if (dataset?.category.includes('Customer')) dataType = 'customer'
      else if (dataset?.category.includes('Financial')) dataType = 'financial'
      else if (dataset?.category.includes('Healthcare')) dataType = 'healthcare'
      else if (dataset?.category.includes('E-commerce')) dataType = 'ecommerce'
      
      setConfig(prev => ({
        ...prev,
        dataType,
        columns: dataset?.columns || [],
        recordCount: Math.min(prev.recordCount, 50000) // Reasonable default for sample data
      }))
      
      setShowSampleDatasets(false)
      toast.success('Sample dataset loaded successfully!')
    } catch (error) {
      toast.error(`Error loading sample dataset: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      toast.success(`${acceptedFiles.length} file(s) uploaded successfully`)
      
      // For now, just set to custom data type
      setConfig(prev => ({
        ...prev,
        dataType: 'custom',
        columns: ['column1', 'column2', 'column3'] // Placeholder columns
      }))
      
      setShowUploadModal(false)
      toast.success('File processed successfully!')
    } catch (error) {
      toast.error(`Error processing file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/json': ['.json'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    maxSize: 50 * 1024 * 1024 // 50MB
  })

  const handleGenerate = async () => {
    setGenerating(true)
    setProgress(0)

    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setGenerating(false)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 500)
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
        <style jsx>{`
          .slider-primary::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #059669;
            cursor: pointer;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .slider-primary::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #059669;
            cursor: pointer;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}</style>
        <Navigation />
        <ConsoleSidebar user={user} />
        
        {/* Main Content */}
        <div className="flex-1">
          <GenerateMainContent 
            user={user}
            config={config}
            setConfig={setConfig}
            dataTypes={dataTypes}
            mlModels={mlModels}
            fairnessMetrics={fairnessMetrics}
            handleDataTypeChange={handleDataTypeChange}
            handleGenerate={handleGenerate}
            generating={generating}
            progress={progress}
            hoveredDataType={hoveredDataType}
            setHoveredDataType={setHoveredDataType}
            hoveredModel={hoveredModel}
            setHoveredModel={setHoveredModel}
            estimatedTime={estimatedTime}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            liveStats={liveStats}
          />
        </div>
        
        <ConsoleFooter />
        <ToastContainer 
          position="bottom-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        {/* Sample Datasets Modal */}
        <AnimatePresence>
          {showSampleDatasets && (
            <SampleDatasetsModal 
              onClose={() => setShowSampleDatasets(false)}
              onSelectSample={handleSampleDataset}
              onUploadData={() => {
                setShowSampleDatasets(false)
                setShowUploadModal(true)
              }}
            />
          )}
        </AnimatePresence>

        {/* Upload Modal */}
        <AnimatePresence>
          {showUploadModal && (
            <UploadModal 
              onClose={() => setShowUploadModal(false)}
              getRootProps={getRootProps}
              getInputProps={getInputProps}
              isDragActive={isDragActive}
            />
          )}
        </AnimatePresence>
      </div>
    </SidebarProvider>
  )
}

// Separate component to use the sidebar context
function GenerateMainContent({ 
  user, 
  config, 
  setConfig, 
  dataTypes, 
  mlModels, 
  fairnessMetrics, 
  handleDataTypeChange, 
  handleGenerate, 
  generating, 
  progress,
  hoveredDataType,
  setHoveredDataType,
  hoveredModel,
  setHoveredModel,
  estimatedTime,
  currentStep,
  setCurrentStep,
  liveStats
}: any) {
  const mainContentClass = useMainContentClass()
  const generateSectionRef = useRef<HTMLDivElement>(null)
  const [isMainGenerateVisible, setIsMainGenerateVisible] = useState(false)

  // Scroll detection to show/hide sidebar generate button
  useEffect(() => {
    const handleScroll = () => {
      if (generateSectionRef.current) {
        const rect = generateSectionRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        setIsMainGenerateVisible(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Use setTimeout to check initial visibility after component mounts
    setTimeout(handleScroll, 100)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
                Generate Synthetic Data
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="ml-2"
                >
                  <Zap className="h-5 w-5 text-yellow-500" />
                </motion.div>
              </h1>
              <p className="text-gray-600 font-segoe text-sm mt-1">
                Create high-quality synthetic datasets with advanced ML models
              </p>
            </div>
            
            {/* Live Stats */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600 font-segoe">
                  {liveStats.activeGenerations} active generations
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-3 w-3 text-primary" />
                <span className="text-xs text-gray-600 font-segoe">
                  ~{estimatedTime}s estimated
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center text-sm"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Config
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 flex items-center text-sm"
            >
              <Upload className="h-4 w-4 mr-2" />
              Load Config
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Configuration Panel */}
        <div className="flex">
          {/* Configuration Panel */}
          <div className="flex-1 p-6 space-y-6">
            {/* Data Source Options */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold font-garnett text-gray-900 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Choose Your Data Source
                  </h2>
                  <p className="text-sm text-gray-600 font-segoe mt-1 ml-11">
                    Start by selecting how you want to provide your data
                  </p>
                </div>
                <div className="text-sm text-gray-500 font-segoe">
                  Step 1 of 6
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Upload Your Data Option */}
                <Link href="/console/synthetic-data/own-data">
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
                  >
                    <div className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Upload className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                              Upload Your Own Data
                            </h4>
                            <div className="text-right">
                              <div className="text-xs text-gray-500">Recommended for</div>
                              <div className="text-xs font-medium text-gray-700">Existing Data</div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3">
                            Upload your existing datasets (CSV, JSON, DOCX, TXT) and generate synthetic versions that preserve statistical properties.
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                            <span className="flex items-center space-x-1">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>Multiple formats</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>Auto analysis</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>Privacy protection</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>Custom configuration</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>

                {/* Divider between cards */}
                <div className="flex items-center my-8">
                  <div className="flex-1 border-t border-gray-300"></div>
                  <div className="px-4 text-sm text-gray-500 font-segoe">or</div>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Sample Datasets Option */}
                <div className="mt-8">
                  <Link href="/console/synthetic-data/samples">
                    <motion.div
                      whileHover={{ scale: 1.01, y: -2 }}
                      className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
                    >
                      <div className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Database className="h-6 w-6 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                Try Sample Datasets
                              </h4>
                              <div className="text-right">
                                <div className="text-xs text-gray-500">Recommended for</div>
                                <div className="text-xs font-medium text-gray-700">Quick Start</div>
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-3">
                              Explore our curated collection of sample datasets across various industries to quickly understand synthetic data generation.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                              <span className="flex items-center space-x-1">
                                <CheckCircle className="h-3 w-3 text-primary" />
                                <span>Industry datasets</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <CheckCircle className="h-3 w-3 text-primary" />
                                <span>Instant loading</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <CheckCircle className="h-3 w-3 text-primary" />
                                <span>No preparation</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <CheckCircle className="h-3 w-3 text-primary" />
                                <span>Ready to explore</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.section>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="px-4 text-sm text-gray-500 font-segoe">or</div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Data Type Selection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold font-garnett text-gray-900">
                  Choose Custom Data Type
                </h2>
                <p className="text-sm text-gray-600 font-segoe mt-2">
                  Choose the type of synthetic data you want to generate
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataTypes.map((type: any, index: number) => (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setHoveredDataType(type.id)}
                    onHoverEnd={() => setHoveredDataType(null)}
                    className={`relative p-6 rounded-xl border-2 cursor-pointer  group overflow-hidden ${
                      config.dataType === type.id
                        ? `border-primary ${type.bgColor} shadow-lg`
                        : `border-gray-200 hover:${type.borderColor} hover:${type.bgColor} hover:shadow-md`
                    }`}
                    onClick={() => handleDataTypeChange(type.id)}
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {type.icon}
                          </div>
                          {config.dataType === type.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-2"
                            >
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                          )}
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xs text-gray-500 font-segoe">Popularity</div>
                          <div className="text-sm font-bold text-gray-700">{type.popularity}%</div>
                        </div>
                      </div>
                      
                      <h3 className="font-bold font-garnett text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {type.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-segoe mb-4">
                        {type.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500 font-segoe">
                          {type.columns.length > 0 ? `${type.columns.length} columns` : 'Custom schema'}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Shield className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-gray-600 font-segoe">{type.avgAccuracy}%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {hoveredDataType === type.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-2 left-4 right-4 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-10"
                        >
                          <div className="font-medium mb-1">Sample columns:</div>
                          <div className="text-gray-300">
                            {type.columns.slice(0, 3).join(', ')}
                            {type.columns.length > 3 && '...'}
                          </div>
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Basic Configuration */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold font-garnett text-gray-900 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Basic Configuration
                  </h2>
                  <p className="text-sm text-gray-600 font-segoe mt-1 ml-11">
                    Set the fundamental parameters for your dataset
                  </p>
                </div>
                <div className="text-sm text-gray-500 font-segoe">
                  Step 2 of 6
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                      Number of Records
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={config.recordCount}
                        onChange={(e) => setConfig((prev: GenerationConfig) => ({ ...prev, recordCount: parseInt(e.target.value) }))}
                        className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white font-segoe text-sm"
                        min="100"
                        max="10000000"
                        placeholder="Enter number of records"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Database className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 font-segoe">
                      Estimated size: ~{(config.recordCount * 0.5 / 1000).toFixed(1)}KB
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                      Output Format
                    </label>
                    <div className="relative">
                      <select
                        value={config.format}
                        onChange={(e) => setConfig((prev: GenerationConfig) => ({ ...prev, format: e.target.value }))}
                        className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500  appearance-none cursor-pointer hover:border-green-400 font-segoe text-sm"
                      >
                        <option value="csv">CSV - Comma Separated Values</option>
                        <option value="json">JSON - JavaScript Object Notation</option>
                        <option value="parquet">Parquet - Columnar Storage</option>
                        <option value="excel">Excel - Microsoft Spreadsheet</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <motion.div
                          animate={{ rotate: config.format ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 font-segoe flex items-center">
                      <Download className="h-3 w-3 mr-1" />
                      {config.format === 'csv' ? 'Universal compatibility' :
                       config.format === 'json' ? 'API-friendly format' :
                       config.format === 'parquet' ? 'Optimized for analytics' : 'Excel compatible'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ML Model Selection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold font-garnett text-gray-900 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Choose ML Model
              </h2>
                  <p className="text-sm text-gray-600 font-segoe mt-1 ml-11">
                    Select the AI model that best fits your data generation needs
                  </p>
                </div>
                <div className="text-sm text-gray-500 font-segoe">
                  Step 3 of 6
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mlModels.map((model: MLModel) => (
                  <motion.div
                    key={model.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      config.modelSettings.model === model.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/30'
                    }`}
                    onClick={() => setConfig((prev: GenerationConfig) => ({
                      ...prev,
                      modelSettings: { ...prev.modelSettings, model: model.id }
                    }))}
                  >
                    <h3 className="font-semibold font-garnett text-gray-900 mb-2">
                      {model.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-segoe mb-3">
                      {model.description}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Accuracy: {model.accuracy}%</span>
                      <span>Speed: {model.speed}</span>
                      <span>Privacy: {model.privacy}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Bias Detection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold font-garnett text-gray-900 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Bias Detection & Fairness
              </h2>
                  <p className="text-sm text-gray-600 font-segoe mt-1 ml-11">
                    Configure bias detection and fairness constraints for ethical AI
                  </p>
                </div>
                <div className="text-sm text-gray-500 font-segoe">
                  Step 4 of 6
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="detectBias"
                    checked={config.biasSettings.detectBias}
                    onChange={(e) => setConfig((prev: GenerationConfig) => ({
                      ...prev,
                      biasSettings: { ...prev.biasSettings, detectBias: e.target.checked }
                    }))}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="detectBias" className="ml-2 text-sm font-medium text-gray-700">
                    Enable bias detection and fairness analysis
                  </label>
                </div>
                
                {config.biasSettings.detectBias && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fairness Metrics
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {fairnessMetrics.map((metric: FairnessMetric) => (
                          <label key={metric.id} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={config.biasSettings.fairnessMetrics.includes(metric.id)}
                              onChange={(e) => {
                                const metrics = e.target.checked
                                  ? [...config.biasSettings.fairnessMetrics, metric.id]
                                  : config.biasSettings.fairnessMetrics.filter((m: string) => m !== metric.id)
                                setConfig((prev: GenerationConfig) => ({
                                  ...prev,
                                  biasSettings: { ...prev.biasSettings, fairnessMetrics: metrics }
                                }))
                              }}
                              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">{metric.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.section>

            {/* Advanced Settings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold font-garnett text-gray-900 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                    Advanced Settings
              </h2>
                  <p className="text-sm text-gray-600 font-segoe mt-1 ml-11">
                    Fine-tune data quality parameters and advanced generation options
                  </p>
                </div>
                <div className="text-sm text-gray-500 font-segoe">
                  Step 5 of 6
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="correlations"
                      checked={config.advancedSettings.correlations}
                      onChange={(e) => setConfig((prev: GenerationConfig) => ({
                        ...prev,
                        advancedSettings: { ...prev.advancedSettings, correlations: e.target.checked }
                      }))}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="correlations" className="ml-2 text-sm text-gray-700">
                      Preserve correlations
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="seasonality"
                      checked={config.advancedSettings.seasonality}
                      onChange={(e) => setConfig((prev: GenerationConfig) => ({
                        ...prev,
                        advancedSettings: { ...prev.advancedSettings, seasonality: e.target.checked }
                      }))}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="seasonality" className="ml-2 text-sm text-gray-700">
                      Include seasonality
                    </label>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                      Outlier Percentage: {config.advancedSettings.outliers}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={config.advancedSettings.outliers}
                      onChange={(e) => setConfig((prev: GenerationConfig) => ({
                        ...prev,
                        advancedSettings: { ...prev.advancedSettings, outliers: parseInt(e.target.value) }
                      }))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-primary"
                      style={{
                        background: `linear-gradient(to right, #059669 0%, #059669 ${(config.advancedSettings.outliers / 20) * 100}%, #e5e7eb ${(config.advancedSettings.outliers / 20) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="mt-2 text-xs text-gray-500 font-segoe">
                      Controls the percentage of outlier values in the generated data
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                      Missing Data: {config.advancedSettings.missingData}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={config.advancedSettings.missingData}
                      onChange={(e) => setConfig((prev: GenerationConfig) => ({
                        ...prev,
                        advancedSettings: { ...prev.advancedSettings, missingData: parseInt(e.target.value) }
                      }))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-primary"
                      style={{
                        background: `linear-gradient(to right, #059669 0%, #059669 ${(config.advancedSettings.missingData / 10) * 100}%, #e5e7eb ${(config.advancedSettings.missingData / 10) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="mt-2 text-xs text-gray-500 font-segoe">
                      Percentage of null/missing values to include in the dataset
                  </div>
                </div>
              </div>
              </div>
            </motion.section>

            {/* Generate Data Section */}
            <motion.section
              ref={generateSectionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold font-garnett text-gray-900 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                    Generate Synthetic Data
                  </h2>
                  <p className="text-sm text-gray-600 font-segoe mt-1 ml-11">
                    Your configuration is complete. Generate synthetic records now.
                  </p>
                </div>
                <div className="text-sm text-gray-500 font-segoe">
                  Step 6 of 6
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <h3 className="text-lg font-bold font-garnett text-gray-900 mb-2">
                    Ready to Generate
                  </h3>
                  <p className="text-sm text-gray-600 font-segoe mb-6">
                    Generate {config.recordCount.toLocaleString()} synthetic records with your selected configuration.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Estimated time: ~{estimatedTime}s</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Database className="h-4 w-4 text-primary" />
                      <span>Size: ~{(config.recordCount * 0.5 / 1000).toFixed(1)}KB</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGenerate}
                    disabled={generating}
                    className="gradient-bg text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-all duration-200 flex items-center mx-auto shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {generating ? (
                      <>
                        <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Play className="h-5 w-5 mr-2" />
                        Generate Synthetic Data
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Configuration Summary Sidebar */}
          <div className="w-80 p-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 sticky top-24">
              <h3 className="font-bold font-garnett text-gray-900 mb-4 flex items-center">
                <Settings className="h-5 w-5 text-primary mr-2" />
                Configuration Summary
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-segoe">Data Type:</span>
                  <span className="font-medium">{dataTypes.find((t: DataType) => t.id === config.dataType)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-segoe">Records:</span>
                  <span className="font-medium">{config.recordCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-segoe">Format:</span>
                  <span className="font-medium">{config.format.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-segoe">Model:</span>
                  <span className="font-medium">{mlModels.find((m: MLModel) => m.id === config.modelSettings.model)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-segoe">Bias Detection:</span>
                  <span className="font-medium">{config.biasSettings.detectBias ? 'Enabled' : 'Disabled'}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 font-segoe">Estimated Time</span>
                  <span className="text-sm text-gray-600 font-segoe">~{estimatedTime}s</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700 font-segoe">File Size</span>
                  <span className="text-sm text-gray-600 font-segoe">~{(config.recordCount * 0.5 / 1000).toFixed(1)}KB</span>
                </div>
                
                <AnimatePresence>
                  {!isMainGenerateVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleGenerate}
                        disabled={generating}
                        className="w-full gradient-bg text-white px-4 py-3 rounded-xl font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {generating ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Generate Data
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {generating && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 font-segoe">Progress</span>
                    <span className="text-sm text-gray-600 font-segoe">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  
                  {progress === 100 && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-800 font-segoe">
                          Generation Complete!
                        </span>
                      </div>
                      <button className="mt-2 w-full bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors duration-200 font-segoe">
                        <Download className="h-4 w-4 mr-2 inline" />
                        Download Dataset
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Powerful Features Section */}
      <div className="bg-gray-50 px-6 py-4 -mx-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-sm border p-3 ml-6 mr-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {[
              {
                icon: Shield,
                title: 'Privacy-First',
                description: 'Advanced protection'
              },
              {
                icon: Zap,
                title: 'AI-Powered',
                description: 'ML models'
              },
              {
                icon: BarChart,
                title: 'Analytics',
                description: 'Comprehensive'
              },
              {
                icon: TrendingUp,
                title: 'Scalable',
                description: 'Millions of records'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                  <feature.icon className="h-3 w-3 text-gray-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-xs">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Sample Datasets Modal Component
function SampleDatasetsModal({ 
  onClose, 
  onSelectSample, 
  onUploadData 
}: {
  onClose: () => void
  onSelectSample: (datasetId: string) => void
  onUploadData: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Choose Your Data Source</h2>
              <p className="text-gray-600 mt-1">Select a sample dataset or upload your own data</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Upload Option */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Your Own Data</h3>
            <button
              onClick={onUploadData}
              className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-colors group"
            >
              <div className="flex flex-col items-center">
                <Upload className="h-8 w-8 text-gray-400 group-hover:text-primary mb-2" />
                <span className="text-lg font-medium text-gray-700 group-hover:text-primary">
                  Upload Your Dataset
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  Supports CSV, JSON, DOCX, and TXT files (up to 50MB)
                </span>
              </div>
            </button>
          </div>

          {/* Sample Datasets */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Or Try Sample Datasets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleDatasets.map((dataset) => (
                <div 
                  key={dataset.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer"
                  onClick={() => onSelectSample(dataset.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{dataset.name}</h4>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {dataset.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{dataset.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{dataset.recordCount.toLocaleString()} records</span>
                    <span>{dataset.columns.length} columns</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Upload Modal Component
function UploadModal({ 
  onClose, 
  getRootProps, 
  getInputProps, 
  isDragActive 
}: {
  onClose: () => void
  getRootProps: any
  getInputProps: any
  isDragActive: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Upload Your Dataset</h2>
              <p className="text-gray-600 mt-1">Upload your data file to generate synthetic data</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragActive 
                ? 'border-primary-400 bg-primary-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className={`h-12 w-12 mx-auto mb-4 ${
              isDragActive ? 'text-primary' : 'text-gray-400'
            }`} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {isDragActive ? 'Drop your files here' : 'Drag & drop your files here'}
            </h3>
            <p className="text-gray-600 mb-4">
              or click to browse and select files
            </p>
            <div className="text-sm text-gray-500">
              <p>Supported formats: CSV, JSON, DOCX, TXT</p>
              <p>Maximum file size: 50MB</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 