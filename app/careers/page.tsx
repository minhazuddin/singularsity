'use client'

import { motion } from 'framer-motion'
import { Users, Briefcase, MapPin, Heart, Zap, Globe, CheckCircle, ArrowRight, Star, TrendingUp } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Careers() {
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
              className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-800 text-sm font-medium mb-6"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Careers
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-garnett leading-tight mb-4"
            >
              <span className="text-gray-900">Join Our</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Mission</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Help us revolutionize data privacy and AI development. Join a team of passionate individuals building the future of synthetic data technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#open-positions"
                  className="group relative inline-flex items-center justify-center px-6 py-3 h-12 text-base font-semibold rounded-xl text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 active:shadow-none active:appearance-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  View Open Positions
                  <motion.div className="ml-2" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/about"
                  className="border-2 border-primary text-primary px-6 py-3 h-12 rounded-lg text-base font-semibold hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200 flex items-center justify-center"
                >
                  Learn Our Culture
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Why Join Singularsity?
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Be part of a mission-driven company that's changing how the world thinks about data privacy and AI development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-4">
                Impact at Scale
              </h3>
              <p className="text-gray-600 font-segoe">
                Your work directly enables breakthrough AI research and protects privacy for millions of people worldwide.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center p-8 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-4">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-600 font-segoe">
                Work with the latest advances in AI, machine learning, and privacy-preserving technologies.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center p-8 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-4">
                Amazing Culture
              </h3>
              <p className="text-gray-600 font-segoe">
                Join a collaborative, inclusive team that values innovation, learning, and work-life balance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Comprehensive Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              We invest in our team's success, well-being, and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h4 className="text-lg font-bold font-garnett text-gray-900 mb-3">
                Health & Wellness
              </h4>
              <ul className="space-y-2 text-gray-600 font-segoe">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Premium health, dental, vision insurance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Mental health support & counseling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Wellness stipend & gym membership
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h4 className="text-lg font-bold font-garnett text-gray-900 mb-3">
                Financial Benefits
              </h4>
              <ul className="space-y-2 text-gray-600 font-segoe">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Competitive salary & equity package
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  401(k) with company matching
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Annual performance bonuses
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h4 className="text-lg font-bold font-garnett text-gray-900 mb-3">
                Work-Life Balance
              </h4>
              <ul className="space-y-2 text-gray-600 font-segoe">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Unlimited PTO policy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Remote-first culture
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Flexible working hours
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h4 className="text-lg font-bold font-garnett text-gray-900 mb-3">
                Growth & Development
              </h4>
              <ul className="space-y-2 text-gray-600 font-segoe">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  $5,000 annual learning budget
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Conference & training attendance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Internal mentorship programs
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h4 className="text-lg font-bold font-garnett text-gray-900 mb-3">
                Perks & Amenities
              </h4>
              <ul className="space-y-2 text-gray-600 font-segoe">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Top-tier equipment & workspace
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Team retreats & social events
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Catered meals & snacks
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h4 className="text-lg font-bold font-garnett text-gray-900 mb-3">
                Family Support
              </h4>
              <ul className="space-y-2 text-gray-600 font-segoe">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Parental leave (16 weeks)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Childcare support stipend
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Family health coverage
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold font-garnett text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Join our growing team and help shape the future of synthetic data
            </p>
          </div>

          <div className="space-y-6">
            {/* Job Listing 1 */}
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-2">
                    Senior Machine Learning Engineer
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 font-segoe">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Mumbai, Maharashtra / Remote
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Engineering
                    </div>
                  </div>
                  <p className="text-gray-600 font-segoe">
                    Lead the development of state-of-the-art generative models for synthetic data creation. Work with cutting-edge ML techniques including GANs, VAEs, and diffusion models.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link 
                    href="/careers/apply?position=ml-engineer" 
                    className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Job Listing 2 */}
            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-2">
                    Privacy Engineer
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 font-segoe">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Mumbai, Maharashtra / Remote
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Security
                    </div>
                  </div>
                  <p className="text-gray-600 font-segoe">
                    Design and implement privacy-preserving algorithms and systems. Ensure our synthetic data meets the highest standards of privacy protection and regulatory compliance.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link 
                    href="/careers/apply?position=privacy-engineer" 
                    className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Job Listing 3 */}
            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-2">
                    Full Stack Developer
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 font-segoe">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Mumbai, Maharashtra / Remote
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Engineering
                    </div>
                  </div>
                  <p className="text-gray-600 font-segoe">
                    Build and maintain our web platform, APIs, and user interfaces. Work with React, Node.js, and cloud infrastructure to deliver scalable solutions.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link 
                    href="/careers/apply?position=fullstack-developer" 
                    className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Job Listing 4 */}
            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-garnett text-gray-900 mb-2">
                    Product Manager
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 font-segoe">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Mumbai, Maharashtra
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Product
                    </div>
                  </div>
                  <p className="text-gray-600 font-segoe">
                    Drive product strategy and roadmap for our synthetic data platform. Work closely with engineering, design, and customers to deliver impactful features.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link 
                    href="/careers/apply?position=product-manager" 
                    className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 font-segoe mb-4">
              Don't see a position that fits? We're always looking for exceptional talent.
            </p>
            <Link 
              href="mailto:careers@singularsity.com" 
              className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-200 inline-flex items-center"
            >
              Send Us Your Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-12 h-12 border border-white/15 rounded-full"
            animate={{
              y: [0, 30, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-20 h-20 border border-white/10 rounded-xl rotate-12"
            animate={{
              y: [0, -25, 0],
              rotate: [12, 45, 12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
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
                <Users className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-garnett mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
                  Ready to Change the World?
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
                Join us in building the future of privacy-preserving AI and synthetic data. Your next adventure starts here.
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
                <Link href="mailto:careers@singularsity.com" className="group bg-white text-primary px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center justify-center">
                  Start Your Journey
                  <motion.div className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#open-positions" className="group border-2 border-white/80 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  View Positions
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>Innovative Culture</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>Remote First</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>Impact Driven</span></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 