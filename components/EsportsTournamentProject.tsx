"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import EsportsThumbnail from "@/public/thumbnail/esports.png"; // Replace with your actual thumbnail

// Esports Tournament Registration Website Project Data
const ESPORTS_PROJECT = {
  hero: {
    title: "Esports Tournament Platform",
    descriptor: "A full-stack web application for hosting and managing large-scale Free Fire esports tournaments with seamless team registration, real-time updates, and admin dashboard.",
    status: "Live · Hosted Multiple Tournaments",
    thumbnail: EsportsThumbnail
  },
  overview: {
    what: "A modern, responsive esports tournament registration platform built for organizers and players. Features include team sign-ups, slot tracking, live countdown, prize pool display, and automated bracket management.",
    why: "Traditional tournament registration is chaotic   manual Google Forms, WhatsApp groups, and spreadsheets lead to errors and frustration. This platform brings professionalism, transparency, and excitement to grassroots esports.",
    problem: "Organizers struggle with tracking registrations, preventing duplicates, managing slots, and communicating updates. Players face unclear rules, delayed confirmations, and poor user experience."
  },
  capabilities: [
    {
      title: "Team Registration System",
      description: "Easy form for teams to register with player IDs, captain details, and substitute players. Real-time validation and duplicate checks.",
      icon: "🎮"
    },
    {
      title: "Live Slot Counter",
      description: "Real-time registration count with progress bar showing remaining slots out of total capacity (e.g., 48 teams).",
      icon: "📊"
    },
    {
      title: "Countdown Timer",
      description: "Dynamic countdown to tournament start with days, hours, minutes, and seconds displayed prominently.",
      icon: "⏰"
    },
    {
      title: "Prize Pool Showcase",
      description: "Eye-catching display of total prize money with bold, animated styling to build hype.",
      icon: "🏆"
    },
    {
      title: "Responsive Design",
      description: "Fully mobile-friendly interface optimized for players registering from phones.",
      icon: "📱"
    },
    {
      title: "Admin Dashboard",
      description: "Backend panel for organizers to view, export, and manage all registered teams securely.",
      icon: "⚙️"
    }
  ],
  architecture: {
    frontend: {
      title: "Frontend",
      description: "Modern React application with smooth animations and real-time UI updates",
      components: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Convex Backend"]
    },
    backend: {
      title: "Backend & Database",
      description: "Serverless backend with real-time data sync and mutation handling",
      components: ["Convex", "Real-time Queries", "Mutations", "Type-safe API"]
    },
    hosting: {
      title: "Deployment",
      description: "Fast, global deployment with edge caching and instant updates",
      components: ["Vercel", "Edge Functions", "CDN", "Custom Domain"]
    },
    styling: {
      title: "UI/UX Design",
      description: "High-energy gaming aesthetic with dark theme, gradients, and glassmorphism effects",
      components: ["Tailwind CSS", "Custom Animations", "Responsive Layouts", "Dark Mode"]
    }
  },
  techStack: [
    { category: "Framework", items: ["Next.js 14", "React 18", "TypeScript"] },
    { category: "Backend", items: ["Convex", "Serverless Functions", "Real-time DB"] },
    { category: "Styling", items: ["Tailwind CSS", "Framer Motion", "Glassmorphism"] },
    { category: "Deployment", items: ["Vercel", "Edge Network", "Custom Domain"] },
    { category: "Tools", items: ["Sonner (Toasts)", "Lucide Icons", "Vercel Analytics"] }
  ],
  challenges: [
    {
      title: "Real-Time Registration Sync",
      problem: "Multiple users registering simultaneously could cause race conditions and duplicate entries.",
      solution: "Used Convex's real-time mutations and optimistic updates to ensure instant, conflict-free registration tracking.",
      learning: "Serverless real-time databases are perfect for high-concurrency scenarios like tournament sign-ups."
    },
    {
      title: "Preventing Fake Registrations",
      problem: "Open forms are vulnerable to spam, fake teams, and multiple entries from the same player.",
      solution: "Implemented server-side validation, rate limiting, and unique player ID checks across teams.",
      learning: "Security and data integrity must be designed from day one in public-facing platforms."
    },
    {
      title: "Mobile-First Gaming Audience",
      problem: "Most esports players access platforms on mobile, but complex forms lead to high drop-off rates.",
      solution: "Designed a clean, touch-friendly interface with large inputs, clear labels, and minimal steps.",
      learning: "In gaming communities, frictionless UX directly impacts participation and success."
    }
  ],
  useCases: [
    { audience: "Tournament Organizers", needs: "Easy setup, real-time monitoring, exportable team lists, and professional branding" },
    { audience: "Esports Players", needs: "Fast registration, clear slot availability, hype-building design, and instant confirmation" },
    { audience: "Content Creators", needs: "Branded landing pages, live countdowns, and shareable links to promote their events" },
    { audience: "Community Managers", needs: "Reliable system to handle hundreds of registrations without manual work" }
  ],
  outcome: {
    achievements: [
      "Successfully hosted multiple tournaments with 48+ teams each",
      "Zero duplicate or fake registrations due to robust validation",
      "Received praise for smooth UX and professional design",
      "Real-time updates worked flawlessly during peak registration hours"
    ],
    skills: [
      "Full-stack development with Next.js and Convex",
      "Real-time application architecture",
      "High-performance UI with Tailwind and Framer Motion",
      "User experience design for gaming audiences"
    ],
    significance:
      "This platform empowers grassroots esports organizers to run professional-grade tournaments without expensive tools. It brings structure, excitement, and fairness to community gaming   proving that great technology can elevate local esports scenes and give every player a chance to shine."
  }
};

// ---------------- COMPONENT SECTIONS ----------------

function ProjectHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <div className="inline-block px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8">
        <span className="text-red-300 text-sm uppercase tracking-wider">
          {ESPORTS_PROJECT.hero.status}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
        {ESPORTS_PROJECT.hero.title}
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
        {ESPORTS_PROJECT.hero.descriptor}
      </p>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <Image
          src={ESPORTS_PROJECT.hero.thumbnail}
          alt="Esports Tournament Platform Preview"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
    </motion.section>
  );
}

function ProjectOverview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Project Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-red-300 mb-4">What It Is</h3>
          <p className="text-gray-300 leading-relaxed">
            {ESPORTS_PROJECT.overview.what}
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">Why It Matters</h3>
          <p className="text-gray-300 leading-relaxed">
            {ESPORTS_PROJECT.overview.why}
          </p>
        </div>
        <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/30">
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Solved</h3>
          <p className="text-red-300 leading-relaxed">
            {ESPORTS_PROJECT.overview.problem}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function SystemCapabilities() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ESPORTS_PROJECT.capabilities.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300"
          >
            <div className="text-5xl mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ArchitectureSnapshot() {
  const sections = Object.values(ESPORTS_PROJECT.architecture);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Technical Architecture</h2>
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-red-300 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {section.components.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {ESPORTS_PROJECT.techStack.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-xl font-semibold text-orange-300 mb-6">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.items.map((item, idx) => (
                <div key={idx} className="text-gray-300">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ChallengesAndLearnings() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Challenges & Learnings</h2>
      <div className="space-y-10">
        {ESPORTS_PROJECT.challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-10 border border-red-500/30"
          >
            <h3 className="text-3xl font-bold text-red-300 mb-6">
              {challenge.title}
            </h3>
            <div className="space-y-6 text-lg">
              <div>
                <span className="text-red-400 font-semibold">Challenge:</span>
                <p className="text-gray-300 mt-2">{challenge.problem}</p>
              </div>
              <div>
                <span className="text-green-400 font-semibold">Solution:</span>
                <p className="text-gray-200 mt-2">{challenge.solution}</p>
              </div>
              <div>
                <span className="text-yellow-400 font-semibold">Key Learning:</span>
                <p className="text-gray-200 mt-2 italic">{challenge.learning}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function TargetAudience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Who Its For</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ESPORTS_PROJECT.useCases.map((group, index) => (
          <motion.div
            key={group.audience}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 text-center"
          >
            <h3 className="text-3xl font-bold text-red-300 mb-6">
              {group.audience}
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {group.needs}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function OutcomeAndImpact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="mb-32"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Impact & Outcome</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-10 border border-green-500/30">
            <h3 className="text-3xl font-bold text-green-300 mb-8">Key Achievements</h3>
            <ul className="space-y-4 text-lg">
              {ESPORTS_PROJECT.outcome.achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-green-400 text-2xl mt-1">✓</span>
                  <span className="text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl p-10 border border-white/10">
            <h3 className="text-3xl font-bold text-orange-300 mb-8">Skills Strengthened</h3>
            <ul className="space-y-4 text-lg">
              {ESPORTS_PROJECT.outcome.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-orange-400 text-2xl mt-1">→</span>
                  <span className="text-gray-200">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-10 border border-red-500/30 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-red-300 mb-8">Why This Project Matters</h3>
          <p className="text-xl text-red-200 leading-relaxed">
            {ESPORTS_PROJECT.outcome.significance}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function BackToPortfolio() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center py-16"
    >
      <motion.button
        onClick={() => router.push('/#projects')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center space-x-4 px-10 py-5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
      >
        <span className="text-white/70 text-2xl">←</span>
        <span className="text-white text-xl font-medium">Back to All Projects</span>
      </motion.button>
    </motion.div>
  );
}

export default function EsportsTournamentProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0515] to-black overflow-hidden">
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ProjectHero />
          <ProjectOverview />
          <SystemCapabilities />
          <ArchitectureSnapshot />
          <TechStack />
          <ChallengesAndLearnings />
          <TargetAudience />
          <OutcomeAndImpact />
          <BackToPortfolio />
        </div>
      </div>
    </div>
  );
}