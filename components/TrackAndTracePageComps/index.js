import React from "react";
import TrackItemDetails from "../HomePageComponents/Tabs/TrackItemsDetails";
import PropTypes from "prop-types";
import SharedLayout from "../SharedComponents/SharedLayout";

const TrackAndTracePage = ({ text }) => {
  return (
    <SharedLayout text={text}>
      <TrackItemDetails />
    </SharedLayout>
  );
};

TrackAndTracePage.propTypes = {
  text: PropTypes.string,
};

export default TrackAndTracePage;
