import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const { user, logout } = useAuth();   // Get user and logout function from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();           // Clear user session from context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
          <div className="flex">
            <Navbar />
      
      <div className="flex-1">
        
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>


  );
}
