'use client'

import { motion } from 'framer-motion'
import { Lock, Shield, CheckCircle, AlertTriangle, FileText, Users, ArrowRight, Award, Globe, Zap } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function PrivacyCompliance() {
  const regulations = [
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      icon: Globe,
      features: ['Right to be forgotten', 'Data portability', 'Consent management', 'Privacy by design']
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: Shield,
      features: ['PHI protection', 'Access controls', 'Audit trails', 'Risk assessments']
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      icon: Lock,
      features: ['Cardholder data protection', 'Secure networks', 'Access monitoring', 'Regular testing']
    },
    {
      name: 'SOC 2',
      description: 'Service Organization Control 2',
      icon: Award,
      features: ['Security controls', 'Availability monitoring', 'Processing integrity', 'Confidentiality']
    }
  ]

  const benefits = [
    {
      percentage: 100,
      title: 'Compliance Guarantee',
      description: 'Meet all major regulatory requirements'
    },
    {
      percentage: 90,
      title: 'Risk Reduction',
      description: 'Eliminate data breach exposure'
    },
    {
      percentage: 75,
      title: 'Audit Efficiency',
      description: 'Streamlined compliance audits'
    }
  ]

  const features = [
    {
      icon: FileText,
      title: 'Automated Documentation',
      description: 'Generate comprehensive compliance documentation and audit trails automatically.'
    },
    {
      icon: Users,
      title: 'Privacy Impact Assessments',
      description: 'Built-in privacy impact assessment tools for regulatory compliance validation.'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Continuous risk monitoring and assessment with real-time compliance scoring.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation with pre-configured compliance templates and workflows.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-6"
            >
              <Lock className="h-4 w-4 mr-2" />
              Privacy & Compliance
            </motion.div>
            
            <motion.h1 
              
              
              
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              <span className="text-gradient">Privacy-First</span> Compliance Solutions
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Ensure regulatory compliance with synthetic data that eliminates privacy risks. Meet GDPR, HIPAA, PCI DSS, and other regulations while maintaining data utility for analytics and AI.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Compliance Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                Speak with Expert
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulations Support */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Comprehensive Regulatory Support
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Built-in compliance for major data protection and privacy regulations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regulations.map((regulation, index) => {
              const IconComponent = regulation.icon
              return (
                <motion.div
                  key={regulation.name}
                  
                  
                  
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-space-grotesk text-gray-900">
                        {regulation.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-segoe">
                        {regulation.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {regulation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-primary mr-3" />
                        <span className="text-sm font-segoe">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              Compliance Benefits
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Measurable improvements in compliance posture and risk management
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

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Compliance Features
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive tools for maintaining regulatory compliance and data privacy
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

      {/* Implementation Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Compliance Implementation
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Streamlined process to achieve and maintain regulatory compliance
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
                Assessment
              </h3>
              <p className="text-gray-600 font-segoe">
                Evaluate current compliance posture and identify regulatory requirements.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Configuration
              </h3>
              <p className="text-gray-600 font-segoe">
                Configure privacy controls and compliance frameworks for your specific needs.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Validation
              </h3>
              <p className="text-gray-600 font-segoe">
                Validate compliance through automated testing and audit trail generation.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Monitoring
              </h3>
              <p className="text-gray-600 font-segoe">
                Continuous monitoring and reporting to maintain ongoing compliance.
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
              Achieve Compliance with Confidence
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Eliminate privacy risks while maintaining data utility. Start your compliance journey with synthetic data today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Contact Compliance Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 