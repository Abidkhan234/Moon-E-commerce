import { cardData } from "../../constant/data";
import SectionLayout from "../layouts/SectionLayout";

const WishListPage = () => {
  return (
    <main className="lg:px-20 md:px-10 px-6 py-4">
      <section className="">
        <SectionLayout data={cardData} title="Wish List" />
      </section>
    </main>
  );
};

export default WishListPage;
