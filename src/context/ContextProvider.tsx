import React, { createContext } from "react";

import useNavbarItems from "../hooks/useNavbarItems";
export const GlobalContext = createContext<any>({} as any);

const ContextProvider = ({ children }: any) => {
  const {navItemsHookData} = useNavbarItems();
  const value ={
    navItemsHookData
  }


  return (
    <>
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    </>
  );
};

export default ContextProvider;
