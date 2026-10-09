"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TimetableThumbnail from "@/public/thumbnail/generated/skct-timetable-cover-2026-10.webp"; // Replace with your actual timetable project thumbnail

// SKCT College Timetable Management System Project Data
const SKCT_TIMETABLE_PROJECT = {
  hero: {
    title: "SKCT Timetable Management System",
    descriptor: "An advanced, automated college timetable management system tailored for Sri Krishna College of Technology (SKCT), Coimbatore   featuring conflict-free scheduling, role-based access, and a modern, mobile-optimized interface.",
    status: "Prototype - Ongoing",
    thumbnail: TimetableThumbnail
  },
  overview: {
    what: "A comprehensive web application for managing college timetables at Sri Krishna College of Technology, supporting department-wise and year-wise scheduling, automated conflict resolution, staff workload management, and real-time PDF exports.",
    why: "Manual timetable creation in colleges is time-consuming and error-prone. This system automates scheduling while respecting academic constraints, reducing administrative burden and ensuring fair staff allocation.",
    problem: "Traditional timetable management leads to conflicts (overlapping classes, overworked staff), lack of transparency, and difficulty in handling complex constraints like Anna University’s semester structure and staff workload limits."
  },
  capabilities: [
    {
      title: "Automated Scheduling",
      description: "Generates conflict-free timetables using constraint-based algorithms respecting staff hours, classroom availability, and student group constraints.",
      icon: "⚙️"
    },
    {
      title: "Conflict Detection & Resolution",
      description: "Real-time detection of staff, classroom, and student overlaps with automated suggestions and manual overrides.",
      icon: "🔍"
    },
    {
      title: "Role-Based Access",
      description: "Admins manage data; staff and users view timetables and raise issues via a dedicated reporting system.",
      icon: "🔐"
    },
    {
      title: "PDF Export with Attribution",
      description: "Export department-wise timetables as branded PDFs with user attribution ('Downloaded by: Username').",
      icon: "📄"
    },
    {
      title: "Staff & Classroom Management",
      description: "Full CRUD operations for staff (with role-based workload limits) and classrooms (lecture halls, labs).",
      icon: "👥"
    },
    {
      title: "Mobile-First Responsive Design",
      description: "Touch-friendly interface with swipe gestures, collapsible menus, and optimized layouts for all devices.",
      icon: "📱"
    }
  ],
  architecture: {
    frontend: {
      title: "Frontend",
      description: "Modern, animated React application with smooth transitions and responsive design",
      components: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Next.js"]
    },
    backend: {
      title: "Backend",
      description: "Secure API layer with real-time database operations and authentication",
      components: ["Supabase", "PostgreSQL", "Authentication", "Storage", "Realtime"]
    },
    ai: {
      title: "Scheduling Engine",
      description: "Custom constraint satisfaction algorithm for automated timetable generation",
      components: ["JavaScript CSP Logic", "Workload Balancing", "Conflict Resolution", "Priority Rules"]
    },
    database: {
      title: "Database",
      description: "Relational structure with proper indexing for fast queries and data integrity",
      components: ["Supabase Postgres", "Foreign Keys", "Indexes", "Row Level Security"]
    },
    hosting: {
      title: "Deployment",
      description: "Fast, scalable hosting with edge delivery",
      components: ["Vercel", "Supabase Hosting", "CDN", "SSL"]
    }
  },
  techStack: [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Next.js"] },
    { category: "Backend & DB", items: ["Supabase", "PostgreSQL", "Authentication", "Storage"] },
    { category: "Scheduling Logic", items: ["Constraint Algorithms", "Conflict Detection", "Priority Rules"] },
    { category: "PDF Generation", items: ["jsPDF", "jspdf-autotable"] },
    { category: "Deployment", items: ["Vercel", "Supabase", "CDN"] }
  ],
  challenges: [
    {
      title: "Conflict-Free Automated Scheduling",
      problem: "Generating valid timetables satisfying multiple constraints (staff hours, classroom availability, student groups) is computationally complex.",
      solution: "Implemented a custom constraint satisfaction algorithm with backtracking and priority rules for morning theory/afternoon lab preferences.",
      learning: "Effective scheduling requires careful constraint modeling and iterative refinement   automation saves hours of manual work."
    },
    {
      title: "Real-Time Data Sync & Auth",
      problem: "Multiple users (admins, staff) need consistent, secure access to live timetable data without conflicts.",
      solution: "Leveraged Supabase’s real-time capabilities, row-level security, and JWT authentication for seamless, secure updates.",
      learning: "Supabase simplifies full-stack development with powerful realtime and auth features out of the box."
    },
    {
      title: "Mobile UX for Academic Use",
      problem: "Faculty and admins use the system on varied devices; interface must be intuitive on phones and tablets.",
      solution: "Built mobile-first responsive design with swipe gestures, collapsible menus, and touch-friendly controls using Tailwind and Framer Motion.",
      learning: "Great academic tools must prioritize accessibility and ease-of-use across all devices."
    }
  ],
  useCases: [
    { audience: "College Administrators", needs: "Automated timetable generation, conflict resolution, staff/classroom management, and PDF exports" },
    { audience: "Teaching Faculty", needs: "View personal schedules, track workload, and raise timetable-related issues" },
    { audience: "Department Coordinators", needs: "Department-wise timetable views, year/semester filtering, and real-time updates" },
    { audience: "Students (Future Enhancement)", needs: "View class schedules and receive notifications (planned)" }
  ],
  outcome: {
    achievements: [
      "Fully automated, conflict-free timetable generation implemented",
      "Real-time PDF export with user attribution and SKCT branding",
      "Role-based access control with secure authentication",
      "Mobile-optimized interface with smooth animations and intuitive navigation",
      "Comprehensive staff, classroom, and issue management system"
    ],
    skills: [
      "Full-stack development with Next.js and Supabase",
      "Algorithm design for constraint-based scheduling",
      "Advanced UI/UX with Framer Motion and GSAP animations",
      "PDF generation with jsPDF and branding",
      "Responsive and accessible design principles"
    ],
    significance:
      "This project transforms a traditionally tedious administrative task into an efficient, reliable, and user-friendly system. It demonstrates how thoughtful technology can streamline academic operations, ensure fairness in workload distribution, and enhance institutional efficiency   all while delivering a polished, professional experience aligned with SKCT's standards."
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
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Solved</h3>
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
            <h3 className="text-3xl font-bold text-cyan-300 mb-8">Skills Strengthened</h3>
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
          <h3 className="text-3xl font-bold text-blue-300 mb-8">Why This Project Matters</h3>
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