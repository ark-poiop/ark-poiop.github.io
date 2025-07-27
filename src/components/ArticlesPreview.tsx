import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticlesPreview() {
  const latest = articles.slice(0, 3);
  return (
    <section className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center text-white mb-4">최신 아티클</h2>
      <p className="text-center text-gray-400 mb-10">
        가장 최근에 발행된 개발 관련 글을 확인하고 최신 트렌드를 놓치지 마세요
      </p>
      <div className="space-y-8">
        {latest.map((a) => (
          <article key={a.id} className="bg-white/5 rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-orange-600/20 text-orange-400">
                {a.category}
              </span>
              <time className="ml-auto text-xs text-gray-500">{a.date}</time>
              <span className="text-xs text-gray-500">{a.readTime}분</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {a.title}
            </h3>
            <p className="text-gray-400">{a.excerpt}</p>
            <NavLink
              to={`/posts/${a.id}`}
              className="self-end inline-flex items-center gap-1 text-newsletter-accent hover:underline"
            >
              자세히 보기 <ArrowRight size={16} />
            </NavLink>
          </article>
        ))}
      </div>
      <div className="text-center mt-10">
        <NavLink
          to="/posts"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition"
        >
          더 많은 글 보기 <ArrowRight size={18} />
        </NavLink>
      </div>
    </section>
  );
}