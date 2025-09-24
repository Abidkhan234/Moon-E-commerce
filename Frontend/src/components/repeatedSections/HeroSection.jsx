import React from "react";

const HeroSection = ({
  bgImage,
  heroLogo,
  subTitle = "",
  title = "",
  children,
}) => {
  return (
    <section className="min-h-[80vh] w-full relative overflow-hidden flex flex-col h-full">
      <img
        src={bgImage}
        className="md:absolute w-full h-full object-cover grow"
        alt="hero-image"
      />

      <div className="md:absolute md:top-0 lg:left-20 md:left-10 h-full md:max-h-full w-full lg:max-w-[420px] md:max-w-[360px] bg-[#826F66] flex items-center md:py-0 py-5">
        <div className="h-full w-full flex justify-center items-center">
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="">
              <img src={heroLogo} alt="logo" />
            </div>

            <h2 className="text-[#FFFDFB] font-medium text-lg">{subTitle}</h2>

            <h1 className="uppercase text-5xl font-semibold leading-14 text-[#FFFDFB] md:max-w-full min-[425px]:max-w-[70%] max-w-full">
              {title}
            </h1>

            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
