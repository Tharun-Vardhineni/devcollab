import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, Vite, and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Smart Recon 3D",
    description: "Banking reconciliation product built in Java & React.",
    tech: ["Java", "React", "Spring Boot"],
  },
  {
    title: "ATM Monitoring System",
    description: "Real-time ATM monitoring dashboard with alerts.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-2xl shadow-xl p-6 bg-white dark:bg-slate-800 text-gray-900 dark:text-white hover:scale-[1.02] transition"
        >
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="mb-3 text-sm opacity-80">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 bg-primary text-white rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
