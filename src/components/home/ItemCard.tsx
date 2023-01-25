import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type itemTypes = {
  item: any;
};

const ItemCard = ({ item }: itemTypes) => {
  const {
    mission_name,
    links,
    launch_date_utc,
    launch_success,
    flight_number,
    rocket: { rocket_name },
  } = item;

  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={`${rocket_name}`}
          // subheader={moment(launch_date_utc).format("DD-MMM-yyyy")}
          subheader={mission_name}
          subheaderTypographyProps={
            launch_success ? { color: "green" } : { color: "red" }
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={links.mission_patch_small}
          alt="icon"
        />
        <CardContent></CardContent>
        <CardActions disableSpacing>
          <Button
            onClick={() => navigate(`/${flight_number}`)}
            aria-label="add to favorites"
          >
            {/* <UnfoldMoreIcon cursor="pointer"></UnfoldMoreIcon> */}
            See More
          </Button>

          {/* <IconButton aria-label="share"><ShareIcon /></IconButton> */}
        </CardActions>
      </Card>
    </>
  );
};

export default ItemCard;
