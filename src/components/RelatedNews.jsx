"use client"

import { motion } from "framer-motion"
import NewsCard from "./NewsCard"

export default function RelatedNews({ currentArticleId, articles }) {
  const relatedArticles = articles.filter((article) => article.id !== currentArticleId).slice(0, 3)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-primary mb-8 neon-glow">Related News</h2>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {relatedArticles.map((article, index) => (
          <motion.div
            key={article.id}
            className="w-80 flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NewsCard news={article} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

