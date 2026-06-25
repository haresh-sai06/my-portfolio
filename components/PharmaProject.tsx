"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MedicalInventoryThumbnail from "@/public/thumbnail/pharma-project.png"; // replace if needed

// ---------------- PROJECT DATA ----------------

const MEDICAL_INVENTORY_PROJECT = {
  hero: {
    title: "Breit Med Inventory",
    descriptor:
      "A production-grade medical inventory management system with normalized APIs, secure authentication, and scalable full-stack architecture",
    status: "In Development · Full-Stack System",
    thumbnail: MedicalInventoryThumbnail,
  },

  overview: {
    what:
      "Breit Med Inventory is a full-stack medical inventory management platform designed to manage medicines, suppliers, warehouses, purchases, and sales with strict data integrity and reliability.",
    why:
      "Medical and pharmaceutical inventory systems require precision, traceability, and consistency. This project prioritizes correctness and maintainability over superficial UI features.",
    problem:
      "Many inventory systems break under real-world usage due to weak backend validation, unstable API contracts, and unstructured frontend data handling.",
  },

  capabilities: [
    {
      title: "Medicine Management",
      description:
        "CRUD operations for medicines with category mapping and structured metadata handling.",
      icon: "💊",
    },
    {
      title: "Supplier Management",
      description:
        "Create, update, and manage suppliers using normalized API responses and defensive update flows.",
      icon: "🏭",
    },
    {
      title: "Warehouse Operations",
      description:
        "Warehouse-level inventory tracking with contact details, activation status, and location data.",
      icon: "🏬",
    },
    {
      title: "Purchase & Sales Orders",
      description:
        "Structured purchase and sales order workflows connecting suppliers, warehouses, and stock movement.",
      icon: "📦",
    },
    {
      title: "JWT Authentication",
      description:
        "Secure authentication system with token-based authorization and protected API routes.",
      icon: "🔐",
    },
    {
      title: "Normalized Data Layer",
      description:
        "Frontend normalization layer that converts raw backend responses into UI-safe, predictable data.",
      icon: "🔄",
    },
  ],

  architecture: {
    frontend: {
      title: "Frontend",
      description:
        "Strongly typed frontend focused on predictable state management and controlled data flow.",
      components: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Context",
      ],
    },
    backend: {
      title: "Backend",
      description:
        "RESTful backend with clear routing, service separation, and authentication middleware.",
      components: ["Go", "Gin Framework", "JWT", "REST APIs"],
    },
    database: {
      title: "Database",
      description:
        "Relational database schema designed for transactional safety and data consistency.",
      components: ["MySQL", "Normalized Tables", "Foreign Keys"],
    },
    api: {
      title: "API Layer",
      description:
        "Stable API layer with Axios interceptors, error handling, and request normalization.",
      components: [
        "Axios Client",
        "API Normalizers",
        "Interceptors",
        "Error Handling",
      ],
    },
    systemDesign: {
      title: "System Design",
      description:
        "Service-oriented architecture focused on debuggability, scalability, and maintainability.",
      components: [
        "Service Layer",
        "Repository Pattern",
        "DTO Separation",
        "Scalable Architecture",
      ],
    },
  },

  techStack: [
    { category: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS"] },
    { category: "Backend", items: ["Go", "Gin", "JWT Authentication"] },
    { category: "Database", items: ["MySQL", "Relational Schema"] },
    { category: "State Management", items: ["React Context", "Custom Hooks"] },
    { category: "Architecture", items: ["Normalization Layer", "CRUD Patterns"] },
  ],

  challenges: [
    {
      title: "Backend–Frontend Mismatch",
      problem:
        "Backend responses were not frontend-ready, leading to empty UI states despite successful API calls.",
      solution:
        "Implemented a normalization layer to adapt backend responses before storing them in global state.",
      learning:
        "Frontend systems should never consume raw backend data directly in production applications.",
    },
    {
      title: "Infinite API Requests",
      problem:
        "Incorrect useEffect dependencies caused repeated API calls and backend overload.",
      solution:
        "Introduced guarded initial fetch logic using useRef to ensure one-time data loading.",
      learning:
        "Understanding React’s rendering and effect lifecycle is critical for stable data fetching.",
    },
    {
      title: "Unsafe Update Operations",
      problem:
        "Backend update endpoints failed when receiving empty or zero-value fields.",
      solution:
        "Added frontend payload adapters to send only meaningful fields, mimicking PATCH behavior.",
      learning:
        "Defensive frontend engineering is essential when backend contracts are imperfect.",
    },
  ],

  useCases: [
    { audience: "Pharmacies", needs: "Accurate medicine and stock tracking" },
    { audience: "Medical Distributors", needs: "Supplier and warehouse coordination" },
    { audience: "Healthcare Startups", needs: "Scalable inventory infrastructure" },
    { audience: "Developers", needs: "Reference for real-world CRUD architecture" },
  ],

  outcome: {
    achievements: [
      "Implemented complete CRUD flows across multiple entities",
      "Built a normalized and stable frontend data layer",
      "Integrated secure JWT-based authentication",
      "Stabilized API communication through frontend adapters",
    ],
    skills: [
      "Full-stack system design",
      "Advanced frontend–backend debugging",
      "REST API contract management",
      "Database-driven application architecture",
    ],
    significance:
      "Breit Med Inventory demonstrates the ability to design and build reliable enterprise-grade systems where correctness, stability, and maintainability are prioritized over superficial features.",
  },
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
          {MEDICAL_INVENTORY_PROJECT.hero.status}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white/90 mb-6">
        {MEDICAL_INVENTORY_PROJECT.hero.title}
      </h1>

      <p className="text-2xl text-white/70 max-w-4xl mx-auto mb-12">
        {MEDICAL_INVENTORY_PROJECT.hero.descriptor}
      </p>

      <div className="relative w-full h-[340px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden border border-white/10">
        <Image
          src={MEDICAL_INVENTORY_PROJECT.hero.thumbnail}
          alt="Medical Inventory preview"
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
          <p className="text-white/60">{MEDICAL_INVENTORY_PROJECT.overview.what}</p>
        </div>
        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white/80 mb-4">Why It Was Built</h3>
          <p className="text-white/60">{MEDICAL_INVENTORY_PROJECT.overview.why}</p>
        </div>
        <div className="bg-red-500/5 rounded-lg p-8 border border-red-500/20">
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Solved</h3>
          <p className="text-red-300">{MEDICAL_INVENTORY_PROJECT.overview.problem}</p>
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
        {MEDICAL_INVENTORY_PROJECT.capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="bg-white/5 rounded-lg p-6 border border-white/10"
          >
            <div className="text-3xl mb-4">{cap.icon}</div>
            <h3 className="text-xl font-semibold text-white/80 mb-3">
              {cap.title}
            </h3>
            <p className="text-white/60">{cap.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ArchitectureSnapshot() {
  const sections = Object.values(MEDICAL_INVENTORY_PROJECT.architecture);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-20"
    >
      <h2 className="text-4xl font-bold text-white/90 mb-12">Architecture Snapshot</h2>
      <div className="space-y-6">
        {sections.map((sec, i) => (
          <motion.div
            key={sec.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="bg-white/5 rounded-lg p-8 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white/80 mb-4">
              {sec.title}
            </h3>
            <p className="text-white/60 mb-6">{sec.description}</p>
            <div className="flex flex-wrap gap-3">
              {sec.components.map((c, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-sm"
                >
                  {c}
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
        {MEDICAL_INVENTORY_PROJECT.techStack.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            className="bg-white/5 rounded-lg p-6 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white/80 mb-4">
              {cat.category}
            </h3>
            {cat.items.map((item, idx) => (
              <div key={idx} className="text-white/60 text-sm">
                • {item}
              </div>
            ))}
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">
        Challenges & Learnings
      </h2>
      <div className="space-y-8">
        {MEDICAL_INVENTORY_PROJECT.challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            className="bg-yellow-500/5 rounded-lg p-8 border border-yellow-500/20"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              {c.title}
            </h3>
            <p className="text-white/60 mb-3">
              <strong className="text-white/80">Problem:</strong> {c.problem}
            </p>
            <p className="text-green-400 mb-3">
              <strong className="text-white/80">Solution:</strong> {c.solution}
            </p>
            <p className="text-blue-400">
              <strong className="text-white/80">Learning:</strong> {c.learning}
            </p>
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
        {MEDICAL_INVENTORY_PROJECT.useCases.map((u, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            className="bg-white/5 rounded-lg p-8 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white/80 mb-4">
              {u.audience}
            </h3>
            <p className="text-white/60">{u.needs}</p>
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
        <div className="bg-green-500/5 rounded-lg p-8 border border-green-500/20">
          <h3 className="text-2xl font-semibold text-green-400 mb-6">
            Achievements
          </h3>
          <ul className="space-y-3">
            {MEDICAL_INVENTORY_PROJECT.outcome.achievements.map((a, i) => (
              <li key={i} className="text-white/70">✓ {a}</li>
            ))}
          </ul>
        </div>
        <div className="bg-purple-500/5 rounded-lg p-8 border border-purple-500/20">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">
            Why This Matters
          </h3>
          <p className="text-purple-300">
            {MEDICAL_INVENTORY_PROJECT.outcome.significance}
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
      <button
        onClick={() => router.push("/#projects")}
        className="px-8 py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white/80"
      >
        ← Back to Projects
      </button>
    </motion.div>
  );
}

// ---------------- PAGE ----------------

export default function MedicalInventoryProject() {
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
