import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="container mx-auto text-center py-24 max-w-5xl">
      <span className="inline-block px-4 py-1 mb-6 rounded-full bg-newsletter-accent/10 text-newsletter-accent font-medium">
        개발자를 위한 프리미엄 뉴스레터
      </span>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
        Developer <span className="text-newsletter-accent">Newsletter</span>
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
        최신 웹 개발 트렌드와 기술 인사이트를 전달하는 개발자를 위한 뉴스레터입니다.
        <br /> 실무에 바로 적용할 수 있는 <span className="text-white font-semibold">검증된 팁과 노하우</span>를 공유합니다.
      </p>
      <div className="flex justify-center gap-4">
        <NavLink
          to="/posts"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium bg-newsletter-accent text-background hover:bg-newsletter-accent/90 transition"
        >
          모든 글 탐색하기 <ArrowRight size={18} />
        </NavLink>
        <a
          href="#subscribe"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition"
        >
          뉴스레터 구독
        </a>
      </div>
    </section>
  );
}