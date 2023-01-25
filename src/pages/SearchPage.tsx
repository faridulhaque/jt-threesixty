import { Box, Button, Grid } from "@mui/material";
import React, { useState, useContext } from "react";
import ItemCard from "../components/home/ItemCard";
import SearchField from "../components/home/SearchField";
import Navbar from "../components/shared/Navbar";
import { GlobalContext } from "../context/ContextProvider";
import { useGetAllDataQuery } from "../redux/queries/dataAPI";

const SearchPage = () => {
  const {
    searchStatesData: { searchedText },
  } = useContext(GlobalContext);

  const { data, isLoading, error } = useGetAllDataQuery(null);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (error) {
    alert(error);
  }

  const searchedData = data.filter((d: any) =>
    d.rocket.rocket_name.toLowerCase().includes(searchedText.toLowerCase())
  );

  return (
    <>
      <Navbar></Navbar>
      <SearchField></SearchField>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {searchedData.map((d: any) => (
          <Grid key={d.flight_number} item xs={12} sm={12} md={6} lg={4} xl={3}>
            <ItemCard item={d}></ItemCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SearchPage;
