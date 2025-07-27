import { Sparkles } from "lucide-react";

export default function NewsletterCta() {
  return (
    <section
      id="subscribe"
      className="container mx-auto max-w-4xl bg-white/5 rounded-2xl py-16 px-8 text-center"
    >
      <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-newsletter-accent/10 text-newsletter-accent font-medium mb-4">
        <Sparkles size={16} /> 주간 뉴스레터
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
        매주 새로운 인사이트를 받아보세요
      </h2>
      <p className="text-gray-400 mb-8">
        개발 트렌드, 실무 팁, 커리어 조언까지 - 개발자 성장에 필요한 모든 것을
        <br /> 매주 목요일 오전 9시에 정리해서 전달해드립니다.
      </p>
      <a
        href="https://example.com/subscribe"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-medium bg-newsletter-accent text-background hover:bg-newsletter-accent/90 transition"
      >
        무료로 구독하기
      </a>
    </section>
  );
}