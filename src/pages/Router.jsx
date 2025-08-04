// src/router/AppRouter.jsx
import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="ReconDetails" element={<ReconDetails />} />
          <Route path="ADMDetails" element={<ADMDetails />} />
          <Route path="Fito_details" element={<Fito_details />} />
          <Route path="Vetro_details" element={<Vetro_details />} />
          <Route path="Insurance_portal" element={<Insurance_portal />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
