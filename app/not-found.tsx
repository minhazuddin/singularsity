'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Sparkles, Brain, Database } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FriendlyDataParticles from '../components/FriendlyDataParticles'
import FloatingDataViz from '../components/FloatingDataViz'
import FriendlyAnimatedText from '../components/FriendlyAnimatedText'

export default function NotFound() {
  const friendlyMessages = [
    "Oops! This page went on a data adventure...",
    "404: Page is training with our AI models",
    "Lost in the synthetic data matrix!",
    "This page is being generated... please wait",
    "Error 404: Page not found in our dataset"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 flex flex-col">
      <Navigation />
      
      {/* Background animations constrained to main content area */}
      <div className="absolute top-20 left-0 right-0 z-0 overflow-hidden" style={{ bottom: '200px' }}>
        <FloatingDataViz />
        <FriendlyDataParticles />
      </div>
      
      {/* Friendly instruction */}
      <motion.div 
        className="fixed top-24 right-4 z-30 bg-primary/90 text-white px-4 py-2 rounded-lg border border-primary shadow-lg"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="inline w-4 h-4 mr-2" />
        Move your cursor to generate data!
      </motion.div>
      
      {/* Main content area */}
      <main className="relative z-10 flex-1 flex flex-col pt-24 pb-8">
        <div className="flex-1 flex items-center justify-center overflow-y-auto">
          <div className="max-w-4xl mx-auto text-center px-4">
              <motion.div
                
                
                transition={{ duration: 0.6 }}
              >
                {/* Friendly 404 with data visualization */}
                <motion.div 
                  className="relative mb-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-9xl font-bold font-space-grotesk text-gradient mb-4">
                    4🤖4
                  </div>
                  <motion.div
                    className="absolute -top-4 -right-4 text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
                
                {/* Friendly animated message */}
                <motion.h1 
                  className="text-4xl font-bold font-space-grotesk text-gray-800 mb-6"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FriendlyAnimatedText 
                    texts={friendlyMessages}
                    className="text-gradient"
                    speed={80}
                  />
                </motion.h1>
                
                {/* Synthetic data explanation */}
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 shadow-xl mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-primary mr-3" />
                    <Database className="w-8 h-8 text-secondary mr-3" />
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="text-2xl font-bold font-space-grotesk text-gray-800 mb-4">
                    Our AI is Generating New Data!
                  </h2>
                  
                  <p className="text-lg text-gray-600 font-segoe mb-4">
                    While you're here, our synthetic data models are working hard to create realistic, 
                    privacy-safe datasets. Just like how this page seems to be missing, sometimes 
                    data needs to be artificially generated to fill the gaps!
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <motion.div 
                      className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl mb-2">🧠</div>
                      <h3 className="font-bold text-gray-800">GANs</h3>
                      <p className="text-sm text-gray-600">Generating realistic synthetic data</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-br from-secondary/10 to-primary/10 p-4 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl mb-2">🔒</div>
                      <h3 className="font-bold text-gray-800">Privacy</h3>
                      <p className="text-sm text-gray-600">Protecting sensitive information</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl mb-2">⚡</div>
                      <h3 className="font-bold text-gray-800">Speed</h3>
                      <p className="text-sm text-gray-600">Lightning-fast generation</p>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Friendly action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/" 
                      className="gradient-bg text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center shadow-lg shadow-primary/25"
                    >
                      <Home className="mr-2 h-5 w-5" />
                      Return to Data Hub
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button 
                      onClick={() => window.history.back()}
                      className="gradient-bg text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center shadow-lg"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Go Back
                    </button>
                  </motion.div>
                </div>

                {/* Fun data stats */}
                <motion.div 
                  className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
                  
                  
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">1M+</div>
                    <div className="text-sm text-gray-600">Records Generated</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">99.9%</div>
                    <div className="text-sm text-gray-600">Privacy Protected</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">AI Working</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">∞</div>
                    <div className="text-sm text-gray-600">Possibilities</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>
        
        <div className="relative z-20">
          <Footer />
        </div>
      </div>
  )
} 