import React from "react";
import Btn from "../Btn";
import InputBox from "../InputBox";
import { PoDetails } from "./styled";

const LocatePODetails = () => {
  return (
    <PoDetails>
      <InputBox text="Find by area e.g. Marina or Garki" />
      <Btn text="find post office" />
    </PoDetails>
  );
};

export default LocatePODetails;
