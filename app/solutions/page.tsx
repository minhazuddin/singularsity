'use client'

import { motion } from 'framer-motion'
import { Brain, TestTube, BarChart, Lock, ArrowRight, Target, Users, Zap, Shield } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Solutions() {
  const solutions = [
    {
      name: 'AI/ML Training',
      href: '/solutions/ai-ml-training',
      icon: Brain,
      description: 'Enhanced model training datasets for superior AI performance',
      features: [
        'Unlimited training data generation',
        'Balanced dataset creation',
        'Edge case scenario modeling',
        'Cross-validation datasets'
      ],
      color: 'from-purple-500 to-indigo-500',
      stats: '10x faster model training'
    },
    {
      name: 'Software Testing',
      href: '/solutions/software-testing',
      icon: TestTube,
      description: 'Safe development environments with production-like data',
      features: [
        'Realistic test data generation',
        'Privacy-safe dev environments',
        'Automated test case creation',
        'Performance testing datasets'
      ],
      color: 'from-green-500 to-teal-500',
      stats: '80% faster development cycles'
    },
    {
      name: 'Analytics & BI',
      href: '/solutions/analytics-bi',
      icon: BarChart,
      description: 'Business intelligence insights without privacy constraints',
      features: [
        'Dashboard development data',
        'Report automation testing',
        'Performance benchmarking',
        'Trend analysis datasets'
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: '95% cost reduction in BI testing'
    },
    {
      name: 'Privacy Compliance',
      href: '/solutions/privacy-compliance',
      icon: Lock,
      description: 'GDPR, HIPAA, and regulatory compliance solutions',
      features: [
        'Regulatory framework compliance',
        'Data anonymization techniques',
        'Audit trail generation',
        'Risk assessment tools'
      ],
      color: 'from-red-500 to-pink-500',
      stats: '100% compliance guarantee'
    }
  ]

  const industries = [
    { name: 'Healthcare', percentage: 95, description: 'HIPAA-compliant solutions' },
    { name: 'Financial Services', percentage: 92, description: 'PCI DSS certified' },
    { name: 'Technology', percentage: 98, description: 'DevOps integration' },
    { name: 'Government', percentage: 90, description: 'Security clearance ready' }
  ]

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
              Tailored <span className="text-gradient">Data Solutions</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Purpose-built solutions for specific business challenges. Accelerate innovation, ensure compliance, and unlock the full potential of your data strategy.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                Custom Solution
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <motion.div
                  key={solution.name}
                  
                  
                  
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8">
                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`bg-gradient-to-r ${solution.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {solution.stats}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {solution.name}
                    </h3>
                    
                    <p className="text-gray-600 font-segoe mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full mr-3`}></div>
                          <span className="text-sm font-segoe">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={solution.href}
                      className="inline-flex items-center text-primary hover:text-secondary font-medium group-hover:translate-x-2 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Success Rates */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Industry Success Rates
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Proven results across industries with measurable impact on business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                
                
                
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
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
                      strokeDasharray={`${industry.percentage * 2.51} 251`}
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
                    <span className="text-2xl font-bold text-gray-900">{industry.percentage}%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 font-segoe">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Why Our Solutions Work
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Built on proven methodologies and cutting-edge technology for maximum impact
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
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Purpose-Built
              </h3>
              <p className="text-gray-600 font-segoe">
                Each solution is specifically designed for your industry challenges with deep domain expertise and best practices.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Expert Support
              </h3>
              <p className="text-gray-600 font-segoe">
                Dedicated solution architects and domain experts guide your implementation from planning to production deployment.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Rapid Deployment
              </h3>
              <p className="text-gray-600 font-segoe">
                Pre-configured templates and automated workflows enable rapid deployment with immediate time-to-value realization.
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
              Ready to Implement Your Solution?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Let our experts help you choose and implement the perfect solution for your specific business needs.
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
                Consult Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 