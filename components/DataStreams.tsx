'use client'

import { motion } from 'framer-motion'

const DataStreams = () => {
  const streams = [
    { delay: 0, duration: 12, top: '15%', opacity: 0.15 },
    { delay: 2, duration: 10, top: '35%', opacity: 0.1 },
    { delay: 4, duration: 14, top: '55%', opacity: 0.2 },
    { delay: 6, duration: 11, top: '75%', opacity: 0.12 },
  ]

  const dataSymbols = ['◦', '◉', '◯', '●', '▫', '▪', '▬', '◆', '◇', '△', '▲']

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {streams.map((stream, streamIndex) => (
        <motion.div
          key={streamIndex}
          className="absolute w-full h-px"
          style={{ top: stream.top }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: stream.delay
          }}
        >
          {/* Main stream line */}
          <div 
            className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{ opacity: stream.opacity }}
          />
          
          {/* Data symbols flowing along the stream */}
          {[...Array(8)].map((_, symbolIndex) => (
            <motion.div
              key={symbolIndex}
              className="absolute text-xs font-mono text-primary"
              style={{
                left: `${symbolIndex * 15}%`,
                top: '-6px',
                opacity: stream.opacity + 0.1
              }}
              animate={{
                opacity: [0, stream.opacity + 0.2, 0],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: symbolIndex * 0.3
              }}
            >
              {dataSymbols[Math.floor(Math.random() * dataSymbols.length)]}
            </motion.div>
          ))}
        </motion.div>
      ))}

      {/* Vertical data flow indicators */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`vertical-${index}`}
          className="absolute w-px h-20 bg-gradient-to-b from-primary/20 to-transparent"
          style={{
            left: `${20 + index * 20}%`,
            top: '10%'
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scaleY: [0.5, 1, 0.5],
            y: [0, 100, 200]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 1.5
          }}
        />
      ))}

      {/* Pulsing nodes representing data points */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`node-${index}`}
          className="absolute w-3 h-3 rounded-full bg-primary/30 border border-primary/50"
          style={{
            left: `${15 + index * 14}%`,
            top: `${20 + (index % 3) * 20}%`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            boxShadow: [
              '0 0 0 0 rgba(35, 140, 68, 0.3)',
              '0 0 0 10px rgba(35, 140, 68, 0)',
              '0 0 0 0 rgba(35, 140, 68, 0)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5
          }}
        />
      ))}

      {/* Binary code rain effect */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, columnIndex) => (
          <motion.div
            key={`binary-${columnIndex}`}
            className="absolute text-xs font-mono text-primary/20 whitespace-nowrap"
            style={{
              left: `${10 + columnIndex * 30}%`,
              transform: 'rotate(90deg)'
            }}
            animate={{
              y: [-50, 800],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 8 + columnIndex * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: columnIndex * 2
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default DataStreams 