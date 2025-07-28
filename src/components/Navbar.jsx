import { Download, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import logo from "../assets/Logobg.png" // import your logo image
const neonGreen = "#39FF14";

export default function Navbar({ sidebarOpen, toggleSidebar, socialLinks }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow flex items-center justify-between px-4 z-50 border-b border-gray-700"
      style={{ paddingLeft: sidebarOpen ? 250 : 72, transition: "padding-left 0.3s ease" }}
    >
      {/* Logo */}
       
          <div className="text-lg font-bold whitespace-nowrap">
           <img 
          src={logo} 
          alt="Logo" 
          className="h-15 w-15 object-contain" 
          // You can adjust height and width as needed
          />
          </div>
    
      {/* Right: Socials + Resume */}
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

        <motion.a
          href="/Tharun_Resume.pdf"
          download
          whileHover={{ scale: 1.05, backgroundColor: neonGreen, color: "#000" }}
          whileTap={{ scale: 0.95 }}
          className="ml-2 flex items-center gap-2 px-4 py-1.5 rounded-full font-semibold shadow bg-white text-gray-900 hover:bg-gray-200 transition"
        >
          <Download size={18} />
          Resume
        </motion.a>
      </div>
    </nav>
  );
}
