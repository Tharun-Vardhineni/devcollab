import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaBarcode,
  FaUsers,
  FaMobileAlt,
  FaReact,
  FaJava,
  FaDatabase,
  FaLock,
  FaChartLine,
} from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: <FaBarcode className="text-green-400 text-5xl mb-3" />,
    title: "Barcode & Meal Scan",
    description:
      "Log meals quickly using barcode scanner and Meal Scan image recognition from a food database of millions of items.:contentReference[oaicite:1]{index=1}",
  },
  {
    icon: <FaCalendarCheck className="text-green-400 text-5xl mb-3" />,
    title: "Custom Nutrition Goals",
    description:
      "Set custom calorie and macro targets per day or by meal, with advanced food analysis insights.:contentReference[oaicite:2]{index=2}",
  },
  {
    icon: <FaUsers className="text-green-400 text-5xl mb-3" />,
    title: "Community & Motivation",
    description:
      "Join a global community of users sharing recipes, progress, tips and support.:contentReference[oaicite:3]{index=3}",
  },
  {
    icon: <FaMobileAlt className="text-green-400 text-5xl mb-3" />,
    title: "Cross‑Platform Sync",
    description:
      "Syncs with major apps and wearable devices like Garmin, Fitbit, Apple Watch and Samsung Health.:contentReference[oaicite:4]{index=4}",
  },
];

const contributions = [
  {
    icon: <FaReact className="text-green-400 text-xl mr-3" />,
    text:
      "Built React dashboards for nutrition logging, goal-tracking and visual food analytics, integrating Meal Scan and barcode scanning flows.",
  },
  {
    icon: <FaJava className="text-green-400 text-xl mr-3" />,
    text:
      "Delivered REST backend microservices in Spring Boot to store food logs, sync device data, and manage user goals securely.",
  },
  {
    icon: <FaDatabase className="text-green-400 text-xl mr-3" />,
    text:
      "Implemented scalable food‑item ingestion pipelines from a 14M‑item database and integrated nutrition macros by meal.",
  },
  {
    icon: <FaLock className="text-green-400 text-xl mr-3" />,
    text:
      "Developed OAuth2-based authentication and role-based user profiles for personalized app experience.",
  },
  {
    icon: <FaChartLine className="text-green-400 text-xl mr-3" />,
    text:
      "Created interactive progress charts (weight, macros, hydration) using D3.js and Chart.js for both mobile and desktop UIs.",
  },
];

export default function Fito_details() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20 md:px-16">
      <motion.h1
        className="text-4xl font-extrabold mb-10 text-green-400 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        (FITO) MyFitnessPal Case Study
      </motion.h1>

      <motion.p
        custom={0}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center text-gray-300 text-lg mb-16">
        MyFitnessPal is a leading health & fitness platform that combines calorie logging, macro tracking, meal scanning, and social motivation to help users meet their wellness goals. It offers both mobile and web apps supporting extensive integrations and personalized tracking.
      </motion.p>

      {/* Feature Highlights */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-24">
        {features.map((f, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22c55e" }}
            className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-8 text-center shadow-lg transition-transform"
          >
            <div className="flex justify-center items-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Contributions */}
      <motion.div
        custom={features.length + 1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-xl rounded-lg p-8 mb-20"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6 border-b border-green-500 pb-2">
          My Contributions — React & Java Full Stack
        </h2>
        <ul className="space-y-4 text-gray-300">
          {contributions.map((c, i) => (
            <motion.li
              key={i}
              custom={i + 1}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-3 text-lg"
            >
              {c.icon}
              <span>{c.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* UX Prototypes Section */}
      <motion.div
        custom={features.length + contributions.length + 1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-4xl mx-auto bg-gray-800/60 backdrop-blur-xl rounded-lg p-8 mb-20"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-4">UX Prototypes</h2>
        <p className="text-gray-300 mb-6">
          Designed responsive high-fidelity mockups for mobile and desktop flows:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3">
          <li>Home Dashboard prioritizing macros and calorie goals with quick‐add 
          </li>
          <li>Barcode scan and Meal Scan logging screens with live database search.</li>
          <li>Improved food diary and macro tracking flow following user interviews.:contentReference.</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        custom={features.length + contributions.length + 2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center"
      >
        <a
          href="https://www.myfitnesspal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full border-2 border-green-400 text-green-300 font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300"
        >
          Visit MyFitnessPal
        </a>
      </motion.div>
    </section>
  );
}
