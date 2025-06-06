'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
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
import { useDropzone } from 'react-dropzone'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Import our data processing utilities
import { 
  DataProcessor, 
  SyntheticDataGenerator as SyntheticDataGeneratorClass, 
  DataExporter,
  DatasetAnalysis,
  GenerationConfig,
  SyntheticDataResult
} from '../utils/dataProcessing'

// Import components
import ConfigurationPanel from '../components/ConfigurationPanel'
import AnalyticsDashboard from '../components/AnalyticsDashboard'

export default function OwnDataGenerator() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
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

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      setUploadedFiles(prev => [...prev, ...acceptedFiles])
      toast.success(`${acceptedFiles.length} file(s) uploaded successfully`)
      
      // Process the first file
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        toast.info('Processing file...')
        
        const data = await dataProcessor.parseFile(file)
        const analysis = dataProcessor.analyzeDataset(data)
        
        setParsedData(data)
        setDataAnalysis(analysis)
        setConfig((prev: GenerationConfig) => ({ 
          ...prev, 
          selectedColumns: analysis.columns.map((col: any) => col.name)
        }))
        
        toast.success('File processed successfully!')
      }
    } catch (error) {
      toast.error(`Error processing file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }, [dataProcessor])

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
    if (!dataAnalysis || parsedData.length === 0) {
      toast.error('Please upload and process data first')
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
      toast.error('Please upload and process data first')
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
          uploadedFiles={uploadedFiles}
          parsedData={parsedData}
          dataAnalysis={dataAnalysis}
          config={config}
          setConfig={setConfig}
          generating={generating}
          progress={progress}
          generatedResult={generatedResult}
          showAnalytics={showAnalytics}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
          handleGenerate={handleGenerate}
          handleDownload={handleDownload}
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
  uploadedFiles, 
  parsedData,
  dataAnalysis,
  config, 
  setConfig, 
  generating, 
  progress,
  generatedResult,
  showAnalytics,
  getRootProps,
  getInputProps,
  isDragActive,
  handleGenerate,
  handleDownload
}: {
  currentStep: number
  setCurrentStep: (step: number) => void
  uploadedFiles: File[]
  parsedData: any[]
  dataAnalysis: DatasetAnalysis | null
  config: GenerationConfig
  setConfig: (config: GenerationConfig) => void
  generating: boolean
  progress: number
  generatedResult: SyntheticDataResult | null
  showAnalytics: boolean
  getRootProps: any
  getInputProps: any
  isDragActive: boolean
  handleGenerate: () => void
  handleDownload: (format: string) => void
}) {
  const mainContentClass = useMainContentClass()

  const steps = [
    { id: 1, name: 'Upload Data', icon: Upload },
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
            <h1 className="text-xl font-bold text-gray-900">Upload Your Own Data</h1>
            <p className="text-sm text-gray-600">Upload your dataset to generate high-quality synthetic data</p>
          </div>
          <div className="flex items-center space-x-3">
            <Link 
              href="/console/synthetic-data/samples"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm"
            >
              <Database className="h-4 w-4" />
              <span>Try Sample Data</span>
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
            <DataUploadStep 
              key="upload"
              uploadedFiles={uploadedFiles}
              parsedData={parsedData}
              dataAnalysis={dataAnalysis}
              getRootProps={getRootProps}
              getInputProps={getInputProps}
              isDragActive={isDragActive}
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

function DataUploadStep({ 
  uploadedFiles, 
  parsedData, 
  dataAnalysis,
  getRootProps, 
  getInputProps, 
  isDragActive, 
  onNext
}: {
  uploadedFiles: File[]
  parsedData: any[]
  dataAnalysis: DatasetAnalysis | null
  getRootProps: any
  getInputProps: any
  isDragActive: boolean
  onNext: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto space-y-4"
    >
      {/* File Upload */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Your Dataset</h2>
        
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragActive 
              ? 'border-primary bg-primary/10' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className={`h-12 w-12 mx-auto mb-3 ${
            isDragActive ? 'text-primary' : 'text-gray-400'
          }`} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {isDragActive ? 'Drop your files here' : 'Drag & drop your files here'}
          </h3>
          <p className="text-gray-600 mb-4">
            or click to browse and select files from your computer
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-500 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>CSV</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>JSON</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>DOCX</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>TXT</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">Maximum file size: 50MB</p>
        </div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-base font-medium text-gray-900 mb-2">Uploaded Files</h3>
            <div className="space-y-2">
              {uploadedFiles.map((file: File, index: number) => (
                <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <span className="flex-1 text-sm text-gray-900">{file.name}</span>
                  <span className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Analysis Summary */}
        {dataAnalysis && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <h3 className="text-sm font-medium text-green-900">Data Analysis Complete</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-gray-600">Records:</span>
                <span className="ml-2 font-medium">{dataAnalysis.totalRecords.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Columns:</span>
                <span className="ml-2 font-medium">{dataAnalysis.totalColumns}</span>
              </div>
              <div>
                <span className="text-gray-600">Quality Score:</span>
                <span className="ml-2 font-medium">{dataAnalysis.qualityScore.toFixed(1)}%</span>
              </div>
              <div>
                <span className="text-gray-600">Privacy Score:</span>
                <span className="ml-2 font-medium">{dataAnalysis.privacyScore.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!dataAnalysis}
          className="gradient-bg text-white px-8 py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 text-sm shadow-lg min-w-[180px] justify-center"
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
            className="gradient-bg text-white px-8 py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 text-sm shadow-lg min-w-[180px] justify-center"
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
          className="px-8 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium min-w-[180px] justify-center flex items-center"
        >
          Back to Configuration
        </button>
        <button
          onClick={onNext}
          disabled={progress !== 100 || generating}
          className="gradient-bg text-white px-8 py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 text-sm shadow-lg min-w-[180px] justify-center"
        >
          <BarChart className="h-4 w-4" />
          <span>View Analytics</span>
        </button>
      </div>
    </motion.div>
  )
} 