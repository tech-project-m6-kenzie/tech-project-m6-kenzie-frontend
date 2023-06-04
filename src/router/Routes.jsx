 
import { Route, Routes } from "react-router";
import { DashBoard } from "../pages/dashboard";
import Home from "../pages/home";
import { BrowserRouter } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  </BrowserRouter>
  );
}