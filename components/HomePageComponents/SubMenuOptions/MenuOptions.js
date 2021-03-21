import React from "react";
import { MenuBox, Span } from "./styled";
import PropTypes from "prop-types";

const MenuOptions = ({ icon, title }) => {
  return (
    <MenuBox>
      {icon}
      <Span>{title}</Span>
    </MenuBox>
  );
};

MenuOptions.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
};

export default MenuOptions;
