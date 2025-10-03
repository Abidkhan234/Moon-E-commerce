import { createContext, useContext, useState } from "react";
import { getItem } from "../src/utils/localStorageHelper";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [filterData, setFilterData] = useState({
    brand: null,
    page: 1,
  });
  const [sortBy, setSortBy] = useState("high");
  const [totalItems, setTotalItems] = useState(
    getItem("cartItems")?.length || 0
  );

  const [cartItems, setCartItems] = useState(getItem("cartItems") || []);

  return (
    <UIContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        showCart,
        setShowCart,
        filterData,
        setFilterData,
        totalItems,
        setTotalItems,
        sortBy,
        setSortBy,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export default useUIContext;
