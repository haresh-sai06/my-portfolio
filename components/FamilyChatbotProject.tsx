"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FamilyChatbotThumbnail from "@/public/thumbnail/family-chatbot.png"; // Replace with your actual image

// Family-Chatbot Project Data
const FAMILY_CHATBOT_PROJECT = {
  hero: {
    title: "Family-Chatbot",
    descriptor: "An emotionally intelligent AI companion designed to keep families connected, supported, and cared for through compassionate conversations.",
    status: "Active Development · MVP Launched",
    thumbnail: FamilyChatbotThumbnail
  },
  overview: {
    what: "Family-Chatbot is a warm, family-focused AI assistant that helps loved ones stay emotionally connected, manage daily tasks, share memories, and provide gentle support   all through natural, caring conversations.",
    why: "In today’s busy world, families often struggle to stay emotionally close. Existing chatbots feel cold and impersonal. This project brings warmth, empathy, and family values into AI interactions.",
    problem: "Elderly family members feel isolated, parents juggle overwhelming responsibilities, and emotional check-ins get lost in daily chaos. Generic AI lacks the nuance to truly understand and care."
  },
  capabilities: [
    {
      title: "Compassionate Conversations",
      description: "Emotionally aware responses with empathy, active listening, and family-appropriate tone.",
      icon: "❤️"
    },
    {
      title: "Daily Reminders & Care",
      description: "Gentle medication reminders, appointment alerts, and wellness check-ins for elders and kids.",
      icon: "🔔"
    },
    {
      title: "Memory Sharing",
      description: "Helps families record and revisit precious stories, photos, and voice messages together.",
      icon: "📸"
    },
    {
      title: "Family Task Coordination",
      description: "Smart scheduling, grocery lists, chore reminders, and shared family calendar integration.",
      icon: "📅"
    },
    {
      title: "Emotional Support",
      description: "Offers comfort during tough moments, celebrates joys, and encourages family bonding.",
      icon: "🤗"
    },
    {
      title: "Multi-Language & Voice",
      description: "Supports regional languages and voice interaction for accessibility across generations.",
      icon: "🌍"
    }
  ],
  architecture: {
    frontend: {
      title: "Frontend",
      description: "Modern React application with real-time chat interface and responsive design",
      components: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router"]
    },
    backend: {
      title: "Backend",
      description: "Secure API layer handling authentication, message routing, and AI processing",
      components: ["Node.js", "Express/FastAPI", "REST APIs", "JWT Auth"]
    },
    ai: {
      title: "AI Engine",
      description: "Fine-tuned LLM with emotional intelligence, context memory, and family-safe filtering",
      components: ["LLaMA/Gemini", "Prompt Engineering", "Context Memory", "Safety Filters"]
    },
    database: {
      title: "Database & Auth",
      description: "Firebase for real-time sync, secure user data, and family group management",
      components: ["Firebase Auth", "Firestore", "Realtime Database", "Cloud Storage"]
    },
    hosting: {
      title: "Deployment",
      description: "Scalable cloud hosting with CDN for fast global access",
      components: ["Vercel/Netlify", "Cloud Functions", "CDN", "SSL"]
    }
  },
  techStack: [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { category: "AI & LLM", items: ["LLaMA/Gemini", "Prompt Engineering", "Context Management"] },
    { category: "Database", items: ["Firebase", "Firestore", "Authentication"] },
    { category: "Deployment", items: ["Vercel", "CDN", "SSL"] }
  ],
  challenges: [
    {
      title: "Emotional Intelligence",
      problem: "Standard LLMs respond factually but lack warmth, empathy, and emotional nuance needed for family interactions.",
      solution: "Engineered custom system prompts, response templates, and sentiment-aware chaining to infuse care and understanding.",
      learning: "True emotional intelligence in AI comes from thoughtful prompt design and human-centered engineering."
    },
    {
      title: "Family Privacy & Safety",
      problem: "Families share sensitive personal information   health, emotions, finances   requiring ironclad privacy.",
      solution: "Implemented end-to-end encryption, strict data policies, and family-only access controls with no third-party sharing.",
      learning: "Trust is the foundation of family tech. Privacy cannot be an afterthought."
    },
    {
      title: "Multi-Generational UX",
      problem: "The app must be intuitive for tech-savvy teens and simple enough for elderly grandparents.",
      solution: "Designed voice-first interface, large text options, and guided flows with inclusive testing across age groups.",
      learning: "Great design bridges generations   simplicity and accessibility win over flashy features."
    }
  ],
  useCases: [
    { audience: "Elderly Parents", needs: "Companionship, medication reminders, emotional check-ins, and easy communication with children" },
    { audience: "Busy Parents", needs: "Family coordination, child wellness tracking, and emotional support during stressful days" },
    { audience: "Children Abroad", needs: "Regular, meaningful connection with parents back home without time zone barriers" },
    { audience: "Extended Families", needs: "Shared memory keeping, group coordination, and inclusive communication across generations" }
  ],
  outcome: {
    achievements: [
      "MVP successfully launched with core emotional AI features",
      "Positive user feedback on warmth and helpfulness of responses",
      "Secure, privacy-first architecture protecting sensitive family data",
      "Accessible design usable by non-tech-savvy family members"
    ],
    skills: [
      "Full-stack development with modern React & Firebase",
      "AI prompt engineering for emotional intelligence",
      "Privacy-focused system design and security implementation",
      "Inclusive UX for multi-generational users"
    ],
    significance:
      "This project proves that AI can go beyond efficiency   it can nurture human connection, bring comfort to the lonely, and strengthen family bonds. In a world growing more digital, Family-Chatbot shows technology can still feel deeply human."
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
      <div className="inline-block px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8">
        <span className="text-pink-300 text-sm uppercase tracking-wider">
          {FAMILY_CHATBOT_PROJECT.hero.status}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
        {FAMILY_CHATBOT_PROJECT.hero.title}
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
        {FAMILY_CHATBOT_PROJECT.hero.descriptor}
      </p>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <Image
          src={FAMILY_CHATBOT_PROJECT.hero.thumbnail}
          alt="Family-Chatbot Interface Preview"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
          <h3 className="text-xl font-semibold text-pink-300 mb-4">What It Is</h3>
          <p className="text-gray-300 leading-relaxed">
            {FAMILY_CHATBOT_PROJECT.overview.what}
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Why It Matters</h3>
          <p className="text-gray-300 leading-relaxed">
            {FAMILY_CHATBOT_PROJECT.overview.why}
          </p>
        </div>
        <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/30">
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Solved</h3>
          <p className="text-red-300 leading-relaxed">
            {FAMILY_CHATBOT_PROJECT.overview.problem}
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
        {FAMILY_CHATBOT_PROJECT.capabilities.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
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
  const sections = Object.values(FAMILY_CHATBOT_PROJECT.architecture);

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
            <h3 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {section.components.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm"
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
        {FAMILY_CHATBOT_PROJECT.techStack.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-6">
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
        {FAMILY_CHATBOT_PROJECT.challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-10 border border-amber-500/30"
          >
            <h3 className="text-3xl font-bold text-amber-300 mb-6">
              {challenge.title}
            </h3>
            <div className="space-y-6 text-lg">
              <div>
                <span className="text-amber-400 font-semibold">Challenge:</span>
                <p className="text-gray-300 mt-2">{challenge.problem}</p>
              </div>
              <div>
                <span className="text-green-400 font-semibold">Solution:</span>
                <p className="text-gray-200 mt-2">{challenge.solution}</p>
              </div>
              <div>
                <span className="text-purple-400 font-semibold">Key Learning:</span>
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
        {FAMILY_CHATBOT_PROJECT.useCases.map((group, index) => (
          <motion.div
            key={group.audience}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 text-center"
          >
            <h3 className="text-3xl font-bold text-pink-300 mb-6">
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
              {FAMILY_CHATBOT_PROJECT.outcome.achievements.map((item, i) => (
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
            <h3 className="text-3xl font-bold text-indigo-300 mb-8">Skills Strengthened</h3>
            <ul className="space-y-4 text-lg">
              {FAMILY_CHATBOT_PROJECT.outcome.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-indigo-400 text-2xl mt-1">→</span>
                  <span className="text-gray-200">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-10 border border-purple-500/30 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-purple-300 mb-8">Why This Project Matters</h3>
          <p className="text-xl text-purple-200 leading-relaxed">
            {FAMILY_CHATBOT_PROJECT.outcome.significance}
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

export default function FamilyChatbotProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a0b2e] to-[#0f0f1a] overflow-hidden">
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