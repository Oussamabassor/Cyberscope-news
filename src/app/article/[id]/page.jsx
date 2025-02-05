import { notFound } from "next/navigation";
import ArticleContent from "@/components/ArticleContent";
import { fetchTopNews } from "@/utils/api";

export default async function ArticlePage({ params }) {
  const articles = await fetchTopNews();
  const article = articles.find((a) => a.id === decodeURIComponent(params.id));

  if (!article) {
    notFound();
  }

  return <ArticleContent article={article} relatedArticles={articles} />;
}
