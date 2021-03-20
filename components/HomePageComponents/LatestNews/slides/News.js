import React from "react";
import { NewsBox } from "./styled";
import PropTypes from "prop-types";

const News = ({ newsHeadLine }) => {
  return <NewsBox>{newsHeadLine}</NewsBox>;
};

News.propTypes = {
  newsHeadLine: PropTypes.string,
};
export default News;
