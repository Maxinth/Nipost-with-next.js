import React from "react";

import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import EventNoteIcon from "@material-ui/icons/EventNote";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export const data = [
  { icon: <TrackChangesIcon />, text: "track & trace", goTo: "/track" },
  { icon: <EventNoteIcon />, text: "calculator", goTo: "/calculator" },
  { icon: <LocationOnIcon />, text: "locate post office", goTo: "/post" },
];
