import React from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaFileInvoiceDollar,
  FaCalendarCheck,
  FaShieldAlt,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaChartLine,
  FaKey,
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
    icon: <FaUserShield className="text-green-400 text-5xl mb-3" />,
    title: "Policy Management",
    description:
      "View, update, and renew policies with real-time status tracking and PDF document download.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-green-400 text-5xl mb-3" />,
    title: "Billing & Payments",
    description:
      "Integrated billing cycles, premium payment gateways, and transaction history views.",
  },
  {
    icon: <FaCalendarCheck className="text-green-400 text-5xl mb-3" />,
    title: "Claims Submission",
    description:
      "Multi-step claims forms with upload support and status tracking dashboard.",
  },
  {
    icon: <FaMobileAlt className="text-green-400 text-5xl mb-3" />,
    title: "Responsive & Cross‑Platform",
    description:
      "Fully optimized for mobile, tablet, and desktop with consistent experiences across devices.",
  },
  {
    icon: <FaCloudUploadAlt className="text-green-400 text-5xl mb-3" />,
    title: "Secure Uploads",
    description:
      "Upload supporting documents securely with AWS S3 and virus scanning integration.",
  },
  {
    icon: <FaShieldAlt className="text-green-400 text-5xl mb-3" />,
    title: "Role-Based Access",
    description:
      "Different access for agents, policyholders, and admins using secure token authentication.",
  },
  {
    icon: <FaChartLine className="text-green-400 text-5xl mb-3" />,
    title: "Agent Dashboards",
    description:
      "Track commissions, manage leads, and follow up on client requests in a unified view.",
  },
  {
    icon: <FaKey className="text-green-400 text-5xl mb-3" />,
    title: "OAuth2 + MFA",
    description:
      "Authentication powered by OAuth2 and optional multi-factor authentication.",
  },
];

const contributions = [
  "Built scalable and accessible UI components using React, Tailwind, and TypeScript.",
  "Integrated Spring Boot microservices for policy, claims, and billing modules.",
  "Enabled secure document uploads to AWS S3 with scanning workflows.",
  "Worked closely with UI/UX teams to animate flows and perfect cross-platform consistency.",
  "Implemented OAuth2-based login with JWT token handling and MFA.",
  "Set up CI/CD with Jenkins and wrote unit tests using RTL + Jest.",
  "Led mobile-first design implementation to ensure responsiveness and performance.",
];

export default function InsurancePortalDetails() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20 md:px-16 relative overflow-hidden">
      {/* Animated background circles */}
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
        Insurance Portal – Farmers Style
      </motion.h1>

      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-4xl mx-auto text-center text-gray-300 text-lg mb-16 leading-relaxed"
      >
        A secure, scalable digital portal for insurance policyholders and agents to manage policies,
        file claims, view billing, upload documents, and interact with real-time dashboards across devices.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-green-300 mb-6 text-center uppercase tracking-wide">
          My Role & Responsibilities
        </h2>
        <p className="text-gray-300 text-base leading-relaxed text-center max-w-4xl mx-auto">
          As a React Full Stack Developer, I contributed to the full software development lifecycle of the Insurance Portal. My responsibilities included building interactive UI components using React, TypeScript, and Tailwind CSS; creating pixel-perfect screens based on Figma prototypes; and integrating secure APIs built in Spring Boot. I enabled seamless JWT authentication with role-based routing, and led the development of responsive designs optimized across devices. I collaborated with QA and DevOps to ensure successful deployments using Jenkins CI/CD pipelines, implemented automated tests using Jest and React Testing Library, and integrated AWS S3 for secure document uploads.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-24">
        {features.map((f, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22c55e" }}
            className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-8 text-center shadow-lg cursor-pointer transition-transform"
          >
            <div className="flex justify-center items-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{f.description}</p>
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
          Key Contributions
        </h2>
        <ul className="space-y-4 text-gray-300 list-disc list-inside text-lg">
          {contributions.map((text, i) => (
            <motion.li
              key={i}
              custom={i + 1}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 * i, duration: 0.5, ease: "easeOut" }}
            >
              {text}
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
          href="https://www.farmers.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full border-2 border-green-400 text-green-300 font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300 tracking-wide shadow-lg"
          aria-label="Visit Farmers Insurance"
        >
          Visit Farmers Insurance
        </a>
      </motion.div>
    </section>
  );
}
