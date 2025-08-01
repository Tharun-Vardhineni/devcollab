import React from "react";
import { motion } from "framer-motion";

import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.jpg";
import logo10 from "../assets/10.png";
import logo11 from "../assets/11.png";

const clients = [
  { name: "Standard Chartered", logo: logo2 },
  { name: "Farmers Insurance", logo: logo3 },
  { name: "FSS", logo: logo4 },
  { name: "Meta", logo: logo5 },
  { name: "VISA", logo: logo6 },
  { name: "Master Card", logo: logo7 },
  { name: "NFS-ATM Partner", logo: logo8 },
  { name: "Saudi Arabian Monetary Authority", logo: logo9 },
  { name: "Axis Bank", logo: logo10 },
  { name: "3M", logo: logo11 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function ClientsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-green-400 mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        Clients I've Worked With
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 justify-items-center">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            className="bg-gray-900 rounded-xl shadow-lg flex flex-col items-center p-6 w-44 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 1}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 w-auto object-contain mb-4 select-none"
              loading="lazy"
              draggable={false}
            />
            <p className="text-gray-300 text-center text-sm font-medium select-none">
              {client.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
