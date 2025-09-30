import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [totalItems, setTotalItems] = useState(0);

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
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export default useUIContext;
