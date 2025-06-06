'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Database, Upload, Download, Settings, BarChart, 
  Shield, Zap, Eye, FileText, CheckCircle, AlertTriangle,
  Play, Pause, RefreshCw, Save, ArrowLeft, Clock,
  Users, Target, Shuffle, Filter, TrendingUp, Lock
} from 'lucide-react'
import Navigation from '../../../../components/Navigation'
import ConsoleSidebar, { SidebarProvider, useMainContentClass } from '../../../../components/ConsoleSidebar'
import ConsoleFooter from '../../../../components/ConsoleFooter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Import our data processing utilities
import { 
  DataProcessor, 
  SyntheticDataGenerator as SyntheticDataGeneratorClass, 
  DataExporter,
  DatasetAnalysis,
  GenerationConfig,
  SyntheticDataResult,
  sampleDatasets,
  generateSampleData
} from '../utils/dataProcessing'

// Import components
import ConfigurationPanel from '../components/ConfigurationPanel'
import AnalyticsDashboard from '../components/AnalyticsDashboard'

export default function SampleDataGenerator() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null)
  const [parsedData, setParsedData] = useState<any[]>([])
  const [dataAnalysis, setDataAnalysis] = useState<DatasetAnalysis | null>(null)
  const [generating, setGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [generatedResult, setGeneratedResult] = useState<SyntheticDataResult | null>(null)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [dataProcessor] = useState(() => new DataProcessor())
  const [syntheticGenerator] = useState(() => new SyntheticDataGeneratorClass())

  const [config, setConfig] = useState<GenerationConfig>({
    recordCount: 10000,
    format: 'csv',
    selectedColumns: [],
    generationMethod: 'statistical',
    seed: Date.now(),
    biasSettings: {
      enabled: true,
      targetBias: 10,
      sensitiveAttributes: [],
      fairnessConstraints: []
    },
    qualitySettings: {
      outlierPercentage: 5,
      nullPercentage: 2,
      duplicatePercentage: 1,
      consistencyScore: 85
    },
    privacySettings: {
      level: 'basic',
      anonymize: false,
      encryptSensitive: false,
      kAnonymity: 5,
      differentialPrivacy: {
        enabled: false,
        epsilon: 1.0
      }
    }
  })

  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Professional',
    dataGenerated: 2450000,
    dataLimit: 5000000
  })

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
      return
    }
    setLoading(false)
  }, [router])

  const handleSampleDataset = async (datasetId: string) => {
    try {
      toast.info('Loading sample dataset...')
      
      const sampleData = generateSampleData(datasetId, 1000)
      const analysis = dataProcessor.analyzeDataset(sampleData)
      
      setParsedData(sampleData)
      setDataAnalysis(analysis)
      setSelectedDataset(datasetId)
      setConfig((prev: GenerationConfig) => ({ 
        ...prev, 
        selectedColumns: analysis.columns.map((col: any) => col.name)
      }))
      
      toast.success('Sample dataset loaded successfully!')
    } catch (error) {
      toast.error(`Error loading sample dataset: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const handleGenerate = async () => {
    if (!dataAnalysis || parsedData.length === 0) {
      toast.error('Please select a sample dataset first')
      return
    }

    try {
      setGenerating(true)
      setProgress(0)
      
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + Math.random() * 10 + 5
        })
      }, 500)

      // Generate synthetic data
      const result = await syntheticGenerator.generateSyntheticData(
        parsedData,
        dataAnalysis,
        config
      )
      
      clearInterval(progressInterval)
      setProgress(100)
      setGeneratedResult(result)
      setShowAnalytics(true)
      setGenerating(false)
      
      toast.success(`Generated ${result.data.length} synthetic records successfully!`)
    } catch (error) {
      setGenerating(false)
      toast.error(`Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const handleDownload = (format: string) => {
    if (!generatedResult || generatedResult.data.length === 0) {
      toast.error('No data to download')
      return
    }
    
    try {
      const timestamp = new Date().toISOString().split('T')[0]
      const filename = `synthetic_data_${timestamp}`
      
      if (format === 'csv') {
        DataExporter.exportToCSV(generatedResult.data, `${filename}.csv`)
      } else if (format === 'json') {
        DataExporter.exportToJSON(generatedResult.data, `${filename}.json`)
      }
      
      toast.success(`Data exported as ${format.toUpperCase()}`)
    } catch (error) {
      toast.error(`Export failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const handleStepChange = (step: number) => {
    if (step === 2 && (!parsedData.length || !dataAnalysis)) {
      toast.error('Please select a sample dataset first')
      return
    }
    if (step === 3 && config.selectedColumns.length === 0) {
      toast.error('Please select at least one column to generate')
      return
    }
    setCurrentStep(step)
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
        
        <MainContent 
          currentStep={currentStep}
          setCurrentStep={handleStepChange}
          selectedDataset={selectedDataset}
          parsedData={parsedData}
          dataAnalysis={dataAnalysis}
          config={config}
          setConfig={setConfig}
          generating={generating}
          progress={progress}
          generatedResult={generatedResult}
          showAnalytics={showAnalytics}
          handleGenerate={handleGenerate}
          handleDownload={handleDownload}
          handleSampleDataset={handleSampleDataset}
        />
        
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
      </div>
    </SidebarProvider>
  )
}

// Separate component to use the sidebar context
function MainContent({ 
  currentStep, 
  setCurrentStep, 
  selectedDataset,
  parsedData,
  dataAnalysis,
  config, 
  setConfig, 
  generating, 
  progress,
  generatedResult,
  showAnalytics,
  handleGenerate,
  handleDownload,
  handleSampleDataset
}: {
  currentStep: number
  setCurrentStep: (step: number) => void
  selectedDataset: string | null
  parsedData: any[]
  dataAnalysis: DatasetAnalysis | null
  config: GenerationConfig
  setConfig: (config: GenerationConfig) => void
  generating: boolean
  progress: number
  generatedResult: SyntheticDataResult | null
  showAnalytics: boolean
  handleGenerate: () => void
  handleDownload: (format: string) => void
  handleSampleDataset: (datasetId: string) => void
}) {
  const mainContentClass = useMainContentClass()

  const steps = [
    { id: 1, name: 'Select Sample', icon: Database },
    { id: 2, name: 'Configure', icon: Settings },
    { id: 3, name: 'Generate', icon: Zap },
    { id: 4, name: 'Analytics', icon: BarChart }
  ]

  return (
    <div className={mainContentClass}>
      {/* Header */}
      <div className="bg-white border-b px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Try Sample Datasets</h1>
            <p className="text-sm text-gray-600">Explore our curated sample datasets to get started quickly</p>
          </div>
          <div className="flex items-center space-x-3">
            <Link 
              href="/console/synthetic-data/own-data"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm"
            >
              <Upload className="h-4 w-4" />
              <span>Upload Your Data</span>
            </Link>
            <Link 
              href="/console"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Console</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b px-6 py-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= step.id 
                  ? 'bg-gradient-to-br from-primary to-secondary text-white' 
                  : 'border-2 border-gray-300 text-gray-400'
              }`}>
                {currentStep > step.id ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <step.icon className="h-4 w-4" />
                )}
              </div>
              <span className={`ml-2 text-xs font-medium ${
                currentStep >= step.id ? 'text-primary' : 'text-gray-500'
              }`}>
                {step.name}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-3 ${
                  currentStep > step.id ? 'bg-primary' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <SampleDatasetStep 
              key="samples"
              selectedDataset={selectedDataset}
              dataAnalysis={dataAnalysis}
              onSelectSample={handleSampleDataset}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <ConfigurationPanel
              key="config"
              config={config}
              setConfig={setConfig}
              dataColumns={dataAnalysis?.columns.map((col: any) => col.name) || []}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <GenerationStep 
              key="generate"
              config={config}
              generating={generating}
              progress={progress}
              handleGenerate={handleGenerate}
              onNext={() => setCurrentStep(4)}
              onBack={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 4 && generatedResult && (
            <AnalyticsDashboard
              key="analytics"
              originalData={parsedData}
              generatedData={generatedResult.data}
              onBack={() => setCurrentStep(3)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function SampleDatasetStep({ 
  selectedDataset,
  dataAnalysis,
  onSelectSample,
  onNext
}: {
  selectedDataset: string | null
  dataAnalysis: DatasetAnalysis | null
  onSelectSample: (datasetId: string) => void
  onNext: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto space-y-4"
    >
      {/* Sample Datasets */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose a Sample Dataset</h2>
        <p className="text-sm text-gray-600 mb-6">
          Select from our curated collection of sample datasets to explore synthetic data generation capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleDatasets.map((dataset) => (
            <motion.div 
              key={dataset.id}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                selectedDataset === dataset.id
                  ? 'border-primary bg-primary/10 shadow-lg'
                  : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-md'
              }`}
              onClick={() => onSelectSample(dataset.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Database className="h-5 w-5" />
                  </div>
                  {selectedDataset === dataset.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </motion.div>
                  )}
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium">
                  {dataset.category}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-900 text-base mb-2">
                {dataset.name}
              </h3>
              <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                {dataset.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>{dataset.recordCount.toLocaleString()} records</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BarChart className="h-3 w-3" />
                  <span>{dataset.columns.length} columns</span>
                </div>
              </div>

              {/* Sample columns preview */}
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-1">Sample columns:</p>
                <div className="flex flex-wrap gap-1">
                  {dataset.columns.slice(0, 3).map((column, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {column}
                    </span>
                  ))}
                  {dataset.columns.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{dataset.columns.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Data Analysis Summary */}
      {dataAnalysis && selectedDataset && (
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <div className="flex items-center space-x-2 mb-3">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <h3 className="text-sm font-medium text-green-900">Dataset Loaded Successfully</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-xl font-bold text-primary">{dataAnalysis.totalRecords.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Records</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">{dataAnalysis.totalColumns}</div>
              <div className="text-xs text-gray-600">Columns</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">{dataAnalysis.qualityScore.toFixed(1)}%</div>
              <div className="text-xs text-gray-600">Quality Score</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">{dataAnalysis.privacyScore.toFixed(1)}%</div>
              <div className="text-xs text-gray-600">Privacy Score</div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!dataAnalysis}
          className="gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 text-sm shadow-lg"
        >
          <Settings className="h-4 w-4" />
          <span>Configure Generation</span>
        </button>
      </div>
    </motion.div>
  )
}

function GenerationStep({ 
  config,
  generating, 
  progress, 
  handleGenerate, 
  onNext,
  onBack 
}: {
  config: GenerationConfig
  generating: boolean
  progress: number
  handleGenerate: () => void
  onNext: () => void
  onBack: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto space-y-4"
    >
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Generate Synthetic Data</h2>
        
        {/* Configuration Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-1">Records</h3>
            <p className="text-xl font-bold text-primary">{config.recordCount.toLocaleString()}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-1">Columns</h3>
            <p className="text-xl font-bold text-primary">{config.selectedColumns.length}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-1">Format</h3>
            <p className="text-xl font-bold text-primary">{config.format.toUpperCase()}</p>
          </div>
        </div>

        {/* Generation Progress */}
        {generating && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Generating synthetic data...</span>
              <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Generation Button */}
        <div className="flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 text-sm shadow-lg"
          >
            {generating ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Zap className="h-4 w-4" />
                <span>Generate Synthetic Data</span>
              </>
            )}
          </button>
        </div>

        {/* Success State */}
        {progress === 100 && !generating && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">Generation Complete!</span>
            </div>
            <p className="text-xs text-green-700 mt-1">
              Your synthetic data has been generated successfully. Click "View Analytics" to see detailed analysis.
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          Back to Configuration
        </button>
        <button
          onClick={onNext}
          disabled={progress !== 100 || generating}
          className="gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 text-sm shadow-lg"
        >
          <BarChart className="h-4 w-4" />
          <span>View Analytics</span>
        </button>
      </div>
    </motion.div>
  )
} 