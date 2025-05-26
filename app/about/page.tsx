'use client'

import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Shield, Globe, Award, Heart, Brain } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function About() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Stanford AI researcher with 15+ years in synthetic data and privacy-preserving ML. Led data science teams at Google and Microsoft.",
      image: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Meta privacy engineer and machine learning expert. Pioneered differential privacy implementations at scale for billions of users.",
      image: "👨‍💻"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Chief Data Scientist",
      bio: "PhD in Computer Science from MIT. Published 40+ papers on generative models and privacy-preserving techniques. Former Apple Research.",
      image: "👩‍🔬"
    },
    {
      name: "James Thompson",
      role: "VP of Engineering",
      bio: "Full-stack architect with expertise in distributed systems and cloud infrastructure. Previously led engineering at Snowflake and Databricks.",
      image: "👨‍🔧"
    }
  ]

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Founded by AI researchers and privacy experts with a vision to democratize synthetic data generation."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "$15M Series A led by Andreessen Horowitz to accelerate product development and team growth."
    },
    {
      year: "2023",
      title: "Enterprise Launch",
      description: "Launched enterprise platform serving Fortune 500 companies across healthcare, finance, and technology."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to serve customers in 40+ countries with SOC 2 Type II and ISO 27001 certifications."
    }
  ]

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
              Building the Future of 
              <span className="text-gradient block">Privacy-Safe Data</span>
            </motion.h1>
            
            <motion.p 
              
              
              
              className="text-xl text-gray-600 font-segoe mb-8 max-w-4xl mx-auto"
            >
              We're on a mission to unlock the full potential of data while protecting individual privacy. Our synthetic data platform empowers organizations to innovate responsibly and accelerate AI development without compromising security.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              
              
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 font-segoe mb-6">
                To democratize access to high-quality data while ensuring complete privacy protection. We believe that data-driven innovation should not come at the cost of individual privacy or regulatory compliance.
              </p>
              <p className="text-lg text-gray-600 font-segoe">
                By making synthetic data generation accessible, reliable, and enterprise-ready, we're enabling organizations worldwide to unlock insights, build better AI models, and drive innovation without ethical concerns.
              </p>
            </motion.div>

            <motion.div
              
              
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-8">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 font-segoe mb-6">
                A world where every organization can harness the power of data without privacy trade-offs. We envision a future where synthetic data becomes the standard for AI development, testing, and analytics.
              </p>
              <p className="text-lg text-gray-600 font-segoe">
                Through continuous innovation in generative AI and privacy-preserving technologies, we're building the foundation for responsible data science that benefits everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Privacy First
              </h3>
              <p className="text-gray-600 font-segoe">
                Every decision we make prioritizes user privacy and data protection. We believe privacy is a fundamental right, not a luxury.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Scientific Rigor
              </h3>
              <p className="text-gray-600 font-segoe">
                Our solutions are grounded in peer-reviewed research and proven methodologies. We value evidence-based innovation over hype.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Customer Success
              </h3>
              <p className="text-gray-600 font-segoe">
                We measure our success by our customers' achievements. Their challenges become our innovation roadmap and their wins inspire us.
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">
                Global Impact
              </h3>
              <p className="text-gray-600 font-segoe">
                We're building technology that benefits everyone, everywhere. Our solutions democratize access to data insights across all industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              World-class experts in AI, privacy, and enterprise software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                
                
                
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 font-segoe text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Key milestones in our mission to transform how organizations use data
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.year}
                
                
                
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 font-segoe">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 gradient-bg rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk text-gray-900 mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 font-segoe max-w-3xl mx-auto">
              Trusted by industry leaders and recognized by the global tech community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              
              
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
                Gartner Cool Vendor
              </h3>
              <p className="text-gray-600 font-segoe">
                Recognized as a Cool Vendor in AI for Privacy and Data Ethics (2023)
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
                500+ Customers
              </h3>
              <p className="text-gray-600 font-segoe">
                Trusted by Fortune 500 companies and innovative startups worldwide
              </p>
            </motion.div>

            <motion.div 
              
              
              
              className="text-center"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
                Enterprise Certified
              </h3>
              <p className="text-gray-600 font-segoe">
                SOC 2 Type II, ISO 27001, and GDPR compliant with 99.9% uptime SLA
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            
            
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl font-segoe mb-8 max-w-3xl mx-auto opacity-90">
              We're always looking for talented individuals who share our passion for privacy, innovation, and responsible AI. Help us build the next generation of data tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers" 
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 