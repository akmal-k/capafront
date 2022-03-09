import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import Home from "../pages/Home";
import Logout from "../pages/Logout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}
