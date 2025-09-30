import bgImage from "/assets/homePage/Hero-Section/flat-lay-composition-different-sized-plates 1.png";
import heroLogo from "/assets/Icons/hero-section-logo.svg";
import HeroSection from "../repeatedSections/HeroSection";
import BestSellerSection from "../sub-compnents/homeSections/BestSellerSection";
import BlogSection from "../sub-compnents/homeSections/BlogSection";
import NewArrivalSection from "../sub-compnents/homeSections/NewArrivalSection";
import QuickFilterSection from "../sub-compnents/homeSections/QuickFilterSection";
import {usePost} from "../../hooks/usePost";

const HomePage = () => {
  const { isLoading, data } = usePost({});
  return (
    <main className="flex flex-col gap-12">
      <>
        <HeroSection
          bgImage={bgImage}
          heroLogo={heroLogo}
          subTitle="Handcrafted in Viet Nam since 1650"
          title="bat trang dinner set"
        >
          <button className="text-[#826F66] bg-[#ffffff] uppercase text-sm py-2 px-14 cursor-pointer font-semibold">
            Shop Now
          </button>
        </HeroSection>
      </>
      <div className="lg:px-20 md:px-10 px-6 flex flex-col gap-12">
        <>
          <QuickFilterSection />
        </>
        <>
          <BestSellerSection
            data={isLoading ? [] : data.products}
            isLoading={isLoading}
          />
        </>
        <>
          <NewArrivalSection
            data={isLoading ? [] : data.products}
            isLoading={isLoading}
          />
        </>
      </div>
      <>
        <BlogSection />
      </>
    </main>
  );
};

export default HomePage;
