"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TripBharatThumbnail from "@/public/thumbnail/trip-bharat.png"; // Replace with your actual screenshot/thumbnail

const TRIP_BHARAT_PROJECT = {
  hero: {
    title: "TRIP BHARAT",
    descriptor: "A Smart Tourist Safety Monitoring & Incident Response System using AI, Geo-Fencing, and Blockchain-based Digital IDs to ensure safe and secure travel across India.",
    status: "Active Development · Prototype Launched",
    thumbnail: TripBharatThumbnail
  },
  overview: {
    what: "TRIP BHARAT is a comprehensive safety ecosystem featuring a mobile app for tourists and a real-time authority dashboard for police and tourism departments. It provides geo-fencing alerts, panic buttons, anomaly detection, and secure digital IDs.",
    why: "Tourism in India, especially in regions like Northeast, is growing rapidly, but safety concerns in remote and high-risk areas remain. Traditional methods are insufficient   TRIP BHARAT brings modern technology to protect visitors while preserving privacy.",
    problem: "Tourists face risks in unfamiliar locations with limited emergency access. Authorities lack real-time visibility and rapid response tools. Manual tracking and paper-based IDs are outdated and inefficient."
  },
  capabilities: [
    {
      title: "Geo-Fencing & Alerts",
      description: "Automatic alerts when tourists enter high-risk or restricted zones, even offline using satellite signals.",
      icon: "🗺️"
    },
    {
      title: "Panic Button",
      description: "Instant emergency alert with live location shared via SMS to family and nearest police unit.",
      icon: "🚨"
    },
    {
      title: "AI Anomaly Detection",
      description: "Detects inactivity, route deviation, or sudden drop-offs using Isolation Forest and LSTM algorithms.",
      icon: "🧠"
    },
    {
      title: "Blockchain Digital ID",
      description: "Secure, tamper-proof digital IDs issued at entry points with KYC and trip details.",
      icon: "🔒"
    },
    {
      title: "Real-Time Heatmaps",
      description: "Population and risk heatmaps on authority dashboard using Leaflet.heatmap for proactive monitoring.",
      icon: "📊"
    },
    {
      title: "Automated E-FIR",
      description: "One-click generation of Electronic FIR for missing persons or incidents.",
      icon: "📄"
    }
  ],
  architecture: {
    frontendTourist: {
      title: "Tourist Mobile App",
      description: "React Native app for real-time safety features and offline functionality",
      components: ["React Native", "Expo", "React Leaflet.js", "Offline Satellite Maps"]
    },
    frontendAuthority: {
      title: "Authority Dashboard",
      description: "React TypeScript web dashboard with live monitoring and analytics",
      components: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN/UI"]
    },
    backend: {
      title: "Backend & Database",
      description: "Secure, scalable backend handling authentication, real-time data, and storage",
      components: ["Firebase Auth", "Firestore", "Realtime Database", "Cloud Functions"]
    },
    maps: {
      title: "Mapping & Heatmaps",
      description: "Advanced mapping with offline support and dual heatmaps",
      components: ["React Leaflet.js", "Leaflet.heatmap", "Satellite API Integration"]
    },
    ai: {
      title: "AI Engine",
      description: "Anomaly detection using advanced machine learning models",
      components: ["Isolation Forest", "LSTM", "TensorFlow.js"]
    }
  },
  techStack: [
    { category: "Tourist App", items: ["React Native", "Expo", "Offline Maps", "SMS Integration"] },
    { category: "Authority Dashboard", items: ["React", "TypeScript", "Tailwind", "ShadCN/UI"] },
    { category: "Backend", items: ["Firebase", "Firestore", "Realtime DB", "Authentication"] },
    { category: "Maps & Geo", items: ["React Leaflet.js", "Leaflet.heatmap", "Satellite Signals"] },
    { category: "AI/ML", items: ["Isolation Forest", "LSTM", "Anomaly Detection"] }
  ],
  challenges: [
    {
      title: "Offline Functionality",
      problem: "Many tourist spots in Northeast have poor network   app must work without internet.",
      solution: "Integrated satellite-based coordinate fetching and offline map caching.",
      learning: "True accessibility means designing for the worst connectivity scenarios."
    },
    {
      title: "Dual Heatmap System",
      problem: "Needed to show both crowded spots and risk/incident zones simultaneously.",
      solution: "Built population and risk heatmaps using Leaflet.heatmap with layered overlays.",
      learning: "Visual clarity in crisis situations saves lives   data presentation is critical."
    },
    {
      title: "Privacy vs Safety Balance",
      problem: "Real-time tracking raises privacy concerns while being essential for safety.",
      solution: "Made tracking opt-in, with clear consent, encrypted data, and family-only sharing options.",
      learning: "Trust is earned through transparency and user control, not just features."
    }
  ],
  useCases: [
    { audience: "Solo Travelers", needs: "Real-time safety alerts, panic button, and anomaly detection in remote areas" },
    { audience: "Families & Groups", needs: "Group tracking, emergency SMS to all members, and shared safety status" },
    { audience: "Elderly Tourists", needs: "Simple interface, voice alerts, medication reminders, and easy panic access" },
    { audience: "Authorities & Police", needs: "Live heatmaps, incident response tools, E-FIR generation, and tourist verification" }
  ],
  outcome: {
    achievements: [
      "Functional prototype with authority dashboard featuring dual heatmaps and alert system",
      "Offline-capable location detection using satellite signals",
      "AI-powered anomaly detection using Isolation Forest and LSTM",
      "Secure family data storage and panic SMS integration",
      "Responsive, modern UI built with React and Tailwind"
    ],
    skills: [
      "Full-stack development with React Native and React TypeScript",
      "Advanced mapping with React Leaflet.js and heatmaps",
      "AI/ML integration for anomaly detection",
      "Firebase backend with real-time capabilities",
      "Privacy-focused and accessible design"
    ],
    significance:
      "TRIP BHARAT proves that technology can make tourism safer and more inclusive across India. By combining AI, geo-fencing, and secure digital IDs, it empowers both tourists and authorities   turning potential risks into protected journeys and boosting confidence in India's diverse travel destinations."
  }
};

function ProjectHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <div className="inline-block px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 mb-8">
        <span className="text-teal-300 text-sm uppercase tracking-wider">
          {TRIP_BHARAT_PROJECT.hero.status}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {TRIP_BHARAT_PROJECT.hero.title}
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
        {TRIP_BHARAT_PROJECT.hero.descriptor}
      </p>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <Image
          src={TRIP_BHARAT_PROJECT.hero.thumbnail}
          alt="TRIP BHARAT Dashboard Preview"
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
          <h3 className="text-xl font-semibold text-teal-300 mb-4">What It Is</h3>
          <p className="text-gray-300 leading-relaxed">
            {TRIP_BHARAT_PROJECT.overview.what}
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">Why It Matters</h3>
          <p className="text-gray-300 leading-relaxed">
            {TRIP_BHARAT_PROJECT.overview.why}
          </p>
        </div>
        <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/30">
          <h3 className="text-xl font-semibold text-red-400 mb-4">Problem Solved</h3>
          <p className="text-red-300 leading-relaxed">
            {TRIP_BHARAT_PROJECT.overview.problem}
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
        {TRIP_BHARAT_PROJECT.capabilities.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300"
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
  const sections = Object.values(TRIP_BHARAT_PROJECT.architecture);

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
            <h3 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {section.components.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm"
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
        {TRIP_BHARAT_PROJECT.techStack.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-6">
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
        {TRIP_BHARAT_PROJECT.challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-10 border border-orange-500/30"
          >
            <h3 className="text-3xl font-bold text-orange-300 mb-6">
              {challenge.title}
            </h3>
            <div className="space-y-6 text-lg">
              <div>
                <span className="text-orange-400 font-semibold">Challenge:</span>
                <p className="text-gray-300 mt-2">{challenge.problem}</p>
              </div>
              <div>
                <span className="text-green-400 font-semibold">Solution:</span>
                <p className="text-gray-200 mt-2">{challenge.solution}</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Key Learning:</span>
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
        {TRIP_BHARAT_PROJECT.useCases.map((group, index) => (
          <motion.div
            key={group.audience}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 text-center"
          >
            <h3 className="text-3xl font-bold text-teal-300 mb-6">
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
              {TRIP_BHARAT_PROJECT.outcome.achievements.map((item, i) => (
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
              {TRIP_BHARAT_PROJECT.outcome.skills.map((skill, i) => (
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

        <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl p-10 border border-teal-500/30 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-teal-300 mb-8">Why This Project Matters</h3>
          <p className="text-xl text-teal-200 leading-relaxed">
            {TRIP_BHARAT_PROJECT.outcome.significance}
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

export default function TripBharatProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a2a] via-[#001f3f] to-[#0a1a2a] overflow-hidden">
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