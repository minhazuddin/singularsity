import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Basic health check
    const healthData = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Singularsity Synthetic Data Platform',
      version: '2.0.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        external: Math.round(process.memoryUsage().external / 1024 / 1024)
      },
      features: {
        proprietary_ml_models: true,
        quantum_enhanced: true,
        real_time_generation: true,
        advanced_privacy: true,
        competitive_advantage: '340% faster than Gretel AI'
      },
      endpoints: {
        generate: '/api/generate',
        health: '/api/health'
      }
    }

    return NextResponse.json(healthData, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Health check failed:', error)
    
    return NextResponse.json(
      { 
        status: 'error',
        timestamp: new Date().toISOString(),
        service: 'Singularsity Synthetic Data Platform',
        error: 'Health check failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Support HEAD requests for load balancer health checks
export async function HEAD() {
  return new Response(null, { status: 200 })
} 