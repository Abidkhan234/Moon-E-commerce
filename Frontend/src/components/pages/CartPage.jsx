import CartSection from "../sub-compnents/cartSections/CartSection";

const CartPage = () => {
  return (
    <main className="flex flex-col gap-8 lg:px-20 md:px-10 px-6 py-4">
      <>
        <span>Bread Crumbs</span>
      </>
      <>
        <CartSection />
      </>
    </main>
  );
};

export default CartPage;
