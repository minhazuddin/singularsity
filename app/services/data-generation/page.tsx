'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Database, CheckCircle, ArrowRight, BarChart, Clock, Globe, Cpu } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function DataGeneration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              
              
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              AI-Powered <span className="text-gradient">Data Generation</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Create unlimited high-quality synthetic datasets that perfectly mirror your real data patterns while ensuring complete privacy protection and regulatory compliance.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Generating Data
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                View Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Advanced Generation Technologies
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Powered by cutting-edge AI models including GANs, VAEs, and Transformer architectures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Deep Learning Models
              </h3>
              <p className="text-gray-600 font-segoe">
                State-of-the-art generative adversarial networks (GANs) and variational autoencoders (VAEs) that learn complex data patterns and relationships to generate highly realistic synthetic data.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Multi-Modal Support
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate tabular data, time-series, text, images, and mixed-format datasets. Support for structured, semi-structured, and unstructured data types with preserved relationships.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Differential Privacy
              </h3>
              <p className="text-gray-600 font-segoe">
                Mathematical guarantees of privacy protection with configurable epsilon values. Ensures individual records cannot be reverse-engineered from synthetic data.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Real-Time Generation
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate millions of records in minutes with GPU-accelerated processing. Stream synthetic data directly to your applications via real-time APIs.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Statistical Fidelity
              </h3>
              <p className="text-gray-600 font-segoe">
                Preserve correlations, distributions, and statistical properties. Automated quality metrics ensure synthetic data maintains the same analytical insights as original data.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Custom Constraints
              </h3>
              <p className="text-gray-600 font-segoe">
                Define business rules, data ranges, and custom constraints. Generate data that meets specific requirements while maintaining realistic patterns and relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Transform Your Data Strategy
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              See how organizations across industries use synthetic data generation to accelerate innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                ML Model Training
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Generate unlimited training data to improve model performance. Overcome data scarcity, handle imbalanced datasets, and create edge cases for robust model development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Increase dataset size by 10-100x
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Balance rare event scenarios
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Generate diverse test scenarios
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Development & Testing
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Create realistic test datasets for development environments. Enable teams to work with production-like data without privacy risks or compliance concerns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Safe development environments
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Accelerated feature development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Comprehensive testing scenarios
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Data Sharing & Collaboration
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Share data insights with partners, vendors, or research institutions without exposing sensitive information. Enable secure collaboration and joint research initiatives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Secure external partnerships
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Academic research collaboration
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Vendor evaluation datasets
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Analytics & BI
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Create datasets for business intelligence tools and analytics platforms. Enable data exploration, dashboard development, and reporting without privacy constraints.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Dashboard development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Report automation testing
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Performance benchmarking
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Insights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Industry-leading performance metrics and technical capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                99.5%
              </h3>
              <p className="text-gray-600 font-segoe text-lg">
                Statistical similarity to original data while maintaining complete privacy protection
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                10M+
              </h3>
              <p className="text-gray-600 font-segoe text-lg">
                Records generated per minute with enterprise-grade infrastructure
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                50+
              </h3>
              <p className="text-gray-600 font-segoe text-lg">
                Data formats and sources supported across all major platforms
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Ready to Generate Unlimited Data?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Start creating high-quality synthetic datasets today. No setup required, instant access to enterprise-grade data generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 