import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const DetailsPage = () => {
  const { param } = useParams();
  return (
    <>
      <Navbar></Navbar>
      <h2 style={{ marginTop: "100px" }}>{param}</h2>
    </>
  );
};

export default DetailsPage;
