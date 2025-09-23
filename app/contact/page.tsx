'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building, ArrowRight, CheckCircle } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Contact() {
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-space-grotesk leading-tight mb-4"
            >
              <span className="text-gray-900">Get in</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Ready to transform your data strategy with synthetic data? Our team of experts is here to help you get started.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50"
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
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                <motion.div 
                  className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
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
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
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
                </motion.div>

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
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Our Locations
              </span>
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
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Talk to Our Experts
              </span>
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
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center"
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
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center"
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
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 transition-all duration-200 inline-flex items-center"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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
                <MessageSquare className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-space-grotesk mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Ready to Get Started?
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
                Transform your data strategy with synthetic data. Schedule a personalized demo and see how we can help your organization.
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
                href="/demo" 
                className="group bg-white text-primary px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center justify-center"
              >
                Schedule Demo
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
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
                <span>Instant Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Custom Solutions</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 