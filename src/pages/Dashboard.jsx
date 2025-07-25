import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();   // Get user and logout function from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();           // Clear user session from context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome, {user?.email}!</h1>
      <p className="text-lg mb-6">You are logged in!</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
