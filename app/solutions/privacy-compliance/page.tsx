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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/30 to-teal-500/25 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.4, 0.8, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.6, 0.9, 0.4, 0.8, 0.6],
              x: [0, -600, 800, -400, 600, -200, 0],
              y: [0, -25, 15, -10, 8, -3, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 0.7, 1.3, 0.9, 1.1, 1],
              rotate: [0, 120, 240, 360],
              opacity: [0.8, 0.4, 1, 0.6, 0.9, 0.8],
              x: [0, 800, -600, 600, -400, 300, 0],
              y: [0, 30, -40, 20, -10, 5, 0],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-garnett leading-tight mb-4"
            >
              <span className="text-gray-900">Privacy-First</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Compliance Solutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Ensure regulatory compliance with synthetic data that eliminates privacy risks. Meet GDPR, HIPAA, PCI DSS, and other regulations while maintaining data utility for analytics and AI.
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
                  Start Compliance Assessment
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact" 
                  className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
                >
                  Speak with Expert
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulations Support */}
      <section className="pt-8 pb-16 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Comprehensive Regulatory Support
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
                      <h3 className="text-xl font-bold font-garnett text-gray-900">
                        {regulation.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {regulation.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {regulation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-primary mr-3" />
                        <span className="text-sm font-light">{feature}</span>
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
      <section className="pt-8 pb-16 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Compliance Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
                <h3 className="text-lg font-bold font-garnett text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pt-8 pb-16 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Compliance Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
                  <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="pt-8 pb-16 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Compliance Implementation
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Assessment
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Evaluate current compliance posture and identify regulatory requirements.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Configuration
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Configure privacy controls and compliance frameworks for your specific needs.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Validation
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Validate compliance through automated testing and audit trail generation.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Monitoring
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Continuous monitoring and reporting to maintain ongoing compliance.
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
                <Shield className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-garnett mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Achieve Compliance with Confidence
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
                Eliminate privacy risks while maintaining data utility. Start your compliance journey with synthetic data today.
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
                Start Free Assessment
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
                Contact Compliance Expert
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
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>HIPAA Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>SOC 2 Certified</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 