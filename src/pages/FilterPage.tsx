import { Box } from "@mui/material";
import React from "react";
import SelectLaunchStatus from "../components/filter/SelectLaunchStatus";
import SelectTime from "../components/filter/SelectTime";
import UpcomingCheck from "../components/filter/UpcomingCheck";
import Navbar from "../components/shared/Navbar";

const FilterPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box width="96%" marginLeft="2%" marginRight="2%" marginTop="100px">
        <Box width="100%" display="flex">
          <SelectLaunchStatus></SelectLaunchStatus>
          <SelectTime></SelectTime>
        </Box>
        <UpcomingCheck></UpcomingCheck>
      </Box>
    </>
  );
};

export default FilterPage;
