'use client'

import { motion } from 'framer-motion'
import { Cookie, Settings, Eye, Shield, ToggleLeft, ToggleRight } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { useState } from 'react'

export default function Cookies() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)
  const [marketingEnabled, setMarketingEnabled] = useState(false)
  const [functionalEnabled, setFunctionalEnabled] = useState(true)

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off. They enable core functionality such as security, network management, and accessibility.",
      examples: ["Authentication tokens", "Session management", "Security preferences", "Load balancing"],
      required: true,
      enabled: true
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers.",
      examples: ["Language preferences", "Region selection", "User interface customization", "Form data retention"],
      required: false,
      enabled: functionalEnabled,
      toggle: () => setFunctionalEnabled(!functionalEnabled)
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Page views", "Traffic sources", "User behavior patterns", "Performance metrics"],
      required: false,
      enabled: analyticsEnabled,
      toggle: () => setAnalyticsEnabled(!analyticsEnabled)
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements for individual users.",
      examples: ["Ad targeting", "Campaign effectiveness", "Social media integration", "Third-party advertising"],
      required: false,
      enabled: marketingEnabled,
      toggle: () => setMarketingEnabled(!marketingEnabled)
    }
  ]

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
              className="text-xl lg:text-3xl xl:text-4xl font-bold font-garnett leading-tight mb-4"
            >
              <span className="text-gray-900">Cookie</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Policy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Learn about how we use cookies to improve your experience and protect your privacy.
            </motion.p>
            
            <motion.div 
              
              
              
              className="text-sm text-gray-500"
            >
              Last updated: December 15, 2024
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="py-16 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            
            
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center mb-6">
              <Settings className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold font-garnett text-gray-900">
                Cookie Preferences
              </h2>
            </div>
            
            <p className="text-gray-600 font-segoe mb-8">
              You can control which cookies we use on our website. Essential cookies cannot be disabled as they are required for the site to function properly.
            </p>

            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  
                  
                  
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold font-garnett text-gray-900">
                      {type.name}
                    </h3>
                    {type.required ? (
                      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full font-medium">
                        Required
                      </span>
                    ) : (
                      <button
                        onClick={type.toggle}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                          type.enabled 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {type.enabled ? <ToggleRight className="h-5 w-5" /> : <ToggleLeft className="h-5 w-5" />}
                        <span className="font-medium">
                          {type.enabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </button>
                    )}
                  </div>
                  
                  <p className="text-gray-600 font-segoe mb-4">
                    {type.description}
                  </p>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200">
                Save Preferences
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200">
                Accept All
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200">
                Reject Optional
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            
            
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold font-garnett text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners about how users interact with their sites.
              </p>

              <h2 className="text-2xl font-bold font-garnett text-gray-900 mb-6 mt-12">
                How We Use Cookies
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                Singularsity uses cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li><strong>Authentication:</strong> To remember that you're logged in and maintain your session</li>
                <li><strong>Security:</strong> To protect against fraud and ensure secure access to your account</li>
                <li><strong>Preferences:</strong> To remember your settings and customize your experience</li>
                <li><strong>Analytics:</strong> To understand how users interact with our platform and improve our services</li>
                <li><strong>Performance:</strong> To monitor and optimize website performance and loading times</li>
              </ul>

              <h2 className="text-2xl font-bold font-garnett text-gray-900 mb-6 mt-12">
                Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                First-Party Cookies
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                These are cookies set directly by Singularsity. We use them to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Maintain your login session and remember your preferences</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Analyze usage patterns to improve our services</li>
                <li>Provide customer support and troubleshoot issues</li>
              </ul>

              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Third-Party Cookies
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                We also use cookies from trusted third-party providers for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li><strong>Google Analytics:</strong> To understand website traffic and user behavior</li>
                <li><strong>Intercom:</strong> To provide customer support chat functionality</li>
                <li><strong>Stripe:</strong> To process payments securely</li>
                <li><strong>CloudFlare:</strong> To enhance website security and performance</li>
              </ul>

              <h2 className="text-2xl font-bold font-garnett text-gray-900 mb-6 mt-12">
                Cookie Duration
              </h2>
              
              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Session Cookies
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                These temporary cookies are deleted when you close your browser. They help us maintain your session and ensure security during your visit.
              </p>

              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Persistent Cookies
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                These cookies remain on your device for a specified period or until you delete them. They remember your preferences and enable faster, more convenient access to our platform.
              </p>

              <h2 className="text-2xl font-bold font-garnett text-gray-900 mb-6 mt-12">
                Managing Your Cookie Preferences
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                You have several options for managing cookies:
              </p>

              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Browser Settings
              </h3>
              <p className="text-gray-600 font-segoe mb-4">
                Most browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>Block all cookies or only third-party cookies</li>
                <li>Delete existing cookies from your device</li>
                <li>Set your browser to notify you when cookies are being set</li>
                <li>Configure different settings for different websites</li>
              </ul>

              <h3 className="text-xl font-bold font-garnett text-gray-900 mb-4">
                Cookie Preference Center
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Use our Cookie Preference Center above to control which types of cookies we use on our website. Your preferences will be saved and respected during your visits.
              </p>

              <h2 className="text-2xl font-bold font-garnett text-gray-900 mb-6 mt-12">
                Impact of Disabling Cookies
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                Disabling cookies may affect your experience on our website:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 font-segoe space-y-2">
                <li>You may need to log in repeatedly during your session</li>
                <li>Your preferences and settings may not be saved</li>
                <li>Some features may not function properly</li>
                <li>We may not be able to provide personalized experiences</li>
                <li>Customer support may be less effective</li>
              </ul>

              <h2 className="text-2xl font-bold font-garnett text-gray-900 mb-6 mt-12">
                Updates to This Policy
              </h2>
              
              <p className="text-gray-600 font-segoe mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date and, where appropriate, providing additional notice through our platform or via email.
              </p>

              <h2 className="text-2xl font-bold font-garnett text-gray-900 mb-6 mt-12">
                Contact Us
              </h2>
              
              <p className="text-gray-600 font-segoe mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 font-segoe mb-2">
                  <strong>Email:</strong> privacy@singularsity.com
                </p>
                <p className="text-gray-600 font-segoe mb-2">
                  <strong>Address:</strong> Osman Chambers, KKG Marg, Juhu, Santacruz West, Mumbai, Maharashtra - 400049
                </p>
                <p className="text-gray-600 font-segoe">
                  <strong>Subject Line:</strong> Cookie Policy Inquiry
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