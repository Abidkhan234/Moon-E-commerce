import { createContext, useContext, useState } from "react";
import { getItem } from "../src/utils/localStorageHelper";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(getItem("userData", {}));

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
