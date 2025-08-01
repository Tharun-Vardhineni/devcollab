// src/pages/VetsterDetails.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaVideo,
  FaShieldAlt,
  FaAws,
  FaPaw,
  FaCalendarAlt,
  FaUserMd,
} from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.7, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: <FaPaw className="text-green-400 text-5xl mb-3" />,
    title: "Vet Matching",
    description:
      "Browse and select veterinarians based on specialty, availability, and ratings.",
  },
  {
    icon: <FaCalendarAlt className="text-green-400 text-5xl mb-3" />,
    title: "Appointment Scheduling",
    description:
      "Book, reschedule, and cancel appointments with ease on an intuitive calendar.",
  },
  {
    icon: <FaVideo className="text-green-400 text-5xl mb-3" />,
    title: "Video Consultations",
    description:
      "High-quality, real-time video consultations for pet owners and veterinarians.",
  },
  {
    icon: <FaUserMd className="text-green-400 text-5xl mb-3" />,
    title: "Prescription Handling",
    description:
      "Facilitates electronic prescriptions and medication delivery through VetsterRx.",
  },
];

const contributions = [
  {
    icon: <FaReact className="text-green-400 text-xl mr-3" />,
    text:
      "Developed responsive user interfaces with React and Tailwind CSS for vet profiles, scheduling, and video consultations.",
  },
  {
    icon: <FaNodeJs className="text-green-400 text-xl mr-3" />,
    text:
      "Built backend RESTful APIs with Node.js and Express for user authentication, appointment management, and prescription handling.",
  },
  {
    icon: <FaVideo className="text-green-400 text-xl mr-3" />,
    text:
      "Integrated WebRTC and Agora SDK to deliver seamless real-time video consultation experiences.",
  },
  {
    icon: <FaDatabase className="text-green-400 text-xl mr-3" />,
    text:
      "Designed and maintained MongoDB schemas for managing user data, appointments, and medical histories.",
  },
  {
    icon: <FaShieldAlt className="text-green-400 text-xl mr-3" />,
    text:
      "Implemented secure authentication and authorization using JWT and OAuth for both vets and pet owners.",
  },
  {
    icon: <FaAws className="text-green-400 text-xl mr-3" />,
    text:
      "Deployed the application on AWS with Docker containers, ensuring scalability and reliability.",
  },
];

const images = [
  {
    src: "https://vetster.com/images/homepage.jpg",
    alt: "Vetster Homepage",
  },
  {
    src: "https://vetster.com/images/vet-profile.jpg",
    alt: "Vet Profile",
  },
  {
    src: "https://vetster.com/images/appointment-scheduling.jpg",
    alt: "Appointment Scheduling",
  },
  {
    src: "https://vetster.com/images/video-consultation.jpg",
    alt: "Video Consultation",
  },
];

export default function Vetro_details() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20 md:px-16 relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] rounded-full border border-green-600 opacity-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute bottom-[-140px] right-[-140px] w-[400px] h-[400px] rounded-full border border-green-500 opacity-10"
      />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-10 text-green-400 text-center tracking-wide"
      >
        Vetster – Telehealth for Pets
      </motion.h1>

      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-4xl mx-auto text-center text-gray-300 text-lg mb-16 leading-relaxed"
      >
        Vetster is an online marketplace connecting pet owners with licensed veterinarians for virtual consultations. The platform offers 24/7 access to veterinary care via video calls, chat, and messaging, allowing pet owners to receive diagnoses, treatment plans, and prescriptions from the comfort of their homes.
      </motion.p>

      {/* Features */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-20">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22c55e" }}
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

      {/* Contributions */}
      <motion.div
        custom={features.length + 1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-xl rounded-lg p-8 shadow-lg mb-16"
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
        custom={features.length + contributions.length + images.length + 1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center mt-20"
      >
        <a
          href="https://vetster.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full border-2 border-green-400 text-green-300 font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300 tracking-wide shadow-lg"
          aria-label="Visit Vetster Website"
        >
          Visit Vetster Official Site
        </a>
      </motion.div>
    </section>
  );
}
