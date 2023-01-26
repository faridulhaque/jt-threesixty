import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type statusTypes = {
  launchStatus: string;
  setLaunchStatus: any;
  isLaunched: boolean;
  setLaunched: any;
  launchedData: any;
  setLaunchedData: any;
  data: any;
};

export default function SelectLaunchStatus({
  isLaunched,
  setLaunched,
  launchStatus,
  setLaunchStatus,
  setLaunchedData,
  launchedData,
  data,
}: statusTypes) {
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === "success") {
      setLaunched(true);
    } else {
      setLaunched(false);
    }
    setLaunchStatus(event.target.value as string);

    setLaunchedData(data.filter((d: any) => d.launch_success === isLaunched));
  };

  return (
    <Box sx={{ width: "200px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={launchStatus}
          label="Launch status"
          onChange={handleChange}
        >
          <MenuItem value="success">Success</MenuItem>
          <MenuItem value="failed">Failed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
