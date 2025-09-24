'use client'

import { motion } from 'framer-motion'
import { HelpCircle, Book, MessageSquare, Video, Search, ArrowRight, Clock, CheckCircle, FileText, Code } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Support() {
  const faqs = [
    {
      question: "What is synthetic data and how does it work?",
      answer: "Synthetic data is artificially generated data that mimics the statistical properties and patterns of real data without containing any actual personal information. It's created using advanced AI models like GANs, VAEs, and other machine learning techniques that learn the underlying structure of your original dataset and generate new, statistically similar records."
    },
    {
      question: "How do you ensure the privacy of synthetic data?",
      answer: "Our synthetic data generation process employs multiple privacy-preserving techniques including differential privacy, k-anonymity, and advanced generative models that prevent any possibility of reverse-engineering original records. We conduct rigorous privacy audits and testing to ensure zero re-identification risk."
    },
    {
      question: "What data formats do you support?",
      answer: "We support a wide range of data formats including CSV, JSON, Parquet, database tables (MySQL, PostgreSQL, etc.), and cloud storage formats. Our platform can handle structured, semi-structured, and some unstructured data types across various industries and use cases."
    },
    {
      question: "How accurate is synthetic data compared to real data?",
      answer: "Our synthetic data maintains 95-99% statistical similarity to the original dataset, depending on complexity and requirements. We measure accuracy through various metrics including correlation preservation, distribution matching, and utility preservation for machine learning tasks."
    },
    {
      question: "Can I integrate Singularsity with my existing systems?",
      answer: "Yes! We provide comprehensive APIs, SDKs for popular programming languages (Python, JavaScript, Java, Go), and pre-built integrations with popular platforms like Snowflake, Databricks, and cloud services. Our technical team can assist with custom integrations."
    },
    {
      question: "What are the typical use cases for synthetic data?",
      answer: "Common use cases include ML model training, software testing, analytics and BI, regulatory compliance (GDPR, HIPAA), data sharing between organizations, and research. Industries using synthetic data include healthcare, finance, e-commerce, manufacturing, and technology."
    }
  ]

  const supportResources = [
    {
      title: "API Documentation",
      description: "Comprehensive guides for integrating our APIs",
      icon: Code,
      link: "/docs/api",
      category: "Technical"
    },
    {
      title: "Getting Started Guide",
      description: "Step-by-step tutorial for new users",
      icon: Book,
      link: "/docs/getting-started",
      category: "Guides"
    },
    {
      title: "Video Tutorials",
      description: "Learn through visual demonstrations",
      icon: Video,
      link: "/docs/tutorials",
      category: "Learning"
    },
    {
      title: "Best Practices",
      description: "Tips for optimal synthetic data generation",
      icon: FileText,
      link: "/docs/best-practices",
      category: "Guides"
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-cyan-100 rounded-full text-cyan-800 text-sm font-medium mb-6"
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              Support
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-garnett leading-tight mb-4"
            >
              <span className="text-gray-900">Help</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Center</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Find answers, guides, and resources to help you get the most out of Singularsity's synthetic data platform.
            </motion.p>
            
            <motion.div 
              
              
              
              className="max-w-lg mx-auto relative"
            >
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none text-gray-900 font-light"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Support Options */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Live Chat Support
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Get instant help from our support team during business hours.
              </p>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center">
                Start Chat
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Documentation
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Browse our comprehensive guides and API references.
              </p>
              <Link 
                href="/docs" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center"
              >
                View Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Support Hours
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Monday - Friday: 9AM - 6PM PST<br />
                Response time: &lt; 2 hours
              </p>
              <Link 
                href="/contact" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Support Resources
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Everything you need to successfully implement and use synthetic data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportResources.map((resource, index) => (
              <motion.div
                key={index}
                
                
                
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:gradient-bg group-hover:text-white transition-colors duration-300">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-garnett text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-600 font-light text-sm mb-4">
                  {resource.description}
                </p>
                <Link 
                  href={resource.link}
                  className="text-primary hover:text-secondary transition-colors duration-200 font-medium text-sm inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Common questions about synthetic data and our platform
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                
                
                
                className="bg-gray-50 rounded-xl p-8 hover:shadow-sm transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-garnett text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              Can't find what you're looking for?
            </p>
            <Link 
              href="/contact" 
              className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 inline-flex items-center"
            >
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community & Learning */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Community & Learning
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Connect with other users and expand your knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Community Forum
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Connect with other users, share experiences, and get help from the community.
              </p>
              <Link 
                href="/community" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center"
              >
                Join Forum
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Webinars
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Join live sessions with our experts to learn about synthetic data best practices.
              </p>
              <Link 
                href="/webinars" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center"
              >
                View Schedule
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Knowledge Base
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Access our extensive library of articles, tutorials, and technical guides.
              </p>
              <Link 
                href="/knowledge-base" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center"
              >
                Browse Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Status */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-2">
                System Status
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                All systems operational and running smoothly
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">API Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Data Generation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Platform</span>
              </div>
              <Link 
                href="/status" 
                className="ml-4 text-primary hover:text-secondary transition-colors duration-200 font-medium text-sm"
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 