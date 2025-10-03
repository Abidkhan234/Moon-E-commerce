import React from "react";
import ProductCard from "../ui/cards/ProductCard";
import Loader from "../ui/loader/Loader";

const SectionLayout = ({
  data = [],
  title = "",
  isBlogSection = false,
  blogSecComponent,
  isLoading,
}) => {
  return (
    <div className="flex flex-col gap-7 h-full w-full">
      <div className="flex justify-center items-center">
        <h1 className="uppercase font-bold min-[425px]:text-3xl text-3xl text-center text-[#3A3845] italic tracking-wide">
          {title}
        </h1>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loader isBigger={true} />
        </div>
      )}
      {isBlogSection ? (
        <>{blogSecComponent}</>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
          {data.map((v, i) => (
            <div className="" key={i}>
              <ProductCard
                cardImage={v.image.url}
                title={v.title}
                description={v.description}
                price={v.price}
                discountPrice={v.discountedPrice}
                id={v._id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionLayout;
