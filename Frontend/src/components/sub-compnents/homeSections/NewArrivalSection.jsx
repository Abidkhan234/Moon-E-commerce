import SectionLayout from "../../layouts/SectionLayout";

const NewArrivalSection = ({ data, isLoading }) => {
  const newArrivalSectionData = data?.filter((v) => v.rating < 2.9);

  return (
    <section className="">
      <SectionLayout
        data={isLoading ? [] : newArrivalSectionData}
        title="Discover new  arrivals"
        isLoading={isLoading}
      />
    </section>
  );
};

export default NewArrivalSection;
