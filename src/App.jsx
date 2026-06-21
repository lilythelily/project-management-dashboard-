import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import "./app.css";
import "./invoice.css";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Projects from "../components/Projects";
import ProjectDetail from "../components/ProjectDetail";
import Invoices from "../components/Invoices";
import Resources from "../components/Resources";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/details" element={<ProjectDetail />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
