'use client'

import { motion } from 'framer-motion'
import { TestTube, Code, Bug, Zap, Shield, Users, ArrowRight, CheckCircle, Clock, Target } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function SoftwareTesting() {
  const features = [
    {
      icon: TestTube,
      title: 'Test Data Generation',
      description: 'Create comprehensive test datasets that cover edge cases, boundary conditions, and realistic user scenarios.'
    },
    {
      icon: Code,
      title: 'Development Environments',
      description: 'Populate development and staging environments with privacy-safe data that mirrors production patterns.'
    },
    {
      icon: Bug,
      title: 'Automated Testing',
      description: 'Enable continuous testing with synthetic data that supports automated test suites and CI/CD pipelines.'
    },
    {
      icon: Zap,
      title: 'Performance Testing',
      description: 'Generate large-scale datasets for load testing, stress testing, and performance optimization.'
    }
  ]

  const benefits = [
    {
      percentage: 80,
      title: 'Faster Development Cycles',
      description: 'Accelerate development with instant test data availability'
    },
    {
      percentage: 95,
      title: 'Test Coverage Improvement',
      description: 'Achieve comprehensive testing with diverse synthetic datasets'
    },
    {
      percentage: 100,
      title: 'Privacy Protection',
      description: 'Zero risk of exposing production data in test environments'
    }
  ]

  const testingTypes = [
    {
      title: 'Unit Testing',
      description: 'Generate focused datasets for testing individual components and functions with various input scenarios.',
      features: ['Boundary value testing', 'Edge case scenarios', 'Invalid input handling', 'Data type validation']
    },
    {
      title: 'Integration Testing',
      description: 'Create complex datasets that test interactions between different system components and services.',
      features: ['Cross-system data flow', 'API integration testing', 'Database interaction testing', 'Service dependency testing']
    },
    {
      title: 'User Acceptance Testing',
      description: 'Provide realistic user scenarios and workflows for comprehensive UAT with privacy-safe data.',
      features: ['User journey simulation', 'Business process testing', 'Workflow validation', 'Feature acceptance testing']
    },
    {
      title: 'Performance Testing',
      description: 'Generate large-scale datasets for load testing, stress testing, and performance benchmarking.',
      features: ['High-volume data generation', 'Concurrent user simulation', 'System load testing', 'Scalability validation']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6"
            >
              <TestTube className="h-4 w-4 mr-2" />
              Software Testing
            </motion.div>
            
            <motion.h1 
              
              
              
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              <span className="text-gradient">Software Testing</span> Solutions
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Accelerate software development with comprehensive test data. Create realistic development environments, enable continuous testing, and ensure quality without compromising data privacy.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Testing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Testing Capabilities
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive synthetic data solutions for every aspect of software testing and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  
                  
                  
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-segoe">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Development Benefits
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Development teams achieve significant improvements in testing efficiency and software quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                
                
                
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${benefit.percentage * 2.51} 251`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#238c44" />
                        <stop offset="100%" stopColor="#409A5D" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{benefit.percentage}%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 font-segoe">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Testing Methodologies
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive testing solutions for every stage of software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingTypes.map((testType, index) => (
              <motion.div
                key={testType.title}
                
                
                
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                  {testType.title}
                </h3>
                <p className="text-gray-600 font-segoe mb-6">
                  {testType.description}
                </p>
                <ul className="space-y-3">
                  {testType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary mr-3" />
                      <span className="font-segoe">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Testing Implementation
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Streamlined process to integrate synthetic data into your testing workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Test Planning
              </h3>
              <p className="text-gray-600 font-segoe">
                Analyze testing requirements and identify data needs for comprehensive test coverage.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Data Generation
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate synthetic test datasets that cover all testing scenarios and edge cases.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Test Execution
              </h3>
              <p className="text-gray-600 font-segoe">
                Execute comprehensive testing using synthetic data across all testing environments.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Continuous Testing
              </h3>
              <p className="text-gray-600 font-segoe">
                Integrate synthetic data generation into CI/CD pipelines for continuous testing.
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
              Accelerate Your Development Cycle
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Transform your testing strategy with synthetic data. Build better software faster while maintaining the highest quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Contact Testing Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 