"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"

const breakingNews = [
  "AI defeats world champion in strategy game",
  "Quantum encryption breakthrough announced",
  "New exoplanet discovered in habitable zone",
  "Revolutionary clean energy tech unveiled",
  "Global cybersecurity initiative launched",
]

export default function LiveTicker() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="relative bg-black border border-white/10 rounded-lg shadow-lg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />

      {/* Header */}
      <div className="absolute left-0 top-0 bottom-0 bg-white/5 backdrop-blur-sm px-4 py-2 flex items-center z-20">
        <Zap className="w-5 h-5 text-white mr-2 animate-pulse" />
        <span className="text-lg font-bold text-white">LIVE</span>
      </div>

      {/* News ticker */}
      <motion.div
        className="whitespace-nowrap py-3 pl-32"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 25,
          ease: "linear",
        }}
      >
        {breakingNews.map((news, index) => (
          <span
            key={index}
            className="inline-block mr-16 text-white/90 transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              className={`
              relative px-4 py-1 rounded
              ${
                hoveredIndex === index
                  ? "bg-white/5 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105"
                  : "text-white/80"
              }
            `}
            >
              {/* Neon border effect on hover */}
              {hoveredIndex === index && (
                <span className="absolute inset-0 rounded border border-white/20 animate-pulse" />
              )}
              {news}
            </span>
          </span>
        ))}
      </motion.div>

      {/* Scanner line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-1/3"
        animate={{
          x: ["-100%", "400%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "linear",
        }}
      />
    </div>
  )
}

