import React from "react";
import PropTypes from "prop-types";
import SharedLayout from "../SharedComponents/SharedLayout";

const PostOfficeAddressPage = ({ text }) => {
  return <SharedLayout text={text}></SharedLayout>;
};

PostOfficeAddressPage.propTypes = {
  text: PropTypes.string,
};

export default PostOfficeAddressPage;
