import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "React", icon: "logos:react" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Styled Components", icon: "skill-icons:styledcomponents" },
  { name: "Redux", icon: "logos:redux" },

  // Backend
  { name: "Java", icon: "logos:java" },
  { name: "Spring Boot", icon: "simple-icons:springboot" },
  { name: "Junit 5", icon: "simple-icons:junit5" },
  { name: "Gradle", icon: "logos:gradle" },

  // Database
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },

  // DevOps
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub Actions", icon: "logos:github-actions" },
  { name: "Jenkins", icon: "logos:jenkins" },

  // Cloud
  { name: "Azure DevOps", icon: "simple-icons:azuredevops" },
  { name: "AWS", icon: "logos:aws" },

  // Tools
  { name: "Vite", icon: "logos:vitejs" },
  { name: "Webpack", icon: "logos:webpack" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "GraphQL", icon: "logos:graphql" },
  { name: "React Testing Library", icon: "logos:testing-library" }
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] py-16 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white text-center mb-12"
      >
        My Tech Stack
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center text-white"
          >
            <Icon icon={skill.icon} width="36" height="36" className="mb-2" />
            <span className="text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
