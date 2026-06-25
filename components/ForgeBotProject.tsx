"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ForgebotThumbnail from "@/public/thumbnail/Gemini_Generated_Image_x3yb9x3yb9x3yb9x.png";

// Project data structure
const FORGEBOT_PROJECT = {
  hero: {
    title: "LLM ForgeBot",
    descriptor: "A unified AI toolkit for automation, analytics, and LLM-powered workflows",
    status: "Completed · Prototype",
    thumbnail: ForgebotThumbnail
  },
  overview: {
    what: "LLM ForgeBot is a multi-purpose AI toolkit that consolidates essential tools LLM interface, text-to-voice conversion, data analytics, and SQL automation into a single web application.",
    why: "The market needed a unified solution to eliminate tool fragmentation, reduce costs, and leverage AI capabilities without the complexity of managing multiple specialized applications.",
    problem: "Businesses and developers face fragmented AI tools across different platforms, leading to inefficient workflows, high licensing costs, and context switching between disconnected applications."
  },
  capabilities: [
    {
      title: "LLM Interface",
      description: "Natural language conversation interface powered by LLaMA models with context awareness and intelligent response generation.",
      icon: "💬"
    },
    {
      title: "Text-to-Voice",
      description: "High-quality text-to-speech conversion supporting multiple languages and customizable voice parameters.",
      icon: "🔊"
    },
    {
      title: "Data Analytics Tools",
      description: "Comprehensive analytics dashboard with real-time data visualization and AI-powered insights generation.",
      icon: "📊"
    },
    {
      title: "SQL Automation",
      description: "Automated SQL query generation from Excel spreadsheets with intelligent schema detection and optimization.",
      icon: "🗃️"
    },
    {
      title: "AI Predictions",
      description: "Machine learning models for trend analysis and predictive analytics across integrated data sources.",
      icon: "🤖"
    },
    {
      title: "Unified Dashboard",
      description: "Centralized interface providing seamless access to all tools with consistent user experience.",
      icon: "🎛️"
    }
  ],
  architecture: {
    frontend: {
      title: "Frontend",
      description: "React + TypeScript application with responsive design and real-time updates",
      components: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    backend: {
      title: "Backend",
      description: "Python FastAPI server handling authentication, request routing, and business logic",
      components: ["Python", "FastAPI", "RESTful APIs", "JWT Authentication"]
    },
    ai: {
      title: "AI / ML Layer",
      description: "LLaMA model integration with context management and response optimization",
      components: ["LLaMA Models", "Text Processing", "Context Management", "Response Caching"]
    },
    database: {
      title: "Database",
      description: "Firebase for user data, analytics storage, and real-time synchronization",
      components: ["Firebase Firestore", "Real-time Sync", "Authentication", "Cloud Functions"]
    },
    apis: {
      title: "APIs",
      description: "RESTful endpoints connecting frontend services with backend AI processing",
      components: ["REST API", "WebSocket", "Rate Limiting", "Error Handling"]
    }
  },
  techStack: [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "FastAPI", "REST APIs"] },
    { category: "Database", items: ["Firebase", "Firestore", "Authentication"] },
    { category: "AI/ML", items: ["LLaMA Models", "Analytics Tools", "Text Processing"] },
    { category: "Hosting", items: ["Vercel", "Free Tier", "CDN"] }
  ],
  challenges: [
    {
      title: "Performance Optimization",
      problem: "LLM response times initially exceeded 10 seconds, making the interface feel sluggish.",
      solution: "Implemented request batching, response caching, and streaming responses to reduce perceived latency by 70%.",
      learning: "Learned that perceived performance is as important as actual performance in AI applications."
    },
    {
      title: "Context Management",
      problem: "LLaMA models lost context after 8-10 exchanges, breaking conversation continuity.",
      solution: "Developed a context summarization system that maintains conversation history while staying within token limits.",
      learning: "Understanding token economics and context window management is critical for production LLM applications."
    },
    {
      title: "Resource Constraints",
      problem: "Free tier hosting limitations caused frequent timeouts during peak usage.",
      solution: "Implemented intelligent queuing, request prioritization, and graceful degradation strategies.",
      learning: "Building resilient systems requires planning for failure scenarios and resource limitations."
    }
  ],
  useCases: [
    { audience: "Students", needs: "AI tools for research, content creation, and learning without subscription costs" },
    { audience: "Engineers", needs: "Integrated development tools with automation and analytics capabilities" },
    { audience: "Developers", needs: "Unified platform for testing AI features and building prototypes" },
    { audience: "Small Businesses", needs: "Cost-effective AI automation without enterprise software complexity" }
  ],
  outcome: {
    achievements: [
      "Fully functional prototype with all core features implemented",
      "80% cost reduction compared to using separate specialized tools",
      "Scalable architecture ready for production deployment",
      "Successful integration of 6 distinct AI capabilities in one platform"
    ],
    skills: [
      "Advanced AI/ML model integration in production environments",
      "Full-stack system architecture and API design",
      "Performance optimization for AI-powered applications",
      "Debugging complex distributed systems with AI components"
    ],
    significance:
      "This project demonstrates the ability to design and build complex AI systems that solve real-world problems. The unified approach to AI tool integration addresses clear market gaps while maintaining engineering excellence and scalability."
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
          {FORGEBOT_PROJECT.hero.status}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white/90 mb-6">
        {FORGEBOT_PROJECT.hero.title}
      </h1>

      <p className="text-2xl text-white/70 max-w-4xl mx-auto mb-12">
        {FORGEBOT_PROJECT.hero.descriptor}
      </p>

      {/* ✅ FIXED: Thumbnail rendered correctly */}
      <div className="relative w-full h-[340px] md:h-[400px] lg:h-[600px] h-64 rounded-lg overflow-hidden border border-white/10">
        <Image
          src={FORGEBOT_PROJECT.hero.thumbnail}
          alt="LLM ForgeBot preview"
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
            {FORGEBOT_PROJECT.overview.what}
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white/80 mb-4">Why It Was Built</h3>
          <p className="text-white/60 leading-relaxed">
            {FORGEBOT_PROJECT.overview.why}
          </p>
        </div>
        <div className="bg-red-500/5 rounded-lg p-8 border border-red-500/20">
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Solved</h3>
          <p className="text-red-300 leading-relaxed">
            {FORGEBOT_PROJECT.overview.problem}
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">System Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FORGEBOT_PROJECT.capabilities.map((capability, index) => (
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
    FORGEBOT_PROJECT.architecture.frontend,
    FORGEBOT_PROJECT.architecture.backend,
    FORGEBOT_PROJECT.architecture.ai,
    FORGEBOT_PROJECT.architecture.database,
    FORGEBOT_PROJECT.architecture.apis
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {FORGEBOT_PROJECT.techStack.map((category, index) => (
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
        {FORGEBOT_PROJECT.challenges.map((challenge, index) => (
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">Target Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FORGEBOT_PROJECT.useCases.map((useCase, index) => (
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
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Achievements</h3>
            <ul className="space-y-3">
              {FORGEBOT_PROJECT.outcome.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-white/70">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white/80 mb-6">Skills Gained</h3>
            <ul className="space-y-3">
              {FORGEBOT_PROJECT.outcome.skills.map((skill, index) => (
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
            {FORGEBOT_PROJECT.outcome.significance}
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

export default function ForgeBotProject() {
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
