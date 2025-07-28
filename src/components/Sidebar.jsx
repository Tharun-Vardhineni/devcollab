import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Code2,
  Settings,
  Menu,
  X,
  HomeIcon,
} from "lucide-react";

const neon = "#39FF14";

const menuItems = [
  { name: "Homepage", icon: <HomeIcon size={20} />, path: "/dashboard/homepage" },
  { name: "Projects", icon: <Code2 size={20} />, path: "/dashboard/projects" },
  { name: "Skills", icon: <LayoutDashboard size={20} />, path: "/dashboard/skills" },
  { name: "Settings", icon: <Settings size={20} />, path: "/dashboard/settings" },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { pathname } = useLocation();
  const sidebarRef = useRef();

  useEffect(() => {
    const closeOnOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        if (isOpen) toggleSidebar();
      }
    };
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, [isOpen, toggleSidebar]);

  return (
    <motion.div
      ref={sidebarRef}
      animate={{ width: isOpen ? 230 : 64 }}
      transition={{ duration: 0.25 }}
      className="fixed top-0 left-0 h-screen bg-gray-900 text-white shadow-xl p-4 flex flex-col z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <motion.button
          onClick={toggleSidebar}
          whileHover={{ color: neon }}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
        {isOpen && (
          <h1 className="ml-2 text-base font-semibold whitespace-nowrap">Tharun Vardhineni</h1>
        )}
      </div>

      {/* Menu */}
      <nav className="space-y-3">
        {menuItems.map(({ name, icon, path }) => {
          const active = pathname === path;

          return (
            <Link
              key={name}
              to={path}
              className="group relative flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200"
            >
              <motion.div
                className="flex items-center gap-3"
                animate={{ color: active ? neon : "#fff" }}
                whileHover={{ color: neon }}
                transition={{ duration: 0.2 }}
              >
                {icon}
                {isOpen && <span className="text-sm font-medium">{name}</span>}
              </motion.div>

              {!isOpen && (
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 text-xs bg-gray-800 px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  {name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}
