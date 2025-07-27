import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ArticlesPreview from "../components/ArticlesPreview";
import NewsletterCta from "../components/NewsletterCta";

export default function Home() {
  return (
    <main className="space-y-32">
      <Hero />
      <Stats />
      <ArticlesPreview />
      <NewsletterCta />
    </main>
  );
}