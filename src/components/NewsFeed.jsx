"use client"

import { motion } from "framer-motion"
import NewsCard from "./NewsCard"

export default function NewsFeed({ articles }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-primary mb-8 neon-glow">Latest Tech News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NewsCard news={article} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

