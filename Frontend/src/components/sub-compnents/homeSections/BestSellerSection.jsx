import SectionLayout from "../../layouts/SectionLayout";

const BestSellerSection = ({ data, isLoading }) => {
  const bestSellingProducts = data?.filter((v) => v.rating > 4.7);

  return (
    <section className="">
      <SectionLayout
        data={isLoading ? [] : bestSellingProducts}
        title="Best sellers"
        isLoading={isLoading}
      />
    </section>
  );
};

export default BestSellerSection;
