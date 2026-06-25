"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PodJamThumbnail from "@/public/thumbnail/podjam.png"; // Replace with your actual PodJam preview image

// Project data structure - customized for PodJam
const PODJAM_PROJECT = {
  hero: {
    title: "PodJam",
    descriptor: "A real-time social music streaming app where friends jam together   perfectly synced, anywhere in the world",
    status: "Active Development · MVP Complete",
    thumbnail: PodJamThumbnail
  },
  overview: {
    what: "PodJam is a mobile-first social music app that lets users create and join live listening rooms. Friends can discover music together in perfect sync, chat in real-time, react with emojis, and share sessions instantly.",
    why: "Existing solutions like Spotify group sessions are limited, buggy, or premium-locked. Long-distance friends and communities needed a free, reliable, and fun way to share music moments in real time.",
    problem: "People miss the magic of listening to music together. Current apps suffer from sync issues, paywalls, poor mobile UX, and lack true social interaction during playback."
  },
  capabilities: [
    {
      title: "Perfect Sync Playback",
      description: "Sub-second synchronized music across all devices using real-time database updates and precise timing control.",
      icon: "🔄"
    },
    {
      title: "Live Chat & Reactions",
      description: "Real-time chat with emoji reactions, voice notes, and message bubbles during playback.",
      icon: "💬"
    },
    {
      title: "Room Discovery",
      description: "Browse public rooms by genre, mood, or trending sessions. Join instantly with a unique code or link.",
      icon: "🔍"
    },
    {
      title: "YouTube Music Integration",
      description: "Search and queue millions of songs directly from YouTube without requiring premium accounts.",
      icon: "🎵"
    },
    {
      title: "Social Feed",
      description: "Share room highlights, session recaps, and music moments to a community feed with likes and comments.",
      icon: "📱"
    },
    {
      title: "Shareable Links & Codes",
      description: "Generate short codes or shareable links that friends can use to join instantly via any messaging app.",
      icon: "🔗"
    }
  ],
  architecture: {
    frontend: {
      title: "Frontend",
      description: "React Native (Expo) mobile app with beautiful dark UI, smooth animations, and native feel",
      components: ["React Native", "Expo", "TypeScript", "Tailwind", "Framer Motion", "shadcn/ui"]
    },
    backend: {
      title: "Realtime Sync",
      description: "Firebase Realtime Database for ultra-low latency chat and playback synchronization",
      components: ["Firebase RTDB", "Presence System", "onDisconnect Cleanup", "Message Streaming"]
    },
    data: {
      title: "Data & Storage",
      description: "Firestore for room metadata, user profiles, feeds; Storage for avatars and uploads",
      components: ["Firestore", "Cloud Storage", "Offline Persistence", "Security Rules"]
    },
    auth: {
      title: "Authentication",
      description: "Google Sign-In with session persistence and secure user management",
      components: ["Firebase Auth", "Google Provider", "Session Persistence", "Auth Guards"]
    },
    apis: {
      title: "External APIs",
      description: "YouTube Data API for search and playback; Web Share API for social sharing",
      components: ["YouTube v3 API", "Web Share API", "Clipboard API", "Deep Linking"]
    }
  },
  techStack: [
    { category: "Mobile", items: ["React Native", "Expo", "TypeScript"] },
    { category: "UI/UX", items: ["Tailwind CSS", "shadcn/ui", "Framer Motion"] },
    { category: "Backend", items: ["Firebase", "Realtime Database", "Firestore"] },
    { category: "Auth & Storage", items: ["Firebase Auth", "Cloud Storage"] },
    { category: "APIs", items: ["YouTube Data API", "Web Share API"] },
    { category: "Hosting", items: ["Expo", "Firebase Hosting", "Vercel (web)"] }
  ],
  challenges: [
    {
      title: "Perfect Playback Sync",
      problem: "Achieving sub-second synchronization across devices with varying network conditions was extremely difficult.",
      solution: "Implemented a hybrid approach using Realtime Database for position updates with client-side drift correction and periodic resync.",
      learning: "True real-time sync requires both server authority and intelligent client compensation."
    },
    {
      title: "Background Audio",
      problem: "YouTube player would pause when switching tabs or minimizing the app on mobile.",
      solution: "Kept player mounted across tabs using display:none preservation and custom background controls.",
      learning: "Mobile audio continuity requires careful component lifecycle management."
    },
    {
      title: "Free Music Access",
      problem: "Needed millions of songs without requiring Spotify/Apple Music premium subscriptions.",
      solution: "Integrated YouTube Data API with react-player for free, legal access to vast music library.",
      learning: "Creative API usage can solve major accessibility barriers."
    }
  ],
  useCases: [
    { audience: "Long-Distance Friends", needs: "Share music moments in real time despite being miles apart" },
    { audience: "Study Groups", needs: "Focus together with lo-fi or ambient playlists in sync" },
    { audience: "Music Communities", needs: "Host themed listening parties and discover new tracks together" },
    { audience: "Couples & Families", needs: "Feel connected through shared musical experiences" },
    { audience: "Content Creators", needs: "Host live listening sessions with fans and build community" }
  ],
  outcome: {
    achievements: [
      "Fully functional MVP with perfect sync playback and real-time chat",
      "100% free access to millions of songs (no premium required)",
      "Shareable room links that work across all messaging apps",
      "Live presence system showing exactly who's jamming",
      "Beautiful, addictive dark mobile interface"
    ],
    skills: [
      "Real-time synchronization architecture across mobile devices",
      "Advanced Firebase integration (Auth, Firestore, RTDB, Storage)",
      "React Native performance optimization and animation mastery",
      "Mobile audio continuity and background playback solutions",
      "Social product design and viral sharing mechanics"
    ],
    significance:
      "PodJam brings back the joy of discovering and experiencing music together. In a world of isolated listening, it recreates the magic of sharing songs with friends   just like passing headphones or gathering around a speaker, but for the modern, distributed world."
  }
};

// ---------------- SECTIONS ----------------

function ProjectHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
        <span className="text-white/60 text-sm uppercase tracking-wider">
          {PODJAM_PROJECT.hero.status}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white/90 mb-6">
        {PODJAM_PROJECT.hero.title}
      </h1>

      <p className="text-2xl text-white/70 max-w-4xl mx-auto mb-12">
        {PODJAM_PROJECT.hero.descriptor}
      </p>

      {/* Thumbnail */}
      <div className="relative w-full h-[340px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden border border-white/10">
        <Image
          src={PODJAM_PROJECT.hero.thumbnail}
          alt="PodJam app preview"
          fill
          className="object-cover"
          priority
        />
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">Project Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white/80 mb-4">What It Is</h3>
          <p className="text-white/60 leading-relaxed">
            {PODJAM_PROJECT.overview.what}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white/80 mb-4">Why It Was Built</h3>
          <p className="text-white/60 leading-relaxed">
            {PODJAM_PROJECT.overview.why}
          </p>
        </div>
        <div className="bg-red-500/5 rounded-lg p-8 border border-red-500/20">
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Solved</h3>
          <p className="text-red-300 leading-relaxed">
            {PODJAM_PROJECT.overview.problem}
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PODJAM_PROJECT.capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="text-3xl mb-4">{capability.icon}</div>
            <h3 className="text-xl font-semibold text-white/80 mb-3">
              {capability.title}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {capability.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ArchitectureSnapshot() {
  const archSections = [
    PODJAM_PROJECT.architecture.frontend,
    PODJAM_PROJECT.architecture.backend,
    PODJAM_PROJECT.architecture.data,
    PODJAM_PROJECT.architecture.auth,
    PODJAM_PROJECT.architecture.apis
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-20"
    >
      <h2 className="text-4xl font-bold text-white/90 mb-12">Architecture Snapshot</h2>
      <div className="space-y-6">
        {archSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="bg-white/5 rounded-lg p-8 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white/80 mb-4">
              {section.title}
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {section.components.map((component, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-sm"
                >
                  {component}
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PODJAM_PROJECT.techStack.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="bg-white/5 rounded-lg p-6 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white/80 mb-4">
              {category.category}
            </h3>
            <div className="space-y-2">
              {category.items.map((item, idx) => (
                <div key={idx} className="text-white/60 text-sm">
                  • {item}
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">Challenges & Learnings</h2>
      <div className="space-y-8">
        {PODJAM_PROJECT.challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="bg-yellow-500/5 rounded-lg p-8 border border-yellow-500/20"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              {challenge.title}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-white/80 mb-2">Problem</h4>
                <p className="text-white/60">{challenge.problem}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white/80 mb-2">Solution</h4>
                <p className="text-green-400">{challenge.solution}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white/80 mb-2">Learning</h4>
                <p className="text-blue-400">{challenge.learning}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function UseCases() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-20"
    >
      <h2 className="text-4xl font-bold text-white/90 mb-12">Who Its For</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PODJAM_PROJECT.useCases.map((useCase, index) => (
          <motion.div
            key={useCase.audience}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            className="bg-white/5 rounded-lg p-8 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white/80 mb-4">
              {useCase.audience}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {useCase.needs}
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
      className="mb-20"
    >
      <h2 className="text-4xl font-bold text-white/90 mb-12">Outcome & Impact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-green-500/5 rounded-lg p-8 border border-green-500/20">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Key Achievements</h3>
            <ul className="space-y-3">
              {PODJAM_PROJECT.outcome.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-white/70">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white/80 mb-6">Skills Mastered</h3>
            <ul className="space-y-3">
              {PODJAM_PROJECT.outcome.skills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span className="text-white/70">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-purple-500/5 rounded-lg p-8 border border-purple-500/20">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">Why This Matters</h3>
          <p className="text-purple-300 leading-relaxed text-lg">
            {PODJAM_PROJECT.outcome.significance}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function ExitNavigation() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center mb-12"
    >
      <motion.button
        onClick={() => router.push('/#projects')}
        className="inline-flex items-center space-x-3 px-8 py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-white/60">←</span>
        <span className="text-white/80 font-medium">Back to Projects</span>
      </motion.button>
    </motion.div>
  );
}

export default function PodJamProject() {
  return (
    <div className="min-h-screen bg-[#050505] overflow-hidden">
      <div className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ProjectHero />
          <ProjectOverview />
          <SystemCapabilities />
          <ArchitectureSnapshot />
          <TechStack />
          <ChallengesAndLearnings />
          <UseCases />
          <OutcomeAndImpact />
          <ExitNavigation />
        </div>
      </div>
    </div>
  );
}