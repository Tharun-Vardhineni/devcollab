// src/pages/ADMDetails.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaServer,
  FaHeartbeat,
  FaTools,
  FaReact,
  FaJava,
  FaNetworkWired,
  FaLock,
  FaChartBar,
} from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.7, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: <FaMobileAlt className="text-green-400 text-5xl mb-3" />,
    title: "Real-Time Monitoring",
    description:
      "Provides a centralized view of device health, performance, and usage patterns across the ATM network.",
  },
  {
    icon: <FaServer className="text-green-400 text-5xl mb-3" />,
    title: "Hardware Status",
    description:
      "Tracks critical hardware components like card readers, dispensers, printers, and sensors for proactive maintenance.",
  },
  {
    icon: <FaHeartbeat className="text-green-400 text-5xl mb-3" />,
    title: "Uptime & Alerts",
    description:
      "Reduces downtime with real-time alerts and predictive analytics, enhancing ATM availability.",
  },
  {
    icon: <FaTools className="text-green-400 text-5xl mb-3" />,
    title: "Remote Troubleshooting",
    description:
      "Allows technicians to identify and respond to issues remotely, cutting down field service time and cost.",
  },
];

const contributions = [
  {
    icon: <FaReact className="text-green-400 text-xl mr-3" />,
    text:
      "Built a dynamic React-based dashboard that displayed device KPIs, alerts, and health metrics in real-time using WebSocket integrations.",
  },
  {
    icon: <FaJava className="text-green-400 text-xl mr-3" />,
    text:
      "Developed backend microservices in Java Spring Boot to aggregate, process, and expose device telemetry data securely via REST APIs.",
  },
  {
    icon: <FaNetworkWired className="text-green-400 text-xl mr-3" />,
    text:
      "Integrated SNMP/agent-based monitoring systems to pull data from ATMs and POS devices, ensuring consistent real-time updates.",
  },
  {
    icon: <FaLock className="text-green-400 text-xl mr-3" />,
    text:
      "Implemented secure authentication (OAuth2) and user role management for operations, audit, and support teams.",
  },
  {
    icon: <FaChartBar className="text-green-400 text-xl mr-3" />,
    text:
      "Developed interactive charts and heatmaps using Chart.js and D3.js for visualizing device status and incident trends.",
  },
  {
    icon: <FaTools className="text-green-400 text-xl mr-3" />,
    text:
      "Optimized the codebase with lazy loading, memoization, and component-level caching, reducing load time by 45%.",
  },
  {
    icon: <FaServer className="text-green-400 text-xl mr-3" />,
    text:
      "Collaborated with DevOps to deploy scalable builds on Azure Cloud and configured pipelines using Azure DevOps.",
  },
  {
    icon: <FaMobileAlt className="text-green-400 text-xl mr-3" />,
    text:
      "Built a responsive mobile view for on-field technicians to view device logs, location, and initiate basic diagnostics.",
  },
];

export default function ADMDetails() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20 md:px-16 relative overflow-hidden">
      {/* Animated background bubbles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full border border-green-600 opacity-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full border border-green-500 opacity-10"
      />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-10 text-green-400 text-center tracking-wide"
      >
        Active Device Monitoring (ADM)
      </motion.h1>

      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-4xl mx-auto text-center text-gray-300 text-lg mb-16 leading-relaxed"
      >
        ADM helps financial institutions monitor, manage, and troubleshoot ATM and POS
        devices in real time. It enhances device uptime, reduces operational costs, and
        provides a proactive approach to device health monitoring.
      </motion.p>

      {/* Features Section */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-24 justify-center items-center">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22c55e" }}
            className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-8 text-center shadow-lg cursor-pointer transition-transform"
          >
            <div className="flex justify-center items-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Contributions Section */}
      <motion.div
        custom={features.length + 1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-xl rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6 border-b border-green-500 pb-2 tracking-wide">
          My Contributions
        </h2>
        <ul className="space-y-4 text-gray-300">
          {contributions.map(({ icon, text }, i) => (
            <motion.li
              key={i}
              custom={i + 1}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 * i, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 text-lg"
            >
              {icon}
              <span>{text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        custom={features.length + contributions.length + 1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center mt-20"
      >
        <a
          href="https://www.fsstech.com/active-device-monitoring/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full border-2 border-green-400 text-green-300 font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300 tracking-wide shadow-lg"
          aria-label="Explore FSS ADM"
        >
          Explore FSS ADM
        </a>
      </motion.div>
    </section>
  );
}
