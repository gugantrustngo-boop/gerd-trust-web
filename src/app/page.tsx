import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { CommitmentSection } from "@/components/sections/CommitmentSection";
import { FocusAreasSection } from "@/components/sections/FocusAreasSection";
import { WhyGerdSection } from "@/components/sections/WhyGerdSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { DonationSection } from "@/components/sections/DonationSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <VisionMissionSection />
      <CommitmentSection />
      <FocusAreasSection />
      <WhyGerdSection />
      <TimelineSection />
      <LeadershipSection />
      <ComplianceSection />
      <GallerySection />
      <VolunteerSection />
      <ContactSection />
      <DonationSection />
    </>
  );
}
