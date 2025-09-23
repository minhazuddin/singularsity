'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, Clock, CheckCircle } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-space-grotesk leading-tight mb-4"
            >
              <span className="text-gray-900">Privacy</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Policy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Your privacy is our priority. Learn how we collect, use, and protect your information.
            </motion.p>
            
            <motion.div 
              
              
              
              className="text-sm text-gray-500"
            >
              Last updated: December 15, 2024
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                Privacy by Design
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                Privacy protection is built into every aspect of our platform and processes.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                Data Minimization
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                We collect only the data necessary to provide our services effectively.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                Transparency
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                We provide clear information about how your data is used and protected.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            
            
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Personal Information
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                We collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and authentication information</li>
                <li>Payment and billing information</li>
                <li>Professional information such as job title and company</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Usage Information
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                We automatically collect information about how you use our services:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Log data including IP addresses, browser types, and access times</li>
                <li>Platform usage patterns and feature interactions</li>
                <li>API usage statistics and performance metrics</li>
                <li>Device and browser information</li>
              </ul>

              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Data You Upload
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                When you use our synthetic data generation services, you may upload data that we process to create synthetic datasets. We implement strict security measures to protect this data and use it solely for the purpose of generating synthetic data according to your specifications.
              </p>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                2. How We Use Your Information
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Providing and maintaining our synthetic data platform</li>
                <li>Processing your requests and generating synthetic datasets</li>
                <li>Communicating with you about your account and our services</li>
                <li>Improving our platform and developing new features</li>
                <li>Ensuring platform security and preventing fraud</li>
                <li>Complying with legal obligations and enforcing our terms</li>
                <li>Providing customer support and technical assistance</li>
              </ul>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                3. Information Sharing and Disclosure
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                We do not sell, rent, or share your personal information with third parties except in the following circumstances:
              </p>
              
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Service Providers
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                We may share information with trusted service providers who assist us in operating our platform, such as cloud infrastructure providers, payment processors, and analytics services. These providers are contractually obligated to protect your information.
              </p>

              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Legal Requirements
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                We may disclose information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety.
              </p>

              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Business Transfers
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to equivalent privacy protections.
              </p>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                4. Data Security
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Multi-factor authentication and access controls</li>
                <li>Regular security audits and penetration testing</li>
                <li>SOC 2 Type II compliance and ISO 27001 certification</li>
                <li>Secure data centers with physical security controls</li>
                <li>Employee security training and background checks</li>
              </ul>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                5. Your Rights and Choices
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>

              <p className="text-gray-600 font-segoe mb-6">
                To exercise these rights, please contact us at privacy@singularsity.com. We will respond to your request within 30 days.
              </p>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                6. Data Retention
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Account information is typically retained while your account is active and for a reasonable period thereafter. Data you upload for synthetic data generation is processed and then securely deleted according to our data retention schedule.
              </p>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                7. International Data Transfers
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                Our services are operated from the United States, and your information may be transferred to and processed in countries other than your own. We implement appropriate safeguards, including standard contractual clauses and adequacy decisions, to ensure your information receives equivalent protection.
              </p>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                8. Children's Privacy
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                Our services are not intended for individuals under the age of 16, and we do not knowingly collect personal information from children. If we learn that we have collected information from a child, we will take steps to delete it promptly.
              </p>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                9. Changes to This Policy
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will notify you of material changes by email or through our platform and update the "Last Updated" date at the top of this policy.
              </p>

              <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-6 mt-12">
                10. Contact Us
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 font-segoe mb-2">
                  <strong>Email:</strong> privacy@singularsity.com
                </p>
                <p className="text-gray-600 font-segoe mb-2">
                  <strong>Address:</strong> Osman Chambers, KKG Marg, Juhu, Santacruz West, Mumbai, Maharashtra - 400049
                </p>
                <p className="text-gray-600 font-segoe">
                  <strong>Data Protection Officer:</strong> dpo@singularsity.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 