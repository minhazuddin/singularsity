'use client'

import Link from 'next/link'
import { useSidebar } from './ConsoleSidebar'

const ConsoleFooter = () => {
  const { isCollapsed } = useSidebar()
  
  return (
    <footer className={`bg-white border-t border-gray-200 mt-auto ${isCollapsed ? 'ml-[80px]' : 'ml-[280px]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-2 md:mb-0 font-segoe">
            © 2025 Singularsity. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-200 font-segoe">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors duration-200 font-segoe">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors duration-200 font-segoe">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ConsoleFooter 