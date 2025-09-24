import SectionLayout from "../../layouts/SectionLayout";
import blogImage from "../../../../public/assets/homePage/Blog-Section/278d3df6aaa3db5e513b9e8e024dbf7e 1.png";
import { NavLink } from "react-router";

const BlogSection = () => {
  return (
    <section className="">
      <SectionLayout
        title="our blogs"
        isBlogSection
        blogSecComponent={<BlogSec />}
      />
    </section>
  );
};

const BlogSec = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full lg:h-[62vh] md:h-[50vh] lg:px-20 md:px-10 px-0 overflow-hidden">
      <div className="bg-[#e9e1da] h-full w-full flex justify-center items-center px-3 md:order-1 order-2 md:py-0 py-6">
        <div className="lg:max-w-[480px] min-[426px]:max-w-[420px] max-w-full flex flex-col xl:gap-4 lg:gap-2 md:gap-1 gap-2 items-center text-center">
          <h2 className="uppercase font-semibold lg:text-3xl md:text-xl min-[375px]:text-xl text-lg text-[#807F86] tracking-wide">
            TableWare
          </h2>
          <h1 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl min-[375px]:text-4xl text-3xl text-[#3A3845] uppercase xl:leading-14 lg:leading-12 md:leading-10 min-[375px]:leading-12 leading-9">
            The secerets to a kitchen room
          </h1>
          <p className="font-medium text-[#595667] lg:text-base md:text-sm max-[374px]:text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <NavLink
            to={"/blog"}
            className={`uppercase lg:text-lg md:text-base min-[375px]:text-lg font-bold underline text-[#595667]`}
          >
            Read More
          </NavLink>
        </div>
      </div>
      <div className="md:order-2 order-1 h-full w-full">
        <img src={blogImage} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default BlogSection;
