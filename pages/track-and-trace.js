import React from "react";
import TrackAndTracePage from "../components/TrackAndTracePageComps";
import TransitionBox from "../components/TransitionBox";

const TrackAndTrace = () => {
  return (
    <TransitionBox>
      <TrackAndTracePage text="track and trace" />
    </TransitionBox>
  );
};

export default TrackAndTrace;
