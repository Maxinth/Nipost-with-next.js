import React from "react";
import PostOfficeAddressPage from "../components/PostOfficeAddressPageComps";
import TransitionBox from "../components/TransitionBox";

const Post = () => {
  return (
    <TransitionBox docTitle="Nipost - Post office Address">
      <PostOfficeAddressPage text="postoffice finder" />
    </TransitionBox>
  );
};

export default Post;
