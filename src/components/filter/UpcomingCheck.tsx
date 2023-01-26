import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

type upcomingTypes = {
  upcoming: boolean;
  setUpcoming: any;

};

export default function UpcomingCheck({
  upcoming,
  setUpcoming,

}: upcomingTypes) {
  const handleUpcoming = () => {
    setUpcoming(!upcoming);
    
  };
  return (
    <div>
      <Checkbox checked={upcoming} onClick={handleUpcoming} {...label} />
      Upcoming
    </div>
  );
}
