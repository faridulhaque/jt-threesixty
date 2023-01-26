import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type timeTypes = {
  timeName: string;
  setTimeName: any;
  setTimeValue: any;
  setLastWeek: any;
};

export default function SelectTime({
  timeName,
  setTimeName,
  setTimeValue,
  setLastWeek
}: timeTypes) {
  const handleChange = (event: SelectChangeEvent) => {
    setTimeName(event.target.value as string);

    if (event.target.value === "last year") {
      const currentYear = new Date().getFullYear();
      setTimeValue(currentYear - 1);
    } else if (event.target.value === "last month") {
      
      const currentMonth = new Date().getMonth();
      if (currentMonth === 0) {
        setTimeValue("-" + 12);
      }
      else if(currentMonth === 1 || currentMonth === 2 || currentMonth === 3 || currentMonth === 4 || currentMonth === 5 || currentMonth === 6 || currentMonth === 7 || currentMonth === 8 || currentMonth === 9){
        setTimeValue("-0" + currentMonth)
      }
    }
    else{
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      setTimeValue(oneWeekAgo)
    }
  };

  return (
    <Box sx={{ width: "200px", marginLeft: "15px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={launchStatus}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="last year">Last year</MenuItem>
          <MenuItem value="last month">Last month</MenuItem>
          <MenuItem value="last week">Last week</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
