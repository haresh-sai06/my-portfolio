"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ForgebotThumbnail from "@/public/thumbnail/generated/llm-forgebot-cover-2026-10.webp";

// Project data structure
const FORGEBOT_PROJECT = {
  "hero": {
    "title": "LLM ForgeBot",
    "descriptor": "An AI workflow prototype with a locally validated document-ingest step",
    "status": "Prototype · Ingest validated locally",
    "thumbnail": ForgebotThumbnail
  },
  "overview": {
    "what": "A React and Vite builder with Python ingestion and experimental AI tooling. The recorded browser check covers text upload, extraction, and chunk feedback.",
    "why": "Explore a shared interface for document preparation and model configuration before separate inference or training runs.",
    "problem": "Uploaded text and extraction failures need to be visible before documents enter an AI workflow."
  },
  "capabilities": [
    {
      "title": "Document Ingest",
      "description": "A local HTTP service extracts and chunks documents, retaining short non-empty notes. A text-file upload was recorded in desktop Chrome.",
      "icon": "📄"
    },
    {
      "title": "Upload Feedback",
      "description": "The builder displays the extracted excerpt, chunk count, and upload status.",
      "icon": "🔍"
    },
    {
      "title": "Builder Interface",
      "description": "React and TypeScript screens organize configuration and document preparation into steps.",
      "icon": "🎛️"
    },
    {
      "title": "AI Integration Code",
      "description": "LLM, voice, and image integrations require provider setup and separate runtime validation.",
      "icon": "💬"
    },
    {
      "title": "Analytics Scaffold",
      "description": "The backend includes analysis and SQLite demo code, without a verified business-impact claim.",
      "icon": "📊"
    },
    {
      "title": "Training Scripts",
      "description": "SFT and LoRA scripts are present. The ingest check did not train a model.",
      "icon": "🤖"
    }
  ],
  "architecture": {
    "frontend": {
      "title": "Frontend",
      "description": "React and TypeScript served by Vite",
      "components": [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS"
      ]
    },
    "backend": {
      "title": "Ingest Service",
      "description": "A local standard-library HTTP server calls the extraction module",
      "components": [
        "Python",
        "ThreadingHTTPServer",
        "Extraction",
        "Chunk feedback"
      ]
    },
    "ai": {
      "title": "Experimental AI Code",
      "description": "Model integrations and training scripts require separate validation",
      "components": [
        "LLM integrations",
        "SFT scripts",
        "LoRA scripts",
        "Provider configuration"
      ]
    },
    "database": {
      "title": "Prototype Storage",
      "description": "The broader backend includes a SQLite demo database and local artifacts",
      "components": [
        "SQLite",
        "SQLAlchemy",
        "Local files",
        "Demo data"
      ]
    },
    "apis": {
      "title": "Verified API Scope",
      "description": "The recorded browser flow uses ingestion endpoints without training",
      "components": [
        "GET /health",
        "POST /ingest",
        "Local CORS scope",
        "Upload size limit"
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
        "Tailwind CSS"
      ]
    },
    {
      "category": "Ingestion",
      "items": [
        "Python",
        "HTTP server",
        "Text extraction",
        "Chunking"
      ]
    },
    {
      "category": "Experimental Backend",
      "items": [
        "FastAPI source",
        "SQLite",
        "SQLAlchemy"
      ]
    },
    {
      "category": "Training Code",
      "items": [
        "PyTorch",
        "SFT",
        "LoRA"
      ]
    },
    {
      "category": "Validation",
      "items": [
        "Local ingestion",
        "Browser upload feedback",
        "Component tests"
      ]
    }
  ],
  "challenges": [
    {
      "title": "Separating Ingest from Training",
      "problem": "A successful upload does not establish a completed training run.",
      "solution": "The local ingest service returns extraction results and explicitly does not train.",
      "learning": "Validation evidence should name the exact workflow exercised."
    },
    {
      "title": "Inspectable Upload Results",
      "problem": "Users need to see what text was recovered from their files.",
      "solution": "Show the extracted excerpt, status, and chunk count after the ingestion call.",
      "learning": "Visible feedback supports review before downstream processing."
    },
    {
      "title": "Evidence Boundaries",
      "problem": "Integration scripts alone do not establish an operational AI service.",
      "solution": "Describe the browser ingest check separately from experimental model integrations.",
      "learning": "User trials and model execution require separate evidence."
    }
  ],
  "useCases": [
    {
      "audience": "Document Preparation",
      "needs": "Inspect extracted text and chunk feedback locally"
    },
    {
      "audience": "AI Workflow Experiments",
      "needs": "Explore builder and integration code after runtime configuration"
    },
    {
      "audience": "Training Research",
      "needs": "Review training scripts separately from the validated ingestion path"
    }
  ],
  "outcome": {
    "achievements": [
      "Repository evidence records a desktop-browser text ingest check",
      "The local endpoint returns extracted content and chunk counts",
      "Regression coverage includes short-note chunk retention and upload motion",
      "Model training and independent-user trials remain unverified"
    ],
    "skills": [
      "Document ingestion feedback",
      "React and TypeScript interfaces",
      "Separating UI and model validation",
      "Documenting prototype boundaries"
    ],
    "significance": "The recorded validation covers document ingestion in a local desktop browser. It does not establish model training, production deployment, measured cost savings, or operational performance gains."
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
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Addressed</h3>
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">Prototype Scope</h2>
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
      <h2 className="text-4xl font-bold text-white/90 mb-12">Scope & Validation</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-green-500/5 rounded-lg p-8 border border-green-500/20">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Verified Scope</h3>
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
            <h3 className="text-2xl font-semibold text-white/80 mb-6">Engineering Focus</h3>
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
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">Validation Boundary</h3>
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
          <p className="mb-16 text-center">
            <a href="https://github.com/haresh-sai06/LLM_Forgebot/blob/main/docs/TRL-ASSESSMENT.md" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
              Source and validation notes ↗
            </a>
          </p>
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
