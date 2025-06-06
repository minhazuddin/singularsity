'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings, Target, Shield, Zap, Eye, Filter,
  BarChart3, Sliders, Lock, Users, AlertTriangle,
  CheckCircle, Info, Shuffle, TrendingUp
} from 'lucide-react'
import Slider from './Slider'

interface ConfigurationPanelProps {
  config: any
  setConfig: (config: any) => void
  dataColumns: string[]
  onNext: () => void
  onBack: () => void
}

export default function ConfigurationPanel({ 
  config, 
  setConfig, 
  dataColumns, 
  onNext, 
  onBack 
}: ConfigurationPanelProps) {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'columns', label: 'Columns', icon: Filter },
    { id: 'quality', label: 'Quality', icon: BarChart3 },
    { id: 'bias', label: 'Bias Control', icon: Target },
    { id: 'privacy', label: 'Privacy', icon: Shield }
  ]

  const updateConfig = (section: string, field: string, value: any) => {
    setConfig((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const updateRootConfig = (field: string, value: any) => {
    setConfig((prev: any) => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      {/* Configuration Tabs */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === id
                    ? 'border-primary text-primary'
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
          {/* General Settings */}
          {activeTab === 'general' && (
            <GeneralTab 
              config={config}
              updateRootConfig={updateRootConfig}
            />
          )}

          {/* Column Selection */}
          {activeTab === 'columns' && (
            <ColumnsTab 
              config={config}
              dataColumns={dataColumns}
              updateRootConfig={updateRootConfig}
            />
          )}

          {/* Quality Settings */}
          {activeTab === 'quality' && (
            <QualityTab 
              config={config}
              updateConfig={updateConfig}
            />
          )}

          {/* Bias Control */}
          {activeTab === 'bias' && (
            <BiasTab 
              config={config}
              dataColumns={dataColumns}
              updateConfig={updateConfig}
            />
          )}

          {/* Privacy Settings */}
          {activeTab === 'privacy' && (
            <PrivacyTab 
              config={config}
              updateConfig={updateConfig}
            />
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-8 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back to Upload
        </button>
        <button
          onClick={onNext}
          className="gradient-bg text-white px-8 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center space-x-2 shadow-lg"
        >
          <Zap className="h-4 w-4" />
          <span>Generate Data</span>
        </button>
      </div>
    </motion.div>
  )
}

function GeneralTab({ config, updateRootConfig }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Record Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Records
            </label>
            <input
              type="number"
              value={config.recordCount}
              onChange={(e) => updateRootConfig('recordCount', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              min="100"
              max="1000000"
              step="1000"
            />
            <p className="text-xs text-gray-500 mt-1">Between 100 and 1,000,000 records</p>
          </div>

          {/* Output Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Output Format
            </label>
            <select
              value={config.format}
              onChange={(e) => updateRootConfig('format', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="excel">Excel</option>
            </select>
          </div>
        </div>
      </div>

      {/* Generation Method */}
      <div>
        <h4 className="text-md font-medium text-gray-900 mb-3">Generation Method</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              id: 'statistical',
              name: 'Statistical',
              description: 'Uses statistical distributions from your data',
              recommended: true
            },
            {
              id: 'ml',
              name: 'Machine Learning',
              description: 'Advanced ML models for complex patterns',
              recommended: false
            },
            {
              id: 'hybrid',
              name: 'Hybrid',
              description: 'Combines statistical and ML approaches',
              recommended: false
            }
          ].map((method) => (
            <div
              key={method.id}
              className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                config.generationMethod === method.id
                  ? 'border-primary bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => updateRootConfig('generationMethod', method.id)}
            >
              {method.recommended && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Recommended
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-3 h-3 rounded-full border-2 ${
                  config.generationMethod === method.id
                    ? 'border-primary bg-primary'
                    : 'border-gray-300'
                }`} />
                <span className="font-medium text-gray-900">{method.name}</span>
              </div>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ColumnsTab({ config, dataColumns, updateRootConfig }: any) {
  const toggleColumn = (column: string) => {
    const newColumns = config.selectedColumns.includes(column)
      ? config.selectedColumns.filter((col: string) => col !== column)
      : [...config.selectedColumns, column]
    updateRootConfig('selectedColumns', newColumns)
  }

  const selectAll = () => {
    updateRootConfig('selectedColumns', dataColumns)
  }

  const deselectAll = () => {
    updateRootConfig('selectedColumns', [])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Column Selection</h3>
        <div className="flex space-x-2">
          <button
            onClick={selectAll}
            className="px-3 py-1 text-sm text-primary border border-primary rounded hover:bg-primary-50"
          >
            Select All
          </button>
          <button
            onClick={deselectAll}
            className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          >
            Deselect All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataColumns.map((column: string) => {
          const isSelected = config.selectedColumns.includes(column)
          const columnType = getColumnType(column) // Mock function
          
          return (
            <div
              key={column}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                isSelected
                  ? 'border-primary bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => toggleColumn(column)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                    isSelected
                      ? 'border-primary bg-primary'
                      : 'border-gray-300'
                  }`}>
                    {isSelected && <CheckCircle className="h-3 w-3 text-white" />}
                  </div>
                  <span className="font-medium text-gray-900">{column}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${getTypeColor(columnType)}`}>
                  {columnType}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {getColumnDescription(column, columnType)}
              </p>
            </div>
          )
        })}
      </div>

      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-primary-600 mt-0.5" />
          <div>
            <p className="text-sm text-primary-800">
              <strong>Selected:</strong> {config.selectedColumns.length} of {dataColumns.length} columns
            </p>
            <p className="text-xs text-primary-700 mt-1">
              Only selected columns will be included in the synthetic dataset.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function QualityTab({ config, updateConfig }: any) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Data Quality Settings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Outliers */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Outlier Percentage</label>
            <span className="text-sm text-gray-600">{config.qualitySettings.outlierPercentage}%</span>
          </div>
          <Slider
            value={config.qualitySettings.outlierPercentage}
            onChange={(value) => updateConfig('qualitySettings', 'outlierPercentage', value)}
            min={0}
            max={20}
            step={0.5}
            className="slider"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
          />
          <p className="text-xs text-gray-500">
            Percentage of records that will be statistical outliers
          </p>
        </div>

        {/* Null Values */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Null Values Percentage</label>
            <span className="text-sm text-gray-600">{config.qualitySettings.nullPercentage}%</span>
          </div>
          <Slider
            value={config.qualitySettings.nullPercentage}
            onChange={(value) => updateConfig('qualitySettings', 'nullPercentage', value)}
            min={0}
            max={15}
            step={0.1}
            className="slider"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
          />
          <p className="text-xs text-gray-500">
            Percentage of values that will be null/missing
          </p>
        </div>

        {/* Duplicates */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Duplicate Records</label>
            <span className="text-sm text-gray-600">{config.qualitySettings.duplicatePercentage}%</span>
          </div>
          <Slider
            value={config.qualitySettings.duplicatePercentage}
            onChange={(value) => updateConfig('qualitySettings', 'duplicatePercentage', value)}
            min={0}
            max={10}
            step={0.1}
            className="slider"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
          />
          <p className="text-xs text-gray-500">
            Percentage of records that will be duplicates
          </p>
        </div>

        {/* Data Consistency */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Consistency Score</label>
            <span className="text-sm text-gray-600">{config.qualitySettings.consistencyScore || 85}%</span>
          </div>
          <Slider
            value={config.qualitySettings.consistencyScore || 85}
            onChange={(value) => updateConfig('qualitySettings', 'consistencyScore', value)}
            min={60}
            max={100}
            step={1}
            className="slider"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
          />
          <p className="text-xs text-gray-500">
            How consistent the generated data patterns should be
          </p>
        </div>
      </div>

      {/* Advanced Quality Options */}
      <div className="border-t pt-6">
        <h4 className="text-md font-medium text-gray-900 mb-4">Advanced Options</h4>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={config.qualitySettings.preserveDistributions || false}
              onChange={(e) => updateConfig('qualitySettings', 'preserveDistributions', e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <div>
              <span className="text-sm font-medium text-gray-700">Preserve Original Distributions</span>
              <p className="text-xs text-gray-500">Maintain statistical distributions from source data</p>
            </div>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={config.qualitySettings.maintainCorrelations || false}
              onChange={(e) => updateConfig('qualitySettings', 'maintainCorrelations', e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <div>
              <span className="text-sm font-medium text-gray-700">Maintain Correlations</span>
              <p className="text-xs text-gray-500">Preserve relationships between columns</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

function BiasTab({ config, dataColumns, updateConfig }: any) {
  const sensitiveAttributes = ['gender', 'age', 'race', 'ethnicity', 'religion', 'nationality']
  
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Bias Control & Fairness</h3>
      
      {/* Bias Detection */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-yellow-800">Bias Detection Enabled</h4>
            <p className="text-sm text-yellow-700 mt-1">
              The system will analyze your data for potential biases and provide mitigation options.
            </p>
          </div>
        </div>
      </div>

      {/* Target Bias Level */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Target Bias Level</label>
          <span className="text-sm text-gray-600">{config.biasSettings.targetBias}%</span>
        </div>
        <Slider
          value={config.biasSettings.targetBias}
          onChange={(value) => updateConfig('biasSettings', 'targetBias', value)}
          min={0}
          max={50}
          step={1}
          className="slider"
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>No Bias (0%)</span>
          <span>Moderate Bias (25%)</span>
          <span>High Bias (50%)</span>
        </div>
      </div>

      {/* Sensitive Attributes */}
      <div>
        <h4 className="text-md font-medium text-gray-900 mb-3">Sensitive Attributes</h4>
        <p className="text-sm text-gray-600 mb-4">
          Select attributes that should be monitored for bias
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {sensitiveAttributes.map((attr) => {
            const isSelected = config.biasSettings.sensitiveAttributes?.includes(attr)
            const isAvailable = dataColumns.some((col: string) => 
              col.toLowerCase().includes(attr.toLowerCase())
            )
            
            return (
              <button
                key={attr}
                disabled={!isAvailable}
                onClick={() => {
                  const current = config.biasSettings.sensitiveAttributes || []
                  const updated = isSelected
                    ? current.filter((a: string) => a !== attr)
                    : [...current, attr]
                  updateConfig('biasSettings', 'sensitiveAttributes', updated)
                }}
                className={`p-3 rounded-lg border text-left transition-all ${
                  !isAvailable
                    ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                    : isSelected
                    ? 'border-primary bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="capitalize font-medium">{attr}</div>
                {!isAvailable && (
                  <div className="text-xs text-gray-400">Not detected</div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Fairness Constraints */}
      <div>
        <h4 className="text-md font-medium text-gray-900 mb-3">Fairness Constraints</h4>
        <div className="space-y-3">
          {[
            {
              id: 'demographic_parity',
              name: 'Demographic Parity',
              description: 'Equal positive outcomes across groups'
            },
            {
              id: 'equalized_odds',
              name: 'Equalized Odds',
              description: 'Equal true positive and false positive rates'
            },
            {
              id: 'equal_opportunity',
              name: 'Equal Opportunity',
              description: 'Equal true positive rates across groups'
            }
          ].map((constraint) => (
            <label key={constraint.id} className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={config.biasSettings.fairnessConstraints?.includes(constraint.id) || false}
                onChange={(e) => {
                  const current = config.biasSettings.fairnessConstraints || []
                  const updated = e.target.checked
                    ? [...current, constraint.id]
                    : current.filter((c: string) => c !== constraint.id)
                  updateConfig('biasSettings', 'fairnessConstraints', updated)
                }}
                className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <div>
                <span className="text-sm font-medium text-gray-700">{constraint.name}</span>
                <p className="text-xs text-gray-500">{constraint.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

function PrivacyTab({ config, updateConfig }: any) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Privacy & Security Settings</h3>
      
      {/* Privacy Level */}
      <div>
        <h4 className="text-md font-medium text-gray-900 mb-3">Privacy Level</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              id: 'basic',
              name: 'Basic',
              description: 'Standard anonymization techniques',
              features: ['Basic anonymization', 'Data masking']
            },
            {
              id: 'enhanced',
              name: 'Enhanced',
              description: 'Advanced privacy protection',
              features: ['K-anonymity', 'L-diversity', 'Data encryption']
            },
            {
              id: 'maximum',
              name: 'Maximum',
              description: 'Highest level of privacy',
              features: ['Differential privacy', 'Homomorphic encryption', 'Zero-knowledge proofs']
            }
          ].map((level) => (
            <div
              key={level.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                config.privacySettings.level === level.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => updateConfig('privacySettings', 'level', level.id)}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-3 h-3 rounded-full border-2 ${
                  config.privacySettings.level === level.id
                    ? 'border-green-500 bg-green-500'
                    : 'border-gray-300'
                }`} />
                <span className="font-medium text-gray-900">{level.name}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{level.description}</p>
              <ul className="text-xs text-gray-500 space-y-1">
                {level.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Options */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">Privacy Options</h4>
        
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={config.privacySettings.anonymize || false}
            onChange={(e) => updateConfig('privacySettings', 'anonymize', e.target.checked)}
            className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <div>
            <span className="text-sm font-medium text-gray-700">Anonymize Personal Data</span>
            <p className="text-xs text-gray-500">Replace personal identifiers with anonymous values</p>
          </div>
        </label>

        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={config.privacySettings.encryptSensitive || false}
            onChange={(e) => updateConfig('privacySettings', 'encryptSensitive', e.target.checked)}
            className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <div>
            <span className="text-sm font-medium text-gray-700">Encrypt Sensitive Fields</span>
            <p className="text-xs text-gray-500">Apply encryption to sensitive data fields</p>
          </div>
        </label>

        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={config.privacySettings.differential_privacy || false}
            onChange={(e) => updateConfig('privacySettings', 'differential_privacy', e.target.checked)}
            className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <div>
            <span className="text-sm font-medium text-gray-700">Differential Privacy</span>
            <p className="text-xs text-gray-500">Add mathematical noise for maximum privacy protection</p>
          </div>
        </label>
      </div>

      {/* K-Anonymity Settings */}
      {config.privacySettings.level !== 'basic' && (
        <div className="border-t pt-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">Advanced Privacy Parameters</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                K-Anonymity Level
              </label>
              <input
                type="number"
                value={config.privacySettings.k_anonymity || 5}
                onChange={(e) => updateConfig('privacySettings', 'k_anonymity', parseInt(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                min="2"
                max="50"
              />
              <p className="text-xs text-gray-500 mt-1">
                Each record should be indistinguishable from at least K-1 other records
              </p>
            </div>

            {config.privacySettings.differential_privacy && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Privacy Budget (ε)
                </label>
                <input
                  type="number"
                  value={config.privacySettings.epsilon || 1.0}
                  onChange={(e) => updateConfig('privacySettings', 'epsilon', parseFloat(e.target.value))}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  min="0.1"
                  max="10"
                  step="0.1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Lower values provide stronger privacy (recommended: 0.5-2.0)
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Helper functions
function getColumnType(column: string): string {
  // Mock implementation - in real app, this would come from data analysis
  if (column.toLowerCase().includes('id')) return 'ID'
  if (column.toLowerCase().includes('name')) return 'Text'
  if (column.toLowerCase().includes('email')) return 'Email'
  if (column.toLowerCase().includes('age') || column.toLowerCase().includes('income')) return 'Number'
  if (column.toLowerCase().includes('date')) return 'Date'
  return 'Text'
}

function getTypeColor(type: string): string {
  const colors: Record<string, string> = {
    'ID': 'bg-purple-100 text-purple-700',
    'Text': 'bg-primary-100 text-primary-700',
    'Email': 'bg-green-100 text-green-700',
    'Number': 'bg-orange-100 text-orange-700',
    'Date': 'bg-red-100 text-red-700',
  }
  return colors[type] || 'bg-gray-100 text-gray-700'
}

function getColumnDescription(column: string, type: string): string {
  // Mock implementation
  return `${type} field containing ${column.toLowerCase()} data`
} 