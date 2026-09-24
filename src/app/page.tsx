import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { WhoWeWorkWithSection } from "@/components/sections/WhoWeWorkWithSection";
import { WhyHireGurkhaSection } from "@/components/sections/WhyHireGurkhaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <ProofSection />
      <WhoWeWorkWithSection />
      <WhyHireGurkhaSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
