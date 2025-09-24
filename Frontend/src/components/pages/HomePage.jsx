import bgImage from "../../../public/assets/homePage/Hero-Section/flat-lay-composition-different-sized-plates 1.png";
import heroLogo from "../../../public/assets/Icons/hero-section-logo.svg";
import HeroSection from "../repeatedSections/HeroSection";
import BestSellerSection from "../sub-compnents/homeSections/BestSellerSection";
import QuickFilterSection from "../sub-compnents/homeSections/QuickFilterSection";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-10">
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
      <div className="lg:px-20 md:px-10 px-6 flex flex-col gap-10">
        <>
          <QuickFilterSection />
        </>
        <>
          <BestSellerSection />
        </>
      </div>
    </main>
  );
};

export default HomePage;
