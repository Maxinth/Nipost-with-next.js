import React from "react";
import PostOfficeAddressPage from "../components/PostOfficeAddressPageComps";
import TransitionBox from "../components/TransitionBox";

const Post = () => {
  return (
    <TransitionBox>
      <PostOfficeAddressPage text="postoffice finder" />
    </TransitionBox>
  );
};

export default Post;
