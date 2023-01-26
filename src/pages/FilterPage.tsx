import { Box, Button } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import SelectLaunchStatus from "../components/filter/SelectLaunchStatus";
import SelectTime from "../components/filter/SelectTime";
import UpcomingCheck from "../components/filter/UpcomingCheck";
import Navbar from "../components/shared/Navbar";
import { useGetAllDataQuery } from "../redux/queries/dataAPI";

const FilterPage = () => {
  const { data, isLoading, error } = useGetAllDataQuery(null);

  const [launchStatus, setLaunchStatus] = React.useState<string>("");

  const [upcoming, setUpcoming] = useState<boolean>(false);

  const [timeName, setTimeName] = React.useState<string>("");
  const [timeValue, setTimeValue] = React.useState<string>("");

  const [dataToShow, setDataToShow] = useState<any>([]);

  const handleFind = (): any => {
    if (upcoming) {
      setTimeName("");
      setTimeValue("");
      setLaunchStatus("");
      setDataToShow(data.filter((d: any) => d.upcoming === true));
    } else if (launchStatus) {
      setTimeName("");
      setTimeValue("");

      if (launchStatus === "success") {
        setDataToShow(data.filter((d: any) => d.launch_success === true));
      } else {
        setDataToShow(data.filter((d: any) => d.launch_success === false));
      }
    } else {
      setUpcoming(false);
      setLaunchStatus("");
      const newTimeValue = timeValue.toString();

      
      if (timeName === "last year") {
        setDataToShow((data.filter((d: any) => d.launch_year == newTimeValue)))
      }
    }
  };

  console.log(dataToShow);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (error) {
    alert(error);
  }

  return (
    <>
      <Navbar></Navbar>
      <Box width="96%" marginLeft="2%" marginRight="2%" marginTop="100px">
        <Box width="100%" display="flex">
          <SelectTime
            setTimeName={setTimeName}
            setTimeValue={setTimeValue}
          ></SelectTime>
          <SelectLaunchStatus
            launchStatus={launchStatus}
            setLaunchStatus={setLaunchStatus}
          ></SelectLaunchStatus>
        </Box>
        <UpcomingCheck
          upcoming={upcoming}
          setUpcoming={setUpcoming}
        ></UpcomingCheck>
        <Button onClick={handleFind} variant="contained">
          Find
        </Button>
        <Button
          sx={{ marginLeft: "15px" }}
          onClick={() => window.location.reload()}
          variant="contained"
        >
          Refresh
        </Button>
      </Box>
    </>
  );
};

export default FilterPage;
