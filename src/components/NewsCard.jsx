"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function NewsCard({ news }) {
  return (
    <motion.div
      className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg bg-card hover:shadow-2xl"
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
          <div className="absolute px-2 py-1 text-xs font-semibold rounded-full top-2 right-2 bg-primary text-primary-foreground">
            {news.category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-xl font-semibold transition-colors duration-200 text-foreground hover:text-primary">
            {news.title}
          </h3>
          <p className="text-sm text-muted-foreground">{news.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
