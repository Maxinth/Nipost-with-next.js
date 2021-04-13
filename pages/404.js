import React from "react";
import CustomErrorPage from "../components/Custom404ErrorPage";
import TransitionBox from "../components/TransitionBox";
import useRedirect from "../components/useRedirect";

const Custom404 = () => {
  const { time } = useRedirect();
  return (
    <TransitionBox>
      <CustomErrorPage countDown={time} />
    </TransitionBox>
  );
};

export default Custom404;
