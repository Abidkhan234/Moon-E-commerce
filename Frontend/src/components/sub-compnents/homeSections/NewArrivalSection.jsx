import React from "react";
import SectionLayout from "../../layouts/SectionLayout";
import { cardData } from "../../../constant/data";

const NewArrivalSection = () => {
  return (
    <section className="">
      <SectionLayout
        data={cardData.slice(0, 4)}
        title="Discover new  arrivals"
      />
    </section>
  );
};

export default NewArrivalSection;
