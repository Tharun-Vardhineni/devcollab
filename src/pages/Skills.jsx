import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skills = [
  { name: "React", icon: "logos:react" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Styled Components", icon: "skill-icons:styledcomponents" },
  { name: "Redux", icon: "logos:redux" },

  { name: "Java", icon: "logos:java" },
  { name: "Spring Boot", icon: "simple-icons:springboot" },
  { name: "Junit 5", icon: "simple-icons:junit5" },
  { name: "Gradle", icon: "logos:gradle" },

  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },

  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub Actions", icon: "logos:github-actions" },
  { name: "Jenkins", icon: "logos:jenkins" },

  { name: "Azure DevOps", icon: "simple-icons:azuredevops" },
  { name: "AWS", icon: "logos:aws" },

  { name: "Vite", icon: "logos:vitejs" },
  { name: "Webpack", icon: "logos:webpack" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "GraphQL", icon: "logos:graphql" },
  { name: "React Testing Library", icon: "logos:testing-library" }
];

export default function Skills() {
  return (

    <section
  id="skills"
  className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white
             flex flex-col items-center justify-center px-4 py-16 pt-24"
>

      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center group w-24"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-14 h-14 rounded-xl bg-green-500/10 group-hover:bg-green-500/30 flex items-center justify-center mb-2 shadow-md transition-colors duration-300">
              <Icon icon={skill.icon} className="text-green-400 w-7 h-7" />
            </div>
            <span className="text-xs font-medium text-center leading-tight text-gray-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}