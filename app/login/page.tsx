'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  User, 
  Building, 
  Phone, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react'
import Navigation from '../../components/Navigation'

interface ValidationErrors {
  email?: string
  password?: string
  confirmPassword?: string
  firstName?: string
  lastName?: string
  company?: string
  phone?: string
}

export default function Login() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  // Check URL parameters on component mount
  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab === 'signup') {
      setActiveTab('signup')
    }
  }, [searchParams])
  
  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  
  // Signup form state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })
  
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())

  // Real-time validation
  const validateField = (name: string, value: string, formData: any = {}) => {
    const errors: ValidationErrors = {}
    
    switch (name) {
      case 'email':
        if (!value) {
          errors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Please enter a valid email address'
        }
        break
        
      case 'password':
        if (!value) {
          errors.password = 'Password is required'
        } else if (value.length < 8) {
          errors.password = 'Password must be at least 8 characters'
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          errors.password = 'Password must contain uppercase, lowercase, and number'
        }
        break
        
      case 'confirmPassword':
        if (!value) {
          errors.confirmPassword = 'Please confirm your password'
        } else if (value !== formData.password) {
          errors.confirmPassword = 'Passwords do not match'
        }
        break
        
      case 'firstName':
        if (!value) {
          errors.firstName = 'First name is required'
        } else if (value.length < 2) {
          errors.firstName = 'First name must be at least 2 characters'
        }
        break
        
      case 'lastName':
        if (!value) {
          errors.lastName = 'Last name is required'
        } else if (value.length < 2) {
          errors.lastName = 'Last name must be at least 2 characters'
        }
        break
        
      case 'company':
        if (!value) {
          errors.company = 'Company name is required'
        }
        break
        
      case 'phone':
        if (!value) {
          errors.phone = 'Phone number is required'
        } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(value)) {
          errors.phone = 'Please enter a valid phone number'
        }
        break
    }
    
    return errors
  }

  const handleInputChange = (name: string, value: string, isSignup = false) => {
    if (isSignup) {
      setSignupData(prev => ({ ...prev, [name]: value }))
      
      // Real-time validation for signup
      if (touchedFields.has(name)) {
        const fieldErrors = validateField(name, value, { ...signupData, [name]: value })
        setValidationErrors(prev => ({ ...prev, ...fieldErrors }))
        
        // Clear error if field is now valid
        if (!fieldErrors[name as keyof ValidationErrors]) {
          setValidationErrors(prev => {
            const newErrors = { ...prev }
            delete newErrors[name as keyof ValidationErrors]
            return newErrors
          })
        }
      }
    } else {
      setLoginData(prev => ({ ...prev, [name]: value }))
      
      // Real-time validation for login
      if (touchedFields.has(name)) {
        const fieldErrors = validateField(name, value)
        setValidationErrors(prev => ({ ...prev, ...fieldErrors }))
        
        if (!fieldErrors[name as keyof ValidationErrors]) {
          setValidationErrors(prev => {
            const newErrors = { ...prev }
            delete newErrors[name as keyof ValidationErrors]
            return newErrors
          })
        }
      }
    }
  }

  const handleFieldBlur = (name: string) => {
    setTouchedFields(prev => new Set(Array.from(prev).concat(name)))
    
    const value = activeTab === 'signup' ? signupData[name as keyof typeof signupData] : loginData[name as keyof typeof loginData]
    const formData = activeTab === 'signup' ? signupData : loginData
    const fieldErrors = validateField(name, value as string, formData)
    setValidationErrors(prev => ({ ...prev, ...fieldErrors }))
  }

  const validateForm = (isSignup = false) => {
    const data = isSignup ? signupData : loginData
    let errors: ValidationErrors = {}
    
    if (isSignup) {
      Object.keys(signupData).forEach(key => {
        if (key !== 'agreeToTerms') {
          const fieldErrors = validateField(key, data[key as keyof typeof data] as string, data)
          errors = { ...errors, ...fieldErrors }
        }
      })
    } else {
      ['email', 'password'].forEach(key => {
        const fieldErrors = validateField(key, data[key as keyof typeof data] as string, data)
        errors = { ...errors, ...fieldErrors }
      })
    }
    
    return errors
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    const errors = validateForm(false)
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setIsLoading(false)
      return
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (loginData.email === 'demo@singularsity.com' && loginData.password === 'Demo123!') {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userEmail', loginData.email)
        setSuccess('Login successful! Redirecting to console...')
        setTimeout(() => {
          window.location.href = '/console'
        }, 1500)
      } else {
        setError('Invalid email or password. Try demo@singularsity.com / Demo123!')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    const errors = validateForm(true)
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setIsLoading(false)
      return
    }

    if (!signupData.agreeToTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy')
      setIsLoading(false)
      return
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', signupData.email)
      setSuccess('Account created successfully! Redirecting to console...')
      
      setTimeout(() => {
        window.location.href = '/console'
      }, 2000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const getPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^a-zA-Z\d]/.test(password)) strength++
    return strength
  }

  const getPasswordStrengthColor = (strength: number) => {
    if (strength <= 2) return 'bg-red-500'
    if (strength <= 3) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  const getPasswordStrengthText = (strength: number) => {
    if (strength <= 2) return 'Weak'
    if (strength <= 3) return 'Medium'
    return 'Strong'
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
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-white p-4 rounded-full shadow-lg">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
              {activeTab === 'login' ? 'Welcome Back' : 'Join Singularsity'}
            </h2>
            <p className="text-gray-600 font-segoe">
              {activeTab === 'login' 
                ? 'Sign in to continue generating synthetic data' 
                : 'Create your account and start your journey'
              }
            </p>
          </motion.div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <motion.div
            
            
            
            className="bg-white/80 backdrop-blur-lg py-8 px-4 shadow-2xl rounded-2xl sm:px-10 border border-white/20"
          >
            {/* Tab Switcher */}
            <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => {
                  setActiveTab('login')
                  setError('')
                  setSuccess('')
                  setValidationErrors({})
                  setTouchedFields(new Set())
                }}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'login'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setActiveTab('signup')
                  setError('')
                  setSuccess('')
                  setValidationErrors({})
                  setTouchedFields(new Set())
                }}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'signup'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign Up
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'login' ? (
                <motion.form
                  key="login"
                  
                  
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  onSubmit={handleLogin}
                >
                  {/* Email Field */}
                  <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className={`h-5 w-5 transition-colors duration-200 ${
                          validationErrors.email ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        id="login-email"
                        name="email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => handleInputChange('email', e.target.value, false)}
                        onBlur={() => handleFieldBlur('email')}
                        className={`appearance-none block w-full pl-10 pr-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                          validationErrors.email 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                        placeholder="Enter your email"
                      />
                      {validationErrors.email && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <AlertCircle className="h-5 w-5 text-red-400" />
                        </div>
                      )}
                    </div>
                    {validationErrors.email && (
                      <motion.p
                        
                        
                        className="mt-2 text-sm text-red-600 font-segoe"
                      >
                        {validationErrors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className={`h-5 w-5 transition-colors duration-200 ${
                          validationErrors.password ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        id="login-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={loginData.password}
                        onChange={(e) => handleInputChange('password', e.target.value, false)}
                        onBlur={() => handleFieldBlur('password')}
                        className={`appearance-none block w-full pl-10 pr-10 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                          validationErrors.password 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                        )}
                      </button>
                    </div>
                    {validationErrors.password && (
                      <motion.p
                        
                        
                        className="mt-2 text-sm text-red-600 font-segoe"
                      >
                        {validationErrors.password}
                      </motion.p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={loginData.rememberMe}
                        onChange={(e) => setLoginData(prev => ({ ...prev, rememberMe: e.target.checked }))}
                        className="h-4 w-4 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-segoe">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link href="/forgot-password" className="font-medium text-primary hover:text-secondary transition-colors duration-200">
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full flex justify-center py-3 px-4 border-none text-sm font-medium rounded-lg text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Signing in...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Sign in
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      )}
                    </motion.button>
                  </div>

                  {/* New to Singularsity */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600 font-segoe">
                      New to Singularsity?{' '}
                      <button
                        onClick={() => {
                          setActiveTab('signup')
                          setError('')
                          setSuccess('')
                          setValidationErrors({})
                          setTouchedFields(new Set())
                        }}
                        className="font-medium text-primary hover:text-secondary transition-colors duration-200 underline"
                      >
                        Create account
                      </button>
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.form
                  key="signup"
                  
                  
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  onSubmit={handleSignup}
                >
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className={`h-5 w-5 transition-colors duration-200 ${
                            validationErrors.firstName ? 'text-red-400' : 'text-gray-400'
                          }`} />
                        </div>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={signupData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value, true)}
                          onBlur={() => handleFieldBlur('firstName')}
                          className={`appearance-none block w-full pl-10 pr-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                            validationErrors.firstName 
                              ? 'border-red-300 bg-red-50' 
                              : 'border-gray-300 bg-white hover:border-gray-400'
                          }`}
                          placeholder="John"
                        />
                      </div>
                      {validationErrors.firstName && (
                        <motion.p
                          
                          
                          className="mt-1 text-xs text-red-600 font-segoe"
                        >
                          {validationErrors.firstName}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={signupData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value, true)}
                          onBlur={() => handleFieldBlur('lastName')}
                          className={`appearance-none block w-full px-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                            validationErrors.lastName 
                              ? 'border-red-300 bg-red-50' 
                              : 'border-gray-300 bg-white hover:border-gray-400'
                          }`}
                          placeholder="Doe"
                        />
                      </div>
                      {validationErrors.lastName && (
                        <motion.p
                          
                          
                          className="mt-1 text-xs text-red-600 font-segoe"
                        >
                          {validationErrors.lastName}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className={`h-5 w-5 transition-colors duration-200 ${
                          validationErrors.email ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        id="signup-email"
                        name="email"
                        type="email"
                        value={signupData.email}
                        onChange={(e) => handleInputChange('email', e.target.value, true)}
                        onBlur={() => handleFieldBlur('email')}
                        className={`appearance-none block w-full pl-10 pr-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                          validationErrors.email 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                        placeholder="john.doe@company.com"
                      />
                      {!validationErrors.email && signupData.email && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                      )}
                    </div>
                    {validationErrors.email && (
                      <motion.p
                        
                        
                        className="mt-2 text-sm text-red-600 font-segoe"
                      >
                        {validationErrors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building className={`h-5 w-5 transition-colors duration-200 ${
                            validationErrors.company ? 'text-red-400' : 'text-gray-400'
                          }`} />
                        </div>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={signupData.company}
                          onChange={(e) => handleInputChange('company', e.target.value, true)}
                          onBlur={() => handleFieldBlur('company')}
                          className={`appearance-none block w-full pl-10 pr-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                            validationErrors.company 
                              ? 'border-red-300 bg-red-50' 
                              : 'border-gray-300 bg-white hover:border-gray-400'
                          }`}
                          placeholder="Your Company"
                        />
                      </div>
                      {validationErrors.company && (
                        <motion.p
                          
                          
                          className="mt-2 text-sm text-red-600 font-segoe"
                        >
                          {validationErrors.company}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className={`h-5 w-5 transition-colors duration-200 ${
                            validationErrors.phone ? 'text-red-400' : 'text-gray-400'
                          }`} />
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={signupData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value, true)}
                          onBlur={() => handleFieldBlur('phone')}
                          className={`appearance-none block w-full pl-10 pr-3 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                            validationErrors.phone 
                              ? 'border-red-300 bg-red-50' 
                              : 'border-gray-300 bg-white hover:border-gray-400'
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      {validationErrors.phone && (
                        <motion.p
                          
                          
                          className="mt-2 text-sm text-red-600 font-segoe"
                        >
                          {validationErrors.phone}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className={`h-5 w-5 transition-colors duration-200 ${
                          validationErrors.password ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        id="signup-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={signupData.password}
                        onChange={(e) => handleInputChange('password', e.target.value, true)}
                        onBlur={() => handleFieldBlur('password')}
                        className={`appearance-none block w-full pl-10 pr-10 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                          validationErrors.password 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                        )}
                      </button>
                    </div>
                    
                    {/* Password Strength Indicator */}
                    {signupData.password && (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor(getPasswordStrength(signupData.password))}`}
                              style={{ width: `${(getPasswordStrength(signupData.password) / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className={`text-xs font-medium ${
                            getPasswordStrength(signupData.password) <= 2 ? 'text-red-600' :
                            getPasswordStrength(signupData.password) <= 3 ? 'text-yellow-600' : 'text-green-600'
                          }`}>
                            {getPasswordStrengthText(getPasswordStrength(signupData.password))}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {validationErrors.password && (
                      <motion.p
                        
                        
                        className="mt-2 text-sm text-red-600 font-segoe"
                      >
                        {validationErrors.password}
                      </motion.p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 font-segoe mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Shield className={`h-5 w-5 transition-colors duration-200 ${
                          validationErrors.confirmPassword ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={signupData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value, true)}
                        onBlur={() => handleFieldBlur('confirmPassword')}
                        className={`appearance-none block w-full pl-10 pr-10 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm font-segoe transition-all duration-200 ${
                          validationErrors.confirmPassword 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                        )}
                      </button>
                      {!validationErrors.confirmPassword && signupData.confirmPassword && signupData.password === signupData.confirmPassword && (
                        <div className="absolute inset-y-0 right-10 pr-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                      )}
                    </div>
                    {validationErrors.confirmPassword && (
                      <motion.p
                        
                        
                        className="mt-2 text-sm text-red-600 font-segoe"
                      >
                        {validationErrors.confirmPassword}
                      </motion.p>
                    )}
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={signupData.agreeToTerms}
                      onChange={(e) => setSignupData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                      className="h-4 w-4 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900 font-segoe">
                      I agree to the{' '}
                      <Link href="/terms" className="text-primary hover:text-secondary transition-colors duration-200">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-primary hover:text-secondary transition-colors duration-200">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full flex justify-center py-3 px-4 border-none text-sm font-medium rounded-lg text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Creating account...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Zap className="mr-2 h-4 w-4" />
                          Create Account
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
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

              {success && (
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

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 font-segoe">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-200"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2">Google</span>
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-200"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="ml-2">Facebook</span>
                </motion.button>
              </div>
            </div>

            {/* Demo Credentials */}
            {activeTab === 'login' && (
              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-blue-600 font-segoe">
                    <strong>Demo credentials:</strong> demo@singularsity.com / Demo123!
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 