import React from "react";
import CustomErrorPage from "../components/Custom404ErrorPage";
import TransitionBox from "../components/TransitionBox";

const Custom404 = () => {
  return (
    <TransitionBox docTitle="Oops!, 404 says HI!">
      <CustomErrorPage />
    </TransitionBox>
  );
};

export default Custom404;
