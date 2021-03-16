import React from "react";
import { DetailsBox } from "./styled";
import Btn from "../Btn";
import DetailsTop from "./DetailsTop";

const TrackItemsDetails = () => {
  return (
    <DetailsBox>
      <DetailsTop />
      <Btn text="track domestic items" />
    </DetailsBox>
  );
};

export default TrackItemsDetails;
