import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../assets/1.png";

const neonGreen = "#39FF14";

export default function Navbar({ socialLinks }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow flex items-center justify-between px-6 z-50 border-b border-gray-700">
      
      {/* Logo + Branding + Nav Links */}
      <div className="flex items-center gap-6">
        
        {/* Glowing Animated Avatar */}
        <motion.div
          initial={{ opacity: 0.9, scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src={avatar}
            alt="Tharun Avatar"
            className="h-10 w-10 rounded-full object-cover shadow-[0_0_12px_#39FF14] hover:shadow-[0_0_20px_#39FF14] transition-shadow duration-500"
          />
        </motion.div>

        {/* Portfolio Text */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-green-400 font-semibold text-lg tracking-wide"
        >
          Tharun’s Portfolio
        </motion.span>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium ml-6">
          <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
          <li><Link to="/dashboard/projects" className="hover:text-green-400 transition">Projects</Link></li>
          <li><Link to="/dashboard/skills" className="hover:text-green-400 transition">Skills</Link></li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <motion.a
          href={socialLinks?.gmail || "mailto:tharunvardhineni@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: neonGreen }}
          className="transition text-white"
        >
          <FaEnvelope size={20} />
        </motion.a>

        <motion.a
          href={socialLinks?.linkedin || "https://www.linkedin.com/in/tharun-vardhineni-465547143/"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: neonGreen }}
          className="transition text-white"
        >
          <FaLinkedin size={20} />
        </motion.a>

        <motion.a
          href={socialLinks?.github || "https://github.com/Tharun-Vardhineni"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: neonGreen }}
          className="transition text-white"
        >
          <FaGithub size={20} />
        </motion.a>

        <motion.a
          href={socialLinks?.medium || "https://medium.com/@tharunvardhineni"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: neonGreen }}
          className="transition text-white"
        >
          <FaMedium size={20} />
        </motion.a>
      </div>
    </nav>
  );
}
