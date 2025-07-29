import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Recon",
    description:
      "Developed features for Smart Recon, an AI-powered document and data management product, enhancing automation and user experience.",
    techStack: ["React", "Spring Boot", "Azure", "REST APIs"],
    links: {
  //    github: "", // add if available
//      live: "https://www.fsstech.com/smart-recon/",
    },
    image: "https://www.fsstech.com/wp-content/uploads/2023/03/smart-recon-product.png",
  },
  // Add your other projects here following the same structure
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 tracking-wide text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-green-700 hover:shadow-green-500/70 transition-shadow duration-500 cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-48 md:h-56 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                {project.title}
              </h3>
              <p className="text-gray-300 flex-grow">{project.description}</p>
              <p className="mt-4 text-green-300 font-medium">
                Tech: {project.techStack.join(", ")}
              </p>

              <div className="mt-6 flex gap-6 text-gray-300">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                    aria-label={`${project.title} GitHub Repo`}
                  >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                    aria-label={`${project.title} Live Site`}
                  >
                    <FaExternalLinkAlt size={20} />
                    <span>Live Site</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
