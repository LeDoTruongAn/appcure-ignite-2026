import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import CurePipeline from "@/components/CurePipeline";
import AgendaSection from "@/components/AgendaSection";
import RegisterSection from "@/components/RegisterSection";
import FaqSection from "@/components/FaqSection";
import SiteFooter from "@/components/SiteFooter";

export default function IgnitePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white">
      <SiteNav />
      <main>
        <HeroSection />
        <CurePipeline />
        <AgendaSection />
        <RegisterSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
