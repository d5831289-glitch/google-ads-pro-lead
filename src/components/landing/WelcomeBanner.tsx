import { Sparkles } from "lucide-react";

export function WelcomeBanner() {
  return (
    <div className="relative w-full bg-gradient-orange text-white shadow-soft">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-semibold sm:text-sm md:px-6">
        <Sparkles className="h-4 w-4 flex-shrink-0" strokeWidth={2.5} />
        <span>
          أهلاً بك في وكالة تشويش — احصل على استشارة مجانية وخطة تسويقية مخصصة لنشاطك اليوم!
        </span>
      </div>
    </div>
  );
}
