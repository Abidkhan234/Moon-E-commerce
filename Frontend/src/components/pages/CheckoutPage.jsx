import React from "react";
import BillingDetailSection from "../sub-compnents/checkoutSections/BillingDetailSection";

const CheckoutPage = () => {
  return (
    <main className="flex flex-col gap-8 lg:px-20 md:px-10 px-6 py-4">
      <>
        <span>BreadCrumbs</span>
      </>
      <div className="">
        <BillingDetailSection />
      </div>
    </main>
  );
};

export default CheckoutPage;
