
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Users, Brain, Database, Lock, CheckCircle, Star, BarChart, Cpu, Globe, Heart, ShoppingCart, Cog, TrendingUp, Upload, Settings, Play, Download } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
// import AnimatedBackground from '../components/AnimatedBackground'
// import GeometricShapes from '../components/GeometricShapes'
// import DataStreams from '../components/DataStreams'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white" suppressHydrationWarning>
      <Navigation />
      
      {/* Ultimate Hero Section - World's Best Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
        {/* Advanced Background System */}
        <div className="absolute inset-0">
          {/* Primary Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/8 to-teal-500/8 rounded-full blur-3xl"
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

          {/* Secondary Floating Elements */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-cyan-400/12 to-blue-400/12 rounded-full blur-xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -25, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-20 w-16 h-16 border border-blue-300/20 rounded-lg rotate-45"
            animate={{
              rotate: [45, 135, 225, 315, 45],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-12 h-12 border border-purple-300/25 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Data Flow Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}

          {/* Interactive Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent bg-[length:50px_50px] bg-repeat"></div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content - Premium Design */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-full text-gray-700 text-sm font-medium shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                  Future Ready Synthetic Data Solutions
                </motion.div>

                {/* Main Headline */}
            <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-2"
                >
                  <h1 className="text-[2rem] lg:text-5xl xl:text-6xl font-bold font-space-grotesk leading-none">
                    <span className="text-gray-900">Privacy-First</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
                      Synthetic Data
                    </span>
                    <br />
                    <span className="text-gray-800">Platform</span>
                  </h1>

                  {/* Animated Underline */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full w-1/2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Premium Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl text-gray-600 font-light leading-relaxed max-w-lg"
                >
                  Generate <span className="font-semibold text-emerald-600">high-quality artificial data</span> that perfectly mimics your real patterns while ensuring <span className="font-semibold text-purple-600">complete privacy</span> and <span className="font-semibold text-blue-600">regulatory compliance</span>.
                </motion.p>

                {/* Feature Pills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-wrap gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-xs font-medium"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    100% Privacy Safe
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-xs font-medium"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    Lightning Fast
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    Enterprise Ready
                  </motion.div>
                </motion.div>

                {/* Premium CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/login?tab=signup"
                      className="group relative inline-flex items-center justify-center px-6 py-3 h-12 text-base font-semibold rounded-xl text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-0 active:border-none active:outline-none active:ring-0 active:shadow-none active:appearance-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
              >
                Start Free Trial
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
              </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
              <Link 
                href="/demo" 
                      className="group inline-flex items-center justify-center px-6 py-3 h-12 border-2 border-gray-300 text-gray-700 text-base font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                      <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Link>
            </motion.div>
                </motion.div>

                {/* Social Proof Numbers */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex items-center gap-8 pt-4"
                >
                  <div className="text-center">
                    <motion.div
                      className="text-2xl font-bold text-gray-900"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                    >
                      2B+
                    </motion.div>
                    <div className="text-sm text-gray-600">Synthetic Records Created</div>
          </div>
                  <div className="text-center">
                    <motion.div
                      className="text-2xl font-bold text-gray-900"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
                    >
                      99.9%
                    </motion.div>
                    <div className="text-sm text-gray-600">Uptime</div>
        </div>
                  <div className="text-center">
                    <motion.div
                      className="text-2xl font-bold text-gray-900"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                    >
                      24/7
                    </motion.div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - Interactive Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Synthetic Data Generation Pipeline */}
                <motion.div
                  className="relative w-full max-w-md mx-auto h-48"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {/* Data Input */}
                  <motion.div
                    className="absolute left-0 top-[35%] transform -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs text-gray-600 mt-2 text-center font-medium">Raw Data</div>
                  </motion.div>

                  {/* Arrow from Input to Processing */}
                  <motion.div
                    className="absolute left-[22%] top-[35%] transform -translate-y-1/2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                      <path
                        d="M8 12 L8 20 L16 16 Z"
                        fill="#10b981"
                        stroke="#10b981"
                        strokeWidth="1"
                      />
                    </svg>
                  </motion.div>

                  {/* AI Processing Core */}
                  <motion.div
                    className="absolute left-[38%] top-[25%] transform -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-700 mt-2 text-center">AI Processing</div>
                  </motion.div>

                  {/* Arrow from Processing to Output */}
                  <motion.div
                    className="absolute right-[27%] top-[35%] transform -translate-y-1/2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                      <path
                        d="M8 12 L8 20 L16 16 Z"
                        fill="#10b981"
                        stroke="#10b981"
                        strokeWidth="1"
                      />
                    </svg>
                  </motion.div>

                  {/* Synthetic Data Output */}
                  <motion.div
                    className="absolute right-0 top-[35%] transform -translate-y-1/2"
                    animate={{
                      scale: [1, 1.15, 1],
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs text-gray-600 mt-2 text-center font-medium transform -translate-x-3">Synthetic Data</div>
                  </motion.div>

                </motion.div>

                {/* Floating Feature Cards */}
                <motion.div
                  className="absolute -top-8 -left-8 p-2"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">Privacy First</div>
                      <div className="text-xs text-gray-600">GDPR Compliant</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -right-8 p-2"
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">Lightning Fast</div>
                      <div className="text-xs text-gray-600">Real-time Processing</div>
                    </div>
                  </div>
                </motion.div>

                {/* Background Pattern */}
                <div className="absolute -inset-10 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
        />
      </section>

      {/* Features Section */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Powerful
              </span>
              <span className="block text-gray-800">
                Synthetic Data Generation
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Advanced AI algorithms that create realistic, privacy-safe synthetic data for your most demanding use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[240px]"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.05)',
                }}
              >
                {/* Elegant muted green gradient effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-300/25 via-teal-200/20 to-green-300/25 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-102" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-lime-400/15 via-emerald-300/12 to-teal-400/15 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-103" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-yellow-200/10 via-amber-200/8 to-orange-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                <Brain className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                      >
                AI-Powered Generation
                      </motion.h3>
              <p className="text-gray-600 font-extralight">
                Advanced generative AI models including GANs, VAEs, and transformers to create highly realistic synthetic datasets that preserve statistical properties.
              </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[240px]"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.05)',
                }}
              >
                {/* Elegant muted green gradient effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-300/25 via-teal-200/20 to-green-300/25 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-102" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-lime-400/15 via-emerald-300/12 to-teal-400/15 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-103" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-yellow-200/10 via-amber-200/8 to-orange-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                <Shield className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                      >
                Privacy Guaranteed
                      </motion.h3>
              <p className="text-gray-600 font-extralight">
                Zero personally identifiable information with differential privacy techniques. GDPR, HIPAA, and SOC 2 compliant by design.
              </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[240px]"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.05)',
                }}
              >
                {/* Elegant muted green gradient effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-300/25 via-teal-200/20 to-green-300/25 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-102" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-lime-400/15 via-emerald-300/12 to-teal-400/15 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-103" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-yellow-200/10 via-amber-200/8 to-orange-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                <Zap className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                      >
                Lightning Fast
                      </motion.h3>
              <p className="text-gray-600 font-extralight">
                Generate millions of synthetic records in minutes with our optimized cloud infrastructure and parallel processing capabilities.
              </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[240px]"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.05)',
                }}
              >
                {/* Elegant muted green gradient effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-300/25 via-teal-200/20 to-green-300/25 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-102" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-lime-400/15 via-emerald-300/12 to-teal-400/15 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-103" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-yellow-200/10 via-amber-200/8 to-orange-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                <Database className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                      >
                Multi-Format Support
                      </motion.h3>
              <p className="text-gray-600 font-extralight">
                Support for tabular, time-series, text, and image data. Compatible with all major databases and data formats.
              </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[240px]"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.05)',
                }}
              >
                {/* Elegant muted green gradient effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-300/25 via-teal-200/20 to-green-300/25 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-102" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-lime-400/15 via-emerald-300/12 to-teal-400/15 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-103" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-yellow-200/10 via-amber-200/8 to-orange-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                <Cpu className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                      >
                API-First Design
                      </motion.h3>
              <p className="text-gray-600 font-extralight">
                RESTful APIs and SDKs for seamless integration into your existing ML pipelines and development workflows.
              </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[240px]"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.05)',
                }}
              >
                {/* Elegant muted green gradient effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-300/25 via-teal-200/20 to-green-300/25 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-102" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-lime-400/15 via-emerald-300/12 to-teal-400/15 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-103" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-yellow-200/10 via-amber-200/8 to-orange-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                <Globe className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                      >
                Global Scale
                      </motion.h3>
              <p className="text-gray-600 font-extralight">
                Enterprise-grade infrastructure with global availability, auto-scaling, and 99.9% uptime guarantee.
              </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pt-12 pb-24 bg-gradient-to-t from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-[2rem] font-bold font-space-grotesk mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                How
              </span>
              <span className="text-gray-900">
                {' '}
                Singularsity
                {' '}
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Simple, secure, and scalable synthetic data generation in four easy steps
            </p>
          </div>


          {/* Simple arrow connectors */}
          <div className="hidden lg:block relative w-full max-w-7xl mx-auto mb-8">
            <div className="absolute inset-0">
              {/* Arrow between Step 1 and 2 */}
            <motion.div 
                className="absolute top-16 left-[23%] transform -translate-x-1/2 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <ArrowRight className="w-6 h-6 text-blue-500" />
              </motion.div>

              {/* Arrow between Step 2 and 3 */}
              <motion.div
                className="absolute top-16 left-[49%] transform -translate-x-1/2 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <ArrowRight className="w-6 h-6 text-green-500" />
              </motion.div>

              {/* Arrow between Step 3 and 4 */}
              <motion.div
                className="absolute top-16 left-[75%] transform -translate-x-1/2 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.5, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <ArrowRight className="w-6 h-6 text-purple-500" />
              </motion.div>
                </div>
              </div>

          {/* Mobile arrow connectors integrated with grid */}
          <div className="lg:hidden grid grid-cols-1 gap-6 relative z-10">
            {/* Step 1 Card */}
            <motion.div
              className="group relative text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                    Configure Data
              </h3>

                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Set privacy levels, data types, and generation parameters through our intuitive interface.
                  </p>

                  <div className="mt-6 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                        STEP 01
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Arrow between Step 1 and 2 */}
            <div className="flex justify-center py-4">
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <ArrowRight className="w-6 h-6 text-blue-500 rotate-90" />
              </motion.div>
            </div>

            {/* Step 2 Card */}
            <motion.div
              className="group relative text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Settings className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-green-900 transition-colors duration-300">
                    Generate & Validate
                  </h3>

                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Our AI generates synthetic data and automatically validates quality, utility, and privacy metrics.
                  </p>

                  <div className="mt-6 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                        STEP 02
                </div>
              </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Arrow between Step 2 and 3 */}
            <div className="flex justify-center py-4">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.0, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <ArrowRight className="w-6 h-6 text-green-500 rotate-90" />
              </motion.div>
            </div>

            {/* Step 3 Card */}
            <motion.div
              className="group relative text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <ArrowRight className="w-8 h-8 text-white ml-1" />
                  </motion.div>

                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-purple-900 transition-colors duration-300">
                    Deploy & Scale
              </h3>

                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Download or stream synthetic data directly to your applications via APIs and SDKs.
                  </p>

                  <div className="mt-6 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                        STEP 03
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
            </motion.div>
          </div>

          {/* Desktop grid layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative z-10">
            <motion.div 
              className="group relative text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-12 h-12">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${30 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2.5 + i,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <Upload className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                Connect Your Data
              </h3>

                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Securely connect your databases, files, or APIs. Your data never leaves your environment.
              </p>

                {/* Creative step indicator */}
                <motion.div
                  className="mt-6 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                      STEP 01
                </div>
              </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="group relative text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-12 h-12">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-green-400 rounded-full opacity-50"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${30 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2.5 + i,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: -180 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Settings className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-green-900 transition-colors duration-300">
                Configure Generation
              </h3>

                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Set privacy levels, data types, and generation parameters through our intuitive interface.
              </p>

                {/* Creative step indicator */}
                <motion.div
                  className="mt-10 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                      STEP 02
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="group relative text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-12 h-12">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50"
                      style={{
                        top: `${15 + i * 15}%`,
                        left: `${25 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </motion.div>

                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-purple-900 transition-colors duration-300">
                Generate & Validate
              </h3>

                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Our AI generates synthetic data and automatically validates quality, utility, and privacy metrics.
              </p>

                {/* Creative step indicator */}
                <motion.div
                  className="mt-6 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                      STEP 03
                </div>
              </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="group relative text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-12 h-12">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50"
                      style={{
                        top: `${10 + i * 18}%`,
                        left: `${20 + i * 25}%`,
                      }}
                      animate={{
                        y: [0, -12, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 1.8 + i,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, type: "spring", stiffness: 150 }}
                >
                  <Download className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4 group-hover:text-orange-900 transition-colors duration-300">
                Deploy & Scale
              </h3>

                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Download or stream synthetic data directly to your applications via APIs and SDKs.
              </p>

                {/* Creative step indicator */}
                <motion.div
                  className="mt-6 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6, duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                      STEP 04
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="pt-12 pb-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-[2rem] font-bold font-space-grotesk text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Trusted
              </span>
              <span className="text-black">
                {' '}Across Industries
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              From healthcare to finance, leading organizations use Singularsity to accelerate AI development while protecting sensitive data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                    Healthcare
              </h3>

                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6 leading-relaxed">
                Generate synthetic patient data for medical research, drug discovery, and AI model training while maintaining HIPAA compliance and protecting patient privacy.
              </p>

                  <div className="space-y-3">
                    {[
                      "Electronic Health Records (EHR) synthesis",
                      "Medical imaging data augmentation",
                      "Clinical trial simulation"
                    ].map((feature, featureIndex) => (
            <motion.div 
                        key={feature}
                        className="flex items-center space-x-3"
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-light leading-relaxed">{feature}</span>
            </motion.div>
                    ))}
                  </div>

                </div>
              </motion.div>
            </motion.div>

            <motion.div
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
              </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <TrendingUp className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-900 transition-colors duration-300">
                    Financial Services
              </h3>

                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6 leading-relaxed">
                Create realistic financial datasets for fraud detection, risk modeling, and regulatory compliance testing without exposing sensitive customer information.
              </p>

                  <div className="space-y-3">
                    {[
                      "Transaction data synthesis",
                      "Credit scoring model training",
                      "Anti-money laundering testing"
                    ].map((feature, featureIndex) => (
            <motion.div 
                        key={feature}
                        className="flex items-center space-x-3"
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-light leading-relaxed">{feature}</span>
            </motion.div>
                    ))}
                  </div>

                </div>
              </motion.div>
            </motion.div>

            <motion.div 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
              </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-900 transition-colors duration-300">
                    E-commerce
              </h3>

                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6 leading-relaxed">
                Generate customer behavior data, product catalogs, and transaction patterns for recommendation systems and business intelligence applications.
              </p>

                  <div className="space-y-3">
                    {[
                      "Customer journey simulation",
                      "Product recommendation testing",
                      "A/B testing datasets"
                    ].map((feature, featureIndex) => (
            <motion.div 
                        key={feature}
                        className="flex items-center space-x-3"
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-light leading-relaxed">{feature}</span>
            </motion.div>
                    ))}
                </div>

              </div>
              </motion.div>
            </motion.div>

            <motion.div 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
              </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Cog className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-900 transition-colors duration-300">
                    Manufacturing
              </h3>

                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6 leading-relaxed">
                Create synthetic sensor data, equipment logs, and operational datasets for predictive maintenance and quality control AI systems.
              </p>

                  <div className="space-y-3 mt-3">
                    {[
                      "IoT sensor data generation",
                      "Equipment failure simulation",
                      "Supply chain optimization"
                    ].map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-light leading-relaxed">{feature}</span>
            </motion.div>
                    ))}
                </div>

              </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Our Synthetic Data */}
      <section className="pt-8 pb-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header Section */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-4 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[2rem] font-bold font-space-grotesk text-primary mb-4">
              Why Companies Choose Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Synthetic Data
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Join industry leaders who've transformed their AI development with measurable results and complete privacy compliance
            </p>
          </motion.div>

          {/* Enhanced Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Faster Model Training Card */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Icon and Progress Bar */}
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Zap className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Animated counter */}
                  <motion.div
                    className="text-[2rem] font-bold font-space-grotesk text-primary mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  >
                    87%
                  </motion.div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    />
              </div>

                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                Faster Model Training
              </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Reduce data collection time by 87% and accelerate your AI development cycle
              </p>
                </div>
              </div>
            </motion.div>

            {/* Privacy Compliant Card */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Shield className="w-7 h-7 text-white" />
                  </motion.div>

                  <motion.div
                    className="text-[2rem] font-bold font-space-grotesk text-primary mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                  >
                    100%
                  </motion.div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                    />
              </div>

                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                Privacy Compliant
              </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    100% privacy compliance with fully synthetic datasets that protect sensitive data
              </p>
                </div>
              </div>
            </motion.div>

            {/* Improved Accuracy Card */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <TrendingUp className="w-7 h-7 text-white" />
                  </motion.div>

                  <motion.div
                    className="text-[2rem] font-bold font-space-grotesk text-primary mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                  >
                    42%
                  </motion.div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "42%" }}
                      transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
                    />
              </div>

                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                Improved Accuracy
              </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    42% higher model performance with better quality synthetic training data
              </p>
                </div>
              </div>
            </motion.div>

            {/* Cost Reduction Card */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <BarChart className="w-7 h-7 text-white" />
                  </motion.div>

                  <motion.div
                    className="text-[2rem] font-bold font-space-grotesk text-primary mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                  >
                    60%
                  </motion.div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                    />
              </div>

                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                Cost Reduction
              </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    60% reduction in data acquisition and labeling costs with synthetic data
              </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced CTA Section */}
            <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="inline-flex flex-col sm:flex-row gap-3">
              <Link 
                href="/case-studies" 
                className="inline-flex items-center gradient-bg text-white px-6 py-3 rounded-lg text-base font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                See Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center border-2 border-primary text-primary px-6 py-3 rounded-lg text-base font-medium hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Link>
          </div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>HIPAA Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Enterprise Security</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative pt-8 pb-12 gradient-bg text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
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
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-[2rem] font-bold font-space-grotesk mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-white">
              Ready to Transform Your Data Strategy?
                </span>
              </motion.h2>
            </div>

            {/* Enhanced Description with Stats */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[1.1rem] font-segoe font-light mb-4 max-w-4xl mx-auto opacity-95 leading-relaxed">
                Join league of companies using Singularsity to accelerate AI development while protecting privacy
              </p>

              {/* Mini stats grid */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-4">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold font-space-grotesk text-white mb-1">87%</div>
                  <div className="text-sm text-white/80">Faster Training</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold font-space-grotesk text-white mb-1">100%</div>
                  <div className="text-sm text-white/80">Privacy Safe</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold font-space-grotesk text-white mb-1">60%</div>
                  <div className="text-sm text-white/80">Cost Savings</div>
                </motion.div>
              </div>
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
                href="/login?tab=signup" 
                className="group bg-white text-primary px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center justify-center"
              >
                Start Free Trial
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Link 
                href="/contact" 
                className="group border-2 border-white/80 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              >
                <Users className="mr-2 h-4 w-4" />
                Talk to Sales
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
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel Anytime</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 