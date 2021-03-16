import React from "react";
import InputBox from "../InputBox";
import { DetailsBox, Box } from "./styled";
import Btn from "../Btn";

const TrackItemsDetails = () => {
  return (
    <DetailsBox>
      <Box>
        <InputBox text="Enter International tracking id" />
        <Btn text="track" />
      </Box>
      <Btn text="track domestic items" />
    </DetailsBox>
  );
};

export default TrackItemsDetails;
