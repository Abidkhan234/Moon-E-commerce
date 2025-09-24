import { cardData } from "../../../constant/data";
import SectionLayout from "../../layouts/SectionLayout";

const BestSellerSection = () => {
  return (
    <section className="">
      <SectionLayout data={cardData} title="Best sellers" />
    </section>
  );
};

export default BestSellerSection;
