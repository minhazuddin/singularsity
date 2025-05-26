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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              
              
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Join Our <span className="text-gradient">Mission</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Help us revolutionize data privacy and AI development. Join a team of passionate individuals building the future of synthetic data technology.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#open-positions" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#culture" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-all duration-200"
              >
                Learn Our Culture
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Why Join Singularsity?
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
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
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
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
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
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
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
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Comprehensive Benefits
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
              <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
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
              <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
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
              <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
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
              <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
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
              <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
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
              <h4 className="text-lg font-bold font-space-grotesk text-gray-900 mb-3">
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
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Open Positions
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
                  <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
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
                  <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
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
                  <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
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
                  <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
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
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Ready to Change the World?
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Join us in building the future of privacy-preserving AI and synthetic data. Your next adventure starts here.
            </p>
            <Link 
              href="mailto:careers@singularsity.com" 
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 