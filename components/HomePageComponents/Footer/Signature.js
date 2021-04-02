import {
  IconContainer,
  SignContainer,
  SignatureContainer,
  Contact,
} from "./styled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
const Signature = () => {
  return (
    <SignatureContainer>
      <SignContainer>
        MADE with
        <IconContainer color="red">
          <FavoriteIcon />
        </IconContainer>
        by Tunde.
      </SignContainer>
      <Contact>+234 902 428 2995</Contact>
    </SignatureContainer>
  );
};

export default Signature;
