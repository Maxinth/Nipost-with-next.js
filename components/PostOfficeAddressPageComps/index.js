import React from "react";
import PropTypes from "prop-types";
import SharedLayout from "../SharedComponents/SharedLayout";
import LocatePODetails from "../HomePageComponents/Tabs/LocatePoDetails";

const PostOfficeAddressPage = ({ text }) => {
  return (
    <SharedLayout text={text}>
      <LocatePODetails />
    </SharedLayout>
  );
};

PostOfficeAddressPage.propTypes = {
  text: PropTypes.string,
};

export default PostOfficeAddressPage;
