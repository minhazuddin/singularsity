'use client'

import { motion } from 'framer-motion'
import { Heart, DollarSign, ShoppingCart, Factory, ArrowRight, Shield, Users, TrendingUp, Award } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function UseCases() {
  const useCases = [
    {
      name: 'Healthcare',
      href: '/use-cases/healthcare',
      icon: Heart,
      description: 'HIPAA-compliant medical data for research and AI development',
      features: [
        'Patient data anonymization',
        'Clinical trial simulation',
        'Medical imaging augmentation',
        'Drug discovery datasets'
      ],
      color: 'from-red-500 to-pink-500',
      compliance: 'HIPAA Compliant',
      stats: '95% privacy protection'
    },
    {
      name: 'Finance',
      href: '/use-cases/finance',
      icon: DollarSign,
      description: 'PCI DSS financial datasets for fraud detection and risk modeling',
      features: [
        'Transaction data synthesis',
        'Credit scoring models',
        'Anti-money laundering',
        'Regulatory stress testing'
      ],
      color: 'from-green-500 to-emerald-500',
      compliance: 'PCI DSS Certified',
      stats: '99.8% fraud detection accuracy'
    },
    {
      name: 'E-commerce',
      href: '/use-cases/ecommerce',
      icon: ShoppingCart,
      description: 'Customer behavior analytics and recommendation system data',
      features: [
        'Customer journey mapping',
        'Product recommendation testing',
        'A/B testing datasets',
        'Personalization algorithms'
      ],
      color: 'from-blue-500 to-cyan-500',
      compliance: 'GDPR Ready',
      stats: '40% increase in conversions'
    },
    {
      name: 'Manufacturing',
      href: '/use-cases/manufacturing',
      icon: Factory,
      description: 'IoT and operational data for predictive maintenance and quality control',
      features: [
        'Sensor data generation',
        'Equipment failure prediction',
        'Supply chain optimization',
        'Quality control testing'
      ],
      color: 'from-orange-500 to-red-500',
      compliance: 'ISO 27001',
      stats: '60% reduction in downtime'
    }
  ]

  const benefits = [
    {
      title: 'Accelerated Innovation',
      description: 'Unlock new possibilities with unlimited, privacy-safe data for experimentation and development.',
      percentage: 85,
      metric: 'faster time-to-market'
    },
    {
      title: 'Risk Mitigation',
      description: 'Eliminate privacy risks while maintaining full analytical capabilities for business insights.',
      percentage: 95,
      metric: 'reduction in compliance risk'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce data acquisition and storage costs while scaling your data operations efficiently.',
      percentage: 70,
      metric: 'cost savings on data ops'
    }
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
              Industry <span className="text-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Discover how leading organizations across industries leverage synthetic data to drive innovation, ensure compliance, and accelerate digital transformation.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Explore Use Cases
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                Industry Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <motion.div
                  key={useCase.name}
                  
                  
                  
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8">
                    {/* Compliance Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`bg-gradient-to-r ${useCase.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {useCase.compliance}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {useCase.name}
                    </h3>
                    
                    <p className="text-gray-600 font-segoe mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Stats */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${useCase.color} bg-opacity-10 text-sm font-medium`}>
                        <TrendingUp className="h-4 w-4 mr-2" />
                        {useCase.stats}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${useCase.color} rounded-full mr-3`}></div>
                          <span className="text-sm font-segoe">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={useCase.href}
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

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Organizations across industries achieve significant results with synthetic data solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                
                
                
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="relative w-36 h-36 mx-auto mb-8">
                  <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="4"
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
                    <span className="text-2xl font-bold text-gray-900 leading-none">{benefit.percentage}%</span>
                    <span className="text-xs text-gray-600 mt-1 text-center leading-tight max-w-20">{benefit.metric}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-segoe">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              See how organizations transform their data strategies with synthetic data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Privacy-First Approach
              </h3>
              <p className="text-gray-600 font-segoe">
                "Singularsity enabled us to accelerate AI development while maintaining the highest privacy standards required in healthcare."
              </p>
              <div className="mt-4 text-sm text-gray-500">
                - Chief Data Officer, Major Healthcare System
              </div>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Scalable Innovation
              </h3>
              <p className="text-gray-600 font-segoe">
                "The ability to generate unlimited test data transformed our development process and reduced time-to-market by 60%."
              </p>
              <div className="mt-4 text-sm text-gray-500">
                - VP of Engineering, Fintech Startup
              </div>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Compliance Excellence
              </h3>
              <p className="text-gray-600 font-segoe">
                "Singularsity's compliance-ready solutions helped us meet GDPR requirements while enabling data-driven insights."
              </p>
              <div className="mt-4 text-sm text-gray-500">
                - Data Protection Officer, E-commerce Platform
              </div>
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
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join industry leaders who are already leveraging synthetic data to drive innovation and maintain competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Industry Expert Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 