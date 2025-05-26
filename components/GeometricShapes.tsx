'use client'

import { motion } from 'framer-motion'

const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {/* Large floating rectangles representing data blocks */}
      <motion.div
        className="absolute w-20 h-20 border border-primary/10 rounded-lg"
        style={{ top: '10%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-16 h-16 border border-secondary/20 rounded-lg"
        style={{ top: '60%', right: '15%' }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
          opacity: [0.05, 0.2, 0.05]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute w-12 h-12 border border-primary/15 rounded-full"
        style={{ top: '30%', right: '25%' }}
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Small data dots */}
      <motion.div
        className="absolute w-2 h-2 bg-primary/20 rounded-full"
        style={{ top: '20%', left: '80%' }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-3 h-3 bg-secondary/25 rounded-full"
        style={{ top: '70%', left: '20%' }}
        animate={{
          y: [0, 25, 0],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.div
        className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full"
        style={{ top: '45%', left: '70%' }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.1, 0.5, 0.1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Connecting lines */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      >
        <motion.path
          d="M 100 200 Q 300 100 500 250"
          stroke="url(#gradient1)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 600 300 Q 400 150 200 400"
          stroke="url(#gradient2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,7"
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#238c44" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#409A5D" stopOpacity="0.3"/>
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#409A5D" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#238c44" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Matrix-style vertical lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"
            style={{
              left: `${15 + i * 15}%`,
              height: '100%'
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleY: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default GeometricShapes 