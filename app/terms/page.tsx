'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Terms() {
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
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-plus-jakarta-sans leading-tight mb-4"
            >
              <span className="text-gray-900">Terms of</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Service</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Please read these terms carefully before using our synthetic data platform.
            </motion.p>
            
            <motion.div 
              
              
              
              className="text-sm text-gray-500"
            >
              Last updated: December 15, 2024
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold font-plus-jakarta-sans text-gray-900 mb-2">
                Fair Use
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                Use our platform responsibly and in accordance with applicable laws.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold font-plus-jakarta-sans text-gray-900 mb-2">
                Data Protection
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                We maintain strict security and privacy standards for all data.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold font-plus-jakarta-sans text-gray-900 mb-2">
                Clear Terms
              </h3>
              <p className="text-gray-600 font-segoe text-sm">
                Transparent and understandable terms for using our services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            
            
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6">
                1. Acceptance of Terms
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                By accessing or using Singularsity's synthetic data platform and services (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                2. Description of Service
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                Singularsity provides a cloud-based platform for generating synthetic data using advanced machine learning techniques. Our Service includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Synthetic data generation tools and algorithms</li>
                <li>Data quality assurance and validation services</li>
                <li>API access and integration capabilities</li>
                <li>Privacy-preserving data processing</li>
                <li>Customer support and documentation</li>
              </ul>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                3. User Accounts
              </h2>
              
              <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                Account Creation
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                To use certain features of the Service, you must register for an account. You must provide accurate, complete, and current information during registration and keep your account information updated.
              </p>

              <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                Account Security
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Immediately notifying us of any unauthorized access</li>
                <li>Ensuring compliance with these Terms by all users of your account</li>
              </ul>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                4. Acceptable Use
              </h2>
              
              <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                Permitted Uses
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                You may use our Service for lawful business purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Training machine learning models</li>
                <li>Software testing and development</li>
                <li>Analytics and business intelligence</li>
                <li>Research and development activities</li>
                <li>Regulatory compliance testing</li>
              </ul>

              <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                Prohibited Uses
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Upload or process data you don't have rights to use</li>
                <li>Generate synthetic data for illegal or harmful purposes</li>
                <li>Attempt to reverse-engineer our algorithms or systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Access other users' accounts or data without permission</li>
                <li>Use the Service to compete with or develop competing products</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
              </ul>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                5. Data and Privacy
              </h2>
              
              <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                Your Data
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                You retain ownership of any data you upload to our Service ("Your Data"). By uploading Your Data, you grant us a limited license to process it solely for the purpose of providing the Service. We will:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Process Your Data only to generate synthetic datasets</li>
                <li>Implement appropriate security measures to protect Your Data</li>
                <li>Delete Your Data according to our retention policies</li>
                <li>Not use Your Data for any other purpose without consent</li>
              </ul>

              <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                Synthetic Data
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                The synthetic data we generate for you is your property. However, we may retain aggregated, anonymized insights about data patterns and usage to improve our Service, provided such insights cannot be used to identify you or reconstruct your original data.
              </p>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                6. Payment and Billing
              </h2>
              
              <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                Fees
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                Use of certain features of the Service requires payment of fees. Current fees are described on our pricing page. We reserve the right to change fees with 30 days' notice.
              </p>

              <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-4">
                Payment Terms
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Fees are charged in advance and are non-refundable</li>
                <li>Payment is due immediately upon invoice</li>
                <li>Late payments may result in service suspension</li>
                <li>You're responsible for all taxes related to your use of the Service</li>
              </ul>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                7. Intellectual Property
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                The Service and its original content, features, and functionality are owned by Singularsity and protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service.
              </p>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                8. Service Availability
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                We strive to maintain high availability but cannot guarantee uninterrupted access to the Service. We may:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Perform scheduled maintenance with advance notice</li>
                <li>Make emergency changes to ensure security and stability</li>
                <li>Temporarily suspend service for upgrades or repairs</li>
                <li>Modify or discontinue features with reasonable notice</li>
              </ul>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                9. Disclaimers and Limitations
              </h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <div className="flex">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">Important Legal Notice</h4>
                    <p className="text-yellow-700 text-sm">
                      The Service is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 font-segoe mb-6">
                To the maximum extent permitted by law, our liability for any damages arising from your use of the Service is limited to the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                10. Indemnification
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                You agree to indemnify and hold harmless Singularsity and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
              </p>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                11. Termination
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                Either party may terminate your access to the Service:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>At any time with or without cause</li>
                <li>Immediately if you breach these Terms</li>
                <li>Upon notice for non-payment of fees</li>
              </ul>

              <p className="text-gray-600 font-segoe mb-6">
                Upon termination, your right to access the Service ceases immediately. We will delete Your Data according to our data retention policies unless legally required to retain it.
              </p>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                12. Governing Law
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                These Terms are governed by the laws of India, without regard to conflict of law principles. Any disputes will be resolved in the courts of Mumbai, Maharashtra.
              </p>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                13. Changes to Terms
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                We may modify these Terms at any time by posting the updated terms on our website. Material changes will be notified via email or through the Service. Your continued use after such modifications constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold font-plus-jakarta-sans text-gray-900 mb-6 mt-12">
                14. Contact Information
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 font-segoe mb-2">
                  <strong>Email:</strong> legal@singularsity.com
                </p>
                <p className="text-gray-600 font-segoe mb-2">
                  <strong>Address:</strong> Osman Chambers, KKG Marg, Juhu, Santacruz West, Mumbai, Maharashtra - 400049
                </p>
                <p className="text-gray-600 font-segoe">
                  <strong>Phone:</strong> 9892305067
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