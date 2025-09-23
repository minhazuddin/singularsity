'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Users, BarChart, CheckCircle, ArrowRight, FileText, Brain, Database, Lock } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function Healthcare() {
  const challenges = [
    {
      title: "Patient Privacy Protection",
      description: "Strict HIPAA regulations make it difficult to share patient data for research and development",
      impact: "Limited innovation in medical AI and slower drug discovery"
    },
    {
      title: "Data Scarcity",
      description: "Rare diseases and specific conditions have limited real-world data available",
      impact: "Underdeveloped treatments and diagnostic tools for rare conditions"
    },
    {
      title: "Research Collaboration",
      description: "Hospitals and research institutions cannot easily share data across organizations",
      impact: "Fragmented research efforts and reduced statistical power"
    },
    {
      title: "Testing & Development",
      description: "Developers cannot access realistic patient data for testing healthcare systems",
      impact: "Delayed software releases and potential system failures"
    }
  ]

  const solutions = [
    {
      icon: Heart,
      title: "Medical AI Training",
      description: "Generate synthetic patient data to train diagnostic AI models, improve accuracy, and handle rare disease scenarios.",
      benefits: ["Balanced datasets", "Rare condition modeling", "Multi-institutional training"]
    },
    {
      icon: FileText,
      title: "EHR System Testing",
      description: "Create realistic electronic health records for testing healthcare software without exposing real patient information.",
      benefits: ["Safe development environments", "Comprehensive test scenarios", "Regulatory compliance"]
    },
    {
      icon: Brain,
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with synthetic clinical trial data and patient response modeling.",
      benefits: ["Faster clinical trials", "Better patient stratification", "Reduced development costs"]
    },
    {
      icon: Users,
      title: "Population Health Analytics",
      description: "Enable population health studies and epidemiological research with privacy-protected synthetic datasets.",
      benefits: ["Large-scale studies", "Cross-population analysis", "Public health insights"]
    }
  ]

  const compliance = [
    {
      framework: "HIPAA",
      description: "Full compliance with Health Insurance Portability and Accountability Act",
      features: ["PHI de-identification", "Safe Harbor method", "Expert determination"]
    },
    {
      framework: "FDA 21 CFR Part 11",
      description: "Electronic records and signatures compliance for pharmaceutical research",
      features: ["Audit trails", "Data integrity", "Electronic signatures"]
    },
    {
      framework: "GDPR",
      description: "European data protection regulation compliance for global healthcare",
      features: ["Data minimization", "Purpose limitation", "Consent management"]
    },
    {
      framework: "ISO 27001",
      description: "Information security management for healthcare data",
      features: ["Security controls", "Risk management", "Continuous monitoring"]
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-6"
            >
              <Heart className="h-4 w-4 mr-2" />
              Healthcare
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-space-grotesk leading-tight mb-4"
            >
              <span className="text-gray-900">Healthcare &</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Medical Research</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Accelerate medical innovation while protecting patient privacy. Generate HIPAA-compliant synthetic health data for AI training, research collaboration, and healthcare system development.
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
                  Start Healthcare Demo
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/demo" 
                  className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Healthcare Data Challenges
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Understanding the unique data privacy and accessibility challenges in healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div 
                key={challenge.title}
                
                
                
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
                  {challenge.description}
                </p>
                <div className="bg-red-50 border-l-4 border-red-200 p-4 rounded">
                  <p className="text-red-700 font-medium text-sm">
                    Impact: {challenge.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Synthetic Data Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Comprehensive synthetic data applications for healthcare innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div 
                key={solution.title}
                
                
                
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Real-World Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Quantifiable results from healthcare organizations using synthetic data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                85%
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                Improvement in rare disease AI model accuracy with synthetic data augmentation
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                60%
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                Faster clinical trial design with synthetic patient population modeling
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                100%
              </h3>
              <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                HIPAA compliance maintained while enabling cross-institutional research
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Framework Section */}
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Regulatory Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Comprehensive compliance with healthcare data protection standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, index) => (
              <motion.div 
                key={item.framework}
                
                
                
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
                  {item.framework}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            
            
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                  Case Study: Children's Hospital Research Institute
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
                How synthetic data enabled breakthrough pediatric cancer research
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6">
                  The Challenge
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">Limited pediatric cancer data due to rare conditions and small patient populations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">HIPAA restrictions preventing data sharing between institutions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">AI models struggling with class imbalance and insufficient training data</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6">
                  The Solution
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3" />
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">Generated 10,000 synthetic pediatric oncology records preserving medical correlations</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3" />
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">Enabled multi-hospital collaboration through privacy-safe data sharing</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3" />
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">Improved early detection AI accuracy by 40% for rare pediatric cancers</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
                <Heart className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-space-grotesk mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Transform Healthcare with Synthetic Data
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
                Join leading healthcare organizations using synthetic data to accelerate medical innovation while protecting patient privacy. Start your healthcare data transformation today.
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
                Start Healthcare Trial
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
                Speak with Expert
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
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Patient Privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Clinical Grade</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 