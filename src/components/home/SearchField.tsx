import React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

const SearchField = () => {
  return (
    <>
      <Box width="100%" height="200px">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </>
  );
};

export default SearchField;
