import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div>
      <header className="h-[60px] mb-1">
        <Navbar />
      </header>
      <>
        <Outlet />
      </>
      <>
        <Footer />
      </>
    </div>
  );
};

export default PageLayout;
