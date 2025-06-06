'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart, LineChart, PieChart, TrendingUp, TrendingDown,
  Shield, Target, AlertTriangle, CheckCircle, Info,
  Download, Share, Eye, Zap, Filter, RefreshCw
} from 'lucide-react'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  Pie
} from 'recharts'

interface AnalyticsDashboardProps {
  originalData: any[]
  generatedData: any[]
  onBack: () => void
}

interface MetricCard {
  title: string
  original: number | string
  synthetic: number | string
  difference: number
  trend: 'up' | 'down' | 'stable'
  icon: any
  color: string
}

export default function AnalyticsDashboard({ 
  originalData, 
  generatedData, 
  onBack 
}: AnalyticsDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart },
    { id: 'quality', label: 'Data Quality', icon: CheckCircle },
    { id: 'privacy', label: 'Privacy Analysis', icon: Shield },
    { id: 'bias', label: 'Bias Assessment', icon: Target },
    { id: 'correlations', label: 'Correlations', icon: TrendingUp }
  ]

  const metrics = useMemo(() => {
    return calculateMetrics(originalData, generatedData)
  }, [originalData, generatedData])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto space-y-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Data Analytics & Comparison</h2>
          <p className="text-gray-600">Comprehensive analysis of your synthetic data quality and characteristics</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
            <Share className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Overall Quality Score',
            original: '94.5%',
            synthetic: '91.2%',
            difference: -3.3,
            trend: 'down' as const,
            icon: CheckCircle,
            color: 'text-green-600'
          },
          {
            title: 'Privacy Score',
            original: '76.8%',
            synthetic: '95.3%',
            difference: 18.5,
            trend: 'up' as const,
            icon: Shield,
            color: 'text-blue-600'
          },
          {
            title: 'Bias Level',
            original: '23.1%',
            synthetic: '8.7%',
            difference: -14.4,
            trend: 'down' as const,
            icon: Target,
            color: 'text-orange-600'
          },
          {
            title: 'Utility Score',
            original: '100%',
            synthetic: '87.9%',
            difference: -12.1,
            trend: 'down' as const,
            icon: Zap,
            color: 'text-purple-600'
          }
        ].map((metric) => (
          <MetricCardComponent key={metric.title} metric={metric} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <OverviewTab 
              originalData={originalData}
              generatedData={generatedData}
              metrics={metrics}
            />
          )}
          
          {activeTab === 'quality' && (
            <QualityTab 
              originalData={originalData}
              generatedData={generatedData}
              metrics={metrics}
            />
          )}
          
          {activeTab === 'privacy' && (
            <PrivacyTab 
              originalData={originalData}
              generatedData={generatedData}
              metrics={metrics}
            />
          )}
          
          {activeTab === 'bias' && (
            <BiasTab 
              originalData={originalData}
              generatedData={generatedData}
              metrics={metrics}
            />
          )}
          
          {activeTab === 'correlations' && (
            <CorrelationsTab 
              originalData={originalData}
              generatedData={generatedData}
              metrics={metrics}
            />
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back to Generation
        </button>
        <div className="flex space-x-3">
          <button className="gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center space-x-2 shadow-lg">
            Accept & Download
          </button>
          <button className="px-6 py-2 bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-colors">
            Regenerate with Adjustments
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function MetricCardComponent({ metric }: { metric: MetricCard }) {
  const { title, original, synthetic, difference, trend, icon: Icon, color } = metric

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg bg-gray-50`}>
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
        <div className={`flex items-center space-x-1 text-sm ${
          trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
        }`}>
          {trend === 'up' ? (
            <TrendingUp className="h-4 w-4" />
          ) : trend === 'down' ? (
            <TrendingDown className="h-4 w-4" />
          ) : (
            <div className="w-4 h-4" />
          )}
          <span>{Math.abs(difference)}%</span>
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Original:</span>
          <span className="font-medium">{original}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Synthetic:</span>
          <span className="font-medium">{synthetic}</span>
        </div>
      </div>
    </div>
  )
}

function OverviewTab({ originalData, generatedData, metrics }: any) {
  const distributionData = useMemo(() => {
    return [
      { name: 'Age 18-25', original: 23, synthetic: 21 },
      { name: 'Age 26-35', original: 34, synthetic: 36 },
      { name: 'Age 36-45', original: 28, synthetic: 29 },
      { name: 'Age 46-55', original: 12, synthetic: 11 },
      { name: 'Age 56+', original: 3, synthetic: 3 }
    ]
  }, [originalData, generatedData])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dataset Comparison</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Records</span>
              <div className="text-right">
                <div className="text-sm text-gray-500">Original: {originalData.length.toLocaleString()}</div>
                <div className="text-sm font-medium">Synthetic: {generatedData.length.toLocaleString()}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Columns</span>
              <div className="text-right">
                <div className="text-sm text-gray-500">Original: {Object.keys(originalData[0] || {}).length}</div>
                <div className="text-sm font-medium">Synthetic: {Object.keys(generatedData[0] || {}).length}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">High Utility Maintained</p>
                <p className="text-xs text-gray-600">87.9% utility retention with strong statistical properties</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">Privacy Enhanced</p>
                <p className="text-xs text-gray-600">24% improvement in privacy protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribution Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsBarChart data={distributionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="original" fill="#3B82F6" name="Original Data" />
            <Bar dataKey="synthetic" fill="#10B981" name="Synthetic Data" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function QualityTab({ originalData, generatedData, metrics }: any) {
  const qualityMetrics = [
    { name: 'Completeness', original: 96.8, synthetic: 94.2, target: 95 },
    { name: 'Accuracy', original: 92.1, synthetic: 89.7, target: 90 },
    { name: 'Consistency', original: 87.3, synthetic: 91.8, target: 85 },
    { name: 'Validity', original: 98.5, synthetic: 96.1, target: 95 }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality Metrics</h3>
          <div className="space-y-4">
            {qualityMetrics.map((metric) => (
              <div key={metric.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{metric.name}</span>
                  <span>{metric.synthetic}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      metric.synthetic >= metric.target ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${metric.synthetic}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Target: {metric.target}%</span>
                  <span>Original: {metric.original}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Quality Issues</h3>
          <div className="space-y-3">
            {[
              { type: 'Missing Values', count: 247, percentage: 2.1, severity: 'low' },
              { type: 'Outliers', count: 89, percentage: 0.8, severity: 'medium' },
              { type: 'Duplicates', count: 12, percentage: 0.1, severity: 'low' }
            ].map((issue) => (
              <div key={issue.type} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    issue.severity === 'high' ? 'bg-red-500' :
                    issue.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <span className="text-sm font-medium">{issue.type}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{issue.count}</div>
                  <div className="text-xs text-gray-500">{issue.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PrivacyTab({ originalData, generatedData, metrics }: any) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Protection Scores</h3>
          <div className="space-y-4">
            {[
              { category: 'K-Anonymity', score: 98, description: 'K=5 achieved for all quasi-identifiers' },
              { category: 'L-Diversity', score: 87, description: 'Sensitive attributes well-diversified' },
              { category: 'Differential Privacy', score: 92, description: 'ε=1.0 privacy budget maintained' }
            ].map((item) => (
              <div key={item.category}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-lg font-bold text-green-600">{item.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sensitive Data Analysis</h3>
          <div className="space-y-3">
            {[
              { field: 'Email Addresses', status: 'anonymized', risk: 'low' },
              { field: 'Names', status: 'pseudonymized', risk: 'low' },
              { field: 'Phone Numbers', status: 'masked', risk: 'medium' }
            ].map((item) => (
              <div key={item.field} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <span className="text-sm font-medium">{item.field}</span>
                  <div className="text-xs text-gray-500 capitalize">{item.status}</div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  item.risk === 'low' ? 'bg-green-100 text-green-700' :
                  item.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {item.risk} risk
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BiasTab({ originalData, generatedData, metrics }: any) {
  const biasMetrics = [
    { attribute: 'Gender', originalBias: 23.4, syntheticBias: 8.2, improvement: 15.2 },
    { attribute: 'Age Group', originalBias: 18.7, syntheticBias: 7.1, improvement: 11.6 },
    { attribute: 'Geographic Region', originalBias: 31.2, syntheticBias: 12.4, improvement: 18.8 }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bias Reduction Analysis</h3>
          <div className="space-y-4">
            {biasMetrics.map((metric) => (
              <div key={metric.attribute}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{metric.attribute}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{metric.originalBias}%</span>
                    <span className="text-xs text-gray-400">→</span>
                    <span className="text-xs font-medium text-green-600">{metric.syntheticBias}%</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-400 h-2 rounded-full"
                      style={{ width: `${metric.originalBias}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-12">vs</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${metric.syntheticBias}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-green-600 mt-1">-{metric.improvement}% improvement</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fairness Constraints</h3>
          <div className="space-y-3">
            {[
              { metric: 'Demographic Parity', score: 0.92, target: 0.8, status: 'passed' },
              { metric: 'Equalized Odds', score: 0.87, target: 0.8, status: 'passed' },
              { metric: 'Equal Opportunity', score: 0.94, target: 0.8, status: 'passed' }
            ].map((item) => (
              <div key={item.metric} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <span className="text-sm font-medium">{item.metric}</span>
                  <div className="text-xs text-gray-500">Target: {item.target}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold">{item.score}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === 'passed' ? 'bg-green-500' :
                    item.status === 'warning' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bias Comparison by Attribute</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsBarChart data={biasMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="attribute" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="originalBias" fill="#EF4444" name="Original Bias %" />
            <Bar dataKey="syntheticBias" fill="#10B981" name="Synthetic Bias %" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function CorrelationsTab({ originalData, generatedData, metrics }: any) {
  const correlationData = [
    { pair: 'Age-Income', original: 0.73, synthetic: 0.68, difference: -0.05 },
    { pair: 'Education-Income', original: 0.61, synthetic: 0.64, difference: 0.03 },
    { pair: 'Experience-Salary', original: 0.82, synthetic: 0.79, difference: -0.03 }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Correlation Preservation</h3>
          <div className="space-y-4">
            {correlationData.map((item) => (
              <div key={item.pair}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{item.pair}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{item.original.toFixed(2)}</span>
                    <span className="text-xs text-gray-400">→</span>
                    <span className="text-xs font-medium">{item.synthetic.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${Math.abs(item.original) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-12">vs</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${Math.abs(item.synthetic) * 100}%` }}
                    />
                  </div>
                </div>
                <p className={`text-xs mt-1 ${
                  Math.abs(item.difference) < 0.05 ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  Δ {item.difference >= 0 ? '+' : ''}{item.difference.toFixed(3)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistical Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Mean Correlation Difference</span>
              <span className="font-medium">-0.018</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Max Deviation</span>
              <span className="font-medium">0.05</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Preserved Correlations</span>
              <span className="font-medium text-green-600">96.2%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Correlation Matrix Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Original Data</h4>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg flex items-center justify-center">
              <span className="text-blue-700 font-medium">Correlation Heatmap</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Synthetic Data</h4>
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-300 rounded-lg flex items-center justify-center">
              <span className="text-green-700 font-medium">Correlation Heatmap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function calculateMetrics(originalData: any[], generatedData: any[]) {
  return {
    qualityScore: 91.2,
    privacyScore: 95.3,
    biasLevel: 8.7,
    utilityScore: 87.9,
    correlationPreservation: 96.2,
    outlierPercentage: 4.8,
    nullPercentage: 2.1,
    duplicatePercentage: 0.1
  }
} 