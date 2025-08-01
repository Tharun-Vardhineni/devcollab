import React from "react";
import { motion } from "framer-motion";

// Add your client logos here - can be URLs or imported SVGs/images
const clients = [
  {
    name: "Farmers Insurance",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Farmers_Insurance_logo.svg/2560px-Farmers_Insurance_logo.svg.png",
    website: "https://www.farmers.com/",
  },
  {
    name: "Standard Chartered",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Standard_Chartered_logo.svg",
    website: "https://www.sc.com/",
  },
  {
    name: "FSS Technologies",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/FSS_Logo.svg/2560px-FSS_Logo.svg.png",
    website: "https://www.fsstech.com/",
  },
  // Add more clients here
];

export default function ClientsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-center text-green-400 text-3xl font-bold mb-10 tracking-wide">
        Clients I've Worked With
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {clients.map(({ name, logoUrl, website }, index) => (
          <motion.a
            key={name}
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="w-32 h-20 flex justify-center items-center cursor-pointer"
            aria-label={`Visit ${name}`}
          >
            <img
              src={logoUrl}
              alt={`${name} Logo`}
              className="max-h-16 object-contain filter grayscale hover:filter-none transition duration-300"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
