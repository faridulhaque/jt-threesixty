import React, { createContext } from "react";

import useNavbarItems from "../hooks/useNavbarItems";
import useSearchStates from "../hooks/useSearchStates";
export const GlobalContext = createContext<any>({} as any);

const ContextProvider = ({ children }: any) => {
  const {navItemsHookData} = useNavbarItems();
  const {searchStatesData} = useSearchStates();

  const value ={
    navItemsHookData,
    searchStatesData
  }


  return (
    <>
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    </>
  );
};

export default ContextProvider;
