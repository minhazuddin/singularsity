'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Database, CheckCircle, ArrowRight, BarChart, Clock, Globe, Cpu, Users } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function DataGeneration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/15 to-teal-500/8 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 5
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-space-grotesk leading-tight mb-4"
            >
              <span className="text-gray-900">AI-Powered</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Data Generation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Create unlimited high-quality synthetic datasets that perfectly mirror your real data patterns while ensuring complete privacy protection and regulatory compliance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/login?tab=signup"
                  className="group relative inline-flex items-center justify-center px-6 py-3 h-12 text-base font-semibold rounded-xl text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 active:shadow-none active:appearance-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  Start Generating Data
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/demo" 
                  className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
                >
                  View Demo
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Advanced Generation Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Define business rules, data ranges, and custom constraints. Generate data that meets specific requirements while maintaining realistic patterns and relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Transform Your Data Strategy
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
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
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Technical Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
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
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                Data formats and sources supported across all major platforms
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative pt-8 pb-12 gradient-bg text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-10 left-10 w-16 h-16 border border-white/20 rounded-lg rotate-45"
            animate={{
              y: [0, -20, 0],
              rotate: [45, 65, 45],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-24 right-20 w-12 h-12 border border-white/30 rounded-full"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-10 h-10 border border-white/25 rounded-lg"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Title with Creative Elements */}
            <div className="mb-2">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-3xl mb-2 shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <Database className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-space-grotesk mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Ready to Generate Unlimited Data?
                </span>
              </motion.h2>
            </div>

            {/* Enhanced Description */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[1.1rem] font-light font-light mb-4 max-w-4xl mx-auto opacity-95 leading-relaxed">
                Start creating high-quality synthetic datasets today. No setup required, instant access to enterprise-grade data generation.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Link 
                href="/login?tab=signup" 
                className="group bg-white text-primary px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center justify-center"
              >
                Start Free Trial
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Link 
                href="/contact" 
                className="group border-2 border-white/80 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              >
                <Users className="mr-2 h-4 w-4" />
                Schedule Demo
              </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>99.5% Data Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Instant Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Enterprise Scale</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 