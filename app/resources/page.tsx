'use client'

import { motion } from 'framer-motion'
import { FileText, HelpCircle, Mail, BookOpen, ArrowRight, Lightbulb, Users, Download, Video, Code } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Resources() {
  const resources = [
    {
      name: 'Support Center',
      href: '/support',
      icon: HelpCircle,
      description: 'Comprehensive help documentation and troubleshooting guides',
      features: [
        'Step-by-step tutorials',
        'FAQ and troubleshooting',
        'Video guides and demos',
        '24/7 technical support'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: FileText,
      description: 'Real-world success stories and implementation examples',
      features: [
        'Industry-specific examples',
        'ROI and performance metrics',
        'Implementation strategies',
        'Best practices and lessons learned'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: BookOpen,
      description: 'Complete API documentation and developer resources',
      features: [
        'API reference and examples',
        'SDK documentation',
        'Integration guides',
        'Code samples and snippets'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Contact Us',
      href: '/contact',
      icon: Mail,
      description: 'Get in touch with our expert team for personalized assistance',
      features: [
        'Expert consultation',
        'Custom solution design',
        'Enterprise support',
        'Partnership opportunities'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const additionalResources = [
    {
      name: 'Developer Tools',
      icon: Code,
      description: 'SDKs, CLI tools, and development resources',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Video Tutorials',
      icon: Video,
      description: 'Step-by-step video guides and webinars',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Downloads',
      icon: Download,
      description: 'White papers, reports, and technical resources',
      color: 'from-teal-500 to-cyan-500'
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Knowledge <span className="text-gradient">Resources</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Everything you need to succeed with Singularsity. From comprehensive documentation to expert support, we provide the resources to maximize your synthetic data initiatives.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/support" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Get Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/docs" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                View Documentation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <motion.div
                  key={resource.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {resource.name}
                    </h3>
                    
                    <p className="text-gray-600 font-segoe mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {resource.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${resource.color} rounded-full mr-3`}></div>
                          <span className="text-sm font-segoe">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={resource.href}
                      className="inline-flex items-center text-primary hover:text-secondary font-medium group-hover:translate-x-2 transition-all duration-300"
                    >
                      Explore Resource
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Explore more tools and resources to enhance your synthetic data journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalResources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <motion.div 
                  key={resource.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {resource.name}
                  </h3>
                  <p className="text-gray-600 font-segoe mb-6">
                    {resource.description}
                  </p>
                  <div className="text-primary hover:text-secondary font-medium cursor-pointer group-hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                    Coming Soon
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Our Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Why Choose Singularsity Resources
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Comprehensive, expert-curated resources designed to accelerate your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Expert Knowledge
              </h3>
              <p className="text-gray-600 font-segoe">
                Resources created by industry experts with deep knowledge of synthetic data generation and privacy-preserving technologies.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Community Driven
              </h3>
              <p className="text-gray-600 font-segoe">
                Learn from real-world implementations and connect with a community of practitioners sharing best practices and insights.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Always Updated
              </h3>
              <p className="text-gray-600 font-segoe">
                Stay current with the latest features, best practices, and industry developments through continuously updated documentation and guides.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold font-space-grotesk text-white mb-6">
              Need Personalized Help?
            </h2>
            <p className="text-xl text-white/90 font-segoe mb-8 max-w-3xl mx-auto">
              Our expert team is ready to help you implement the perfect synthetic data solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
              >
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/support" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Browse Support Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 