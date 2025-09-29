import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <UIContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export default useUIContext;
