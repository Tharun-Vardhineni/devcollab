import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Settings from "./Settings";
import Skills from "./Skills";
import Profile from "./Profile";
import Dashboard from "./Dashboard"; 
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (

        <Router> 
          <Routes>
          <Route path="*" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
           <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}/>
          <Route path="/dashboard/portfolio" element={<Portfolio />} />
          <Route path="/dashboard/projects" element={<Projects />} />
          <Route path="/dashboard/skills" element={<Skills />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />


      </Routes>
    </Router>
  );
}
