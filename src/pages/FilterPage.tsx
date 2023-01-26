import moment from "moment";
import React, { useState } from "react";
import SelectLaunchStatus from "../components/filter/SelectLaunchStatus";
import SelectTime from "../components/filter/SelectTime";
import UpcomingCheck from "../components/filter/UpcomingCheck";
import Navbar from "../components/shared/Navbar";
import { useGetAllDataQuery } from "../redux/queries/dataAPI";
import { Box, Button, Grid } from "@mui/material";
import ItemCard from "../components/home/ItemCard";


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
        setDataToShow(data.filter((d: any) => d.launch_year == newTimeValue));
      } else if (timeName === "last month") {
        let currentDate = new Date();
        let lastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          currentDate.getDate()
        );
        const filterArr = moment(lastMonth).format("DD-MMM-yyyy").split("-");
        const filterDate = filterArr[1] + "-" + filterArr[2];
        setDataToShow(
          data.filter((d: any) =>
            moment(d.launch_date_utc).format("DD-MMM-yyyy").includes(filterDate)
          )
        );
      } else {
        const lastWeek:any = [];
        const today = moment();
        for (let i = 0; i < 7; i++) {
          lastWeek.push(
            moment(today).subtract(i, "days").format("DD-MMM-yyyy")
          );
        }
        const filteredArr = data.filter((d:any) =>
          lastWeek.some((day:any) =>moment(d.launch_date_utc).format("DD-MMM-yyyy") === moment(day).format("DD-MMM-yyyy"))
        );
        console.log(filteredArr); // [{id: 1, name: 'apple'}]
        // setDataToShow(data.filter((d: any) => {
        //   return
        // }));
      }
    }
  };

  

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
            setUpcoming={setUpcoming}
          ></SelectTime>
          <SelectLaunchStatus
            setUpcoming={setUpcoming}

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
    </>
  );
};

export default FilterPage;
