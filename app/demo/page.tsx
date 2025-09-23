'use client'

import { motion } from 'framer-motion'
import { Play, Database, Shield, Zap, CheckCircle, ArrowRight, Download, Eye, Settings, Users } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Demo() {
  const demoFeatures = [
    {
      title: 'Real-time Data Generation',
      description: 'Watch synthetic data being generated in real-time with our advanced AI algorithms.',
      icon: Zap,
      demoType: 'Interactive'
    },
    {
      title: 'Privacy Validation',
      description: 'See how our privacy protection mechanisms ensure zero data leakage.',
      icon: Shield,
      demoType: 'Visualization'
    },
    {
      title: 'Data Quality Metrics',
      description: 'Explore comprehensive quality metrics and statistical fidelity measurements.',
      icon: Database,
      demoType: 'Dashboard'
    }
  ]

  const useCaseExamples = [
    {
      title: 'Healthcare Patient Data',
      description: 'HIPAA-compliant synthetic patient records for medical AI training',
      dataPoints: '1M+ records',
      accuracy: '98.5%',
      privacy: '100%'
    },
    {
      title: 'Financial Transactions',
      description: 'PCI DSS compliant transaction data for fraud detection models',
      dataPoints: '5M+ transactions',
      accuracy: '97.2%',
      privacy: '100%'
    },
    {
      title: 'E-commerce Customer Data',
      description: 'GDPR-ready customer behavior data for recommendation systems',
      dataPoints: '2M+ customers',
      accuracy: '96.8%',
      privacy: '100%'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6"
            >
              <Play className="h-4 w-4 mr-2" />
              Interactive Demo
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-space-grotesk leading-tight mb-4"
            >
              <span className="text-gray-900">Experience</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Singularsity in Action</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Explore our synthetic data platform through interactive demonstrations. See how we generate privacy-safe data that maintains statistical accuracy and business value.
            </motion.p>
            
            <motion.div



              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/login?tab=signup"
                  className="group relative inline-flex items-center justify-center px-6 py-3 h-12 text-base font-semibold rounded-xl text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 active:shadow-none active:appearance-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  Start Free Trial
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-5 w-5" /></motion.div>
                </Link>
              </motion.div>
              <Link 
                href="/contact" 
                className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
              >
                Schedule Live Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Features */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              Interactive Demonstrations
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Explore key platform capabilities through hands-on demonstrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  
                  
                  
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group flex flex-col h-full"
                >
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold font-space-grotesk text-gray-900">
                      {feature.title}
                    </h3>
                    <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                      {feature.demoType}
                    </span>
                  </div>
                  <p className="text-gray-600 font-segoe mb-6 flex-grow">
                    {feature.description}
                  </p>
                  <button className="w-full gradient-bg text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center mt-auto">
                    <Play className="h-4 w-4 mr-2" />
                    Try Demo
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo Dashboard Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              Platform Dashboard Preview
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Get a glimpse of our intuitive interface and powerful analytics
            </p>
          </div>

          <motion.div
            
            
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Mock Dashboard Header */}
            <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <Database className="h-4 w-4 text-white" />
                </div>
                <span className="font-space-grotesk font-bold">Singularsity Dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <Eye className="h-4 w-4" />
                <Download className="h-4 w-4" />
              </div>
            </div>

            {/* Mock Dashboard Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2">Data Generated</h3>
                  <p className="text-3xl font-bold">2.4M</p>
                  <p className="text-sm opacity-90">Records this month</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2">Privacy Score</h3>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-90">Zero data leakage</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2">Quality Score</h3>
                  <p className="text-3xl font-bold">98.5%</p>
                  <p className="text-sm opacity-90">Statistical fidelity</p>
                </div>
              </div>

              {/* Mock Chart Area */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Generation Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Customer Data</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Transaction Records</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Product Catalog</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center mx-auto">
                  <Play className="h-4 w-4 mr-2" />
                  Launch Interactive Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Case Examples */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              Real-World Examples
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              See how different industries leverage synthetic data for their specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCaseExamples.map((example, index) => (
              <motion.div
                key={example.title}
                
                
                
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                  {example.title}
                </h3>
                <p className="text-gray-600 font-segoe mb-6">
                  {example.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Volume</span>
                    <span className="font-bold text-primary">{example.dataPoints}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Accuracy</span>
                    <span className="font-bold text-primary">{example.accuracy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Privacy</span>
                    <span className="font-bold text-primary">{example.privacy}</span>
                  </div>
                </div>

                <button className="w-full mt-6 gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center">
                  <Eye className="h-4 w-4 mr-2" />
                  View Sample
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Choose how you'd like to experience Singularsity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Self-Service Demo
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Explore the platform at your own pace with our interactive self-service demo environment.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-sm">Instant access</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-sm">No setup required</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-sm">Sample datasets included</span>
                </li>
              </ul>
              <Link 
                href="/login?tab=signup" 
                className="w-full gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Demo Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Guided Demo
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Schedule a personalized demo with our experts to see how Singularsity fits your specific needs.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-sm">Expert guidance</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-sm">Custom use cases</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-sm">Q&A session</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
                <Play className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-space-grotesk mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Experience the Future of Data
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
              <p className="text-[1.1rem] font-segoe font-light mb-4 max-w-4xl mx-auto opacity-95 leading-relaxed">
                Join thousands of organizations already using Singularsity to accelerate innovation while protecting privacy.
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
                Contact Sales
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
                <span>Interactive Demo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Real-time Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Privacy Validated</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 