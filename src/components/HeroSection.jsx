"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Slow down the video slightly
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="/hero-background.jpg"
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1032811178/preview/stock-footage-circle-hud-head-up-display-interface-target-pointer-element-for-futuristic-cyber-technology-concept.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <motion.div
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-primary neon-glow mb-4">The Future is Now</h1>
        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
          Stay ahead with the latest in tech and innovation
        </p>
        <motion.button
          className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full text-lg font-semibold hover:bg-secondary/80 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Stories
        </motion.button>
      </motion.div>
    </section>
  )
}

