import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

type upcomingTypes = {
  upcoming: boolean;
  setUpcoming: any;
  data: any;
  upcomingData: any;
  setUpcomingData: any;
};

export default function UpcomingCheck({
  upcoming,
  setUpcoming,
  data,
  upcomingData,
  setUpcomingData,
}: upcomingTypes) {
  const handleUpcoming = () => {
    setUpcoming(!upcoming);
    
  };
  return (
    <div>
      <Checkbox onClick={handleUpcoming} {...label} />
      Upcoming
    </div>
  );
}
