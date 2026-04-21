import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Steps } from "@/components/landing/Steps";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "إدارة إعلانات جوجل الاحترافية - Google Ads | جوجل أدز برو" },
      {
        name: "description",
        content:
          "خدمة احترافية لإدارة حملات Google Ads: تحليل، إعداد، إطلاق، وتحسين مستمر. ضاعف مبيعاتك مع خبراء معتمدين.",
      },
      { property: "og:title", content: "إدارة إعلانات جوجل الاحترافية - Google Ads" },
      {
        property: "og:description",
        content: "ضاعف مبيعاتك مع إدارة احترافية لحملات Google Ads. استشارة مجانية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <ContactForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
