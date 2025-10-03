import { useQuery } from "@tanstack/react-query";
import SectionLayout from "../../layouts/SectionLayout";
import { fetchBestProducts } from "../../../api/api";

const BestSellerSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["bestSellerProducts"],
    queryFn: fetchBestProducts,
  });

  return (
    <section className="">
      <SectionLayout data={data} isLoading={isLoading} title="Best sellers" />
    </section>
  );
};

export default BestSellerSection;
