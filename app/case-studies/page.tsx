'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, Shield, CheckCircle, ArrowRight, Building, Heart, DollarSign, ShoppingCart, FileText } from 'lucide-react'
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-6"
            >
              <FileText className="h-4 w-4 mr-2" />
              Case Studies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-garnett leading-tight mb-4"
            >
              <span className="text-gray-900">Real-World</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Success Stories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Discover how leading organizations across industries have transformed their data strategies and achieved remarkable results with Singularsity's synthetic data platform.
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
                  Start Your Success Story
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
                >
                  Discuss Your Use Case
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
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
                          <h3 className="text-2xl font-bold font-garnett text-gray-900">
                            {study.company}
                          </h3>
                          <p className="text-sm text-gray-600 font-segoe">
                            {study.industry}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold font-garnett text-gray-900 mb-2">
                            Challenge
                          </h4>
                          <p className="text-gray-600 font-segoe">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold font-garnett text-gray-900 mb-2">
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
                      <h4 className="text-lg font-bold font-garnett text-gray-900 mb-6">
                        Results Achieved
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold font-garnett text-primary mb-2">
                            {study.metrics.accuracy}%
                          </div>
                          <div className="text-sm text-gray-600 font-segoe">
                            Accuracy Improvement
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold font-garnett text-primary mb-2">
                            {study.metrics.compliance}%
                          </div>
                          <div className="text-sm text-gray-600 font-segoe">
                            Compliance Rate
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold font-garnett text-primary mb-2">
                            {study.metrics.timeReduction}%
                          </div>
                          <div className="text-sm text-gray-600 font-segoe">
                            Time Reduction
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold font-garnett text-primary mb-2">
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
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[2rem] font-bold font-garnett text-gray-900 mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Success Across Industries
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 font-light leading-relaxed max-w-lg mx-auto"
            >
              Organizations across every major industry are achieving breakthrough results with synthetic data
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                
                
                
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-xl font-bold font-garnett text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <div className="text-3xl font-bold font-garnett text-primary mb-2">
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
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-garnett mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Ready to Write Your Success Story?
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
                Join the growing community of organizations transforming their data strategies with synthetic data. Start your journey today.
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
                Schedule Consultation
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
                <span>Proven Success</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Industry Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Measurable Results</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 