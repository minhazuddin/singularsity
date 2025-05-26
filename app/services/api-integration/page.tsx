'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Shield, Globe, CheckCircle, ArrowRight, Cpu, Database, Settings, CloudLightning } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function APIIntegration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              
              
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 mb-6"
            >
              Powerful <span className="text-gradient">API Integration</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-3xl mx-auto"
            >
              Seamlessly integrate synthetic data generation into your applications, pipelines, and workflows with our enterprise-grade REST APIs and SDKs.
            </motion.p>
            
            <motion.div 
              
              
              
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/login?tab=signup" 
                className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                Get API Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                View API Docs
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Enterprise-Grade API Features
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Robust, scalable, and developer-friendly APIs designed for production environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                RESTful API Design
              </h3>
              <p className="text-gray-600 font-segoe">
                Industry-standard REST APIs with JSON responses, comprehensive documentation, and intuitive endpoint structure for rapid integration.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Real-Time Generation
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate synthetic data on-demand with sub-second response times. Stream large datasets directly to your applications without storage overhead.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Authentication & Security
              </h3>
              <p className="text-gray-600 font-segoe">
                OAuth 2.0, API keys, and JWT tokens with rate limiting, IP whitelisting, and comprehensive audit logging for enterprise security.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Batch Processing
              </h3>
              <p className="text-gray-600 font-segoe">
                Generate millions of records efficiently with asynchronous batch jobs, progress tracking, and automated delivery to your storage systems.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Configuration Management
              </h3>
              <p className="text-gray-600 font-segoe">
                Flexible configuration APIs for data schemas, generation parameters, privacy settings, and output formats with version control.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Global CDN & Edge
              </h3>
              <p className="text-gray-600 font-segoe">
                Low-latency access worldwide with edge computing nodes, automatic failover, and 99.99% uptime SLA for mission-critical applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDK & Integration Options Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              SDKs & Integration Options
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Choose from multiple integration approaches tailored to your development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Native SDKs
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Purpose-built libraries for popular programming languages with idiomatic APIs, type safety, and comprehensive error handling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Python SDK with pandas integration
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  JavaScript/TypeScript for Node.js
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Java SDK for enterprise environments
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Go SDK for cloud-native applications
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Platform Integrations
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Pre-built connectors and plugins for popular data platforms, ML frameworks, and cloud services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Apache Airflow operators
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Spark and Databricks connectors
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  AWS, Azure, GCP marketplace
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Snowflake and BigQuery plugins
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Webhook & Event Streaming
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Real-time notifications and event-driven architectures with support for popular streaming platforms.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Webhook notifications for job completion
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Kafka and Pulsar integration
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Custom event handlers
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  CloudEvents standard support
                </li>
              </ul>
            </motion.div>

            <motion.div 
              
              
              
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">
                Command Line Interface
              </h3>
              <p className="text-gray-600 font-segoe mb-6">
                Powerful CLI tools for DevOps teams, CI/CD pipelines, and automated workflows with scripting support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Cross-platform CLI binary
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Docker container support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Shell completion and scripting
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Configuration file management
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Simple Integration Example
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Get started with just a few lines of code
            </p>
          </div>

          <motion.div 
            
            
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-xl p-8 text-white overflow-x-auto"
          >
            <pre className="text-sm font-mono">
{`import singularsity

# Initialize client
client = singularsity.Client(api_key="your-api-key")

# Define data schema
schema = {
    "fields": [
        {"name": "customer_id", "type": "uuid"},
        {"name": "email", "type": "email"},
        {"name": "age", "type": "integer", "min": 18, "max": 80},
        {"name": "purchase_amount", "type": "float", "min": 10.0, "max": 1000.0}
    ],
    "constraints": [
        {"type": "unique", "fields": ["customer_id", "email"]}
    ]
}

# Generate synthetic data
result = client.generate(
    schema=schema,
    num_records=10000,
    privacy_level="high",
    format="csv"
)

# Save to file or use directly
result.save("synthetic_customers.csv")
print(f"Generated {result.count} records")`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              API Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Enterprise-grade performance and reliability you can count on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                &lt;200ms
              </h3>
              <p className="text-gray-600 font-segoe text-lg">
                Average API response time for real-time data generation requests
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <CloudLightning className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                99.99%
              </h3>
              <p className="text-gray-600 font-segoe text-lg">
                API uptime with automatic failover and global redundancy
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">
                10K+
              </h3>
              <p className="text-gray-600 font-segoe text-lg">
                Requests per second capacity with automatic scaling infrastructure
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Integrate Synthetic Data Today
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              Start building with our APIs in minutes. Comprehensive documentation, SDKs, and developer support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login?tab=signup" 
                className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Get API Keys
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
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