import footerLogo from "../../../public/assets/Logo/footerLogo.svg";
import { FaArrowRight } from "react-icons/fa";
import { footerLinks } from "../../constant/data";
import Button from "../buttons/Button";

const Footer = () => {
  return (
    <footer className="lg:px-20 md:px-10 px-6 bg-[#3A3845] pb-5 mt-10">
      <div className="grid grid-cols-12 gap-4 border-b border-[#E5E5E5]">
        <div className="md:col-span-4 col-span-12 md:border-r border-b md:border-b-0 border-[#CAC9CF] md:py-10 py-7">
          <div className="flex flex-col gap-4">
            <div className="w-[170px] h-[50px]">
              <img
                src={footerLogo}
                className="w-full h-full object-contain"
                alt="footer-logo"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#E5E5E5] min-[1125px]:text-base md:text-sm text-base max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                mauris sed ma
              </p>
              <div className="w-[200px]">
                <Button
                  icon={<FaArrowRight />}
                  btnText="get started"
                  color="E5E5E5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 col-span-12 grid sm:grid-cols-3 grid-cols-2 gap-4 gap-y-7 md:py-10 py-7 xl:px-15 lg:px-10">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h2 className="mb-5 text-xl font-semibold uppercase text-white">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4 text-[#E5E5E5] w-max">
                {section.links.map((link, i) => (
                  <span key={i} className="cursor-pointer">
                    {link}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5 flex justify-center gap-2 items-center text-center text-[#A6A6A8] flex-wrap min-[426px]:text-base text-sm">
        <span className="md:border-r border-[#CAC9CF] pe-1">
          Copyright © 2023 Moon
        </span>
        <span className="md:border-r border-[#CAC9CF] pe-1">
          All Rights Reserved
        </span>
        <button className="underline cursor-pointer text-[#807F86] border-r border-[#CAC9CF] pe-1">
          Terms and Conditions
        </button>
        <button className="underline cursor-pointer text-[#807F86]">
          Privacy Policy
        </button>
      </div>
    </footer>
  );
};

export default Footer;
