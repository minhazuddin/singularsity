'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Tag, ArrowRight, Search, TrendingUp, Brain, Shield, Database, FileText, CheckCircle, Newspaper } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  const featuredPost = {
    title: "The Future of Privacy-Preserving AI: How Synthetic Data is Revolutionizing Machine Learning",
    excerpt: "Explore how synthetic data is transforming the AI landscape, enabling breakthrough research while maintaining strict privacy standards. Learn about the latest advances in generative models and their real-world applications.",
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    category: "AI & Machine Learning",
    readTime: "8 min read",
    image: "/blog/featured-ai-future.jpg"
  }

  const blogPosts = [
    {
      title: "GDPR Compliance Made Simple with Synthetic Data",
      excerpt: "A comprehensive guide to using synthetic data for GDPR compliance, eliminating privacy risks while maintaining analytical utility.",
      author: "Michael Rodriguez",
      date: "December 12, 2024",
      category: "Privacy & Compliance",
      readTime: "6 min read",
      image: "/blog/gdpr-compliance.jpg"
    },
    {
      title: "Enhancing Fraud Detection with High-Quality Synthetic Datasets",
      excerpt: "Learn how financial institutions are using synthetic data to improve fraud detection models without exposing sensitive customer information.",
      author: "Dr. Jennifer Park",
      date: "December 10, 2024",
      category: "Finance & Banking",
      readTime: "7 min read",
      image: "/blog/fraud-detection.jpg"
    },
    {
      title: "Breaking Down Data Silos: Cross-Industry Data Sharing with Synthetic Data",
      excerpt: "Discover how synthetic data enables secure collaboration between organizations, unlocking new insights while protecting proprietary information.",
      author: "Alex Thompson",
      date: "December 8, 2024",
      category: "Data Strategy",
      readTime: "5 min read",
      image: "/blog/data-silos.jpg"
    },
    {
      title: "The Science Behind GAN-Based Synthetic Data Generation",
      excerpt: "Deep dive into the technical foundations of Generative Adversarial Networks and their role in creating high-fidelity synthetic datasets.",
      author: "Dr. Robert Kim",
      date: "December 5, 2024",
      category: "Technical Deep Dive",
      readTime: "12 min read",
      image: "/blog/gan-science.jpg"
    },
    {
      title: "Healthcare Innovation: Accelerating Medical Research with Synthetic Patient Data",
      excerpt: "Explore how synthetic patient data is enabling breakthrough medical research while maintaining HIPAA compliance and patient privacy.",
      author: "Dr. Lisa Zhang",
      date: "December 3, 2024",
      category: "Healthcare",
      readTime: "9 min read",
      image: "/blog/healthcare-innovation.jpg"
    },
    {
      title: "Benchmarking Synthetic Data Quality: Metrics That Matter",
      excerpt: "Learn about the key metrics and evaluation methods for assessing synthetic data quality, utility, and privacy preservation.",
      author: "David Wilson",
      date: "November 28, 2024",
      category: "Quality Assurance",
      readTime: "10 min read",
      image: "/blog/quality-metrics.jpg"
    }
  ]

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Privacy & Compliance",
    "Technical Deep Dive",
    "Healthcare",
    "Finance & Banking",
    "Data Strategy",
    "Quality Assurance"
  ]

  return (
    <div className="min-h-screen bg-white">
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6"
            >
              <Newspaper className="h-4 w-4 mr-2" />
              Blog
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-plus-jakarta-sans leading-tight mb-4"
            >
              <span className="text-gray-900">Insights &</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Explore the latest trends, research, and best practices in synthetic data, AI, and privacy-preserving technologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-3 h-12 text-base font-semibold rounded-xl text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 active:shadow-none active:appearance-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  Get Started
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#featured"
                  className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
                >
                  Explore Articles
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                
                
                
                className={`px-4 py-2 rounded-lg font-medium font-segoe transition-all duration-200 ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Featured Article
              </span>
            </h2>
          </div>
          
          <motion.div 
            
            
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Brain className="h-24 w-24 text-white opacity-80" />
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 font-segoe mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>
                  
                  <Link
                    href="/blog/future-privacy-preserving-ai"
                    className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-plus-jakarta-sans text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Latest Articles
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Stay up-to-date with the latest developments in synthetic data and AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                
                
                
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {post.category === "Privacy & Compliance" && <Shield className="h-12 w-12 text-gray-500" />}
                  {post.category === "Finance & Banking" && <TrendingUp className="h-12 w-12 text-gray-500" />}
                  {post.category === "Data Strategy" && <Database className="h-12 w-12 text-gray-500" />}
                  {post.category === "Technical Deep Dive" && <Brain className="h-12 w-12 text-gray-500" />}
                  {post.category === "Healthcare" && <Brain className="h-12 w-12 text-gray-500" />}
                  {post.category === "Quality Assurance" && <TrendingUp className="h-12 w-12 text-gray-500" />}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 font-segoe mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                      className="text-primary hover:text-secondary transition-colors duration-200 font-medium text-sm inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-all duration-200 inline-flex items-center">
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
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
                <FileText className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-plus-jakarta-sans mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
                  Stay Informed
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
                Subscribe to our newsletter for the latest insights, research, and updates from the world of synthetic data.
              </p>
            </motion.div>

            {/* Newsletter Signup Form */}
            <motion.div
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-lg text-gray-900 font-segoe focus:outline-none active:border-none active:outline-none active:ring-0 active:shadow-none active:appearance-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center justify-center whitespace-nowrap">
                    Subscribe
                    <motion.div className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </button>
                </motion.div>
              </div>
              <motion.p
                className="text-sm opacity-75 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                No spam, unsubscribe at any time. We respect your privacy.
              </motion.p>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>Weekly Updates</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>Expert Insights</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>Unsubscribe Anytime</span></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 