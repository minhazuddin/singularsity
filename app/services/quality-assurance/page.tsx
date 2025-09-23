'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Target, BarChart, Shield, AlertCircle, ArrowRight, Zap, Database, TrendingUp, Settings, Users } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function QualityAssurance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/8 to-teal-500/8 rounded-full blur-3xl"
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
              <span className="text-gray-900">Synthetic Data</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Quality Assurance</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Ensure your synthetic data meets the highest standards of quality, accuracy, and statistical fidelity with our comprehensive validation and testing framework.
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
                  Start Quality Testing
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/demo" 
                  className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
                >
                  See Quality Metrics
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Dimensions Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Comprehensive Quality Dimensions
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Multi-faceted validation framework ensuring synthetic data excellence across all critical dimensions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Statistical Fidelity
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Verify that synthetic data preserves the statistical properties, distributions, and correlations of the original dataset with mathematical precision.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Privacy Protection
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Validate that synthetic data provides strong privacy guarantees with no possibility of reverse-engineering original records or identifying individuals.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Utility Preservation
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Ensure synthetic data maintains analytical utility and produces consistent insights when used in machine learning models and analytics workflows.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Data Integrity
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Validate referential integrity, constraint compliance, and business rule adherence across all generated synthetic records and relationships.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Diversity & Coverage
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Assess data diversity, edge case coverage, and ensure synthetic data represents the full spectrum of scenarios present in real data.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Performance Validation
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Test synthetic data performance in real-world applications, ensuring consistent behavior and optimal system performance at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing Framework Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Automated Testing Framework
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Comprehensive test suites that validate every aspect of your synthetic data quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Statistical Tests
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                Rigorous statistical analysis to ensure synthetic data maintains the mathematical properties of your original dataset.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Kolmogorov-Smirnov distribution tests
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Correlation matrix validation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Mutual information analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Chi-square goodness of fit
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Privacy Audits
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                Comprehensive privacy testing to ensure synthetic data cannot be used to identify or re-identify individuals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Membership inference attacks
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Attribute inference testing
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Differential privacy validation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Re-identification risk assessment
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                ML Model Validation
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                Test synthetic data effectiveness by training and evaluating machine learning models on both real and synthetic datasets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Model performance comparison
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Feature importance analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Cross-validation metrics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Prediction consistency tests
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Business Rule Testing
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                Validate that synthetic data adheres to business constraints, regulatory requirements, and domain-specific rules.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Constraint compliance validation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Regulatory requirement checks
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Custom business logic testing
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Data quality scoring
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Metrics Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Quality Assurance Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Quantifiable quality metrics that demonstrate synthetic data excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                99.8%
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                Statistical similarity score across all tested datasets and use cases
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                Zero
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                Privacy breaches detected across 100+ comprehensive privacy audits
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                1000+
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                Automated quality tests run on every synthetic dataset generation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative pt-8 pb-12 gradient-bg text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
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
                <Target className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-space-grotesk mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Ensure Your Data Meets Every Standard
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
                Never compromise on quality. Our comprehensive QA framework ensures your synthetic data exceeds expectations every time.
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
                Start Quality Testing
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
                Schedule QA Demo
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
                <span>99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Automated Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Real-time Validation</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 