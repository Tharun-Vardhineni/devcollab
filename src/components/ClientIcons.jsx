import React from "react";
import { motion } from "framer-motion";

// Use imported local logos
import logo2 from "../assets/2.jpg";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.webp";
import logo6 from "../assets/6.webp";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.svg.png";
import logo10 from "../assets/10.png";
import logo11 from "../assets/11.jpg";

const clients = [
  { name: "Farmers Insurance", logo: logo2 },
  { name: "Standard Chartered", logo: logo3 },
  { name: "FSS", logo: logo4 },
  { name: "MyFitnessPal", logo: logo5 },
  { name: "Other Client", logo: logo6 },
  { name: "Tech Partner", logo: logo7 },
  { name: "Banking Client", logo: logo8 },
  { name: "Fintech Group", logo: logo9 },
  { name: "Analytics Corp", logo: logo10 },
  { name: "Insurance AI", logo: logo11 },
];

export default function ClientsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-center text-green-400 text-3xl font-bold mb-12 tracking-wide">
        Clients I've Worked With
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-20 object-contain transition-transform hover:scale-105 duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
