import React from "react";
import { ListContainer } from "./styled";
import PropTypes from "prop-types";
import GenerateListItems from "./GenerateListItems";

const FooterList = ({ withIcon, items }) => {
  return (
    <ListContainer>
      <GenerateListItems items={items} withIcon={withIcon} />
    </ListContainer>
  );
};

FooterList.propTypes = {
  withIcon: PropTypes.bool,
  items: PropTypes.array,
};

export default FooterList;
