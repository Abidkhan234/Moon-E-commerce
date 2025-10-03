import { useQuery } from "@tanstack/react-query";
import { cardData } from "../../../constant/data";
import SectionLayout from "../../layouts/SectionLayout";
import { fetchNewProducts } from "../../../api/api";

const NewArrivalSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["newProducts"],
    queryFn: fetchNewProducts,
  });

  return (
    <section className="">
      <SectionLayout data={data} isLoading={isLoading} title="Discover new  arrivals" />
    </section>
  );
};

export default NewArrivalSection;
