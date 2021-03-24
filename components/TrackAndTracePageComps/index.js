import React from "react";
import TrackItemsMain from "./TrackItemsMain";
import PropTypes from "prop-types";
import SharedLayout from "../SharedComponents/SharedLayout";

const TrackAndTracePage = ({ text }) => {
  return (
    <SharedLayout text={text}>
      <TrackItemsMain />
    </SharedLayout>
  );
};

TrackAndTracePage.propTypes = {
  text: PropTypes.string,
};

export default TrackAndTracePage;
