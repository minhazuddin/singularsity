'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Image
                src="/logo.svg"
                alt="Singularsity"
                width={200}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="mt-4 text-gray-300 font-segoe">
                Privacy-first synthetic data platform empowering businesses to generate high-quality artificial data for AI models while maintaining compliance and security.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-space-grotesk mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/data-generation" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Data Generation
                </Link>
              </li>
              <li>
                <Link href="/services/data-masking" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Data Masking
                </Link>
              </li>
              <li>
                <Link href="/services/quality-assurance" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/services/api-integration" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  API Integration
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold font-space-grotesk mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/ai-ml-training" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  AI/ML Training
                </Link>
              </li>
              <li>
                <Link href="/solutions/software-testing" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Software Testing
                </Link>
              </li>
              <li>
                <Link href="/solutions/analytics-bi" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Analytics & BI
                </Link>
              </li>
              <li>
                <Link href="/solutions/privacy-compliance" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Privacy Compliance
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold font-space-grotesk mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Singularsity. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-sm text-gray-400 font-medium">SOC 2 Type II Certified</div>
            <div className="text-sm text-gray-400 font-medium">GDPR Compliant</div>
            <div className="text-sm text-gray-400 font-medium">ISO 27001</div>
            <div className="text-sm text-gray-400 font-medium">HIPAA Compliant</div>
            <div className="text-sm text-gray-400 font-medium">Enterprise Grade Security</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 