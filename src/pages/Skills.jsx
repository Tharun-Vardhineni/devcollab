import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Spring Boot", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" },
];

export default function Skills() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          className="rounded-2xl shadow-lg p-6 bg-white dark:bg-slate-800 text-gray-800 dark:text-white hover:scale-[1.02] transition"
        >
          <h2 className="text-xl font-bold mb-2">{skill.name}</h2>
          <p className="text-sm opacity-80">Level: {skill.level}</p>
        </motion.div>
      ))}
    </div>
  );
}
