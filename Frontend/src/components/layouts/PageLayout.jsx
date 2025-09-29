import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const PageLayout = () => {
  return (
    <div>
      <>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 1500,
            error: {
              duration: 2500,
            },
          }}
        />
      </>

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
