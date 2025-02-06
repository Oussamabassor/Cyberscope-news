import HeroSection from "../components/HeroSection"
import NewsFeed from "../components/NewsFeed"
import LiveTicker from "../components/LiveTicker"
import { fetchTopNews } from "../utils/api"

export default async function Home() {
  const newsArticles = await fetchTopNews()

  return (
    <div className="pt-16">
      <LiveTicker />
      <HeroSection />
      <NewsFeed articles={newsArticles} />
    </div>
  )
}

