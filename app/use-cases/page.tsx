'use client'

import { motion } from 'framer-motion'
import { Heart, DollarSign, ShoppingCart, Factory, ArrowRight, Shield, Users, TrendingUp, Award, CheckCircle, Target } from 'lucide-react'
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6"
            >
              <Target className="h-4 w-4 mr-2" />
              Use Cases
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-garnett leading-tight mb-4"
            >
              <span className="text-gray-900">Industry</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Use Cases</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Discover how leading organizations across industries leverage synthetic data to drive innovation, ensure compliance, and accelerate digital transformation.
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
                  Explore Use Cases
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact" 
                  className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
                >
                  Industry Consultation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="pt-8 pb-16 bg-white">
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
                    <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {useCase.name}
                    </h3>
                    
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6 leading-relaxed">
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
                          <span className="text-sm font-light">{feature}</span>
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
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Measurable Business Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
                <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Testimonials */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Trusted by Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
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
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Privacy-First Approach
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Scalable Innovation
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Compliance Excellence
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                "Singularsity's compliance-ready solutions helped us meet GDPR requirements while enabling data-driven insights."
              </p>
              <div className="mt-4 text-sm text-gray-500">
                - Data Protection Officer, E-commerce Platform
              </div>
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
                <Award className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-garnett mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Ready to Transform Your Industry?
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
                Join industry leaders who are already leveraging synthetic data to drive innovation and maintain competitive advantage.
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
                Start Your Journey
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
                Industry Expert Call
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
                <span>Industry Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Expert Support</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 