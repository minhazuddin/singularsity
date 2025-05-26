'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Tag, ArrowRight, Search, TrendingUp, Brain, Shield, Database } from 'lucide-react'
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              
              
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Insights & <span className="text-gradient">Innovation</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Explore the latest trends, research, and best practices in synthetic data, AI, and privacy-preserving technologies.
            </motion.p>
            
            <motion.div 
              
              
              
              className="max-w-lg mx-auto relative"
            >
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none text-gray-900 font-segoe"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
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
            <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-4">
              Featured Article
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
                
                <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-gray-900 mb-4">
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
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Latest Articles
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
                  
                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
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

      {/* Newsletter Signup */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Stay Informed
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Subscribe to our newsletter for the latest insights, research, and updates from the world of synthetic data.
            </p>
            <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-segoe focus:outline-none"
              />
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 