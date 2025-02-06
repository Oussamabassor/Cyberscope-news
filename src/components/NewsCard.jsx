"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function NewsCard({ news }) {
  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/article/${encodeURIComponent(news.id)}`}>
        <div className="relative h-48">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            layout="fill"
            objectFit="cover"
            className="neon-border"
          />
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
            {news.category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors duration-200">
            {news.title}
          </h3>
          <p className="text-muted-foreground text-sm">{news.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

