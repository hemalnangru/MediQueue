import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;