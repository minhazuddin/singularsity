'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building, ArrowRight } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              
              
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Ready to transform your data strategy with synthetic data? Our team of experts is here to help you get started.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 lg:p-12"
            >
              <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 font-segoe mb-8">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="john.doe@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="demo">Request Demo</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full gradient-bg text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 font-segoe mb-8">
                  Reach out to us directly through any of these channels. We're here to help with your synthetic data needs.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600 font-segoe mb-2">
                      Get in touch via email for any inquiries
                    </p>
                    <a href="mailto:contact@singularsity.com" className="text-primary hover:text-secondary transition-colors duration-200 font-medium">
                      contact@singularsity.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <p className="text-gray-600 font-segoe mb-2">
                      Speak with our team directly
                    </p>
                    <a href="tel:+919892305067" className="text-primary hover:text-secondary transition-colors duration-200 font-medium">
                      9892305067
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 font-segoe">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                  Quick Actions
                </h3>
                
                <Link 
                  href="/demo" 
                  className="block p-4 gradient-bg text-white rounded-lg hover:opacity-90 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold font-space-grotesk text-white mb-1">
                        Schedule a Demo
                      </h4>
                      <p className="text-white text-sm opacity-90">
                        See our platform in action
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </Link>

                <Link 
                  href="/pricing" 
                  className="block p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold font-space-grotesk text-gray-900 mb-1">
                        View Pricing
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Explore our pricing plans
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Visit us at our offices or connect with our global team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mumbai HQ */}
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                Mumbai HQ
              </h3>
              <div className="text-gray-600 font-segoe space-y-2">
                <p>Osman Chambers, KKG Marg</p>
                <p>Juhu, Santacruz West</p>
                <p>Mumbai, Maharashtra - 400049</p>
                <p>India</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Headquarters</p>
              </div>
            </motion.div>

            {/* New York Office */}
            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                New York Office
              </h3>
              <div className="text-gray-600 font-segoe space-y-2">
                <p>456 Tech Avenue</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">East Coast Operations</p>
              </div>
            </motion.div>

            {/* London Office */}
            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                London Office
              </h3>
              <div className="text-gray-600 font-segoe space-y-2">
                <p>789 Data Street</p>
                <p>London EC2A 4NE</p>
                <p>United Kingdom</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">European Operations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Talk to Our Experts
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Get specialized support from our team of synthetic data experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sales Team */}
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Sales Team
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Learn about our solutions and find the right plan for your organization.
              </p>
              <a 
                href="mailto:sales@singularsity.com" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 inline-flex items-center"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* Technical Support */}
            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Technical Support
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Get help with implementation, integration, and technical questions.
              </p>
              <a 
                href="mailto:support@singularsity.com" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 inline-flex items-center"
              >
                Get Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* Partnerships */}
            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Partnerships
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Explore partnership opportunities and integration possibilities.
              </p>
              <a 
                href="mailto:partnerships@singularsity.com" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 inline-flex items-center"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Transform your data strategy with synthetic data. Schedule a personalized demo and see how we can help your organization.
            </p>
            <Link 
              href="/demo" 
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 