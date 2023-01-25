import { Grid } from "@mui/material";
import React from "react";
import ItemCard from "../components/home/ItemCard";
import Navbar from "../components/shared/Navbar";
import { useGetAllDataQuery } from "../redux/queries/dataAPI";

const HomePage = () => {
  const { data, isLoading, error } = useGetAllDataQuery(null);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (error) {
    alert(error);
  }

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          width: "96%",
          marginTop: "100px",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      >
        <Grid
          
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        >
          {data.map((d: any) => (
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
      </div>
    </>
  );
};

export default HomePage;
