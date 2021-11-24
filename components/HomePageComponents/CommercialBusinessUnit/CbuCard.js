import React from "react";
import { CardBox, CardImage, CardTitle } from "./styled";
import PropTypes from "prop-types";
import { useVariants } from "../../useVariants";

const CbuCard = ({ imageSrc, text, effect = "", index }) => {
  const { slideFromLeft, variantProps } = useVariants();
  return (
    <CardBox data-aos={effect} variant={slideFromLeft} {...variantProps}>
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
