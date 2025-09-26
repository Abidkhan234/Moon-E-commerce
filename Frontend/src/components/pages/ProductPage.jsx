import { useParams } from "react-router";
import { cardData } from "../../constant/data";
import ProductDetailSection from "../sub-compnents/productSections/ProductDetailSection";

const ProductPage = () => {
  const { id } = useParams();

  const singleItemData = cardData.filter((v) => v.id == id);

  return (
    <main className="flex flex-col gap-8 lg:px-20 md:px-10 px-6 py-4">
      <>
        <span>Bread Crumbs</span>
      </>
      <>
        <ProductDetailSection
          title={singleItemData[0].title}
          description={singleItemData[0].description}
          image={singleItemData[0].image}
          price={singleItemData[0].price}
          discountPrice={50}
          stock={"in stock"}
        />
      </>
    </main>
  );
};

export default ProductPage;
