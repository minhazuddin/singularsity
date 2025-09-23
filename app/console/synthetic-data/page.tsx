'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Database, Upload, ArrowRight, Sparkles, 
  Shield, Zap, BarChart, Users, FileText, 
  CheckCircle, TrendingUp, ArrowLeft
} from 'lucide-react'
import Navigation from '../../../components/Navigation'
import ConsoleSidebar, { SidebarProvider, useMainContentClass } from '../../../components/ConsoleSidebar'
import ConsoleFooter from '../../../components/ConsoleFooter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SyntheticDataLanding() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

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
        
        <MainContent />
        
        <ConsoleFooter />
      </div>
    </SidebarProvider>
  )
}

// Separate component to use the sidebar context
function MainContent() {
  const mainContentClass = useMainContentClass()

  const features = [
    {
      icon: Shield,
      title: 'Privacy-First',
      description: 'Advanced privacy protection with K-anonymity and differential privacy'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'State-of-the-art machine learning models for high-quality generation'
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Comprehensive analytics and bias detection capabilities'
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'Generate from thousands to millions of synthetic records'
    }
  ]

  const stats = [
    { label: 'Data Types Supported', value: '50+' },
    { label: 'Privacy Accuracy', value: '99.9%' },
    { label: 'Generation Speed', value: '10K/sec' },
    { label: 'Quality Score', value: '95%' }
  ]

  return (
    <div className={mainContentClass}>
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Synthetic Data Generator</h1>
            <p className="text-gray-600">Create high-quality synthetic data with advanced AI capabilities</p>
          </div>
          <Link 
            href="/console"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Console</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-[2rem] font-bold text-gray-900 mb-4">
              Generate Synthetic Data with AI
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your data strategy with privacy-preserving synthetic data generation. 
              Choose your starting point below to begin creating high-quality synthetic datasets.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Options */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Data Source</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your synthetic data generation journey by selecting how you'd like to provide your data. 
              Both options offer the same powerful AI capabilities and privacy protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Upload Your Data Option */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Recommended for</div>
                    <div className="text-sm font-medium text-gray-700">Existing Data</div>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Upload Your Own Data
                </h4>
                <p className="text-gray-600 mb-6">
                  Upload your existing datasets (CSV, JSON, DOCX, TXT) and generate synthetic versions 
                  that preserve statistical properties while protecting privacy.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Support for multiple file formats</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Automatic data analysis and profiling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Preserve original data relationships</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Advanced privacy protection</span>
                  </div>
                </div>
                
                <Link
                  href="/console/synthetic-data/own-data"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 group-hover:shadow-lg"
                >
                  <Upload className="h-5 w-5" />
                  <span>Upload Your Data</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Sample Datasets Option */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Recommended for</div>
                    <div className="text-sm font-medium text-gray-700">Quick Start</div>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Try Sample Datasets
                </h4>
                <p className="text-gray-600 mb-6">
                  Explore our curated collection of sample datasets across various industries 
                  to quickly understand synthetic data generation capabilities.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-700">Pre-configured industry datasets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-700">Instant data loading and analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-700">Learn best practices and workflows</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-700">No data preparation required</span>
                  </div>
                </div>
                
                <Link
                  href="/console/synthetic-data/samples"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group-hover:shadow-lg"
                >
                  <Database className="h-5 w-5" />
                  <span>Try Sample Data</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white rounded-xl shadow-sm border p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Powerful Features for Both Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 