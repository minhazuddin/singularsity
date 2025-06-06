'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { User, CreditCard, Settings as SettingsIcon, Bell, Shield, ArrowLeft, Save, Check, AlertTriangle, Camera, Upload, Link as LinkIcon, Sparkles, Clock, Activity, Zap, RefreshCw, ChevronDown, Eye, EyeOff, Key, Smartphone, Globe, Lock, Users, Database, TrendingUp, TrendingDown, Plus, Trash2 } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import ConsoleSidebar, { useSidebar, SidebarProvider, useMainContentClass } from '../../../components/ConsoleSidebar'
import ConsoleFooter from '../../../components/ConsoleFooter'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ConsoleSettings() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('account')
  const [saved, setSaved] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showPhotoOptions, setShowPhotoOptions] = useState(false)
  const [photoUrl, setPhotoUrl] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [showUsernameTooltip, setShowUsernameTooltip] = useState(false)
  const [usernameValid, setUsernameValid] = useState(false)
  const [isEditingUsername, setIsEditingUsername] = useState(false)
  
  // New interactive states
  const [liveStats, setLiveStats] = useState({
    settingsUpdated: 89,
    securityScans: 12,
    lastBackup: '2 hours ago'
  })
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [sessionDropdownOpen, setSessionDropdownOpen] = useState(false)
  const [retentionDropdownOpen, setRetentionDropdownOpen] = useState(false)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.dropdown-container')) {
        setSessionDropdownOpen(false)
        setRetentionDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const [planHovered, setPlanHovered] = useState<string | null>(null)
  const [savingState, setSavingState] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  
  // Toast notification state
  const [toastNotification, setToastNotification] = useState<{
    show: boolean
    type: 'success' | 'error'
    title: string
    message: string
  }>({
    show: false,
    type: 'success',
    title: '',
    message: ''
  })
  
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Professional',
    dataGenerated: 2450000,
    dataLimit: 5000000,
    activeProjects: 12,
    totalDownloads: 48
  })

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Tech Innovations Ltd',
    role: 'Data Scientist',
    avatar: '',
    username: 'johndoe123'
  })

  const [plan] = useState({
    name: 'Professional',
    price: 99,
    billingCycle: 'monthly',
    dataLimit: 5000000,
    dataUsed: 2450000,
    tier: 2,
    features: [
      'Up to 5M records/month',
      'Advanced ML models',
      'Bias detection',
      'Priority support',
      'API access'
    ]
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    projectCompletion: true,
    usageAlerts: true,
    marketingEmails: false,
    securityAlerts: true
  })

  const [privacy, setPrivacy] = useState({
    twoFactorAuth: false,
    sessionTimeout: 30,
    dataRetention: 90,
    auditLogs: true
  })

  const [apiSettings, setApiSettings] = useState({
    apiKeys: [
      {
        id: '1',
        name: 'Production API Key',
        key: 'sk_live_1234567890abcdef',
        created: '2024-01-15',
        lastUsed: '2024-01-20',
        permissions: ['read', 'write', 'generate'],
        status: 'active',
        requests: 15420
      },
      {
        id: '2',
        name: 'Development API Key',
        key: 'sk_test_abcdef1234567890',
        created: '2024-01-10',
        lastUsed: '2024-01-19',
        permissions: ['read', 'generate'],
        status: 'active',
        requests: 3240
      }
    ],
    rateLimits: {
      requestsPerMinute: 100,
      requestsPerHour: 5000,
      requestsPerDay: 50000
    },
    webhooks: [
      {
        id: '1',
        url: 'https://api.example.com/webhooks/data-complete',
        events: ['generation.completed', 'generation.failed'],
        status: 'active',
        lastTriggered: '2024-01-20'
      }
    ],
    allowedOrigins: ['https://myapp.com', 'https://staging.myapp.com'],
    ipWhitelist: ['192.168.1.100', '10.0.0.50']
  })

  const [showApiKey, setShowApiKey] = useState<string | null>(null)
  const [newKeyName, setNewKeyName] = useState('')
  const [showNewKeyModal, setShowNewKeyModal] = useState(false)
  const [newWebhookUrl, setNewWebhookUrl] = useState('')
  const [showNewWebhookModal, setShowNewWebhookModal] = useState(false)

  // Live updates - optimized to prevent unnecessary re-renders
  useEffect(() => {
    const statsInterval = setInterval(() => {
      setLiveStats(prev => ({
        settingsUpdated: prev.settingsUpdated + Math.floor(Math.random() * 3),
        securityScans: prev.securityScans + Math.floor(Math.random() * 2),
        lastBackup: prev.lastBackup
      }))
      setLastUpdated(new Date())
    }, 30000) // Reduced frequency to 30 seconds to prevent blinking

    return () => {
      clearInterval(statsInterval)
    }
  }, [])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
      return
    }
    
    // Handle tab parameter from URL
    const tabParam = searchParams.get('tab')
    if (tabParam && ['account', 'plan', 'api', 'notifications', 'security'].includes(tabParam)) {
      setActiveTab(tabParam)
    }
    
    setLoading(false)
    
    // Set first visit to false after initial load
    setTimeout(() => {
      setIsFirstVisit(false)
    }, 2000) // Wait for animations to complete
  }, [router, searchParams])

  const tabs = useMemo(() => [
    { id: 'account', name: 'Account', icon: User, description: 'Profile and personal information' },
    { id: 'plan', name: 'Plan & Billing', icon: CreditCard, description: 'Subscription and usage details' },
    { id: 'api', name: 'API Settings', icon: Key, description: 'API keys and integration settings' },
    { id: 'notifications', name: 'Notifications', icon: Bell, description: 'Email and alert preferences' },
    { id: 'security', name: 'Security', icon: Shield, description: 'Privacy and security settings' }
  ], [])

  const plans = [
    {
      name: 'Starter',
      price: 29,
      dataLimit: 1000000,
      features: ['Up to 1M records/month', 'Basic models', 'Email support'],
      tier: 1,
      popular: false
    },
    {
      name: 'Professional',
      price: 99,
      dataLimit: 5000000,
      features: ['Up to 5M records/month', 'Advanced ML models', 'Bias detection', 'Priority support', 'API access'],
      tier: 2,
      popular: true
    },
    {
      name: 'Enterprise',
      price: 299,
      dataLimit: 25000000,
      features: ['Up to 25M records/month', 'All ML models', 'Custom features', '24/7 support', 'Dedicated account manager'],
      tier: 3,
      popular: false
    }
  ]

  const sessionTimeoutOptions = [
    { value: 15, label: '15 minutes', description: 'High security' },
    { value: 30, label: '30 minutes', description: 'Recommended' },
    { value: 60, label: '1 hour', description: 'Balanced' },
    { value: 120, label: '2 hours', description: 'Extended' }
  ]

  const dataRetentionOptions = [
    { value: 30, label: '30 days', description: 'Minimal storage' },
    { value: 90, label: '90 days', description: 'Standard' },
    { value: 180, label: '180 days', description: 'Extended' },
    { value: 365, label: '1 year', description: 'Maximum retention' }
  ]

  const handleTabHover = useCallback((tabId: string | null) => {
    setHoveredTab(tabId)
  }, [])

  const handleTabClick = useCallback((tabId: string) => {
    setActiveTab(tabId)
  }, [])

  const handleSave = useCallback((section?: string) => {
    setSavingState(section || 'general')
    setSaved(true)
    setIsEditingUsername(false)
    
    // Simulate API call with random success/failure
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1 // 90% success rate for demo
      
      if (isSuccess) {
        // Show success toast
        setToastNotification({
          show: true,
          type: 'success',
          title: 'Settings Saved',
          message: `Your ${section || 'general'} settings have been updated successfully.`
        })
      } else {
        // Show error toast
        setToastNotification({
          show: true,
          type: 'error',
          title: 'Save Failed',
          message: `Failed to save ${section || 'general'} settings. Please try again.`
        })
      }
      
      setSavingState(null)
      setSaved(false)
      
      // Auto-hide toast after 5 seconds
      setTimeout(() => {
        setToastNotification(prev => ({ ...prev, show: false }))
      }, 5000)
    }, 2000) // Simulate 2 second API call
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLiveStats(prev => ({
      ...prev,
      settingsUpdated: prev.settingsUpdated + Math.floor(Math.random() * 5),
      securityScans: prev.securityScans + 1
    }))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }

  const handleDeleteAccount = () => {
    // Here you would implement the actual account deletion logic
    console.log('Account deletion requested')
    // For now, just close the modal
    setShowDeleteModal(false)
    // In a real app, you might redirect to a confirmation page or logout
  }

  const validateUsername = (username: string) => {
    // Check if empty
    if (!username) {
      return { valid: false, errors: ['Username is required'] }
    }
    
    const errors = []
    
    // Check minimum length (6 characters)
    if (username.length < 6) {
      errors.push('Minimum 6 characters required')
    }
    
    // Check maximum length
    if (username.length > 64) {
      errors.push('Cannot exceed 64 characters')
    }
    
    // Check if starts with alphabet
    if (!/^[a-z]/.test(username)) {
      errors.push('Must start with a letter')
    }
    
    // Check allowed characters (lowercase letters, numbers, dashes)
    if (!/^[a-z0-9-]+$/.test(username)) {
      errors.push('Only lowercase letters, numbers, and dashes allowed')
    }
    
    // Check for consecutive dashes
    if (/--/.test(username)) {
      errors.push('Cannot contain consecutive dashes')
    }
    
    // Check if contains at least one letter or number
    if (!/[a-z0-9]/.test(username)) {
      errors.push('At least one letter or number required')
    }
    
    return { valid: errors.length === 0, errors }
  }

  const handleUsernameChange = (newUsername: string) => {
    setProfile(prev => ({ ...prev, username: newUsername }))
    setIsEditingUsername(true)
    
    if (newUsername) {
      const validation = validateUsername(newUsername)
      setUsernameValid(validation.valid)
      setUsernameError(validation.valid ? '' : 'Username invalid')
    } else {
      setUsernameValid(false)
      setUsernameError('')
    }
  }

  const handleUsernameFocus = () => {
    setShowUsernameTooltip(true)
  }

  const handleUsernameBlur = () => {
    setShowUsernameTooltip(false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // In a real app, you would upload the file to your server
      // For now, we'll just create a local URL for preview
      const url = URL.createObjectURL(file)
      setProfile(prev => ({ ...prev, avatar: url }))
      setShowPhotoOptions(false)
    }
  }

  const handlePhotoUrl = () => {
    if (photoUrl) {
      setProfile(prev => ({ ...prev, avatar: photoUrl }))
      setPhotoUrl('')
      setShowPhotoOptions(false)
    }
  }

  const removePhoto = () => {
    setProfile(prev => ({ ...prev, avatar: '' }))
    setShowPhotoOptions(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-segoe">Loading settings...</p>
        </div>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <ConsoleSidebar user={user} />
        <SettingsMainContent 
          user={user}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          profile={profile}
          setProfile={setProfile}
          plan={plan}
          notifications={notifications}
          setNotifications={setNotifications}
          privacy={privacy}
          setPrivacy={setPrivacy}
          apiSettings={apiSettings}
          setApiSettings={setApiSettings}
          handleSave={handleSave}
          saved={saved}
          tabs={tabs}
          plans={plans}
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          handleDeleteAccount={handleDeleteAccount}
          showPhotoOptions={showPhotoOptions}
          setShowPhotoOptions={setShowPhotoOptions}
          photoUrl={photoUrl}
          setPhotoUrl={setPhotoUrl}
          usernameError={usernameError}
          usernameValid={usernameValid}
          showUsernameTooltip={showUsernameTooltip}
          isEditingUsername={isEditingUsername}
          handleUsernameChange={handleUsernameChange}
          handleUsernameFocus={handleUsernameFocus}
          handleUsernameBlur={handleUsernameBlur}
          handleFileUpload={handleFileUpload}
          handlePhotoUrl={handlePhotoUrl}
          removePhoto={removePhoto}
          liveStats={liveStats}
          isRefreshing={isRefreshing}
          handleRefresh={handleRefresh}
          hoveredTab={hoveredTab}
          setHoveredTab={setHoveredTab}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          sessionDropdownOpen={sessionDropdownOpen}
          setSessionDropdownOpen={setSessionDropdownOpen}
          retentionDropdownOpen={retentionDropdownOpen}
          setRetentionDropdownOpen={setRetentionDropdownOpen}
          sessionTimeoutOptions={sessionTimeoutOptions}
          dataRetentionOptions={dataRetentionOptions}
          planHovered={planHovered}
          setPlanHovered={setPlanHovered}
          savingState={savingState}
          lastUpdated={lastUpdated}
          showApiKey={showApiKey}
          setShowApiKey={setShowApiKey}
          newKeyName={newKeyName}
          setNewKeyName={setNewKeyName}
          showNewKeyModal={showNewKeyModal}
          setShowNewKeyModal={setShowNewKeyModal}
          newWebhookUrl={newWebhookUrl}
          setNewWebhookUrl={setNewWebhookUrl}
          showNewWebhookModal={showNewWebhookModal}
          setShowNewWebhookModal={setShowNewWebhookModal}
          toastNotification={toastNotification}
          setToastNotification={setToastNotification}
          isFirstVisit={isFirstVisit}
        />
        <ConsoleFooter />
      </div>
    </SidebarProvider>
  )
}

// Separate component to use the sidebar context
function SettingsMainContent({ user, activeTab, setActiveTab, profile, setProfile, plan, notifications, setNotifications, privacy, setPrivacy, apiSettings, setApiSettings, handleSave, saved, tabs, plans, showDeleteModal, setShowDeleteModal, handleDeleteAccount, showPhotoOptions, setShowPhotoOptions, photoUrl, setPhotoUrl, usernameError, usernameValid, showUsernameTooltip, isEditingUsername, handleUsernameChange, handleUsernameFocus, handleUsernameBlur, handleFileUpload, handlePhotoUrl, removePhoto, liveStats, isRefreshing, handleRefresh, hoveredTab, setHoveredTab, showPassword, setShowPassword, sessionDropdownOpen, setSessionDropdownOpen, retentionDropdownOpen, setRetentionDropdownOpen, sessionTimeoutOptions, dataRetentionOptions, planHovered, setPlanHovered, savingState, lastUpdated, showApiKey, setShowApiKey, newKeyName, setNewKeyName, showNewKeyModal, setShowNewKeyModal, newWebhookUrl, setNewWebhookUrl, showNewWebhookModal, setShowNewWebhookModal, toastNotification, setToastNotification, isFirstVisit }: any) {
  const mainContentClass = useMainContentClass()
  
  return (
    <div className={mainContentClass}>
      {/* Enhanced Header */}
      <motion.div 
        className="bg-white border-b px-6 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/console"
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg  hover:scale-105"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <div className="flex items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <SettingsIcon className="h-8 w-8 text-primary" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold font-space-grotesk text-gray-900">
                  Settings
                </h1>
                <p className="text-gray-600 font-segoe text-sm mt-1">
                  Manage your account, plan, and preferences
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Refresh Button */}
            <motion.button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className={`h-5 w-5 text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`} />
            </motion.button>


          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-2 text-xs text-gray-500 font-segoe">
          Last updated: {lastUpdated.toLocaleString()}
        </div>
      </motion.div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Enhanced Settings Navigation */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-1">
                  Settings Menu
                </h3>
                <p className="text-xs text-gray-500 font-segoe">
                  Configure your account preferences
                </p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab: any, index: number) => {
                  const IconComponent = tab.icon
                  const isActive = activeTab === tab.id
                  const isHovered = hoveredTab === tab.id
                  
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      onMouseEnter={() => setHoveredTab(tab.id)}
                      onMouseLeave={() => setHoveredTab(null)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-xl text-sm relative overflow-hidden ${
                        isActive
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-50 hover:shadow-md'
                      }`}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={isFirstVisit ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={isFirstVisit ? { 
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: "easeOut"
                      } : { duration: 0 }}
                      layout={false}
                    >
                      {/* Background gradient for hover */}
                      <AnimatePresence>
                        {isHovered && !isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                      
                      <div className="relative z-10 flex items-center w-full">
                        <div className="mr-3">
                          <IconComponent className={`h-5 w-5 transition-colors duration-200 ${
                            isActive ? 'text-white' : 'text-gray-500'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="font-medium transition-colors duration-200">{tab.name}</div>
                          <div className={`text-xs mt-0.5 transition-colors duration-200 ${
                            isActive ? 'text-white/80' : 'text-gray-400'
                          }`}>
                            {tab.description}
                          </div>
                        </div>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.button>
                  )
                })}
              </nav>
              
              {/* Quick Stats */}
              <motion.div 
                className="mt-6 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg"
                initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isFirstVisit ? { delay: 0.5 } : { duration: 0 }}
              >
                <div className="text-xs font-medium text-gray-700 mb-2">Quick Stats</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Last backup:</span>
                    <span className="font-medium">{liveStats.lastBackup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security score:</span>
                    <span className="font-medium text-green-600">98%</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            {/* Enhanced Account Settings */}
            {activeTab === 'account' && (
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isFirstVisit ? { duration: 0.5 } : { duration: 0 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <User className="h-6 w-6 text-primary mr-3" />
                    </motion.div>
                    <div>
                      <h2 className="text-lg font-bold font-space-grotesk text-gray-900">
                        Account Information
                      </h2>
                      <p className="text-sm text-gray-600 font-segoe">
                        Manage your personal details and profile
                      </p>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="flex items-center text-sm text-gray-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Activity className="h-4 w-4 mr-1 text-green-500" />
                    <span>Profile Active</span>
                  </motion.div>
                </div>
                
                {/* Profile Photo Section */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Profile Photo
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                        {profile.avatar ? (
                          <img 
                            src={profile.avatar} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="h-8 w-8 text-white" />
                        )}
                      </div>
                      <button
                        onClick={() => setShowPhotoOptions(!showPhotoOptions)}
                        className="absolute -bottom-1 -right-1 w-6 h-6 gradient-bg text-white rounded-full flex items-center justify-center hover:opacity-90 transition-colors duration-200"
                      >
                        <Camera className="h-3 w-3" />
                      </button>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 font-segoe mb-2">
                        Upload a profile photo or provide a URL. Recommended size: 200x200px
                      </p>
                      <p className="text-xs text-gray-500 font-segoe">
                        Supported formats: JPEG, PNG, GIF, WebP (max 5MB)
                      </p>
                    </div>
                  </div>

                  {/* Photo Upload Options */}
                  {showPhotoOptions && (
                    <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <div className="space-y-3">
                        {/* File Upload */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload from Computer
                          </label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="file"
                              accept=".jpg,.jpeg,.png,.gif,.webp"
                              onChange={handleFileUpload}
                              className="hidden"
                              id="photo-upload"
                            />
                            <label
                              htmlFor="photo-upload"
                              className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center text-sm"
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Choose File
                            </label>
                          </div>
                        </div>

                        {/* URL Input */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Or use Image URL
                          </label>
                          <div className="flex space-x-2">
                            <input
                              type="url"
                              value={photoUrl}
                              onChange={(e) => setPhotoUrl(e.target.value)}
                              placeholder="https://example.com/image.jpg"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
                            />
                            <button
                              onClick={handlePhotoUrl}
                              className="gradient-bg text-white px-3 py-2 rounded-lg font-medium hover:opacity-90 transition-colors duration-200 flex items-center text-sm"
                            >
                              <LinkIcon className="h-4 w-4 mr-1" />
                              Use URL
                            </button>
                          </div>
                        </div>

                        {/* Remove Photo */}
                        {profile.avatar && (
                          <button
                            onClick={removePhoto}
                            className="text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            Remove Photo
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-segoe">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => setProfile((prev: any) => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-segoe bg-gradient-to-r from-gray-50 to-white"
                          placeholder="Enter your full name"
                        />
                        <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-segoe">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile((prev: any) => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-segoe bg-gradient-to-r from-gray-50 to-white"
                          placeholder="Enter your email address"
                        />
                        <Globe className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-segoe">
                        Company
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profile.company}
                          onChange={(e) => setProfile((prev: any) => ({ ...prev, company: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-segoe bg-gradient-to-r from-gray-50 to-white"
                          placeholder="Enter your company name"
                        />
                        <Database className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-segoe">
                        Role
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={profile.role}
                          onChange={(e) => setProfile((prev: any) => ({ ...prev, role: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-segoe bg-gradient-to-r from-gray-50 to-white"
                          placeholder="Enter your role"
                        />
                        <Users className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </motion.div>
                                     </div>
                  
                  {/* Enhanced Username Field */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-segoe">
                      Username
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={profile.username}
                        onChange={(e) => handleUsernameChange(e.target.value.toLowerCase())}
                        onFocus={handleUsernameFocus}
                        onBlur={handleUsernameBlur}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none font-segoe bg-gradient-to-r from-gray-50 to-white ${
                          !isEditingUsername ? 'border-green-300 bg-green-50 focus:border-green-500' :
                          profile.username && usernameValid ? 'border-green-500 bg-white focus:border-green-600' : 
                          profile.username && !usernameValid ? 'border-red-500 bg-red-50 focus:border-red-600' : 
                          'border-gray-200 bg-white focus:border-green-500'
                        }`}
                        placeholder="Enter username"
                      />
                      <Key className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                    
                    {/* Enhanced Status indicator */}
                    <AnimatePresence>
                      {profile.username && isEditingUsername && (
                        <motion.div 
                          className={`mt-2 text-sm font-medium flex items-center ${
                            usernameValid ? 'text-green-600' : 'text-red-600'
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {usernameValid ? (
                            <Check className="h-4 w-4 mr-1" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 mr-1" />
                          )}
                          {usernameValid ? 'Username available' : 'Username invalid'}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Enhanced tooltip popup */}
                    <AnimatePresence>
                      {showUsernameTooltip && (
                        <motion.div 
                          className="absolute top-full left-0 mt-2 w-full max-w-sm bg-white border-2 border-gray-200 rounded-xl shadow-xl p-4 z-10"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-xs text-gray-700 font-segoe">
                            <p className="font-medium mb-3 text-gray-900">Username requirements:</p>
                            <ul className="space-y-2">
                              <li className={`flex items-center transition-colors duration-200 ${
                                profile.username && profile.username.length >= 6 ? 'text-green-600' : 'text-gray-500'
                              }`}>
                                <span className="mr-2 w-4 text-center">{profile.username && profile.username.length >= 6 ? '✓' : '•'}</span>
                                Minimum 6 characters
                              </li>
                              <li className={`flex items-center transition-colors duration-200 ${
                                profile.username && /^[a-z]/.test(profile.username) ? 'text-green-600' : 'text-gray-500'
                              }`}>
                                <span className="mr-2 w-4 text-center">{profile.username && /^[a-z]/.test(profile.username) ? '✓' : '•'}</span>
                                Must start with a letter
                              </li>
                              <li className={`flex items-center transition-colors duration-200 ${
                                profile.username && /^[a-z0-9-]+$/.test(profile.username) ? 'text-green-600' : 'text-gray-500'
                              }`}>
                                <span className="mr-2 w-4 text-center">{profile.username && /^[a-z0-9-]+$/.test(profile.username) ? '✓' : '•'}</span>
                                Only lowercase letters, numbers, and dashes
                              </li>
                              <li className={`flex items-center transition-colors duration-200 ${
                                profile.username && /[a-z0-9]/.test(profile.username) ? 'text-green-600' : 'text-gray-500'
                              }`}>
                                <span className="mr-2 w-4 text-center">{profile.username && /[a-z0-9]/.test(profile.username) ? '✓' : '•'}</span>
                                At least one letter or number required
                              </li>
                              <li className={`flex items-center transition-colors duration-200 ${
                                profile.username && profile.username.length > 0 && !(/--/.test(profile.username)) ? 'text-green-600' : 'text-gray-500'
                              }`}>
                                <span className="mr-2 w-4 text-center">{profile.username && profile.username.length > 0 && !(/--/.test(profile.username)) ? '✓' : '•'}</span>
                                No consecutive dashes
                              </li>
                              <li className={`flex items-center transition-colors duration-200 ${
                                profile.username && profile.username.length <= 64 && profile.username.length > 0 ? 'text-green-600' : 'text-gray-500'
                              }`}>
                                <span className="mr-2 w-4 text-center">{profile.username && profile.username.length <= 64 && profile.username.length > 0 ? '✓' : '•'}</span>
                                Maximum 64 characters ({profile.username.length}/64)
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  {/* Enhanced Save Button */}
                  <motion.button
                    onClick={() => handleSave('account')}
                    disabled={savingState === 'account'}
                    className="gradient-bg text-white px-6 py-3 rounded-xl font-medium hover:opacity-90  flex items-center text-sm shadow-lg hover:shadow-xl disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {savingState === 'account' ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Delete Account Section */}
                <div className="mt-8 p-6 border border-red-200 rounded-lg bg-red-50">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold font-space-grotesk text-red-900 mb-2">
                        Delete Account
                      </h3>
                      <div className="text-sm text-red-700 font-segoe mb-4 space-y-2">
                        <p>
                          <strong>Warning:</strong> This action is permanent and cannot be undone.
                        </p>
                        <p>
                          Deleting your account will:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Permanently delete all your data and projects</li>
                          <li>Cancel your current subscription</li>
                          <li>Remove access to all generated datasets</li>
                          <li>Delete your account information and settings</li>
                        </ul>
                        <p>
                          <strong>This action cannot be reversed.</strong> Please make sure you have downloaded any important data before proceeding.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowDeleteModal(true)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center text-sm"
                      >
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Enhanced Plan & Billing */}
            {activeTab === 'plan' && (
              <motion.div 
                className="space-y-6"
                initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isFirstVisit ? { duration: 0.5 } : { duration: 0 }}
              >
                {/* Current Plan */}
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CreditCard className="h-6 w-6 text-primary mr-3" />
                      </motion.div>
                      <div>
                        <h2 className="text-lg font-bold font-space-grotesk text-gray-900">
                          Current Plan
                        </h2>
                        <p className="text-sm text-gray-600 font-segoe">
                          Your active subscription details
                        </p>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="flex items-center text-sm text-gray-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      <span>Active</span>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="border-2 border-primary rounded-xl p-6 bg-gradient-to-br from-primary/5 to-secondary/5"
                    initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={isFirstVisit ? { delay: 0.3 } : { duration: 0 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold font-space-grotesk text-gray-900">
                        {plan.name} Plan
                      </h3>
                      <div className="text-2xl font-bold font-space-grotesk text-primary">
                        ${plan.price}/{plan.billingCycle}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-3">
                        <span className="font-medium">Data Usage</span>
                        <span className="font-bold">{((plan.dataUsed / plan.dataLimit) * 100).toFixed(1)}% used</span>
                      </div>
                      <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full relative"
                          initial={isFirstVisit ? { width: 0 } : { width: `${(plan.dataUsed / plan.dataLimit) * 100}%` }}
                          animate={{ width: `${(plan.dataUsed / plan.dataLimit) * 100}%` }}
                          transition={isFirstVisit ? { duration: 1.5, ease: "easeOut" } : { duration: 0 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>{(plan.dataUsed / 1000000).toFixed(1)}M records used</span>
                        <span>{((plan.dataLimit - plan.dataUsed) / 1000000).toFixed(1)}M remaining</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature: string, index: number) => (
                        <motion.li 
                          key={index} 
                          className="flex items-center text-sm text-gray-600"
                          initial={isFirstVisit ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={isFirstVisit ? { delay: 0.6 + index * 0.1 } : { duration: 0 }}
                        >
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Available Plans */}
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={isFirstVisit ? { delay: 0.2 } : { duration: 0 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold font-space-grotesk text-gray-900">
                        Available Plans
                      </h2>
                      <p className="text-sm text-gray-600 font-segoe">
                        Choose the plan that fits your needs
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((planOption: any, index: number) => (
                      <motion.div
                        key={planOption.name}
                        className={`relative border-2 rounded-xl p-6 transition-all duration-300 flex flex-col h-full ${
                          planOption.name === plan.name
                            ? 'border-primary bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg'
                            : 'border-gray-200 hover:border-primary/50 hover:shadow-lg bg-white'
                        }`}
                        onMouseEnter={() => setPlanHovered(planOption.name)}
                        onMouseLeave={() => setPlanHovered(null)}
                        whileHover={{ scale: 1.02, y: -4 }}
                        initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={isFirstVisit ? { delay: 0.4 + index * 0.1 } : { duration: 0 }}
                      >
                        {/* Popular Badge */}
                        {planOption.popular && (
                          <motion.div 
                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold"
                            initial={isFirstVisit ? { scale: 0 } : { scale: 1 }}
                            animate={{ scale: 1 }}
                            transition={isFirstVisit ? { delay: 0.7 + index * 0.1 } : { duration: 0 }}
                          >
                            Most Popular
                          </motion.div>
                        )}
                        
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                            {planOption.name}
                          </h3>
                          <div className="text-3xl font-bold font-space-grotesk text-primary mb-1">
                            ${planOption.price}
                          </div>
                          <div className="text-sm text-gray-500">per month</div>
                        </div>
                        
                        <ul className="space-y-3 mb-6 flex-grow">
                          {planOption.features.map((feature: string, featureIndex: number) => (
                            <motion.li 
                              key={featureIndex} 
                              className="flex items-center text-sm text-gray-600"
                              initial={isFirstVisit ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={isFirstVisit ? { delay: 0.8 + index * 0.1 + featureIndex * 0.05 } : { duration: 0 }}
                            >
                              <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto">
                          {planOption.name === plan.name ? (
                            <motion.button 
                              disabled
                              className="w-full bg-gray-100 text-gray-500 px-4 py-3 rounded-xl font-medium cursor-not-allowed text-sm flex items-center justify-center"
                              whileHover={{ scale: 1.02 }}
                            >
                              <Check className="h-4 w-4 mr-2" />
                              Current Plan
                            </motion.button>
                          ) : planOption.tier > plan.tier ? (
                            <motion.button 
                              className="w-full gradient-bg text-white px-4 py-3 rounded-xl font-medium hover:opacity-90 text-sm shadow-lg hover:shadow-xl flex items-center justify-center"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <TrendingUp className="h-4 w-4 mr-2" />
                              Upgrade
                            </motion.button>
                          ) : (
                            <motion.button 
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl flex items-center justify-center"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <TrendingDown className="h-4 w-4 mr-2" />
                              Downgrade
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Enhanced API Settings */}
            {activeTab === 'api' && (
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isFirstVisit ? { duration: 0.5 } : { duration: 0 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Key className="h-6 w-6 text-primary mr-3" />
                    </motion.div>
                    <div>
                      <h2 className="text-lg font-bold font-space-grotesk text-gray-900">
                        API Settings
                      </h2>
                      <p className="text-sm text-gray-600 font-segoe">
                        Manage API keys, webhooks, and integration settings
                      </p>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="flex items-center text-sm text-gray-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Activity className="h-4 w-4 mr-1 text-green-500" />
                    <span>{apiSettings.apiKeys.length} active keys</span>
                  </motion.div>
                </div>

                {/* API Keys Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-md font-semibold font-space-grotesk text-gray-900">
                      API Keys
                    </h3>
                    <motion.button
                      onClick={() => setShowNewKeyModal(true)}
                      className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90  flex items-center text-sm shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Generate New Key
                    </motion.button>
                  </div>
                  
                  <div className="space-y-4">
                    {apiSettings.apiKeys.map((key: any, index: number) => (
                      <motion.div
                        key={key.id}
                        className="border border-gray-200 rounded-xl p-4 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-medium text-gray-900 font-segoe">{key.name}</h4>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                key.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                              }`}>
                                {key.status}
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-2 mb-2">
                              <code className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-mono">
                                {showApiKey === key.id ? key.key : `${key.key.substring(0, 12)}...${key.key.substring(key.key.length - 4)}`}
                              </code>
                              <motion.button
                                onClick={() => setShowApiKey(showApiKey === key.id ? null : key.id)}
                                className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {showApiKey === key.id ? <EyeOff className="h-4 w-4 text-gray-600" /> : <Eye className="h-4 w-4 text-gray-600" />}
                              </motion.button>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>Created: {key.created}</span>
                              <span>Last used: {key.lastUsed}</span>
                              <span>Requests: {key.requests.toLocaleString()}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-xs text-gray-600">Permissions:</span>
                              {key.permissions.map((permission: string) => (
                                <span key={permission} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                  {permission}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <motion.button
                              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Rate Limits Section */}
                <div className="mb-8">
                  <h3 className="text-md font-semibold font-space-grotesk text-gray-900 mb-4">
                    Rate Limits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="border border-gray-200 rounded-xl p-4 bg-gradient-to-br from-blue-50 to-blue-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Per Minute</span>
                        <Clock className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 font-space-grotesk">
                        {apiSettings.rateLimits.requestsPerMinute}
                      </div>
                      <div className="text-xs text-gray-600">requests/min</div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="border border-gray-200 rounded-xl p-4 bg-gradient-to-br from-green-50 to-green-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Per Hour</span>
                        <Activity className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="text-2xl font-bold text-green-600 font-space-grotesk">
                        {apiSettings.rateLimits.requestsPerHour.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600">requests/hour</div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="border border-gray-200 rounded-xl p-4 bg-gradient-to-br from-purple-50 to-purple-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Per Day</span>
                        <TrendingUp className="h-4 w-4 text-purple-500" />
                      </div>
                      <div className="text-2xl font-bold text-purple-600 font-space-grotesk">
                        {apiSettings.rateLimits.requestsPerDay.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600">requests/day</div>
                    </motion.div>
                  </div>
                </div>

                {/* Webhooks Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-md font-semibold font-space-grotesk text-gray-900">
                      Webhooks
                    </h3>
                    <motion.button
                      onClick={() => setShowNewWebhookModal(true)}
                      className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90  flex items-center text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Webhook
                    </motion.button>
                  </div>
                  
                  <div className="space-y-4">
                    {apiSettings.webhooks.map((webhook: any, index: number) => (
                      <motion.div
                        key={webhook.id}
                        className="border border-gray-200 rounded-xl p-4 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <code className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-mono">
                                {webhook.url}
                              </code>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                webhook.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                              }`}>
                                {webhook.status}
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                              <span>Last triggered: {webhook.lastTriggered}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-600">Events:</span>
                              {webhook.events.map((event: string) => (
                                <span key={event} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                                  {event}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <motion.button
                              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Security Settings */}
                <div className="mb-8">
                  <h3 className="text-md font-semibold font-space-grotesk text-gray-900 mb-4">
                    Security & Access Control
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Allowed Origins */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                        Allowed Origins (CORS)
                      </label>
                      <div className="space-y-2">
                        {apiSettings.allowedOrigins.map((origin: string, index: number) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                            <code className="text-sm font-mono">{origin}</code>
                            <motion.button
                              className="text-red-600 hover:text-red-700"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="h-3 w-3" />
                            </motion.button>
                          </div>
                        ))}
                        <motion.button
                          className="w-full border-2 border-dashed border-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 text-sm"
                          whileHover={{ scale: 1.02 }}
                        >
                          + Add Origin
                        </motion.button>
                      </div>
                    </div>

                    {/* IP Whitelist */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                        IP Whitelist
                      </label>
                      <div className="space-y-2">
                        {apiSettings.ipWhitelist.map((ip: string, index: number) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                            <code className="text-sm font-mono">{ip}</code>
                            <motion.button
                              className="text-red-600 hover:text-red-700"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="h-3 w-3" />
                            </motion.button>
                          </div>
                        ))}
                        <motion.button
                          className="w-full border-2 border-dashed border-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 text-sm"
                          whileHover={{ scale: 1.02 }}
                        >
                          + Add IP Address
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Save Button */}
                <motion.button
                  onClick={() => handleSave('api')}
                  disabled={savingState === 'api'}
                  className="gradient-bg text-white px-6 py-3 rounded-xl font-medium hover:opacity-90  flex items-center text-sm shadow-lg hover:shadow-xl disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {savingState === 'api' ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save API Settings
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold font-space-grotesk text-gray-900 mb-4">
                  Notification Preferences
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-600">Receive general email notifications</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.emailNotifications}
                      onChange={(e) => setNotifications((prev: any) => ({ ...prev, emailNotifications: e.target.checked }))}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Project Completion</h3>
                      <p className="text-sm text-gray-600">Get notified when data generation completes</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.projectCompletion}
                      onChange={(e) => setNotifications((prev: any) => ({ ...prev, projectCompletion: e.target.checked }))}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Usage Alerts</h3>
                      <p className="text-sm text-gray-600">Alerts when approaching plan limits</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.usageAlerts}
                      onChange={(e) => setNotifications((prev: any) => ({ ...prev, usageAlerts: e.target.checked }))}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Marketing Emails</h3>
                      <p className="text-sm text-gray-600">Product updates and promotional content</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.marketingEmails}
                      onChange={(e) => setNotifications((prev: any) => ({ ...prev, marketingEmails: e.target.checked }))}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Security Alerts</h3>
                      <p className="text-sm text-gray-600">Important security and account notifications</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.securityAlerts}
                      onChange={(e) => setNotifications((prev: any) => ({ ...prev, securityAlerts: e.target.checked }))}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  
                  <button
                    onClick={handleSave}
                    className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center text-sm"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </button>
                </div>
              </div>
            )}

            {/* Enhanced Security */}
            {activeTab === 'security' && (
              <motion.div 
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${
                  sessionDropdownOpen || retentionDropdownOpen ? 'relative z-[40]' : ''
                }`}
                initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isFirstVisit ? { duration: 0.5 } : { duration: 0 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Shield className="h-6 w-6 text-primary mr-3" />
                    </motion.div>
                    <div>
                      <h2 className="text-lg font-bold font-space-grotesk text-gray-900">
                        Security Settings
                      </h2>
                      <p className="text-sm text-gray-600 font-segoe">
                        Protect your account with advanced security features
                      </p>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="flex items-center text-sm text-gray-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Lock className="h-4 w-4 mr-1 text-green-500" />
                    <span>Secure</span>
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-6"
                  initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={isFirstVisit ? { delay: 0.3 } : { duration: 0 }}
                >
                  {/* Two-Factor Authentication */}
                  <motion.div 
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center">
                      <Smartphone className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900 font-segoe">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600 font-segoe">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <motion.label 
                      className="relative inline-flex items-center cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                    >
                      <input
                        type="checkbox"
                        checked={privacy.twoFactorAuth}
                        onChange={(e) => setPrivacy((prev: any) => ({ ...prev, twoFactorAuth: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 peer-checked:bg-primary"></div>
                    </motion.label>
                  </motion.div>
                  
                  {/* Session Timeout Dropdown */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={sessionDropdownOpen ? 'relative z-[70]' : ''}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                      Session Timeout
                    </label>
                    <div className="relative dropdown-container">
                      <button
                        onClick={() => {
                          setSessionDropdownOpen(!sessionDropdownOpen)
                          setRetentionDropdownOpen(false)
                        }}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-segoe bg-gradient-to-r from-gray-50 to-white text-left flex items-center justify-between hover:border-green-400"
                      >
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <span className="text-gray-900">
                              {sessionTimeoutOptions.find((opt: any) => opt.value === privacy.sessionTimeout)?.label}
                            </span>
                            <span className="text-sm text-gray-500 ml-2">
                              ({sessionTimeoutOptions.find((opt: any) => opt.value === privacy.sessionTimeout)?.description})
                            </span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: sessionDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {sessionDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-[60] overflow-hidden"
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            {sessionTimeoutOptions.map((option: any, index: number) => (
                              <motion.button
                                key={option.value}
                                onClick={() => {
                                  setPrivacy((prev: any) => ({ ...prev, sessionTimeout: option.value }))
                                  setSessionDropdownOpen(false)
                                }}
                                className={`w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5  ${
                                  privacy.sessionTimeout === option.value ? 'bg-primary/10 text-primary' : 'text-gray-700'
                                }`}
                                whileHover={{ x: 4 }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium font-segoe">{option.label}</div>
                                    <div className="text-sm text-gray-500">{option.description}</div>
                                  </div>
                                  {privacy.sessionTimeout === option.value && (
                                    <Check className="h-4 w-4 text-primary" />
                                  )}
                                </div>
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-segoe">
                      Automatically log out after this period of inactivity
                    </p>
                  </motion.div>
                  
                  {/* Data Retention Dropdown */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={retentionDropdownOpen ? 'relative z-[60]' : ''}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-3 font-segoe">
                      Data Retention Period
                    </label>
                    <div className="relative dropdown-container">
                      <button
                        onClick={() => {
                          setRetentionDropdownOpen(!retentionDropdownOpen)
                          setSessionDropdownOpen(false)
                        }}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-segoe bg-gradient-to-r from-gray-50 to-white text-left flex items-center justify-between hover:border-green-400"
                      >
                        <div className="flex items-center">
                          <Database className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <span className="text-gray-900">
                              {dataRetentionOptions.find((opt: any) => opt.value === privacy.dataRetention)?.label}
                            </span>
                            <span className="text-sm text-gray-500 ml-2">
                              ({dataRetentionOptions.find((opt: any) => opt.value === privacy.dataRetention)?.description})
                            </span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: retentionDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {retentionDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-[50] overflow-hidden"
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            {dataRetentionOptions.map((option: any, index: number) => (
                              <motion.button
                                key={option.value}
                                onClick={() => {
                                  setPrivacy((prev: any) => ({ ...prev, dataRetention: option.value }))
                                  setRetentionDropdownOpen(false)
                                }}
                                className={`w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5  ${
                                  privacy.dataRetention === option.value ? 'bg-primary/10 text-primary' : 'text-gray-700'
                                }`}
                                whileHover={{ x: 4 }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium font-segoe">{option.label}</div>
                                    <div className="text-sm text-gray-500">{option.description}</div>
                                  </div>
                                  {privacy.dataRetention === option.value && (
                                    <Check className="h-4 w-4 text-primary" />
                                  )}
                                </div>
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-segoe">
                      How long to keep your data before automatic deletion
                    </p>
                  </motion.div>
                  
                  {/* Audit Logs */}
                  <motion.div 
                    className={`flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl ${
                      sessionDropdownOpen || retentionDropdownOpen ? 'relative z-[10]' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center">
                      <Activity className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900 font-segoe">Audit Logs</h3>
                        <p className="text-sm text-gray-600 font-segoe">Keep detailed logs of account activity</p>
                      </div>
                    </div>
                    <motion.label 
                      className="relative inline-flex items-center cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                    >
                      <input
                        type="checkbox"
                        checked={privacy.auditLogs}
                        onChange={(e) => setPrivacy((prev: any) => ({ ...prev, auditLogs: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 peer-checked:bg-primary"></div>
                    </motion.label>
                  </motion.div>
                  
                  {/* Enhanced Save Button */}
                  <motion.button
                    onClick={() => handleSave('security')}
                    disabled={savingState === 'security'}
                    className="gradient-bg text-white px-6 py-3 rounded-xl font-medium hover:opacity-90  flex items-center text-sm shadow-lg hover:shadow-xl disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {savingState === 'security' ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Security Settings
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Backdrop */}
      {(sessionDropdownOpen || retentionDropdownOpen) && (
        <div 
          className="fixed inset-0 z-[30] bg-black bg-opacity-10"
          onClick={() => {
            setSessionDropdownOpen(false)
            setRetentionDropdownOpen(false)
          }}
        />
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-space-grotesk text-gray-900">
                  Confirm Account Deletion
                </h3>
                <p className="text-sm text-gray-600 font-segoe">
                  This action cannot be undone
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-700 font-segoe mb-3">
                Are you absolutely sure you want to delete your account? This will:
              </p>
              <ul className="text-sm text-gray-600 font-segoe space-y-1 mb-4">
                <li>• Permanently delete all your data and projects</li>
                <li>• Cancel your subscription immediately</li>
                <li>• Remove all generated datasets</li>
                <li>• Delete your account permanently</li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-700 font-segoe font-medium">
                  <strong>Warning:</strong> This action is irreversible. All data will be lost forever.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Delete Account
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Toast Notification */}
      <AnimatePresence>
        {toastNotification.show && (
          <motion.div
            initial={{ opacity: 0, x: 400, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 400, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-[100] max-w-sm w-full"
          >
            <div className={`rounded-xl p-4 shadow-2xl border-l-4 ${
              toastNotification.type === 'success' 
                ? 'bg-white border-l-green-500' 
                : 'bg-white border-l-red-500'
            }`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {toastNotification.type === 'success' ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"
                    >
                      <Check className="h-4 w-4 text-green-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"
                    >
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                    </motion.div>
                  )}
                </div>
                
                <div className="ml-3 flex-1">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`text-sm font-bold font-space-grotesk ${
                      toastNotification.type === 'success' ? 'text-green-900' : 'text-red-900'
                    }`}
                  >
                    {toastNotification.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-sm font-segoe mt-1 ${
                      toastNotification.type === 'success' ? 'text-green-700' : 'text-red-700'
                    }`}
                  >
                    {toastNotification.message}
                  </motion.p>
                </div>
                
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setToastNotification((prev: any) => ({ ...prev, show: false }))}
                  className={`ml-2 p-1 rounded-lg transition-colors duration-200 ${
                    toastNotification.type === 'success' 
                      ? 'hover:bg-green-100 text-green-600' 
                      : 'hover:bg-red-100 text-red-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Progress bar */}
              <motion.div 
                className={`mt-3 h-1 rounded-full ${
                  toastNotification.type === 'success' ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className={`h-full rounded-full ${
                    toastNotification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 