"use client";

import { useEffect } from "react";
import Image from "next/image";
import RelatedNews from "@/components/RelatedNews";
import RollbackButton from "@/components/RollbackButton";

export default function ArticleContent({ article, relatedArticles }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-16">
      <RollbackButton />
      <article className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-primary neon-glow">{article.title}</h1>
          <div className="flex items-center mb-4 text-muted-foreground">
            <span className="mr-4">{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <div className="relative h-64 mb-8 sm:h-96">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg neon-border"
            />
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">{article.content}</p>
        </div>
      </article>
      <RelatedNews currentArticleId={article.id} articles={relatedArticles} />
    </div>
  );
}
