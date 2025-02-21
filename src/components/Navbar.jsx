"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Cpu, Smartphone, Shield, Rocket, Lightbulb } from "lucide-react"

export const categories = [
  { name: "AI", icon: Cpu },
  { name: "Gadgets", icon: Smartphone },
  { name: "Cybersecurity", icon: Shield },
  { name: "Space Tech", icon: Rocket },
  { name: "Startups", icon: Lightbulb },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary neon-glow">
              CyberScop
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/category/${category.name.toLowerCase()}`}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="md:hidden"
        id="mobile-menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: "-100%" },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors duration-200"
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}

