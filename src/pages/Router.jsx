import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Collaboaration from "./Collaboaration";
import Home from "../pages/Home";
import ReconDetails from '../pages/Recon_details';


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="smart-recon" element={<ReconDetails />} /> 

        </Route>

        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </Router>
  );
}
