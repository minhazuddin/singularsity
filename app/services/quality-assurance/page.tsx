'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Target, BarChart, Shield, AlertCircle, ArrowRight, Zap, Database, TrendingUp, Settings } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function QualityAssurance() {
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
              Synthetic Data <span className="text-gradient">Quality Assurance</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Ensure your synthetic data meets the highest standards of quality, accuracy, and statistical fidelity with our comprehensive validation and testing framework.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Quality Testing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                See Quality Metrics
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Dimensions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Comprehensive Quality Dimensions
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
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
              <p className="text-gray-600 font-segoe">
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
              <p className="text-gray-600 font-segoe">
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
              <p className="text-gray-600 font-segoe">
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
              <p className="text-gray-600 font-segoe">
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
              <p className="text-gray-600 font-segoe">
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
              <p className="text-gray-600 font-segoe">
                Test synthetic data performance in real-world applications, ensuring consistent behavior and optimal system performance at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing Framework Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Automated Testing Framework
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
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
              <p className="text-gray-600 font-segoe mb-6">
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
              <p className="text-gray-600 font-segoe mb-6">
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
              <p className="text-gray-600 font-segoe mb-6">
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
              <p className="text-gray-600 font-segoe mb-6">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Quality Assurance Results
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
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
              <p className="text-gray-600 font-segoe text-lg">
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
              <p className="text-gray-600 font-segoe text-lg">
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
              <p className="text-gray-600 font-segoe text-lg">
                Automated quality tests run on every synthetic dataset generation
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
              Ensure Your Data Meets Every Standard
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Never compromise on quality. Our comprehensive QA framework ensures your synthetic data exceeds expectations every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Start Quality Testing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Schedule QA Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 