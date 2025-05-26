'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Users, Brain, Database, Lock, CheckCircle, Star, BarChart, Cpu, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'
import GeometricShapes from '../components/GeometricShapes'
import DataStreams from '../components/DataStreams'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 bg-gradient-to-br from-gray-50 to-white mesh-gradient overflow-hidden">
        <AnimatedBackground />
        <GeometricShapes />
        <DataStreams />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16" style={{ zIndex: 10, position: 'relative' }}>
          <div className="text-center">
            <motion.h1 
              
              
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Privacy-First
              <span className="text-gradient block">Synthetic Data</span>
              Platform
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl md:text-custom-xl text-gray-600 font-segoe mb-8 max-w-4xl mx-auto"
            >
              Generate high-quality artificial data that mimics your real data patterns while maintaining complete privacy and regulatory compliance. Empower your AI models without compromising sensitive information.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                Watch Demo
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
              Powerful Synthetic Data Generation
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Advanced AI algorithms that create realistic, privacy-safe synthetic data for your most demanding use cases
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
                AI-Powered Generation
              </h3>
              <p className="text-gray-600 font-segoe">
                Advanced generative AI models including GANs, VAEs, and transformers to create highly realistic synthetic datasets that preserve statistical properties.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Privacy Guaranteed
              </h3>
              <p className="text-gray-600 font-segoe">
                Zero personally identifiable information with differential privacy techniques. GDPR, HIPAA, and SOC 2 compliant by design.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate millions of synthetic records in minutes with our optimized cloud infrastructure and parallel processing capabilities.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Multi-Format Support
              </h3>
              <p className="text-gray-600 font-segoe">
                Support for tabular, time-series, text, and image data. Compatible with all major databases and data formats.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                API-First Design
              </h3>
              <p className="text-gray-600 font-segoe">
                RESTful APIs and SDKs for seamless integration into your existing ML pipelines and development workflows.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Global Scale
              </h3>
              <p className="text-gray-600 font-segoe">
                Enterprise-grade infrastructure with global availability, auto-scaling, and 99.9% uptime guarantee.
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
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              From healthcare to finance, leading organizations use Singularsity to accelerate AI development while protecting sensitive data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900">Healthcare</h3>
              </div>
              <p className="text-gray-600 font-segoe mb-6">
                Generate synthetic patient data for medical research, drug discovery, and AI model training while maintaining HIPAA compliance and protecting patient privacy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Electronic Health Records (EHR) synthesis
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Medical imaging data augmentation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Clinical trial simulation
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900">Financial Services</h3>
              </div>
              <p className="text-gray-600 font-segoe mb-6">
                Create realistic financial datasets for fraud detection, risk modeling, and regulatory compliance testing without exposing sensitive customer information.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Transaction data synthesis
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Credit scoring model training
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Anti-money laundering testing
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900">E-commerce</h3>
              </div>
              <p className="text-gray-600 font-segoe mb-6">
                Generate customer behavior data, product catalogs, and transaction patterns for recommendation systems and business intelligence applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Customer journey simulation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Product recommendation testing
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  A/B testing datasets
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Cpu className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900">Manufacturing</h3>
              </div>
              <p className="text-gray-600 font-segoe mb-6">
                Create synthetic sensor data, equipment logs, and operational datasets for predictive maintenance and quality control AI systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  IoT sensor data generation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Equipment failure simulation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Supply chain optimization
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              How Singularsity Works
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Simple, secure, and scalable synthetic data generation in four easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Connect Your Data
              </h3>
              <p className="text-gray-600 font-segoe">
                Securely connect your databases, files, or APIs. Your data never leaves your environment.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Configure Generation
              </h3>
              <p className="text-gray-600 font-segoe">
                Set privacy levels, data types, and generation parameters through our intuitive interface.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Generate & Validate
              </h3>
              <p className="text-gray-600 font-segoe">
                Our AI generates synthetic data and automatically validates quality, utility, and privacy metrics.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Deploy & Scale
              </h3>
              <p className="text-gray-600 font-segoe">
                Download or stream synthetic data directly to your applications via APIs and SDKs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Our Synthetic Data */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-primary mb-4">
              Why Companies Choose Our Synthetic Data
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Our platform delivers measurable results for AI development teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-6xl font-bold font-space-grotesk text-primary mb-4">
                87%
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Faster Model Training
              </h3>
              <p className="text-gray-600 font-segoe">
                Reduce data collection time and accelerate your development cycle
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-6xl font-bold font-space-grotesk text-primary mb-4">
                100%
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Privacy Compliant
              </h3>
              <p className="text-gray-600 font-segoe">
                Eliminate data privacy concerns with fully synthetic datasets
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-6xl font-bold font-space-grotesk text-primary mb-4">
                42%
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Improved Accuracy
              </h3>
              <p className="text-gray-600 font-segoe">
                Higher model performance with better quality training data
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-6xl font-bold font-space-grotesk text-primary mb-4">
                60%
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Cost Reduction
              </h3>
              <p className="text-gray-600 font-segoe">
                Lower data acquisition and labeling costs with synthetic data
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              
              
              
            >
              <Link 
                href="/case-studies" 
                className="inline-flex items-center gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200"
              >
                See Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of organizations using Singularsity to accelerate AI development while protecting privacy. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 