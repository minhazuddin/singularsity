'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useSidebar } from './ConsoleSidebar'
import { 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Database, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X,
  Brain,
  Shield,
  Zap,
  BarChart3,
  Users,
  Building,
  Lightbulb,
  FileText,
  HelpCircle,
  Mail,
  CreditCard,
  Eye,
  Link as LinkIcon,
  CheckCircle
} from 'lucide-react'

const Navigation = () => {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  // Check if we're on a console page
  const isConsolePage = pathname?.startsWith('/console')
  
  // Get sidebar state - only available on console pages
  let sidebarState = null
  try {
    if (isConsolePage) {
      sidebarState = useSidebar()
    }
  } catch (error) {
    // useSidebar hook not available (not in SidebarProvider context)
    sidebarState = null
  }

  // Mock user data for console pages
  const userData = {
    dataUsed: 2450000,
    dataLimit: 5000000,
    projectsCount: 12,
    downloadsCount: 48,
    plan: 'Professional'
  }

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn')
      const email = localStorage.getItem('userEmail')
      setIsLoggedIn(!!loggedIn)
      setUserEmail(email)
    }

    checkAuth()

    // Listen for storage changes (cross-tab synchronization)
    const handleStorageChange = () => {
      checkAuth()
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    setIsLoggedIn(false)
    setUserEmail(null)
    window.location.href = '/'
  }

  // Navigation items for non-console pages
  const navItems = [
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Synthetic Data Generation',
          href: '/services/data-generation',
          description: 'Generate high-quality synthetic datasets',
          icon: Database
        },
        {
          name: 'AI Model Training',
          href: '/solutions/ai-ml-training',
          description: 'Train models with privacy-preserving data',
          icon: Brain
        },
        {
          name: 'Data Privacy & Security',
          href: '/solutions/privacy-compliance',
          description: 'Ensure compliance and data protection',
          icon: Shield
        },
        {
          name: 'Performance Optimization',
          href: '/solutions/analytics-bi',
          description: 'Optimize model performance and accuracy',
          icon: Zap
        }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Data Generation',
          href: '/services/data-generation',
          description: 'Create synthetic datasets for any use case',
          icon: Database
        },
        {
          name: 'Data Masking',
          href: '/services/data-masking',
          description: 'Protect sensitive data with advanced masking',
          icon: Eye
        },
        {
          name: 'Quality Assurance',
          href: '/services/quality-assurance',
          description: 'Ensure data quality and accuracy',
          icon: CheckCircle
        },
        {
          name: 'API Integration',
          href: '/services/api-integration',
          description: 'Seamless integration with your systems',
          icon: LinkIcon
        }
      ]
    },
    {
      name: 'Use Cases',
      href: '/use-cases',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Healthcare',
          href: '/use-cases/healthcare',
          description: 'HIPAA-compliant synthetic health data',
          icon: Users
        },
        {
          name: 'Financial Services',
          href: '/use-cases/finance',
          description: 'Secure financial data generation',
          icon: BarChart3
        },
        {
          name: 'E-commerce',
          href: '/use-cases/ecommerce',
          description: 'Customer data for retail analytics',
          icon: Building
        },
        {
          name: 'Manufacturing',
          href: '/use-cases/manufacturing',
          description: 'Industrial IoT and sensor data',
          icon: Lightbulb
        }
      ]
    },
    {
      name: 'Resources',
      href: '/support',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Support Center',
          href: '/support',
          description: 'Get help and find answers',
          icon: HelpCircle
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          description: 'Real-world success stories',
          icon: FileText
        },
        {
          name: 'Contact Us',
          href: '/contact',
          description: 'Get in touch with our team',
          icon: Mail
        }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
      hasDropdown: false
    }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo - Positioned at extreme left */}
        <div className="flex-shrink-0">
          <Link href={isConsolePage ? "/console" : "/"} className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Singularsity"
              width={200}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - Only show on non-console pages */}
        {!isConsolePage && (
          <div className="hidden md:block flex-1 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-700 hover:text-primary px-4 py-2 text-base font-medium font-segoe flex items-center transition-all duration-300 rounded-lg hover:bg-gray-50/80 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  {/* Modern Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <>
                        {/* Invisible bridge to prevent dropdown from disappearing */}
                        <div className="absolute top-full left-0 w-80 h-1 bg-transparent" />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-1 w-80 bg-white backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-[9999]"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                        {/* Dropdown Header */}
                        <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-gray-100">
                          <div className="flex items-center">
                            <Sparkles className="h-5 w-5 text-primary mr-2" />
                            <h3 className="font-semibold text-gray-900 font-space-grotesk">
                              {item.name}
                            </h3>
                          </div>
                        </div>

                        {/* Dropdown Items */}
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem, index) => {
                            const IconComponent = dropdownItem.icon
                            return (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className="group flex items-start px-6 py-4 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 relative overflow-hidden"
                                >
                                  {/* Background hover effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                                  
                                  <div className="relative z-10 flex items-start w-full">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                      <IconComponent className="h-5 w-5 text-primary" />
                                    </div>
                                    
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-semibold text-gray-900 font-space-grotesk group-hover:text-primary transition-colors duration-300">
                                          {dropdownItem.name}
                                        </h4>
                                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                      </div>
                                      <p className="text-xs text-gray-600 mt-1 font-segoe">
                                        {dropdownItem.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            )
                          })}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="px-6 py-3 bg-gray-50/50 border-t border-gray-100">
                          <Link 
                            href={item.href}
                            className="text-xs text-primary hover:text-secondary font-medium flex items-center group transition-colors duration-300"
                          >
                            View all {item.name.toLowerCase()}
                            <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Right Side - Login Button / User Menu */}
        <div className="flex items-center space-x-4">
          {/* Data Usage Indicator - Only show on console pages when sidebar is collapsed */}
          {isConsolePage && sidebarState?.isCollapsed && (
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('usage')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center space-x-3 px-4 py-2 rounded-xl border border-gray-200 hover:border-primary/30 bg-white/80 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 relative">
                    <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="3"
                        strokeDasharray={`${(userData.dataUsed / userData.dataLimit) * 100}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Database className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-medium text-gray-900">
                      {((userData.dataUsed / userData.dataLimit) * 100).toFixed(0)}%
                    </div>
                    <div className="text-xs text-gray-500">
                      Data Used
                    </div>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                  activeDropdown === 'usage' ? 'rotate-180' : ''
                }`} />
              </div>

              {/* Data Usage Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'usage' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
                  >
                    {/* Usage Header */}
                    <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Database className="h-5 w-5 text-primary mr-2" />
                          <h3 className="font-semibold text-gray-900 font-space-grotesk">
                            Data Usage
                          </h3>
                        </div>
                        <span className="text-sm font-medium text-primary">
                          {userData.plan}
                        </span>
                      </div>
                    </div>

                    {/* Usage Details */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Records Generated</span>
                            <span>{((userData.dataUsed / userData.dataLimit) * 100).toFixed(1)}% used</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${(userData.dataUsed / userData.dataLimit) * 100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{(userData.dataUsed / 1000000).toFixed(1)}M used</span>
                            <span>{((userData.dataLimit - userData.dataUsed) / 1000000).toFixed(1)}M remaining</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-gray-900 font-space-grotesk">
                              {userData.projectsCount}
                            </div>
                            <div className="text-xs text-gray-600">
                              Active Projects
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-gray-900 font-space-grotesk">
                              {userData.downloadsCount}
                            </div>
                            <div className="text-xs text-gray-600">
                              Downloads
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <button className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                            Upgrade Plan
                          </button>
                          <button className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200">
                            Buy Credits
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* User Authentication */}
          {isLoggedIn ? (
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('user')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-primary/30 bg-white/80 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-sm font-medium text-gray-900">
                    {userEmail?.split('@')[0] || 'User'}
                  </div>
                  <div className="text-xs text-gray-500">
                    {isConsolePage ? 'Console' : 'Account'}
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                  activeDropdown === 'user' ? 'rotate-180' : ''
                }`} />
              </button>

              {/* User Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'user' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
                  >
                    {/* User Header */}
                    <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 font-space-grotesk">
                            {userEmail?.split('@')[0] || 'User'}
                          </div>
                          <div className="text-sm text-gray-600 font-segoe">
                            {userEmail}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Menu Items */}
                    <div className="py-2">
                      {/* Console link - only show when NOT on console page */}
                      {!isConsolePage && (
                        <Link
                          href="/console"
                          className="flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                        >
                          <Database className="h-4 w-4 text-gray-500 group-hover:text-primary mr-3" />
                          <span className="text-sm text-gray-700 group-hover:text-primary font-segoe">
                            Console
                          </span>
                        </Link>
                      )}
                      
                      <Link
                        href="/console/settings?tab=account"
                        className="flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                      >
                        <User className="h-4 w-4 text-gray-500 group-hover:text-primary mr-3" />
                        <span className="text-sm text-gray-700 group-hover:text-primary font-segoe">
                          Profile
                        </span>
                      </Link>
                      
                      <Link
                        href="/console/settings?tab=plan"
                        className="flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                      >
                        <CreditCard className="h-4 w-4 text-gray-500 group-hover:text-primary mr-3" />
                        <span className="text-sm text-gray-700 group-hover:text-primary font-segoe">
                          Billing
                        </span>
                      </Link>
                      
                      <Link
                        href="/console/settings"
                        className="flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                      >
                        <Settings className="h-4 w-4 text-gray-500 group-hover:text-primary mr-3" />
                        <span className="text-sm text-gray-700 group-hover:text-primary font-segoe">
                          Settings
                        </span>
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-300 group"
                      >
                        <LogOut className="h-4 w-4 text-gray-500 group-hover:text-red-600 mr-3" />
                        <span className="text-sm text-gray-700 group-hover:text-red-600 font-segoe">
                          Logout
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 text-sm"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50"
          >
            <div className="px-4 py-6 space-y-4">
              {!isConsolePage && navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {!isLoggedIn && (
                <Link
                  href="/login"
                  className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 