import logo from "@/assets/tashweesh-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <img
          src={logo}
          alt="وكالة تشويش - Tashweesh Agency"
          className="h-8 w-auto md:h-9"
          loading="lazy"
        />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} وكالة تشويش - جميع الحقوق محفوظة. شريك معتمد لجوجل.
        </p>
      </div>
    </footer>
  );
}
