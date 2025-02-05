import type { NewsArticle } from "@/types/news"
import { categories } from "@/components/Navbar"

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const API_URL = "https://newsapi.org/v2"

export async function fetchTopNews(): Promise<NewsArticle[]> {
  const response = await fetch(`${API_URL}/top-headlines?country=us&category=technology&apiKey=${API_KEY}`)

  if (!response.ok) {
    throw new Error("Failed to fetch news")
  }

  const data = await response.json()
  return data.articles.map((article: any) => ({
    id: article.url,
    title: article.title,
    description: article.description,
    content: article.content,
    category: assignCategory(article.title),
    image: article.urlToImage,
    author: article.author,
    date: article.publishedAt,
  }))
}

function assignCategory(title: string): string {
  const lowercaseTitle = title.toLowerCase()
  for (const category of categories) {
    if (lowercaseTitle.includes(category.name.toLowerCase())) {
      return category.name
    }
  }
  return "Technology"
}

