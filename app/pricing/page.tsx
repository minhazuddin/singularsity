'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'Perfect for testing and small projects',
      icon: Star,
      features: [
        '10,000 synthetic records/month',
        'Basic data types (tabular)',
        'Standard quality metrics',
        'Email support',
        'API access',
        '7-day data retention'
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonClass: 'gradient-bg text-white hover:opacity-90'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing teams and production use',
      icon: Zap,
      features: [
        '1M synthetic records/month',
        'All data types (tabular, time-series, text)',
        'Advanced quality metrics',
        'Priority support',
        'Full API + SDKs',
        '30-day data retention',
        'Custom privacy levels',
        'Team collaboration (5 users)',
        'Data export in multiple formats'
      ],
      popular: true,
      buttonText: 'Start Free Trial',
      buttonClass: 'gradient-bg text-white hover:opacity-90'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      icon: Crown,
      features: [
        'Unlimited synthetic records',
        'All data types + custom formats',
        'Enterprise quality metrics',
        'Dedicated support manager',
        'On-premise deployment',
        'Unlimited data retention',
        'Custom privacy algorithms',
        'Unlimited team members',
        'SLA guarantees',
        'Custom integrations',
        'Compliance consulting',
        'White-label options'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'gradient-bg text-white hover:opacity-90'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-gradient block">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your synthetic data needs. All plans include our core privacy-preserving features and enterprise-grade security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  
                  
                  
                  className={`relative bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full ${
                    plan.popular ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 font-segoe mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold font-space-grotesk text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 font-segoe ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 font-segoe">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/login?tab=signup'}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center mt-auto ${plan.buttonClass}`}
                  >
                    {plan.buttonText}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 font-segoe">
              Common questions about our pricing and plans
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                Can I upgrade or downgrade my plan anytime?
              </h3>
              <p className="text-gray-600 font-segoe">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.
              </p>
            </motion.div>

            <motion.div
              
              
              
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                What happens if I exceed my plan limits?
              </h3>
              <p className="text-gray-600 font-segoe">
                We'll notify you when you approach your limits. You can either upgrade your plan or purchase additional credits for the current month.
              </p>
            </motion.div>

            <motion.div
              
              
              
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                Do you offer custom enterprise solutions?
              </h3>
              <p className="text-gray-600 font-segoe">
                Absolutely! Our Enterprise plan includes custom solutions, on-premise deployment, and dedicated support. Contact our sales team for a personalized quote.
              </p>
            </motion.div>

            <motion.div
              
              
              
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold font-space-grotesk text-gray-900 mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600 font-segoe">
                Yes! All paid plans come with a 14-day free trial. You can also start with our free Starter plan to test our platform before upgrading.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl font-segoe mb-8 opacity-90">
              Join thousands of developers and organizations already using Singularsity to generate privacy-safe synthetic data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 