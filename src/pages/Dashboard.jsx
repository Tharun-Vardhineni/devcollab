import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();   // Get user and logout function from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();           // Clear user session from context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
          <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>


//    </div>
  );
}
