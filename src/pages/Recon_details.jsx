// src/pages/SmartReconDetails.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaRegMoneyBillAlt,
  FaExchangeAlt,
  FaDatabase,
  FaCloud,
  FaReact,
  FaJava,
  FaCogs,
  FaChartLine,
  FaCloudUploadAlt,
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
    icon: <FaRegMoneyBillAlt className="text-green-400 text-5xl mb-3" />,
    title: "Financial Accuracy",
    description:
      "Smart Recon ensures every transaction is reconciled with maximum precision across all banking channels.",
  },
  {
    icon: <FaExchangeAlt className="text-green-400 text-5xl mb-3" />,
    title: "Automated Matching",
    description:
      "Advanced matching algorithms reduce manual effort and speed up the reconciliation process.",
  },
  {
    icon: <FaDatabase className="text-green-400 text-5xl mb-3" />,
    title: "Data Integration",
    description:
      "Integrates with core banking systems, third-party data sources, and payment platforms seamlessly.",
  },
  {
    icon: <FaCloud className="text-green-400 text-5xl mb-3 " />,
    title: "Cloud Ready",
    description:
      "Deployed on cloud for scalability, reliability, and ease of access from anywhere securely.",
  },
];

const contributions = [
  {
    icon: <FaReact className="text-green-400 text-xl mr-3" />,
    text:
      "Developed micro frontend architecture using React and TypeScript, enabling modular and scalable UI components.",
  },
  {
    icon: <FaJava className="text-green-400 text-xl mr-3" />,
    text:
      "Integrated backend APIs developed in Spring Boot for reconciliation rules, exception handling, and transaction audit trails.",
  },
  {
    icon: <FaCogs className="text-green-400 text-xl mr-3" />,
    text:
      "Implemented secure authentication and role-based access controls for multiple user personas.",
  },
  {
    icon: <FaChartLine className="text-green-400 text-xl mr-3" />,
    text:
      "Delivered a dashboard view with real-time stats, reconciliation statuses, and alerts using charting libraries.",
  },
  {
    icon: <FaCloudUploadAlt className="text-green-400 text-xl mr-3" />,
    text: "Deployed the solution on Azure using CI/CD pipelines configured via Azure DevOps.",
  },
];

export default function SmartReconDetails() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20 md:px-16 relative overflow-hidden">
      {/* Subtle animated background circles */}
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
        Smart Reconciliation Case Study
      </motion.h1>

      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-4xl mx-auto text-center text-gray-300 text-lg mb-16 leading-relaxed"
      >
        As a full-stack developer, I contributed to the development of Smart Recon – a
        powerful reconciliation and automation platform for financial institutions. It
        empowers banks to manage large volumes of transactions with speed, accuracy,
        and transparency.
      </motion.p>

      {/* Features */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-24  justify-center items-center ">
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

      {/* Contribution Section */}
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

      {/* Call to Action */}
      <motion.div
        custom={features.length + contributions.length + 1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center mt-20"
      >
        <a
          href="https://www.fsstech.com/smart-recon/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full border-2 border-green-400 text-green-300 font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300 tracking-wide shadow-lg"
          aria-label="Explore FSS Smart Recon"
        >
          Explore FSS Smart Recon
        </a>
      </motion.div>
    </section>
  );
}
