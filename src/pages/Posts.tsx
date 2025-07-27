import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { articles } from "../data/articles";

export default function Posts() {
  return (
    <main className="container mx-auto py-20 space-y-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-10">모든 아티클</h1>
      {articles.map((a) => (
        <article key={a.id} className="bg-white/5 rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-orange-600/20 text-orange-400">
              {a.category}
            </span>
            <time className="ml-auto text-xs text-gray-500">{a.date}</time>
            <span className="text-xs text-gray-500">{a.readTime}분</span>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-white">{a.title}</h2>
          <p className="text-gray-400">{a.excerpt}</p>
          <NavLink
            to={`/posts/${a.id}`}
            className="self-end inline-flex items-center gap-1 text-newsletter-accent hover:underline"
          >
            자세히 보기 <ArrowRight size={16} />
          </NavLink>
        </article>
      ))}
    </main>
  );
}
