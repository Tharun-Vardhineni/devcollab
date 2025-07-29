import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Insurance React Portal",
    description:
      "Built scalable, performant React apps for Farmers Insurance using REST APIs, Redux, and TypeScript. Integrated test automation using Jest and RTL.",
    tech: ["React", "TypeScript", "Redux", "REST API", "Jest"],
    github: "https://github.com/yourusername/farmers-insurance-portal",
    live: "https://www.farmers.com/",
  },
  {
    title: "Smart Recon Platform",
    description:
      "Delivered reconciliation and automation product for banking clients. Built micro frontends using React and integrated Java Spring Boot APIs.",
    tech: ["React", "Spring Boot", "Java", "PostgreSQL", "Azure DevOps"],
    github: "https://github.com/yourusername/smart-recon",
    live: "https://www.fsstech.com/smart-recon/",
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
        className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map(({ title, description, tech, github, live }, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-green-500/50 hover:scale-[1.03] transform transition-transform duration-300 flex flex-col justify-between"
            variants={item}
          >
            <div>
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
            <div className="flex gap-4 text-green-400 text-lg">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} GitHub`}
                  className="hover:text-green-600 transition"
                >
                  <FaGithub />
                </a>
              )}
              {live && live !== "#" && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} Live Demo`}
                  className="hover:text-green-600 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
