import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import SelectLaunchStatus from "../components/filter/SelectLaunchStatus";
import SelectTime from "../components/filter/SelectTime";
import UpcomingCheck from "../components/filter/UpcomingCheck";
import Navbar from "../components/shared/Navbar";
import { useGetAllDataQuery } from "../redux/queries/dataAPI";

const FilterPage = () => {
  const { data, isLoading, error } = useGetAllDataQuery(null);

  const [launchStatus, setLaunchStatus] = React.useState<string>("");
  const [isLaunched, setLaunched] = useState<boolean>(false);
  const [launchedData, setLaunchedData] = useState<any>([]);

  const [upcoming, setUpcoming] = useState(false);
  const [upcomingData, setUpcomingData] = useState([]);

  const [timeName, setTimeName] = React.useState<string>("");
  const [timeValue, setTimeValue] = React.useState<string>("");
  const [lastWeek, setLastWeek] = React.useState<string>("");

  const handleFind = (): void => {
    setLaunchedData(data.filter((d: any) => d.launch_success === isLaunched));

    if (upcoming) {
      setUpcomingData(data.filter((d: any) => d.upcoming === true));
    }
  };

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (error) {
    alert(error);
  }
  const finalData = [...upcomingData, ...launchedData];

  console.log(finalData);

  return (
    <>
      <Navbar></Navbar>
      <Box width="96%" marginLeft="2%" marginRight="2%" marginTop="100px">
        <Box width="100%" display="flex">
          <SelectLaunchStatus
            launchStatus={launchStatus}
            setLaunchStatus={setLaunchStatus}
            isLaunched={isLaunched}
            setLaunched={setLaunched}
            data={data}
            launchedData={launchedData}
            setLaunchedData={setLaunchedData}
          ></SelectLaunchStatus>

          <SelectTime
            timeName={timeName}
            setTimeName={setTimeName}
            setTimeValue={setTimeValue}
            setLastWeek={setLastWeek}
          ></SelectTime>
        </Box>
        <UpcomingCheck
          upcoming={upcoming}
          setUpcoming={setUpcoming}
          data={data}
          upcomingData={upcomingData}
          setUpcomingData={setUpcomingData}
        ></UpcomingCheck>
        <Button onClick={handleFind} variant="contained">
          Find
        </Button>
      </Box>
    </>
  );
};

export default FilterPage;
