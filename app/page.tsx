import PortfolioScroll from "@/components/PortfolioScroll";
import PortraitScroll from "@/components/PortraitScroll";
import BentoSnapshot from "@/components/BentoSnapshot";
import SystemsStack from "@/components/SystemsStack";
import ProjectsGallery from "@/components/ProjectsGallery";
import MindsetProcess from "@/components/MindsetProcess";
import SpotlightReveal from "@/components/SpotlightReveal";
import Principles from "@/components/Principles";
import JourneyChapters from "@/components/JourneyChapters";
import Closure from "@/components/Closure";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PortfolioScroll />
      <Marquee text="Building systems · Not just screens" />
      <PortraitScroll />
      <BentoSnapshot />
      <SystemsStack />
      <Marquee text="Proof · Not promises" reverse speed={45} />
      <ProjectsGallery />
      <SpotlightReveal />
      <MindsetProcess />
      <Principles />
      <Marquee text="Based in India · Open to building globally" speed={40} />
      <JourneyChapters />
      <Closure />
    </main>
  );
}
