import { fetchTopNews } from "@/utils/api";
import NewsFeed from "@/components/NewsFeed";
import { categories } from "@/components/Navbar";
import ErrorMessage from "@/components/ErrorMessage";
import RollbackButton from "@/components/RollbackButton";

export default function CategoryPage({ params }) {
  const { slug } = params;

  // Fetch news data on the server side
  const getNewsData = async () => {
    const newsArticles = await fetchTopNews();
    const categoryName =
      categories.find((cat) => cat.name.toLowerCase() === slug)?.name || "Unknown";
    const filteredArticles = newsArticles.filter(
      (article) => article.category.toLowerCase() === slug
    );

    return { categoryName, filteredArticles };
  };

  return (
    <div className="pt-24">
      <RollbackButton />
      <h1 className="mb-8 text-4xl font-bold text-center text-primary neon-glow">
        {categoryName} News
      </h1>
      {filteredArticles.length > 0 ? (
        <NewsFeed articles={filteredArticles} />
      ) : (
        <ErrorMessage message={`No news found for ${categoryName}`} />
      )}
    </div>
  );
}
