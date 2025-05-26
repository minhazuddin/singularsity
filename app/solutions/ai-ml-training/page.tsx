'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Database, Shield, BarChart, Cpu } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function AIMLTraining() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              
              
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              AI/ML <span className="text-gradient">Training Solutions</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-4xl mx-auto"
            >
              Accelerate machine learning development with unlimited, high-quality synthetic training data. Overcome data scarcity, improve model performance, and train AI systems without privacy constraints.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Training Models
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                View ML Examples
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ML Challenges Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Machine Learning Training Challenges
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Common obstacles that synthetic data helps overcome in AI/ML development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-red-50 border-l-4 border-red-200 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
                Data Scarcity
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                Insufficient training data for rare events, edge cases, and specialized domains limits model performance.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-orange-50 border-l-4 border-orange-200 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
                Class Imbalance
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                Uneven distribution of classes leads to biased models that struggle with minority classes.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-yellow-50 border-l-4 border-yellow-200 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
                Privacy Restrictions
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                Regulatory compliance prevents use of real data, limiting model training opportunities.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-blue-50 border-l-4 border-blue-200 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
                Cost & Time
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                Data collection, labeling, and preparation consume significant resources and delay model deployment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Synthetic Data ML Solutions
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive approaches to enhance your machine learning workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Data Augmentation
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Expand existing datasets with synthetic samples that preserve statistical properties while adding diversity and coverage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  10x-100x dataset size increase
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Maintain data relationships
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Edge case generation
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Class Balancing
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Generate synthetic samples for minority classes to create balanced datasets and improve model fairness.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Minority class oversampling
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Bias reduction techniques
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Fairness metric optimization
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Privacy-Preserving Training
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Train models on synthetic data that maintains utility while ensuring complete privacy protection and regulatory compliance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  GDPR/HIPAA compliant training
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Zero privacy risk
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Cross-border data sharing
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Rapid Prototyping
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Accelerate model development with instant access to training data, enabling faster experimentation and iteration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Instant dataset generation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  A/B testing capabilities
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Rapid iteration cycles
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Model Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Supported Model Types
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Synthetic data solutions for every type of machine learning model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Deep Learning
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                Neural networks, CNNs, RNNs, and transformer models for complex pattern recognition and generation tasks.
              </p>
              <div className="text-sm text-gray-500">
                Computer Vision • NLP • Time Series • Multimodal
              </div>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Traditional ML
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                Random forests, SVMs, gradient boosting, and ensemble methods for structured data and tabular datasets.
              </p>
              <div className="text-sm text-gray-500">
                Classification • Regression • Clustering • Ensemble
              </div>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Reinforcement Learning
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                RL agents trained on synthetic environments and scenarios for safer, faster policy learning.
              </p>
              <div className="text-sm text-gray-500">
                Game AI • Robotics • Finance • Autonomous Systems
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Real-world improvements achieved with synthetic data training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                45%
              </h3>
              <p className="text-gray-600 font-segoe">
                Average model accuracy improvement with synthetic data augmentation
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                75%
              </h3>
              <p className="text-gray-600 font-segoe">
                Reduction in model development time from data generation to deployment
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                90%
              </h3>
              <p className="text-gray-600 font-segoe">
                Improvement in rare class detection with balanced synthetic datasets
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                60%
              </h3>
              <p className="text-gray-600 font-segoe">
                Cost reduction in ML infrastructure through efficient training processes
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
              Supercharge Your ML Models
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of data scientists and ML engineers using synthetic data to build better models faster. Start training with unlimited, high-quality data today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Start Free ML Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Talk to ML Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 