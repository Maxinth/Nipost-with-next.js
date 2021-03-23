import React from "react";
import PropTypes from "prop-types";
import { Anchor } from "./styled";
import Link from "next/link";

const DetailMain = ({ icon, goTo, text }) => {
  return (
    <>
      {icon}
      <Link href={goTo}>
        <Anchor>{text}</Anchor>
      </Link>
    </>
  );
};

DetailMain.propTypes = {
  icon: PropTypes.object,
  goTo: PropTypes.string,
  text: PropTypes.string,
};

export default DetailMain;
