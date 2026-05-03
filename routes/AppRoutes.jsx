import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Threats from "../pages/Threats";
import Learn from "../pages/Learn";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/threats" element={<Threats />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;