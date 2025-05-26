'use client'

import { motion } from 'framer-motion'
import { Database, Shield, CheckCircle, Code, ArrowRight, Zap, Brain, Globe, Lock } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      name: 'Data Generation',
      href: '/services/data-generation',
      icon: Database,
      description: 'AI-powered synthetic data creation using advanced generative models',
      features: [
        'Deep learning GANs and VAEs',
        'Multi-modal data support',
        'Real-time generation',
        'Statistical fidelity preservation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Data Masking',
      href: '/services/data-masking',
      icon: Shield,
      description: 'Advanced privacy protection techniques for sensitive information',
      features: [
        'Static and dynamic masking',
        'Format-preserving encryption',
        'Tokenization and substitution',
        'GDPR and HIPAA compliance'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Quality Assurance',
      href: '/services/quality-assurance',
      icon: CheckCircle,
      description: 'Comprehensive data validation and testing framework',
      features: [
        'Statistical fidelity testing',
        'Privacy audit framework',
        'ML model validation',
        'Automated quality metrics'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'API Integration',
      href: '/services/api-integration',
      icon: Code,
      description: 'Seamless platform integration with enterprise-grade APIs',
      features: [
        'RESTful API design',
        'Native SDKs for all languages',
        'Real-time streaming',
        'Global CDN and edge computing'
      ],
      color: 'from-orange-500 to-red-500'
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
              Comprehensive <span className="text-gradient">Data Services</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              End-to-end synthetic data solutions designed for enterprise needs. From generation to integration, we provide the complete toolkit for privacy-safe data operations.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                Talk to Expert
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.name}
                  
                  
                  
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 font-segoe mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                          <span className="text-sm font-segoe">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={service.href}
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

      {/* Why Choose Our Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Why Choose Singularsity Services
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Industry-leading capabilities backed by cutting-edge technology and enterprise-grade security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate millions of synthetic records in minutes with our optimized infrastructure and parallel processing capabilities.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Privacy First
              </h3>
              <p className="text-gray-600 font-segoe">
                Mathematical guarantees of privacy protection with differential privacy techniques and zero data retention policies.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Global Scale
              </h3>
              <p className="text-gray-600 font-segoe">
                Enterprise-grade infrastructure with global availability, auto-scaling, and 99.9% uptime guarantee for mission-critical applications.
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
              Ready to Transform Your Data Operations?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of organizations using Singularsity services to accelerate innovation while protecting privacy.
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