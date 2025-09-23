import "./App.css";
import PageLayout from "./components/layouts/PageLayout";
import HomePage from "./components/pages/HomePage";
import ShopPage from "./components/pages/ShopPage";
import ProductPage from "./components/pages/ProductPage";
import BlogPage from "./components/pages/BlogPage";
import CartPage from "./components/pages/CartPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import WishListPage from "./components/pages/WishListPage";
import ContactPage from "./components/pages/ContactPage";

import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="min-h-[100vh] w-full bg-gray-100">
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/wish-list" element={<WishListPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
