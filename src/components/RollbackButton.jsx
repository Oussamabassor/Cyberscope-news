"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function RollbackButton() {
  const router = useRouter()

  return (
    <motion.button
      className="fixed top-20 left-4 z-50 bg-secondary/20 hover:bg-secondary/40 text-secondary-foreground p-2 rounded-full backdrop-blur-sm transition-colors duration-200"
      onClick={() => router.back()}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Go back"
    >
      <ArrowLeft className="w-6 h-6" />
    </motion.button>
  )
}

