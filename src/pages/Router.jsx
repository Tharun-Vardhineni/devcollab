import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../Layouts/DashboardLayout";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Home from "../pages/Home";
import ReconDetails from "../pages/Recon_details";
import ADMDetails from "../pages/ADM_details";
import FitoDetails from "../pages/Fito_details";
import VetroDetails from "../pages/Vetro_details";
import InsurancePortal from "../pages/Insurance_portal";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="smart-recon" element={<ReconDetails />} />
          <Route path="atm-monitoring" element={<ADMDetails />} />
          <Route path="fito" element={<FitoDetails />} />
          <Route path="vetro" element={<VetroDetails />} />
          <Route path="insurance-portal" element={<InsurancePortal />} />
        </Route>

        <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
    </Router>
  );
}
