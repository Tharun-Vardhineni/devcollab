import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // start collapsed

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const sidebarWidth = sidebarOpen ? 10 : 10;

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
     
      <main>
        <Outlet />
      </main>
    </>
  );
}
