import React from "react";
import { ImageBox, Image } from "./styled";
import PropTypes from "prop-types";

const LetterBox = ({ src, alt }) => {
  return (
    <ImageBox>
      <Image src={src} alt={alt} />
    </ImageBox>
  );
};

LetterBox.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default LetterBox;
