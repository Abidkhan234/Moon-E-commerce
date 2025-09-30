import { useParams } from "react-router";
import ProductDetailSection from "../sub-compnents/productSections/ProductDetailSection";
import { usePost } from "../../hooks/usePost";
import Loader from "../ui/loader/Loader";

const ProductPage = () => {
  const { id } = useParams();

  const { isLoading, data } = usePost({ id });

  const price = data?.price;
  const discountPercentage = data?.discountPercentage;

  return (
    <main className="flex flex-col gap-8 lg:px-20 md:px-10 px-6 py-4">
      <>
        <span>Bread Crumbs</span>
      </>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loader isBigger={true} />
        </div>
      ) : (
        <>
          <ProductDetailSection
            title={data.title}
            description={data.description}
            image={data.images}
            discountPrice={Math.round(
              price - (price * discountPercentage) / 100
            )}
            price={price}
            stock={data.availabilityStatus}
          />
        </>
      )}
    </main>
  );
};

export default ProductPage;
