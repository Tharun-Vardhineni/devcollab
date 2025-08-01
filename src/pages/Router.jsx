import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Correct import

import DashboardLayout from "../Layouts/DashboardLayout";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Home from "../pages/Home";
import ReconDetails from '../pages/Recon_details';
import ADMDetails from "../pages/ADM_details";
import Fito_details from "../pages/Fito_details";
import Vetro_details from "../pages/Vetro_details";
import Insurance_portal from "../pages/Insurance_portal";

export default function AppRouter() {
  return (
    <Router basename="/devcollab"> {/* Add basename here */}
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="smart-recon" element={<ReconDetails />} />
          <Route path="atm-monitoring" element={<ADMDetails />} />
          <Route path="fito" element={<Fito_details />} />
          <Route path="vetro" element={<Vetro_details />} />
          <Route path="insurance-portal" element={<Insurance_portal />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </Router>
  );
}
