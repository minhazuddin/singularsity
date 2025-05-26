'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Users, TrendingUp, Shield, CheckCircle, ArrowRight, Target, BarChart, Zap, Globe } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function Ecommerce() {
  const features = [
    {
      icon: Users,
      title: 'Customer Behavior Analysis',
      description: 'Generate synthetic customer journey data to understand shopping patterns and optimize user experience.'
    },
    {
      icon: Target,
      title: 'Personalization Engines',
      description: 'Create realistic customer preference data for building and testing recommendation systems.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Forecasting',
      description: 'Develop accurate sales prediction models using synthetic transaction and seasonal data.'
    },
    {
      icon: BarChart,
      title: 'A/B Testing',
      description: 'Generate diverse customer segments for comprehensive A/B testing without privacy concerns.'
    }
  ]

  const benefits = [
    {
      percentage: 85,
      title: 'Conversion Rate Improvement',
      description: 'Better personalization leads to higher conversions'
    },
    {
      percentage: 70,
      title: 'Customer Acquisition Cost Reduction',
      description: 'More targeted marketing with synthetic insights'
    },
    {
      percentage: 100,
      title: 'GDPR Compliance',
      description: 'Zero risk of customer data exposure'
    }
  ]

  const useCases = [
    {
      title: 'Recommendation Systems',
      description: 'Build sophisticated product recommendation engines using synthetic customer behavior and purchase history data.',
      features: ['Collaborative filtering models', 'Content-based recommendations', 'Hybrid recommendation systems', 'Real-time personalization']
    },
    {
      title: 'Inventory Management',
      description: 'Optimize inventory levels and supply chain operations using synthetic demand forecasting data.',
      features: ['Demand prediction models', 'Seasonal trend analysis', 'Stock optimization algorithms', 'Supply chain simulation']
    },
    {
      title: 'Customer Segmentation',
      description: 'Develop precise customer segments for targeted marketing using privacy-safe synthetic customer data.',
      features: ['Behavioral segmentation', 'Demographic clustering', 'Purchase pattern analysis', 'Lifecycle stage modeling']
    },
    {
      title: 'Fraud Detection',
      description: 'Train fraud detection systems using synthetic transaction data that includes fraudulent patterns.',
      features: ['Transaction anomaly detection', 'Payment fraud prevention', 'Account takeover protection', 'Risk scoring models']
    }
  ]

  const metrics = [
    { label: 'Revenue Increase', value: '25%', description: 'Average revenue lift from better personalization' },
    { label: 'Cart Abandonment Reduction', value: '30%', description: 'Fewer abandoned carts through optimized UX' },
    { label: 'Customer Lifetime Value', value: '+40%', description: 'Increased CLV through better targeting' },
    { label: 'Time to Market', value: '60%', description: 'Faster feature development and testing' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              E-commerce
            </motion.div>
            
            <motion.h1 
              
              
              
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Synthetic Data for <span className="text-gradient">E-commerce</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Transform your e-commerce operations with GDPR-compliant synthetic data. Build better recommendation systems, optimize customer experiences, and accelerate growth while protecting customer privacy.
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
              E-commerce AI Solutions
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive synthetic data solutions for every aspect of e-commerce operations
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
              E-commerce Performance Impact
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Measurable business improvements achieved by e-commerce companies using synthetic data
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
              Business Benefits
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              E-commerce businesses achieve significant improvements with synthetic data
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
              E-commerce Use Cases
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of e-commerce operations
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
              Streamlined approach to implementing synthetic data in your e-commerce operations
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
                Data Assessment
              </h3>
              <p className="text-gray-600 font-segoe">
                Analyze your current customer data and identify key patterns for synthetic generation.
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
                Generate privacy-safe synthetic customer and transaction data that maintains business value.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Model Training
              </h3>
              <p className="text-gray-600 font-segoe">
                Train recommendation systems, fraud detection, and personalization models using synthetic data.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Production Deployment
              </h3>
              <p className="text-gray-600 font-segoe">
                Deploy validated models to production and monitor performance improvements.
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
              Transform Your E-commerce Business
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join leading e-commerce companies using synthetic data to accelerate growth while protecting customer privacy. Start your transformation today.
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