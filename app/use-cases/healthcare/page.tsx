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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              
              
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Healthcare & <span className="text-gradient">Medical Research</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-4xl mx-auto"
            >
              Accelerate medical innovation while protecting patient privacy. Generate HIPAA-compliant synthetic health data for AI training, research collaboration, and healthcare system development.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Start Healthcare Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Healthcare Data Challenges
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
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
                <p className="text-gray-600 font-segoe mb-4">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Synthetic Data Solutions
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
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
                <p className="text-gray-600 font-segoe mb-6">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
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
              <p className="text-gray-600 font-segoe text-lg">
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
              <p className="text-gray-600 font-segoe text-lg">
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
              <p className="text-gray-600 font-segoe text-lg">
                HIPAA compliance maintained while enabling cross-institutional research
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Framework Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Regulatory Compliance
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
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
                <p className="text-gray-600 font-segoe text-sm mb-4">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            
            
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
                Case Study: Children's Hospital Research Institute
              </h2>
              <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
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
                    <p className="text-gray-600 font-segoe">Limited pediatric cancer data due to rare conditions and small patient populations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-600 font-segoe">HIPAA restrictions preventing data sharing between institutions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-600 font-segoe">AI models struggling with class imbalance and insufficient training data</p>
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
                    <p className="text-gray-600 font-segoe">Generated 10,000 synthetic pediatric oncology records preserving medical correlations</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3" />
                    <p className="text-gray-600 font-segoe">Enabled multi-hospital collaboration through privacy-safe data sharing</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3" />
                    <p className="text-gray-600 font-segoe">Improved early detection AI accuracy by 40% for rare pediatric cancers</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Transform Healthcare with Synthetic Data
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join leading healthcare organizations using synthetic data to accelerate medical innovation while protecting patient privacy. Start your healthcare data transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Start Healthcare Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Speak with Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 