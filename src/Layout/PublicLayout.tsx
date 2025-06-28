import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
