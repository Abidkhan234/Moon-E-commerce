import React from "react";
import ProductCard from "../ui/cards/ProductCard";

const SectionLayout = ({
  data = [],
  title = "",
  isBlogSection = false,
  blogSecComponent,
}) => {
  return (
    <div className="flex flex-col gap-7 h-full w-full">
      <div className="flex justify-center items-center">
        <h1 className="uppercase font-bold min-[425px]:text-3xl text-3xl text-center text-[#3A3845] italic tracking-wide">
          {title}
        </h1>
      </div>
      {isBlogSection ? (
        <>{blogSecComponent}</>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
          {data.map((v, i) => (
            <div className="" key={i}>
              <ProductCard
                cardImage={v.image}
                title={v.title}
                description={v.description}
                price={v.price}
                index={i}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionLayout;
