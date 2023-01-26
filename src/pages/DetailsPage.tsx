import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { Box, CardMedia } from "@mui/material";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { useGetOneDataQuery } from "../redux/queries/dataAPI";

const DetailsPage = (): any => {
  const { param } = useParams();
  const { data, isLoading, error } = useGetOneDataQuery(param);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  if (error) {
    return alert(error);
  }
  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ flexGrow: 1 }} width="96%" margin="100px 2%">
        <h1 style={{ textAlign: "center" }}>Mission: {data.mission_name}</h1>
        <h2 style={{ textAlign: "center" }}>
          Launch Date: {moment(data.launch_date_utc).format("DD-MMM-YYYY")}
        </h2>
        <h1
          style={
            data.launch_success
              ? { color: "green", textAlign: "center" }
              : { color: "red", textAlign: "center" }
          }
        >
          Status: {data.launch_success ? "Success" : "Failed"}
        </h1>
        <p style={{textAlign: "center"}}>{data.details}</p>
        <p style={{textAlign: "center"}}>Learn more from Wiki: <a style={{color: "blue"}} href={data.links.wikipedia}>Visit</a></p>
        <p style={{textAlign: "center"}}>Watch on youtube: <a style={{color: "blue"}} href={data.links.video_link}>Watch</a></p>
      </Box>
    </>
  );
};

export default DetailsPage;
