import { useParams } from "react-router";
import ProductDetailSection from "../sub-compnents/productSections/ProductDetailSection";
import Loader from "../ui/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../../api/api";

const ProductPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => fetchSingleProduct(id),
  });

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
            title={data.singleProduct.title}
            description={data.singleProduct.description}
            image={data.singleProduct.image.url}
            price={data.singleProduct.price}
            discountPrice={data.singleProduct.discountedPrice}
            id={data.singleProduct._id}
            otherItems={data.similarProducts}
          />
        </>
      )}
    </main>
  );
};

export default ProductPage;
