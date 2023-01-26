import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type statusTypes = {
  launchStatus: string;
  setLaunchStatus: any;

};

export default function SelectLaunchStatus({
  launchStatus,
  setLaunchStatus,

}: statusTypes) {
  const handleChange = (event: SelectChangeEvent) => {
  
    setLaunchStatus(event.target.value as string);

  };

  return (
    <Box sx={{ width: "200px", marginLeft: "15px" }}>
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
