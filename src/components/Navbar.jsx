import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logobg.png";

const neonGreen = "#39FF14";

export default function Navbar({ socialLinks }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow flex items-center justify-between px-6 z-50 border-b border-gray-700">
      
      {/* Logo + Nav Links */}
      <div className="flex items-center gap-8">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-10 w-10 object-contain" 
        />

        <ul className="flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
          <li><Link to="/dashboard/projects" className="hover:text-green-400 transition">Projects</Link></li>
          <li><Link to="/dashboard/skills" className="hover:text-green-400 transition">Skills</Link></li>
          {/* <li><Link to="/dashboard/collaboaration" className="hover:text-green-400 transition">Collaborate</Link></li> */}
        </ul>
      </div>

      {/* Social Icons + Resume */}
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
