'use client'

import { motion } from 'framer-motion'
import { DollarSign, Shield, TrendingUp, AlertTriangle, BarChart, Lock, CheckCircle, ArrowRight, Users, Zap, Globe } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function Finance() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Credit Risk Modeling',
      description: 'Generate synthetic credit data for building robust risk assessment models without exposing customer information.'
    },
    {
      icon: AlertTriangle,
      title: 'Fraud Detection',
      description: 'Create realistic fraudulent transaction patterns to train and test fraud detection algorithms effectively.'
    },
    {
      icon: BarChart,
      title: 'Regulatory Compliance',
      description: 'Develop compliance testing datasets that meet regulatory requirements while protecting customer privacy.'
    },
    {
      icon: Lock,
      title: 'Stress Testing',
      description: 'Generate extreme market scenarios and portfolio data for comprehensive stress testing and risk analysis.'
    }
  ]

  const benefits = [
    {
      percentage: 95,
      title: 'Regulatory Compliance',
      description: 'Meet PCI DSS, GDPR, and banking regulations'
    },
    {
      percentage: 80,
      title: 'Faster Model Development',
      description: 'Accelerate ML model training and validation'
    },
    {
      percentage: 99,
      title: 'Data Privacy Protection',
      description: 'Zero risk of customer data exposure'
    }
  ]

  const useCases = [
    {
      title: 'Anti-Money Laundering (AML)',
      description: 'Train AML systems with synthetic transaction data that includes suspicious patterns and money laundering scenarios.',
      features: ['Transaction pattern synthesis', 'Suspicious activity modeling', 'Cross-border transaction simulation', 'Regulatory reporting testing']
    },
    {
      title: 'Algorithmic Trading',
      description: 'Develop and backtest trading algorithms using synthetic market data and historical price movements.',
      features: ['Market data simulation', 'Price movement modeling', 'Volatility pattern generation', 'Risk scenario testing']
    },
    {
      title: 'Customer Analytics',
      description: 'Analyze customer behavior and preferences using privacy-safe synthetic customer data.',
      features: ['Customer segmentation', 'Behavioral pattern analysis', 'Churn prediction modeling', 'Product recommendation testing']
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
              <DollarSign className="h-4 w-4 mr-2" />
              Financial Services
            </motion.div>
            
            <motion.h1 
              
              
              
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Synthetic Data for <span className="text-gradient">Financial Services</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Accelerate financial AI development with PCI DSS compliant synthetic data. Build better fraud detection, risk models, and trading algorithms while protecting customer privacy.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Free Trial
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
              Financial AI Solutions
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Purpose-built synthetic data solutions for the unique challenges of financial services
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
              Proven Results in Finance
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Financial institutions achieve measurable improvements with synthetic data
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

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Financial Use Cases
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of financial services
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                
                
                
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 font-segoe mb-6">
                      {useCase.description}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span className="font-segoe">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Financial AI?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join leading financial institutions using synthetic data to accelerate innovation while maintaining the highest security standards.
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
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 