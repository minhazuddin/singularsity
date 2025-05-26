'use client'

import { motion } from 'framer-motion'
import { Factory, Cog, TrendingUp, Shield, CheckCircle, ArrowRight, Zap, BarChart, AlertTriangle, Settings } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function Manufacturing() {
  const features = [
    {
      icon: Cog,
      title: 'Predictive Maintenance',
      description: 'Generate synthetic sensor data and failure patterns to train predictive maintenance models for equipment optimization.'
    },
    {
      icon: BarChart,
      title: 'Quality Control',
      description: 'Create synthetic production data to develop quality control systems and defect detection algorithms.'
    },
    {
      icon: TrendingUp,
      title: 'Production Optimization',
      description: 'Simulate production scenarios and optimize manufacturing processes using synthetic operational data.'
    },
    {
      icon: AlertTriangle,
      title: 'Safety Analytics',
      description: 'Generate safety incident data to train risk assessment models and improve workplace safety protocols.'
    }
  ]

  const benefits = [
    {
      percentage: 65,
      title: 'Downtime Reduction',
      description: 'Significant reduction in unplanned equipment downtime'
    },
    {
      percentage: 45,
      title: 'Maintenance Cost Savings',
      description: 'Lower maintenance costs through predictive analytics'
    },
    {
      percentage: 90,
      title: 'Quality Improvement',
      description: 'Enhanced product quality through better monitoring'
    }
  ]

  const useCases = [
    {
      title: 'Equipment Monitoring',
      description: 'Monitor industrial equipment health and predict failures using synthetic IoT sensor data and machine learning.',
      features: ['Vibration analysis', 'Temperature monitoring', 'Pressure tracking', 'Performance degradation detection']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Optimize supply chain operations and inventory management using synthetic demand and logistics data.',
      features: ['Demand forecasting', 'Inventory optimization', 'Logistics planning', 'Supplier performance analysis']
    },
    {
      title: 'Process Automation',
      description: 'Develop automated manufacturing processes using synthetic production data and control system optimization.',
      features: ['Workflow automation', 'Resource allocation', 'Production scheduling', 'Efficiency optimization']
    },
    {
      title: 'Energy Management',
      description: 'Optimize energy consumption and reduce costs using synthetic energy usage data and efficiency models.',
      features: ['Energy consumption analysis', 'Peak load management', 'Efficiency optimization', 'Cost reduction strategies']
    }
  ]

  const metrics = [
    { label: 'Equipment Efficiency', value: '25%', description: 'Improvement in overall equipment effectiveness' },
    { label: 'Production Throughput', value: '18%', description: 'Increase in manufacturing throughput' },
    { label: 'Energy Savings', value: '30%', description: 'Reduction in energy consumption' },
    { label: 'Defect Rate', value: '40%', description: 'Decrease in product defects' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-800 text-sm font-medium mb-6"
            >
              <Factory className="h-4 w-4 mr-2" />
              Manufacturing
            </motion.div>
            
            <motion.h1 
              
              
              
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Synthetic Data for <span className="text-gradient">Manufacturing</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Revolutionize manufacturing operations with synthetic industrial data. Enable predictive maintenance, optimize production processes, and improve quality control while protecting proprietary operational data.
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
              Manufacturing AI Solutions
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive synthetic data solutions for every aspect of manufacturing operations
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

      {/* Performance Metrics */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Manufacturing Performance Impact
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Measurable operational improvements achieved by manufacturing companies using synthetic data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                
                
                
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-gray-600 font-segoe">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Operational Benefits
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Manufacturing companies achieve significant operational improvements with synthetic data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                
                
                
                className="bg-gray-50 rounded-xl p-8 shadow-lg text-center"
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Manufacturing Use Cases
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of manufacturing operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                
                
                
                className="bg-white rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 font-segoe mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Streamlined approach to implementing synthetic data in your manufacturing operations
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
                Process Analysis
              </h3>
              <p className="text-gray-600 font-segoe">
                Analyze your manufacturing processes and identify key data patterns for synthetic generation.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Data Synthesis
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate synthetic sensor data, production metrics, and operational patterns.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Model Development
              </h3>
              <p className="text-gray-600 font-segoe">
                Train predictive maintenance, quality control, and optimization models using synthetic data.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Production Integration
              </h3>
              <p className="text-gray-600 font-segoe">
                Deploy validated models to production systems and monitor operational improvements.
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
              Transform Your Manufacturing Operations
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join leading manufacturers using synthetic data to optimize operations, reduce costs, and improve efficiency. Start your digital transformation today.
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