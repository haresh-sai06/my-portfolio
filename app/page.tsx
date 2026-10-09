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
import WorkExperience from "@/components/WorkExperience";
import { RESUME } from "@/lib/profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <nav
        aria-label="Main navigation"
        className="absolute inset-x-0 top-0 z-[60] flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-white/10 bg-black/30 px-5 py-5 text-xs backdrop-blur-md sm:px-8"
      >
        <a
          href="#top"
          className="font-mono uppercase tracking-wider text-white/85"
        >
          Haresh Sainaath S
        </a>
        <div className="flex items-center gap-4 text-white/65">
          <a href="#projects" className="hover:text-white">
            Work
          </a>
          <a href="#experience" className="hidden hover:text-white sm:inline">
            Experience
          </a>
          <a
            href={RESUME.href}
            download={RESUME.downloadName}
            className="text-[rgb(168,255,96)] hover:underline"
          >
            Resume ↓
          </a>
          <a href="#closure" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>
      <PortfolioScroll />
      <Marquee text="Building systems · Not just screens" />
      <PortraitScroll />
      <BentoSnapshot />
      <SystemsStack />
      <WorkExperience />
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
