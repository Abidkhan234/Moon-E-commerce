import heroImage from "../../../../public/assets/blogPage/image 160.png";

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 md:h-[60vh] h-full w-full">
      <div className="">
        <img src={heroImage} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex justify-center items-center h-full w-full bg-[#e2dfdc] px-4 md:py-0 py-5">
        <div className="flex flex-col md:gap-5 gap-4 items-center text-center lg:max-w-[550px] md:max-w-full">
          <h1 className="font-bold xl:text-4xl lg:text-3xl text-2xl uppercase text-[#3A3845]">
            What's in the garden set?
          </h1>
          <p className="text-[#595667] lg:text-base text-sm">
            Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.
            dolor sit amet consectetur adipiscing eli mattis sit phasellus
            mollis sit aliquam sit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
