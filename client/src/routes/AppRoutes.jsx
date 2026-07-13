import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "../components/auth/ProtectedRoute";

// Public Pages
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Departments from "../pages/public/Departments";
import Doctors from "../pages/public/Doctors";
import DoctorDetails from "../pages/public/DoctorDetails";
import Services from "../pages/public/Services";
import Emergency from "../pages/public/Emergency";
import Appointment from "../pages/public/Appointment";
import Contact from "../pages/public/Contact";
import FAQ from "../pages/public/FAQ";
import Privacy from "../pages/public/Privacy";
import Terms from "../pages/public/Terms";
import NotFound from "../pages/public/NotFound";

// Authentication Pages
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

// Protected Pages
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Layout */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="departments" element={<Departments />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:id" element={<DoctorDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-and-conditions" element={<Terms />} />
        </Route>

        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Pages */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;