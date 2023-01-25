import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { GlobalContext } from "../../context/ContextProvider";

const SearchField = () => {
  const {
    searchStatesData: { setSearchedText },
  } = useContext(GlobalContext);

  return (
    <>
      <Box
        component="form"
        //   sx={{
        //     "& > :not(style)": { m: 1, width: "25ch" },
        //   }}
        noValidate
        autoComplete="off"
        marginBottom="50px"
      >
        <TextField
          onChange={(e) => setSearchedText(e.target.value)}
          id="outlined-basic"
          label="Search by rocket name"
          variant="outlined"
        />
      </Box>
    </>
  );
};

export default SearchField;
