import { TrendingUp, Users, Sparkles } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    label: "발행된 아티클",
    value: "50+",
  },
  {
    icon: Users,
    label: "구독자",
    value: "1,200+",
  },
  {
    icon: Sparkles,
    label: "만족도",
    value: "95%",
  },
];

export default function Stats() {
  return (
    <section className="container mx-auto grid md:grid-cols-3 gap-8 max-w-4xl">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center text-center gap-2"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-newsletter-accent/5">
            <s.icon className="text-newsletter-accent" size={24} />
          </div>
          <p className="text-3xl font-bold text-white">{s.value}</p>
          <p className="text-sm text-gray-400">{s.label}</p>
        </div>
      ))}
    </section>
  );
}