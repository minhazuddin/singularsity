'use client'

import { useState, createContext, useContext, ReactNode, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Home, 
  Database, 
  FolderOpen, 
  BarChart3, 
  Settings, 
  Plus,
  TrendingUp,
  CreditCard,
  Shield,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Users,
  Download,
  Code,
  Star,
  Crown
} from 'lucide-react'

// Create context for sidebar state
const SidebarContext = createContext<{
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}>({
  isCollapsed: true, // Default to collapsed
  setIsCollapsed: () => {}
})

export const useSidebar = () => useContext(SidebarContext)

// Custom hook for main content positioning
export const useMainContentClass = () => {
  const { isCollapsed } = useSidebar()
  return `pt-16 ${isCollapsed ? 'ml-[80px]' : 'ml-[280px]'} transition-none`
}

// Context Provider Component
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from localStorage immediately to prevent layout shifts
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('console-sidebar-collapsed')
      return savedState !== null ? JSON.parse(savedState) : true
    }
    return true // Default to collapsed for SSR
  })
  
  // Save state to localStorage whenever it changes
  const handleSetIsCollapsed = (collapsed: boolean) => {
    setIsCollapsed(collapsed)
    localStorage.setItem('console-sidebar-collapsed', JSON.stringify(collapsed))
  }
  
  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed: handleSetIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

interface ConsoleSidebarProps {
  user: {
    name: string
    email: string
    plan: string
    dataGenerated: number
    dataLimit: number
    activeProjects?: number
    totalDownloads?: number
  }
}

const ConsoleSidebar = ({ user }: ConsoleSidebarProps) => {
  const pathname = usePathname()
  const { isCollapsed, setIsCollapsed } = useSidebar()
  const hasUserToggledRef = useRef(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Only enable animations after user manually toggles
  const handleToggle = () => {
    if (!hasUserToggledRef.current) {
      hasUserToggledRef.current = true
      setShouldAnimate(true)
    }
    setIsCollapsed(!isCollapsed)
  }

  // Get plan icon based on user's plan
  const getPlanIcon = (planName: string) => {
    const plan = planName.toLowerCase()
    if (plan.includes('starter') || plan.includes('free')) {
      return Star
    } else if (plan.includes('professional') || plan.includes('pro')) {
      return Zap
    } else if (plan.includes('enterprise')) {
      return Crown
    }
    // Default fallback
    return Users
  }

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/console',
      icon: Home,
      description: 'Overview & stats'
    },
    {
      name: 'Generate Data',
      href: '/console/generate',
      icon: Plus,
      description: 'Create new datasets',
      highlight: true
    },
    {
      name: 'Projects',
      href: '/console/projects',
      icon: FolderOpen,
      description: 'Manage datasets'
    },
    {
      name: 'Analytics',
      href: '/console/analytics',
      icon: BarChart3,
      description: 'Insights & reports'
    },
    {
      name: 'API',
      href: '/console/api',
      icon: Code,
      description: 'API docs & testing'
    },
    {
      name: 'Settings',
      href: '/console/settings',
      icon: Settings,
      description: 'Account & billing'
    }
  ]

  const quickActions = [
    {
      name: 'Upgrade Plan',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-50 hover:bg-green-100',
      action: () => window.location.href = '/console/settings'
    },
    {
      name: 'Buy Credits',
      icon: CreditCard,
      color: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
      action: () => console.log('Buy credits')
    },
    {
      name: 'Help Center',
      icon: HelpCircle,
      color: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
      action: () => console.log('Help center')
    }
  ]

  const usagePercentage = (user.dataGenerated / user.dataLimit) * 100

  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-40 flex flex-col ${
        shouldAnimate ? 'transition-all duration-300 ease-in-out' : ''
      }`}
      style={{ width: isCollapsed ? '80px' : '280px' }}
    >
      {/* Collapse Toggle */}
      <button
        onClick={handleToggle}
        className="absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3 text-gray-600" />
        ) : (
          <ChevronLeft className="h-3 w-3 text-gray-600" />
        )}
      </button>

      {/* User Info */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              {(() => {
                const PlanIcon = getPlanIcon(user.plan)
                return <PlanIcon className="h-4 w-4 text-white" />
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate font-garnett">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 truncate font-segoe">
                {user.plan} Plan
              </p>
            </div>
          </div>

          {/* Usage Progress */}
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Data Usage</span>
              <span>{usagePercentage.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${usagePercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{(user.dataGenerated / 1000000).toFixed(1)}M used</span>
              <span>{((user.dataLimit - user.dataGenerated) / 1000000).toFixed(1)}M left</span>
            </div>
          </div>

          {/* Projects & Downloads Stats */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link 
              href="/console/projects"
              className="bg-gray-50 rounded-lg p-2 text-center hover:bg-gray-100 cursor-pointer group"
            >
              <div className="flex items-center justify-center mb-1">
                <FolderOpen className="h-3 w-3 text-primary group-hover:scale-110" />
              </div>
              <div className="text-sm font-bold text-gray-900 font-garnett group-hover:text-primary">
                {user.activeProjects || 12}
              </div>
              <div className="text-xs text-gray-600 font-segoe leading-tight">
                Projects
              </div>
            </Link>
            <Link 
              href="/console/projects?filter=completed"
              className="bg-gray-50 rounded-lg p-2 text-center hover:bg-gray-100 cursor-pointer group"
            >
              <div className="flex items-center justify-center mb-1">
                <Download className="h-3 w-3 text-secondary group-hover:scale-110" />
              </div>
              <div className="text-sm font-bold text-gray-900 font-garnett group-hover:text-secondary">
                {user.totalDownloads || 48}
              </div>
              <div className="text-xs text-gray-600 font-segoe leading-tight">
                Downloads
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`flex-1 p-3 ${isCollapsed ? 'space-y-3' : 'space-y-1'}`}>
        {navigationItems.map((item) => {
          const IconComponent = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center ${isCollapsed ? 'px-3 py-3' : 'px-2 py-2'} text-sm font-medium rounded-lg ${
                isActive
                  ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              } ${item.highlight ? 'ring-1 ring-primary/20' : ''}`}
            >
              <IconComponent className={`h-4 w-4 ${isCollapsed ? 'mx-auto' : 'mr-2'} ${
                isActive ? 'text-primary' : 'text-gray-500 group-hover:text-primary'
              }`} />
              {!isCollapsed && (
                <div className="flex-1">
                  <div className="font-garnett text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500 font-segoe leading-tight">{item.description}</div>
                </div>
              )}
              {!isCollapsed && item.highlight && (
                <Zap className="h-3 w-3 text-yellow-500" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Quick Actions */}
      {!isCollapsed && (
        <div className="p-3 border-t border-gray-100">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-garnett">
            Quick Actions
          </h3>
          <div className="space-y-1">
            {quickActions.map((action) => {
              const IconComponent = action.icon
              return (
                <button
                  key={action.name}
                  onClick={action.action}
                  className={`w-full flex items-center px-2 py-1.5 text-sm font-medium rounded-lg ${action.color}`}
                >
                  <IconComponent className="h-3 w-3 mr-2" />
                  <span className="font-segoe text-xs">{action.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Collapsed Quick Actions */}
      {isCollapsed && (
        <div className="p-2 border-t border-gray-100 space-y-3">
          {quickActions.map((action) => {
            const IconComponent = action.icon
            return (
              <button
                key={action.name}
                onClick={action.action}
                className={`w-full flex items-center justify-center p-3 rounded-lg ${action.color}`}
                title={action.name}
              >
                <IconComponent className="h-3 w-3" />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ConsoleSidebar 