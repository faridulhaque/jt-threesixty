import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const useNavbarItems = () => {
  const initialState = null;

  const handleNavItem = (state: any, action: any) => {
    return (state = action.payload);
  };

  const [state, dispatch] = useReducer(handleNavItem, initialState);

  const navItemsHookData = {
    state,
    dispatch,
  };

  return {
    navItemsHookData,
  };
};

export default useNavbarItems;
