import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Briefcase, BookOpen, Award, Code, Download } from "lucide-react";
import avatar from "../assets/1.png";
import Myresume from "../assets/Tharun Kumar Vardhineni_RESUME.pdf";
import ClientIcons from "../components/ClientIcons";

export default function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [timeline, setTimeline] = useState([]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeline([
        {
          icon: <Code className="text-green-10 w-8 h-8" />,
          title: "React Developer",
          subtitle: "Farmers Insurance",
          description:
            "Built scalable, performant web apps using React, TypeScript, and REST APIs.",
          duration: "2024 - Present",
        },
        {
          icon: <Briefcase className="text-green-10 w-8 h-8" />,
          title: "Full Stack Developer",
          subtitle: "Standard Chartered",
          description:
            "Delivered enterprise-grade banking applications with React, Java, and Azure.",
          duration: "2018 - 2022",
        },
        {
          icon: <BookOpen className="text-green-10 w-8 h-8" />,
          title: "Master's in Data Science",
          subtitle: "Saint Peter’s University",
          description:
            "Graduated with GPA 3.65, gained expertise in big data, ML, and analytics.",
          duration: "2022 - 2024",
        },
        {
          icon: <Award className="text-green-10 w-8 h-8" />,
          title: "Certifications",
          subtitle: "Azure & UX Design",
          description:
            "Microsoft Certified: Azure Data Engineer | Google UX Design Certificate",
          duration: "2022 - Present",
        },
      ]);
    }, 300);
  }, []);

  return (
    <div className="flex flex-col bg-gray-950 text-white w-full min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-20 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-green-500/10 via-gray-800 to-black -z-10 blur-lg" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* 3D Avatar Art */}
          <motion.div
            className="w-65 h-65 overflow-hidden transition-transform duration-500 hover:scale-105"
            variants={fadeUp}
          >
            <img
              src={avatar}
              alt="Tharun Vardhineni"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Intro Content */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-green-400 mb-4"
              variants={fadeUp}
            >
              Hi, I'm Tharun Vardhineni
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
              variants={fadeUp}
              custom={1}
            >
              Full Stack Developer passionate about collaboration, clean design,
              and real-world impact.
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start"
              variants={fadeUp}
              custom={2}
            >
              <a
                href={Myresume}
                download
                className="group inline-flex items-center gap-2 border border-green-400 text-green-300 px-6 py-2 rounded-full hover:bg-green-400 hover:text-black transition duration-300"
              >
                <motion.div className="group-hover:rotate-180 transition-transform duration-500">
                  <Download className="w-5 h-5" />
                </motion.div>
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Flowchart Timeline */}
      <section className="overflow-x-auto py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex gap-10 justify-center flex-wrap">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-900 rounded-2xl shadow-xl p-6 w-72 min-w-[18rem] border border-gray-700 transform hover:scale-[1.08] hover:-translate-y-2 hover:shadow-green-500/50 transition-all duration-300 ease-in-out"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold text-green-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed text-center">
                {item.description}
              </p>
              <span className="text-xs text-gray-500 mt-3">{item.duration}</span>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Clients Section */}
      <ClientIcons />
      {/* Contact Section */}
      <motion.section
        className="bg-gray-900 px-4 sm:px-8 md:px-12 lg:px-20 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-4 text-green-400">Let's Connect</h2>
        <p className="text-gray-300 mb-6">
          Open to freelance, collaboration, and exciting new ideas.
        </p>
        <a
          href="mailto:tharunvardhineni@gmail.com"
          className="text-green-400 font-semibold underline text-lg"
        >
          tharunvardhineni@gmail.com
        </a>
      </motion.section>
    </div>
  );
}
