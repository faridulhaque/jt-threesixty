import React,{useState} from "react";

const useSearchStates = () => {
  const [searchedText, setSearchedText] = useState<string>("");

  const searchStatesData = {
    searchedText,
    setSearchedText
  };
  return {
    searchStatesData
  };
};

export default useSearchStates;
