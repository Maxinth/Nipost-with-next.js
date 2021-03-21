import React from "react";
import { CardBox, CardImage, CardTitle } from "./styled";
import PropTypes from "prop-types";

const CbuCard = ({ imageSrc, text }) => {
  return (
    <CardBox>
      <CardImage src={imageSrc} alt="cbu" />
      <CardTitle>{text}</CardTitle>
    </CardBox>
  );
};

CbuCard.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
};
export default CbuCard;
