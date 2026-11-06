"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TimetableThumbnail from "@/public/thumbnail/generated/skct-timetable-cover-2026-10.webp"; // Replace with your actual timetable project thumbnail

// SKCT College Timetable Management System Project Data
const SKCT_TIMETABLE_PROJECT = {
  "hero": {
    "title": "SKCT Automated Timetable",
    "descriptor": "A scheduling prototype with constraint controls, conflict feedback, and local component checks",
    "status": "Prototype · Local component checks",
    "thumbnail": TimetableThumbnail
  },
  "overview": {
    "what": "A React and Supabase prototype with academic filters, staff and classroom forms, timetable views, and PDF export components.",
    "why": "Academic schedules need explicit staff, room, and teaching preferences with visible conflict feedback.",
    "problem": "Competing scheduling constraints can be difficult to track and review manually."
  },
  "capabilities": [
    {
      "title": "Scheduling Controls",
      "description": "Forms expose department, semester, lab-duration, workload, and time-preference inputs.",
      "icon": "⚙️"
    },
    {
      "title": "Conflict Feedback",
      "description": "The interface displays candidate timetables and conflicts. Lab-slot checks reject consecutive periods separated by a scheduled break.",
      "icon": "🔍"
    },
    {
      "title": "Academic Records",
      "description": "React forms and Supabase queries organize staff, subjects, and classrooms.",
      "icon": "👥"
    },
    {
      "title": "PDF Components",
      "description": "Timetable export components use jsPDF and jspdf-autotable; operational use is not established.",
      "icon": "📄"
    },
    {
      "title": "Schedule Views",
      "description": "Department and year filters, grids, and previews support candidate schedule review.",
      "icon": "🗓️"
    },
    {
      "title": "Status and Motion",
      "description": "Local utilities handle generating and result states, including reduced-motion behavior.",
      "icon": "📱"
    }
  ],
  "architecture": {
    "frontend": {
      "title": "Frontend",
      "description": "React and TypeScript built with Vite",
      "components": [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion"
      ]
    },
    "backend": {
      "title": "Data Integration",
      "description": "Supabase client calls load and update application records",
      "components": [
        "Supabase client",
        "PostgreSQL",
        "Query feedback",
        "Application forms"
      ]
    },
    "ai": {
      "title": "Scheduling Logic",
      "description": "Preferences, validation utilities, and conflict-result UI",
      "components": [
        "Constraint inputs",
        "Workload preferences",
        "Conflict feedback",
        "Validator tests"
      ]
    },
    "database": {
      "title": "Academic Records",
      "description": "Source components organize scheduling records",
      "components": [
        "Subjects",
        "Staff",
        "Classrooms",
        "Timetable entries"
      ]
    },
    "hosting": {
      "title": "Validation Boundary",
      "description": "Recorded evidence covers local component checks rather than operational deployment",
      "components": [
        "Local unit checks",
        "Motion tests",
        "Browser validation pending",
        "User trial pending"
      ]
    }
  },
  "techStack": [
    {
      "category": "Frontend",
      "items": [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion"
      ]
    },
    {
      "category": "Data Layer",
      "items": [
        "Supabase",
        "PostgreSQL",
        "Client queries"
      ]
    },
    {
      "category": "Scheduling UI",
      "items": [
        "Constraint preferences",
        "Conflict feedback",
        "Validation"
      ]
    },
    {
      "category": "PDF Components",
      "items": [
        "jsPDF",
        "jspdf-autotable"
      ]
    },
    {
      "category": "Validation",
      "items": [
        "Node unit tests",
        "Reduced-motion checks",
        "Local prototype"
      ]
    }
  ],
  "challenges": [
    {
      "title": "Explicit Constraints",
      "problem": "Staff, room, and teaching preferences can compete.",
      "solution": "Expose preferences in the form and display conflicts alongside candidate results.",
      "learning": "Visible review is more useful than an unsupported guarantee of conflict-free output."
    },
    {
      "title": "Data-dependent Forms",
      "problem": "Scheduling inputs depend on academic records that may fail to load.",
      "solution": "Handle Supabase query results and loading feedback in the scheduling form.",
      "learning": "Component behavior and operational workflows require separate validation."
    },
    {
      "title": "Clear Motion States",
      "problem": "Initial, generating, and result states must be distinguishable.",
      "solution": "Local utilities and tests cover status branches and reduced-motion behavior.",
      "learning": "Component tests do not replace browser or user evaluation."
    }
  ],
  "useCases": [
    {
      "audience": "Scheduling Experiments",
      "needs": "Explore how staff, rooms, subjects, and constraints fit together"
    },
    {
      "audience": "Academic Coordinators",
      "needs": "Review candidate schedules and conflicts in a prototype"
    },
    {
      "audience": "Interface Evaluation",
      "needs": "Validate controls and export flows in a browser before operational adoption"
    }
  ],
  "outcome": {
    "achievements": [
      "Scheduling forms and conflict-result components are present in source",
      "Local tests cover lab-slot continuity, timetable validation, and motion utilities",
      "PDF export components are included",
      "Browser trials and operational deployment remain unverified"
    ],
    "skills": [
      "React and TypeScript interfaces",
      "Scheduling constraint modeling",
      "Supabase client integration",
      "PDF components",
      "Reduced-motion status feedback"
    ],
    "significance": "This is an academic scheduling prototype. Current repository evidence covers local component behavior, without a recorded browser trial, user study, or operational deployment."
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
      <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
        <span className="text-blue-300 text-sm uppercase tracking-wider">
          {SKCT_TIMETABLE_PROJECT.hero.status}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
        {SKCT_TIMETABLE_PROJECT.hero.title}
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
        {SKCT_TIMETABLE_PROJECT.hero.descriptor}
      </p>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <Image
          src={SKCT_TIMETABLE_PROJECT.hero.thumbnail}
          alt="SKCT Timetable Management System Preview"
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
          <h3 className="text-xl font-semibold text-blue-300 mb-4">What It Is</h3>
          <p className="text-gray-300 leading-relaxed">
            {SKCT_TIMETABLE_PROJECT.overview.what}
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">Why It Matters</h3>
          <p className="text-gray-300 leading-relaxed">
            {SKCT_TIMETABLE_PROJECT.overview.why}
          </p>
        </div>
        <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/30">
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Addressed</h3>
          <p className="text-red-300 leading-relaxed">
            {SKCT_TIMETABLE_PROJECT.overview.problem}
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
        {SKCT_TIMETABLE_PROJECT.capabilities.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
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
  const sections = Object.values(SKCT_TIMETABLE_PROJECT.architecture);

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
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {section.components.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm"
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
        {SKCT_TIMETABLE_PROJECT.techStack.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-xl font-semibold text-teal-300 mb-6">
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
        {SKCT_TIMETABLE_PROJECT.challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-10 border border-teal-500/30"
          >
            <h3 className="text-3xl font-bold text-teal-300 mb-6">
              {challenge.title}
            </h3>
            <div className="space-y-6 text-lg">
              <div>
                <span className="text-teal-400 font-semibold">Challenge:</span>
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
        {SKCT_TIMETABLE_PROJECT.useCases.map((group, index) => (
          <motion.div
            key={group.audience}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 text-center"
          >
            <h3 className="text-3xl font-bold text-blue-300 mb-6">
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
              {SKCT_TIMETABLE_PROJECT.outcome.achievements.map((item, i) => (
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
            <h3 className="text-3xl font-bold text-cyan-300 mb-8">Engineering Focus</h3>
            <ul className="space-y-4 text-lg">
              {SKCT_TIMETABLE_PROJECT.outcome.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-cyan-400 text-2xl mt-1">→</span>
                  <span className="text-gray-200">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-10 border border-blue-500/30 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-blue-300 mb-8">Validation Boundary</h3>
          <p className="text-xl text-blue-200 leading-relaxed">
            {SKCT_TIMETABLE_PROJECT.outcome.significance}
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

export default function SKCTTimetableProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#0a1a2e] to-[#0f0f1a] overflow-hidden">
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ProjectHero />
          <p className="mb-16 text-center">
            <a href="https://github.com/haresh-sai06/staff-timetable-management/blob/main/docs/TRL-ASSESSMENT.md" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
              Source and validation notes ↗
            </a>
          </p>
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
