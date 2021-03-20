import React from "react";
import { NewsBox } from "./styled";
import PropTypes from "prop-types";

const News = ({ newsHeadLine, position }) => {
  return <NewsBox position={position}>{newsHeadLine}</NewsBox>;
};

News.propTypes = {
  newsHeadLine: PropTypes.string,
  position: PropTypes.string,
};
export default News;
