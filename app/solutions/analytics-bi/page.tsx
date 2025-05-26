'use client'

import { motion } from 'framer-motion'
import { BarChart, TrendingUp, PieChart, LineChart, Database, Users, ArrowRight, Zap, Shield, Globe } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function AnalyticsBI() {
  const features = [
    {
      icon: BarChart,
      title: 'Dashboard Development',
      description: 'Create realistic datasets for building and testing business intelligence dashboards without exposing sensitive data.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Generate historical data patterns and trends for comprehensive business analytics and forecasting models.'
    },
    {
      icon: PieChart,
      title: 'Report Automation',
      description: 'Test automated reporting systems with synthetic data that maintains statistical accuracy and business logic.'
    },
    {
      icon: LineChart,
      title: 'Performance Benchmarking',
      description: 'Create benchmark datasets for comparing performance metrics and KPIs across different scenarios.'
    }
  ]

  const benefits = [
    {
      percentage: 95,
      title: 'Cost Reduction in BI Testing',
      description: 'Eliminate expensive data acquisition and preparation costs'
    },
    {
      percentage: 80,
      title: 'Faster Dashboard Development',
      description: 'Accelerate BI development with instant data availability'
    },
    {
      percentage: 100,
      title: 'Privacy Protection',
      description: 'Zero risk of exposing sensitive business data'
    }
  ]

  const useCases = [
    {
      title: 'Executive Dashboards',
      description: 'Build comprehensive executive dashboards with synthetic KPI data that reflects real business patterns.',
      features: ['Revenue and growth metrics', 'Customer acquisition data', 'Operational efficiency indicators', 'Market performance analytics']
    },
    {
      title: 'Customer Analytics',
      description: 'Develop customer segmentation and behavior analysis tools using privacy-safe synthetic customer data.',
      features: ['Customer lifetime value analysis', 'Churn prediction models', 'Segmentation algorithms', 'Behavioral pattern recognition']
    },
    {
      title: 'Financial Reporting',
      description: 'Create automated financial reporting systems with synthetic financial data for testing and validation.',
      features: ['P&L statement automation', 'Budget vs actual analysis', 'Cash flow forecasting', 'Financial ratio calculations']
    },
    {
      title: 'Operational Analytics',
      description: 'Build operational intelligence systems using synthetic data from various business processes.',
      features: ['Supply chain optimization', 'Inventory management analytics', 'Process efficiency metrics', 'Resource utilization tracking']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6"
            >
              <BarChart className="h-4 w-4 mr-2" />
              Analytics & BI
            </motion.div>
            
            <motion.h1 
              
              
              
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              <span className="text-gradient">Analytics & BI</span> Solutions
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Accelerate business intelligence development with synthetic data. Build dashboards, test analytics pipelines, and develop insights without privacy constraints or data access limitations.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Building Analytics
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
              BI & Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive synthetic data solutions for every aspect of business intelligence and analytics
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
              Proven BI Benefits
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Organizations achieve significant improvements in BI development and analytics capabilities
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
              Analytics Use Cases
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive solutions for every business intelligence and analytics need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                
                
                
                className="bg-gray-50 rounded-xl p-8"
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
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
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
              BI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Streamlined approach to implementing analytics and BI solutions with synthetic data
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
                Data Mapping
              </h3>
              <p className="text-gray-600 font-segoe">
                Map your existing data sources and identify analytics requirements for synthetic data generation.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Synthetic Generation
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate synthetic datasets that maintain statistical relationships and business logic.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                BI Development
              </h3>
              <p className="text-gray-600 font-segoe">
                Build dashboards, reports, and analytics tools using the synthetic data for testing and validation.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Production Deploy
              </h3>
              <p className="text-gray-600 font-segoe">
                Deploy validated BI solutions to production with confidence in their accuracy and performance.
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
              Transform Your Analytics Capabilities
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Unlock the full potential of your business intelligence with privacy-safe synthetic data. Start building better analytics today.
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
                Contact Analytics Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 