import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
const projects = [
  {
    title: "Insurance Portal",
    description: "Built scalable, performant React apps for Farmers Insurance...",
    tech: ["React", "TypeScript", "Redux", "REST API", "Jest"],
    live: "https://www.farmers.com/",
    caseStudy: "/dashboard/insurance-portal",  // Fix base path
  },
  {
    title: "Smart Recon Platform",
    description: "Delivered reconciliation and automation product for banking clients...",
    tech: ["React", "Spring Boot", "Java", "PostgreSQL", "Azure DevOps"],
    live: "https://www.fsstech.com/smart-recon/",
    caseStudy: "/dashboard/smart-recon",  // Fix base path
  },
  {
    title: "Active Device Monitoring",
    description: "24x7 monitoring for ATM networks helping banks proactively detect failures...",
    tech: ["React", "Spring Boot", "PostgreSQL", "Azure", "Monitoring"],
    live: "https://www.fsstech.com/active-device-monitoring/",
    caseStudy: "/dashboard/atm-monitoring",  // Fix base path
  },
  {
    title: "Vetro - Pet Health App",
    description: "A React + Firebase Android app designed to help pet owners manage health records...",
    tech: ["React", "Firebase", "UX Design", "Android", "Figma"],
    live: "https://play.google.com/store/apps/details?id=com.smarts3.drpetsapp",
    caseStudy: "/dashboard/vetro",  // Fix base path
  },
  {
    title: "Fito - Fitness Tracker",
    description: "Modern health & fitness tracking app inspired by MyFitnessPal...",
    tech: ["React", "Node.js", "MongoDB", "UX Design", "JWT"],
    live: "https://www.tharunkumar.me/fito",
    caseStudy: "/dashboard/fito",  // Fix base path
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-16"
    >
      <motion.h2
        className="text-4xl font-semibold mb-12 text-center text-green-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map(({ title, description, tech, live, caseStudy }, index) => (
          <motion.div
            key={index}
            className="relative group bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 overflow-hidden transition-all duration-300"
            variants={item}
          >
            {/* Card content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-green-400 mb-3">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-green-700/30 text-green-300 rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              
            </div>

            {/* Hover overlay with View Details */}
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-1/2 transition-all duration-500 ease-in-out bg-gray-800/40 backdrop-blur-md z-20 flex items-end pointer-events-none group-hover:pointer-events-auto">
              <div className="w-full flex justify-center mb-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {/* For View Details button */}
<a
  href={caseStudy}  
  className="px-5 py-2 text-sm rounded-xl text-white font-medium border border-green-400 hover:bg-green-500 hover:text-white bg-white/10 backdrop-blur-xl"
>
  
  View Details
</a>

              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
