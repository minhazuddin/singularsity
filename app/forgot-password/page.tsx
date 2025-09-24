'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  Shield
} from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string) => {
    if (!email) {
      return 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address'
    }
    return ''
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (emailError) {
      const error = validateEmail(value)
      setEmailError(error)
    }
  }

  const handleEmailBlur = () => {
    const error = validateEmail(email)
    setEmailError(error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    const emailValidationError = validateEmail(email)
    if (emailValidationError) {
      setEmailError(emailValidationError)
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSuccess('Password reset link sent! Check your email for instructions.')
      setEmailSent(true)
      
      // Reset form after success
      setTimeout(() => {
        setEmail('')
        setEmailSent(false)
        setSuccess('')
      }, 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <Navigation />
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative pt-20 pb-12 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Back to Login Link */}
            <div className="mb-8">
              <Link 
                href="/login" 
                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </div>

            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-white p-4 rounded-full shadow-lg">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold font-plus-jakarta-sans text-gray-900 mb-2">
              Forgot Password?
            </h1>
            <p className="text-gray-600 font-segoe">
              No worries! Enter your email and we'll send you a reset link.
            </p>
          </motion.div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <motion.div
            
            
            
            className="bg-white/80 backdrop-blur-lg py-8 px-4 shadow-2xl rounded-2xl sm:px-10 border border-white/20"
          >
            <AnimatePresence mode="wait">
              {!emailSent ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className={`h-5 w-5 transition-colors duration-200 ${
                          emailError ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        onBlur={handleEmailBlur}
                        className={`appearance-none block w-full pl-10 pr-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                          emailError 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {emailError && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <AlertCircle className="h-5 w-5 text-red-400" />
                        </div>
                      )}
                      {!emailError && email && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                      )}
                    </div>
                    {emailError && (
                      <motion.p
                        
                        
                        className="mt-2 text-sm text-red-600 font-segoe"
                      >
                        {emailError}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isLoading || !!emailError}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full flex justify-center py-3 px-4 border-none text-sm font-medium rounded-lg text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Reset Link...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Send Reset Link
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  
                  
                  transition={{ duration: 0.3 }}
                  className="text-center py-8"
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <div className="relative bg-white p-4 rounded-full shadow-lg">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-plus-jakarta-sans text-gray-900 mb-2">
                    Check Your Email
                  </h3>
                  <p className="text-gray-600 font-segoe mb-6">
                    We've sent a password reset link to <strong>{email}</strong>
                  </p>
                  
                  <div className="space-y-3">
                    <Link 
                      href="/login"
                      className="block w-full gradient-bg text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
                    >
                      Back to Login
                    </Link>
                    <button
                      onClick={() => {
                        setEmailSent(false)
                        setSuccess('')
                      }}
                      className="block w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200"
                    >
                      Try Different Email
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error/Success Messages */}
            <AnimatePresence>
              {error && (
                <motion.div
                  
                  
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4"
                >
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600 font-segoe">{error}</p>
                  </div>
                </motion.div>
              )}

              {success && !emailSent && (
                <motion.div
                  
                  
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4"
                >
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-600 font-segoe">{success}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Remember Password Link */}
            {!emailSent && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 font-segoe">
                  Remember your password?{' '}
                  <Link href="/login" className="font-medium text-primary hover:text-secondary transition-colors duration-200">
                    Sign In
                  </Link>
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Additional Help */}
        <motion.div
          
          
          
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-sm text-blue-600 font-segoe">
              <strong>Need help?</strong> Contact our support team at{' '}
              <a href="mailto:support@singularsity.com" className="font-medium hover:underline">
                support@singularsity.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 