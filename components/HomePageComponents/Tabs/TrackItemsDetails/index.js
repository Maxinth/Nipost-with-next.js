import React from "react";
import InputBox from "../InputBox";
import { DetailsBox } from "../styled";

const TrackItemsDetails = () => {
  return (
    <DetailsBox>
      <InputBox text="Enter International tracking id" />
    </DetailsBox>
  );
};

export default TrackItemsDetails;
