import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AudiencePathsSection } from "@/components/audience-paths-section";
import { EcosystemSection } from "@/components/ecosystem-section";
import { PubMachineSection } from "@/components/pub-machine-section";
import { MethodSection } from "@/components/method-section";
import { EntryModelsSection } from "@/components/entry-models-section";
import { LicensingSection } from "@/components/licensing-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AudiencePathsSection />
      <EcosystemSection />
      <PubMachineSection />
      <MethodSection />
      <EntryModelsSection />
      <LicensingSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
