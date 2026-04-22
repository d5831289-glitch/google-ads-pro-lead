import logo from "@/assets/tashweesh-logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logo}
            alt="وكالة تشويش - Tashweesh Agency"
            className="h-9 w-auto md:h-10"
            loading="eager"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            المميزات
          </a>
          <a href="#steps" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            خطوات العمل
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            تواصل معنا
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-elegant"
        >
          ابدأ الآن
        </a>
      </div>
    </header>
  );
}
