type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b2a22] p-5 transition hover:border-[#d6b56a]/40">
      <div className="mb-4 text-3xl">
        {icon}
      </div>

      <h3 className="mb-2 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-400">
        {description}
      </p>
    </div>
  );
}