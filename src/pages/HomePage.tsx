import { Box, Button, Grid } from "@mui/material";
import React, { useState, useContext } from "react";
import ItemCard from "../components/home/ItemCard";
import Navbar from "../components/shared/Navbar";
import { GlobalContext } from "../context/ContextProvider";
import { useGetAllDataQuery } from "../redux/queries/dataAPI";

const HomePage = () => {
  const {
    navItemsHookData: { state },
    searchStatesData: { searchedText },
  } = useContext(GlobalContext);

  const { data, isLoading, error } = useGetAllDataQuery(null);

  const [sliced, setSliced] = useState<number>(20);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (error) {
    alert(error);
  }

  const commonData = data.slice(0, sliced);

  const searchedData = data.filter((d: any) =>
    d.rocket.rocket_name.toLowerCase().includes(searchedText.toLowerCase())
  );

  const dataToShow = searchedData.length ? searchedData : commonData;

  console.log(searchedData);

  return (
    <>
      <Navbar></Navbar>

      {state}

      <div
        style={{
          width: "96%",
          marginTop: "100px",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      >
        {state}

        <Grid
          container
          rowSpacing={10}
          columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        >
          {dataToShow.map((d: any) => (
            <Grid
              key={d.flight_number}
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <ItemCard item={d}></ItemCard>
            </Grid>
          ))}
        </Grid>

        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop="50px"
          marginBottom="50px"
        >
          {sliced >= data.length ? (
            <Button onClick={() => setSliced(20)}>See Less</Button>
          ) : (
            <Button onClick={() => setSliced(sliced + 20)}>See More</Button>
          )}
        </Box>
      </div>
    </>
  );
};

export default HomePage;
