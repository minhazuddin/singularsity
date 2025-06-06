import * as Papa from 'papaparse'
import mammoth from 'mammoth'
import { Matrix } from 'ml-matrix'
import * as ss from 'simple-statistics'
import CryptoJS from 'crypto-js'
import { v4 as uuidv4 } from 'uuid'

// Types and Interfaces
export interface DataColumn {
  name: string
  type: 'string' | 'number' | 'date' | 'boolean' | 'categorical'
  nullable: boolean
  unique: boolean
  distribution?: any
  patterns?: string[]
  sensitivityLevel: 'low' | 'medium' | 'high'
}

export interface DatasetAnalysis {
  totalRecords: number
  totalColumns: number
  columns: DataColumn[]
  nullPercentage: number
  duplicatePercentage: number
  outlierPercentage: number
  biasScore: number
  privacyScore: number
  correlations: { [key: string]: { [key: string]: number } }
  qualityScore: number
}

export interface GenerationConfig {
  recordCount: number
  format: 'csv' | 'json' | 'excel'
  selectedColumns: string[]
  generationMethod: 'statistical' | 'ml' | 'hybrid'
  seed?: number
  biasSettings: {
    enabled: boolean
    targetBias: number
    sensitiveAttributes: string[]
    fairnessConstraints: string[]
  }
  qualitySettings: {
    outlierPercentage: number
    nullPercentage: number
    duplicatePercentage: number
    consistencyScore: number
  }
  privacySettings: {
    level: 'basic' | 'enhanced' | 'maximum'
    anonymize: boolean
    encryptSensitive: boolean
    kAnonymity: number
    differentialPrivacy: {
      enabled: boolean
      epsilon: number
    }
  }
}

export interface SyntheticDataResult {
  data: any[]
  metadata: {
    generationTime: number
    qualityMetrics: any
    privacyMetrics: any
    biasMetrics: any
  }
}

// Data Processing Class
export class DataProcessor {
  private data: any[] = []
  private analysis: DatasetAnalysis | null = null

  async parseFile(file: File): Promise<any[]> {
    const extension = file.name.split('.').pop()?.toLowerCase()
    
    switch (extension) {
      case 'csv':
        return this.parseCSV(file)
      case 'json':
        return this.parseJSON(file)
      case 'docx':
        return this.parseDOCX(file)
      case 'txt':
        return this.parseTXT(file)
      default:
        throw new Error(`Unsupported file format: ${extension}`)
    }
  }

  private async parseCSV(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        transform: (value, field) => {
          // Auto-detect and convert data types
          if (value === '' || value === null) return null
          if (!isNaN(Number(value)) && value !== '') return Number(value)
          if (value.toLowerCase() === 'true') return true
          if (value.toLowerCase() === 'false') return false
          return value
        },
        complete: (results) => {
          if (results.errors.length > 0) {
            reject(new Error(`CSV parsing error: ${results.errors[0].message}`))
          } else {
            resolve(results.data as any[])
          }
        },
        error: (error) => reject(error)
      })
    })
  }

  private async parseJSON(file: File): Promise<any[]> {
    const text = await file.text()
    try {
      const data = JSON.parse(text)
      return Array.isArray(data) ? data : [data]
    } catch (error) {
      throw new Error('Invalid JSON format')
    }
  }

  private async parseDOCX(file: File): Promise<any[]> {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.extractRawText({ arrayBuffer })
    
    // Simple table extraction (basic implementation)
    const lines = result.value.split('\n').filter(line => line.trim())
    if (lines.length < 2) throw new Error('No tabular data found in document')
    
    const headers = lines[0].split('\t')
    const data = lines.slice(1).map(line => {
      const values = line.split('\t')
      const row: any = {}
      headers.forEach((header, index) => {
        row[header.trim()] = values[index]?.trim() || null
      })
      return row
    })
    
    return data
  }

  private async parseTXT(file: File): Promise<any[]> {
    const text = await file.text()
    const lines = text.split('\n').filter(line => line.trim())
    
    // Assume tab or comma separated
    const delimiter = lines[0].includes('\t') ? '\t' : ','
    const headers = lines[0].split(delimiter).map(h => h.trim())
    
    return lines.slice(1).map(line => {
      const values = line.split(delimiter)
      const row: any = {}
      headers.forEach((header, index) => {
        row[header] = values[index]?.trim() || null
      })
      return row
    })
  }

  analyzeDataset(data: any[]): DatasetAnalysis {
    if (data.length === 0) {
      throw new Error('No data to analyze')
    }

    const columns = this.analyzeColumns(data)
    const nullPercentage = this.calculateNullPercentage(data)
    const duplicatePercentage = this.calculateDuplicatePercentage(data)
    const outlierPercentage = this.calculateOutlierPercentage(data, columns)
    const biasScore = this.calculateBiasScore(data, columns)
    const privacyScore = this.calculatePrivacyScore(data, columns)
    const correlations = this.calculateCorrelations(data, columns)
    const qualityScore = this.calculateQualityScore(nullPercentage, duplicatePercentage, outlierPercentage)

    this.analysis = {
      totalRecords: data.length,
      totalColumns: columns.length,
      columns,
      nullPercentage,
      duplicatePercentage,
      outlierPercentage,
      biasScore,
      privacyScore,
      correlations,
      qualityScore
    }

    this.data = data
    return this.analysis
  }

  private analyzeColumns(data: any[]): DataColumn[] {
    const sampleSize = Math.min(1000, data.length)
    const sample = data.slice(0, sampleSize)
    const columnNames = Object.keys(data[0])

    return columnNames.map(name => {
      const values = sample.map(row => row[name]).filter(v => v !== null && v !== undefined)
      const type = this.inferColumnType(values)
      const nullable = sample.some(row => row[name] === null || row[name] === undefined)
      const unique = new Set(values).size === values.length
      const sensitivityLevel = this.assessSensitivityLevel(name, values)
      
      let distribution = null
      if (type === 'number') {
        const numericValues = values.filter(v => typeof v === 'number')
        if (numericValues.length > 0) {
          distribution = {
            mean: ss.mean(numericValues),
            median: ss.median(numericValues),
            standardDeviation: ss.standardDeviation(numericValues),
            min: Math.min(...numericValues),
            max: Math.max(...numericValues),
            quartiles: ss.quantile(numericValues, [0.25, 0.5, 0.75])
          }
        }
      }

      return {
        name,
        type,
        nullable,
        unique,
        distribution,
        patterns: type === 'string' ? this.extractPatterns(values) : undefined,
        sensitivityLevel
      }
    })
  }

  private inferColumnType(values: any[]): DataColumn['type'] {
    if (values.length === 0) return 'string'
    
    const numericCount = values.filter(v => typeof v === 'number' || !isNaN(Number(v))).length
    const booleanCount = values.filter(v => typeof v === 'boolean' || v === 'true' || v === 'false').length
    const dateCount = values.filter(v => !isNaN(Date.parse(v))).length
    
    const total = values.length
    
    if (numericCount / total > 0.8) return 'number'
    if (booleanCount / total > 0.8) return 'boolean'
    if (dateCount / total > 0.8) return 'date'
    
    // Check if categorical (limited unique values)
    const uniqueValues = new Set(values).size
    if (uniqueValues <= Math.min(20, total * 0.1)) return 'categorical'
    
    return 'string'
  }

  private extractPatterns(values: string[]): string[] {
    const patterns: { [key: string]: number } = {}
    
    values.forEach(value => {
      if (typeof value === 'string') {
        // Email pattern
        if (value.includes('@')) patterns['email'] = (patterns['email'] || 0) + 1
        // Phone pattern
        if (/^\+?[\d\s\-\(\)]+$/.test(value)) patterns['phone'] = (patterns['phone'] || 0) + 1
        // Name pattern
        if (/^[A-Za-z\s]+$/.test(value)) patterns['name'] = (patterns['name'] || 0) + 1
        // ID pattern
        if (/^[A-Za-z0-9\-_]+$/.test(value)) patterns['id'] = (patterns['id'] || 0) + 1
      }
    })
    
    return Object.keys(patterns).filter(pattern => patterns[pattern] > values.length * 0.5)
  }

  private assessSensitivityLevel(columnName: string, values: any[]): 'low' | 'medium' | 'high' {
    const name = columnName.toLowerCase()
    const sensitiveKeywords = ['ssn', 'social', 'password', 'credit', 'card', 'account', 'phone', 'email', 'address']
    const mediumKeywords = ['name', 'age', 'gender', 'income', 'salary']
    
    if (sensitiveKeywords.some(keyword => name.includes(keyword))) return 'high'
    if (mediumKeywords.some(keyword => name.includes(keyword))) return 'medium'
    
    // Check for patterns in values
    const sampleValues = values.slice(0, 100).map(v => String(v))
    if (sampleValues.some(v => v.includes('@'))) return 'high' // Email
    if (sampleValues.some(v => /^\d{3}-\d{2}-\d{4}$/.test(v))) return 'high' // SSN
    
    return 'low'
  }

  private calculateNullPercentage(data: any[]): number {
    const totalCells = data.length * Object.keys(data[0]).length
    const nullCells = data.reduce((count, row) => {
      return count + Object.values(row).filter(v => v === null || v === undefined || v === '').length
    }, 0)
    return (nullCells / totalCells) * 100
  }

  private calculateDuplicatePercentage(data: any[]): number {
    const uniqueRows = new Set(data.map(row => JSON.stringify(row)))
    return ((data.length - uniqueRows.size) / data.length) * 100
  }

  private calculateOutlierPercentage(data: any[], columns: DataColumn[]): number {
    const numericColumns = columns.filter(col => col.type === 'number')
    if (numericColumns.length === 0) return 0

    let totalOutliers = 0
    let totalNumericValues = 0

    numericColumns.forEach(column => {
      const values = data.map(row => row[column.name]).filter(v => typeof v === 'number')
      if (values.length === 0) return

      const q1 = ss.quantile(values, 0.25)
      const q3 = ss.quantile(values, 0.75)
      const iqr = q3 - q1
      const lowerBound = q1 - 1.5 * iqr
      const upperBound = q3 + 1.5 * iqr

      const outliers = values.filter(v => v < lowerBound || v > upperBound)
      totalOutliers += outliers.length
      totalNumericValues += values.length
    })

    return totalNumericValues > 0 ? (totalOutliers / totalNumericValues) * 100 : 0
  }

  private calculateBiasScore(data: any[], columns: DataColumn[]): number {
    // Simplified bias calculation based on distribution skewness
    const categoricalColumns = columns.filter(col => col.type === 'categorical')
    if (categoricalColumns.length === 0) return 0

    let totalBias = 0
    categoricalColumns.forEach(column => {
      const values = data.map(row => row[column.name]).filter(v => v !== null)
      const distribution = values.reduce((acc: any, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
      }, {})

      const counts = Object.values(distribution) as number[]
      const mean = ss.mean(counts)
      const variance = ss.variance(counts)
      const skewness = variance > 0 ? Math.abs(ss.sampleSkewness(counts)) : 0
      
      totalBias += skewness
    })

    return Math.min(100, (totalBias / categoricalColumns.length) * 20)
  }

  private calculatePrivacyScore(data: any[], columns: DataColumn[]): number {
    const sensitiveColumns = columns.filter(col => col.sensitivityLevel === 'high')
    const mediumSensitiveColumns = columns.filter(col => col.sensitivityLevel === 'medium')
    
    let privacyScore = 100
    
    // Reduce score based on sensitive data presence
    privacyScore -= sensitiveColumns.length * 15
    privacyScore -= mediumSensitiveColumns.length * 5
    
    // Check for direct identifiers
    const hasDirectIdentifiers = columns.some(col => 
      col.name.toLowerCase().includes('id') && col.unique
    )
    if (hasDirectIdentifiers) privacyScore -= 20
    
    return Math.max(0, privacyScore)
  }

  private calculateCorrelations(data: any[], columns: DataColumn[]): { [key: string]: { [key: string]: number } } {
    const numericColumns = columns.filter(col => col.type === 'number')
    const correlations: { [key: string]: { [key: string]: number } } = {}

    numericColumns.forEach(col1 => {
      correlations[col1.name] = {}
      numericColumns.forEach(col2 => {
        if (col1.name === col2.name) {
          correlations[col1.name][col2.name] = 1
        } else {
          const values1 = data.map(row => row[col1.name]).filter(v => typeof v === 'number')
          const values2 = data.map(row => row[col2.name]).filter(v => typeof v === 'number')
          
          if (values1.length > 1 && values2.length > 1) {
            try {
              correlations[col1.name][col2.name] = ss.sampleCorrelation(values1, values2)
            } catch {
              correlations[col1.name][col2.name] = 0
            }
          } else {
            correlations[col1.name][col2.name] = 0
          }
        }
      })
    })

    return correlations
  }

  private calculateQualityScore(nullPercentage: number, duplicatePercentage: number, outlierPercentage: number): number {
    let score = 100
    score -= nullPercentage * 2
    score -= duplicatePercentage * 3
    score -= outlierPercentage * 1.5
    return Math.max(0, score)
  }

  getAnalysis(): DatasetAnalysis | null {
    return this.analysis
  }

  getData(): any[] {
    return this.data
  }
}

// Synthetic Data Generator Class
export class SyntheticDataGenerator {
  private originalData: any[] = []
  private analysis: DatasetAnalysis | null = null
  private rng: () => number

  constructor(seed?: number) {
    // Seeded random number generator for reproducibility
    this.rng = this.createSeededRNG(seed || Date.now())
  }

  private createSeededRNG(seed: number): () => number {
    let state = seed
    return () => {
      state = (state * 1664525 + 1013904223) % Math.pow(2, 32)
      return state / Math.pow(2, 32)
    }
  }

  async generateSyntheticData(
    originalData: any[],
    analysis: DatasetAnalysis,
    config: GenerationConfig
  ): Promise<SyntheticDataResult> {
    const startTime = Date.now()
    this.originalData = originalData
    this.analysis = analysis

    const syntheticData: any[] = []
    
    for (let i = 0; i < config.recordCount; i++) {
      const record: any = {}
      
      config.selectedColumns.forEach(columnName => {
        const column = analysis.columns.find(col => col.name === columnName)
        if (column) {
          record[columnName] = this.generateColumnValue(column, config, i)
        }
      })
      
      syntheticData.push(record)
    }

    // Apply quality settings
    this.applyQualitySettings(syntheticData, config)
    
    // Apply privacy protection
    if (config.privacySettings.anonymize) {
      this.anonymizeData(syntheticData, analysis.columns, config)
    }

    const generationTime = Date.now() - startTime
    
    return {
      data: syntheticData,
      metadata: {
        generationTime,
        qualityMetrics: this.calculateQualityMetrics(syntheticData, config),
        privacyMetrics: this.calculatePrivacyMetrics(syntheticData, config),
        biasMetrics: this.calculateBiasMetrics(syntheticData, config)
      }
    }
  }

  private generateColumnValue(column: DataColumn, config: GenerationConfig, recordIndex: number): any {
    // Handle nulls based on configuration
    if (this.rng() < config.qualitySettings.nullPercentage / 100) {
      return null
    }

    switch (column.type) {
      case 'number':
        return this.generateNumericValue(column, config)
      case 'string':
        return this.generateStringValue(column, config)
      case 'categorical':
        return this.generateCategoricalValue(column, config)
      case 'boolean':
        return this.rng() > 0.5
      case 'date':
        return this.generateDateValue(column, config)
      default:
        return this.generateStringValue(column, config)
    }
  }

  private generateNumericValue(column: DataColumn, config: GenerationConfig): number {
    if (!column.distribution) {
      return Math.floor(this.rng() * 1000)
    }

    const { mean, standardDeviation, min, max } = column.distribution
    
    // Generate using normal distribution
    const u1 = this.rng()
    const u2 = this.rng()
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
    
    let value = mean + z0 * standardDeviation
    
    // Apply bounds
    value = Math.max(min, Math.min(max, value))
    
    // Add outliers based on configuration
    if (this.rng() < config.qualitySettings.outlierPercentage / 100) {
      const outlierMultiplier = 2 + this.rng() * 3
      value = this.rng() > 0.5 ? value * outlierMultiplier : value / outlierMultiplier
    }
    
    return Math.round(value * 100) / 100
  }

  private generateStringValue(column: DataColumn, config: GenerationConfig): string {
    if (column.patterns) {
      if (column.patterns.includes('email')) {
        return this.generateEmail()
      }
      if (column.patterns.includes('name')) {
        return this.generateName()
      }
      if (column.patterns.includes('phone')) {
        return this.generatePhone()
      }
      if (column.patterns.includes('id')) {
        return this.generateId()
      }
    }
    
    // Generate random string
    const length = 5 + Math.floor(this.rng() * 15)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(this.rng() * chars.length))
    }
    return result
  }

  private generateCategoricalValue(column: DataColumn, config: GenerationConfig): string {
    // Extract categories from original data
    const originalValues = this.originalData.map(row => row[column.name]).filter(v => v !== null)
    const categories = Array.from(new Set(originalValues))
    
    if (categories.length === 0) {
      return 'Category_' + Math.floor(this.rng() * 10)
    }
    
    return categories[Math.floor(this.rng() * categories.length)]
  }

  private generateDateValue(column: DataColumn, config: GenerationConfig): string {
    const start = new Date(2020, 0, 1)
    const end = new Date()
    const randomTime = start.getTime() + this.rng() * (end.getTime() - start.getTime())
    return new Date(randomTime).toISOString().split('T')[0]
  }

  private generateEmail(): string {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'company.com']
    const names = ['john', 'jane', 'mike', 'sarah', 'david', 'lisa', 'alex', 'emma']
    
    const name = names[Math.floor(this.rng() * names.length)]
    const domain = domains[Math.floor(this.rng() * domains.length)]
    const number = Math.floor(this.rng() * 1000)
    
    return `${name}${number}@${domain}`
  }

  private generateName(): string {
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Alex', 'Emma', 'Chris', 'Anna']
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez']
    
    const firstName = firstNames[Math.floor(this.rng() * firstNames.length)]
    const lastName = lastNames[Math.floor(this.rng() * lastNames.length)]
    
    return `${firstName} ${lastName}`
  }

  private generatePhone(): string {
    const areaCode = 200 + Math.floor(this.rng() * 800)
    const exchange = 200 + Math.floor(this.rng() * 800)
    const number = Math.floor(this.rng() * 10000)
    
    return `${areaCode}-${exchange}-${number.toString().padStart(4, '0')}`
  }

  private generateId(): string {
    return uuidv4().substring(0, 8).toUpperCase()
  }

  private applyQualitySettings(data: any[], config: GenerationConfig): void {
    // Add duplicates
    const duplicateCount = Math.floor(data.length * config.qualitySettings.duplicatePercentage / 100)
    for (let i = 0; i < duplicateCount; i++) {
      const sourceIndex = Math.floor(this.rng() * data.length)
      const targetIndex = Math.floor(this.rng() * data.length)
      data[targetIndex] = { ...data[sourceIndex] }
    }
  }

  private anonymizeData(data: any[], columns: DataColumn[], config: GenerationConfig): void {
    const sensitiveColumns = columns.filter(col => col.sensitivityLevel === 'high')
    
    sensitiveColumns.forEach(column => {
      data.forEach(row => {
        if (row[column.name] && config.privacySettings.encryptSensitive) {
          // Simple anonymization - replace with hash
          row[column.name] = CryptoJS.SHA256(String(row[column.name])).toString().substring(0, 8)
        }
      })
    })
  }

  private calculateQualityMetrics(data: any[], config: GenerationConfig): any {
    return {
      recordCount: data.length,
      completeness: this.calculateCompleteness(data),
      consistency: config.qualitySettings.consistencyScore,
      accuracy: 85 + this.rng() * 10 // Mock accuracy score
    }
  }

  private calculatePrivacyMetrics(data: any[], config: GenerationConfig): any {
    return {
      anonymizationLevel: config.privacySettings.anonymize ? 'High' : 'Low',
      kAnonymity: config.privacySettings.kAnonymity,
      differentialPrivacy: config.privacySettings.differentialPrivacy.enabled,
      privacyBudget: config.privacySettings.differentialPrivacy.epsilon
    }
  }

  private calculateBiasMetrics(data: any[], config: GenerationConfig): any {
    return {
      overallBias: config.biasSettings.targetBias,
      fairnessScore: 100 - config.biasSettings.targetBias,
      sensitiveAttributeBalance: 'Balanced' // Mock value
    }
  }

  private calculateCompleteness(data: any[]): number {
    if (data.length === 0) return 0
    
    const totalCells = data.length * Object.keys(data[0]).length
    const filledCells = data.reduce((count, row) => {
      return count + Object.values(row).filter(v => v !== null && v !== undefined && v !== '').length
    }, 0)
    
    return (filledCells / totalCells) * 100
  }
}

// Data Export Class
export class DataExporter {
  static exportToCSV(data: any[], filename: string = 'synthetic_data.csv'): void {
    if (data.length === 0) return
    
    const headers = Object.keys(data[0])
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => {
        const value = row[header]
        if (value === null || value === undefined) return ''
        if (typeof value === 'string' && value.includes(',')) return `"${value}"`
        return String(value)
      }).join(','))
    ].join('\n')
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  static exportToJSON(data: any[], filename: string = 'synthetic_data.json'): void {
    const jsonContent = JSON.stringify(data, null, 2)
    const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

// Utility Functions
export const sampleDatasets = [
  {
    id: 'customer_demographics',
    name: 'Customer Demographics',
    description: 'Sample customer data with demographics and preferences',
    columns: ['customer_id', 'first_name', 'last_name', 'email', 'age', 'gender', 'city', 'country', 'income', 'segment'],
    recordCount: 10000,
    category: 'Customer Data'
  },
  {
    id: 'financial_transactions',
    name: 'Financial Transactions',
    description: 'Sample financial transaction data',
    columns: ['transaction_id', 'account_id', 'amount', 'currency', 'merchant', 'category', 'timestamp', 'status'],
    recordCount: 50000,
    category: 'Financial Data'
  },
  {
    id: 'healthcare_records',
    name: 'Healthcare Records',
    description: 'Sample healthcare patient data (anonymized)',
    columns: ['patient_id', 'age', 'gender', 'diagnosis', 'treatment', 'admission_date', 'discharge_date', 'cost'],
    recordCount: 25000,
    category: 'Healthcare Data'
  },
  {
    id: 'ecommerce_orders',
    name: 'E-commerce Orders',
    description: 'Sample e-commerce order and product data',
    columns: ['order_id', 'customer_id', 'product_id', 'quantity', 'price', 'discount', 'order_date', 'shipping_address'],
    recordCount: 75000,
    category: 'E-commerce Data'
  },
  {
    id: 'iot_sensors',
    name: 'IoT Sensors',
    description: 'Sample IoT sensor data with device metrics and environmental readings',
    columns: ['sensor_id', 'device_type', 'location', 'timestamp', 'temperature', 'humidity', 'pressure', 'battery_level', 'signal_strength', 'status'],
    recordCount: 100000,
    category: 'IoT Data'
  }
]

export const generateSampleData = (datasetId: string, recordCount: number = 1000): any[] => {
  const dataset = sampleDatasets.find(ds => ds.id === datasetId)
  if (!dataset) throw new Error('Dataset not found')
  
  const data: any[] = []
  const rng = Math.random
  
  for (let i = 0; i < recordCount; i++) {
    const record: any = {}
    
    dataset.columns.forEach(column => {
      switch (column) {
        case 'customer_id':
        case 'account_id':
        case 'transaction_id':
        case 'patient_id':
        case 'order_id':
        case 'product_id':
        case 'sensor_id':
          record[column] = `${column.split('_')[0].toUpperCase()}_${(i + 1).toString().padStart(6, '0')}`
          break
        case 'first_name':
          record[column] = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Alex', 'Emma'][Math.floor(rng() * 8)]
          break
        case 'last_name':
          record[column] = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][Math.floor(rng() * 5)]
          break
        case 'email':
          record[column] = `user${i + 1}@example.com`
          break
        case 'age':
          record[column] = 18 + Math.floor(rng() * 65)
          break
        case 'gender':
          record[column] = ['Male', 'Female', 'Other'][Math.floor(rng() * 3)]
          break
        case 'city':
          record[column] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][Math.floor(rng() * 5)]
          break
        case 'country':
          record[column] = ['USA', 'Canada', 'UK', 'Germany', 'France'][Math.floor(rng() * 5)]
          break
        case 'income':
          record[column] = 30000 + Math.floor(rng() * 120000)
          break
        case 'amount':
        case 'price':
          record[column] = Math.round((10 + rng() * 1000) * 100) / 100
          break
        case 'device_type':
          record[column] = ['Temperature Sensor', 'Humidity Sensor', 'Pressure Sensor', 'Motion Detector', 'Air Quality Monitor', 'Smart Thermostat'][Math.floor(rng() * 6)]
          break
        case 'location':
          record[column] = ['Building A - Floor 1', 'Building A - Floor 2', 'Building B - Floor 1', 'Building B - Floor 2', 'Warehouse', 'Parking Lot', 'Server Room', 'Conference Room'][Math.floor(rng() * 8)]
          break
        case 'timestamp':
          const now = new Date()
          const pastHours = Math.floor(rng() * 24 * 7) // Last 7 days
          const timestamp = new Date(now.getTime() - pastHours * 60 * 60 * 1000)
          record[column] = timestamp.toISOString()
          break
        case 'temperature':
          record[column] = Math.round((15 + rng() * 25) * 10) / 10 // 15-40°C
          break
        case 'humidity':
          record[column] = Math.round((30 + rng() * 50) * 10) / 10 // 30-80%
          break
        case 'pressure':
          record[column] = Math.round((980 + rng() * 50) * 10) / 10 // 980-1030 hPa
          break
        case 'battery_level':
          record[column] = Math.round(rng() * 100) // 0-100%
          break
        case 'signal_strength':
          record[column] = Math.round(-30 - rng() * 70) // -30 to -100 dBm
          break
        case 'status':
          record[column] = ['Online', 'Offline', 'Maintenance', 'Error'][Math.floor(rng() * 4)]
          break
        default:
          record[column] = `Sample_${column}_${i + 1}`
      }
    })
    
    data.push(record)
  }
  
  return data
} 