'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, Shield, CheckCircle, ArrowRight, Building, Heart, DollarSign, ShoppingCart } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'Global Healthcare Network',
      industry: 'Healthcare',
      icon: Heart,
      challenge: 'Needed to train AI models for patient diagnosis while maintaining HIPAA compliance and protecting sensitive medical data.',
      solution: 'Implemented synthetic patient data generation for training medical AI systems without exposing real patient information.',
      results: [
        '95% improvement in model accuracy',
        '100% HIPAA compliance maintained',
        '6 months faster time-to-market',
        '$2.3M saved in data acquisition costs'
      ],
      metrics: {
        accuracy: 95,
        compliance: 100,
        timeReduction: 75,
        costSavings: 85
      },
      quote: "Singularsity enabled us to accelerate our AI development while maintaining the highest privacy standards required in healthcare.",
      author: "Dr. Sarah Chen, Chief Data Officer"
    },
    {
      company: 'Premier Financial Services',
      industry: 'Financial Services',
      icon: DollarSign,
      challenge: 'Required realistic transaction data for fraud detection model training while meeting strict PCI DSS requirements.',
      solution: 'Generated synthetic financial transaction data that preserved statistical patterns while eliminating customer privacy risks.',
      results: [
        '40% improvement in fraud detection',
        '99.8% reduction in false positives',
        '100% PCI DSS compliance',
        '60% faster model deployment'
      ],
      metrics: {
        accuracy: 92,
        compliance: 100,
        timeReduction: 60,
        costSavings: 70
      },
      quote: "The synthetic data quality exceeded our expectations, enabling us to build more robust fraud detection systems.",
      author: "Michael Rodriguez, VP of Risk Management"
    },
    {
      company: 'E-Commerce Giant',
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      challenge: 'Needed customer behavior data for recommendation systems without compromising user privacy under GDPR.',
      solution: 'Created synthetic customer journey and purchase data that maintained behavioral patterns while ensuring privacy.',
      results: [
        '35% increase in recommendation accuracy',
        '50% improvement in conversion rates',
        '100% GDPR compliance',
        '80% reduction in data processing costs'
      ],
      metrics: {
        accuracy: 88,
        compliance: 100,
        timeReduction: 45,
        costSavings: 80
      },
      quote: "Synthetic data allowed us to innovate freely while respecting customer privacy - a game changer for our business.",
      author: "Lisa Park, Head of Data Science"
    },
    {
      company: 'Manufacturing Corp',
      industry: 'Manufacturing',
      icon: Building,
      challenge: 'Required IoT sensor data for predictive maintenance models but faced data scarcity and equipment downtime constraints.',
      solution: 'Generated synthetic sensor data and failure scenarios to train predictive maintenance algorithms effectively.',
      results: [
        '65% reduction in unplanned downtime',
        '45% improvement in maintenance efficiency',
        '90% accuracy in failure prediction',
        '$5.2M annual cost savings'
      ],
      metrics: {
        accuracy: 90,
        compliance: 95,
        timeReduction: 65,
        costSavings: 75
      },
      quote: "Synthetic data helped us achieve predictive maintenance capabilities we never thought possible with our limited real data.",
      author: "James Wilson, Operations Director"
    }
  ]

  const industries = [
    { name: 'Healthcare', count: 15, growth: '+45%' },
    { name: 'Financial Services', count: 22, growth: '+38%' },
    { name: 'Technology', count: 18, growth: '+52%' },
    { name: 'Manufacturing', count: 12, growth: '+41%' },
    { name: 'Retail', count: 14, growth: '+35%' },
    { name: 'Government', count: 8, growth: '+28%' }
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
              <Award className="h-4 w-4 mr-2" />
              Success Stories
            </motion.div>
            
            <motion.h1 
              
              
              
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Real-World <span className="text-gradient">Success Stories</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Discover how leading organizations across industries have transformed their data strategies and achieved remarkable results with Singularsity's synthetic data platform.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                Discuss Your Use Case
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon
              return (
                <motion.div
                  key={study.company}
                  
                  
                  
                  className="bg-gray-50 rounded-2xl p-8 lg:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-space-grotesk text-gray-900">
                            {study.company}
                          </h3>
                          <p className="text-sm text-gray-600 font-segoe">
                            {study.industry}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                            Challenge
                          </h4>
                          <p className="text-gray-600 font-segoe">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                            Solution
                          </h4>
                          <p className="text-gray-600 font-segoe">
                            {study.solution}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-6">
                          <blockquote className="text-gray-700 font-segoe italic mb-4">
                            "{study.quote}"
                          </blockquote>
                          <cite className="text-sm text-gray-600 font-segoe">
                            — {study.author}
                          </cite>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-6">
                        Results Achieved
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">
                            {study.metrics.accuracy}%
                          </div>
                          <div className="text-sm text-gray-600 font-segoe">
                            Accuracy Improvement
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">
                            {study.metrics.compliance}%
                          </div>
                          <div className="text-sm text-gray-600 font-segoe">
                            Compliance Rate
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">
                            {study.metrics.timeReduction}%
                          </div>
                          <div className="text-sm text-gray-600 font-segoe">
                            Time Reduction
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">
                            {study.metrics.costSavings}%
                          </div>
                          <div className="text-sm text-gray-600 font-segoe">
                            Cost Savings
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 text-primary mr-3" />
                            <span className="font-segoe">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Organizations across every major industry are achieving breakthrough results with synthetic data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                
                
                
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">
                  {industry.count}
                </div>
                <p className="text-sm text-gray-600 font-segoe mb-2">
                  Active Projects
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-green-800 text-sm font-medium">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {industry.growth}
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join the growing community of organizations transforming their data strategies with synthetic data. Start your journey today.
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
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 