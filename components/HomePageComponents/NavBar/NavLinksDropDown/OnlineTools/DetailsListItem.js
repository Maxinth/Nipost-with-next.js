import React from "react";
import PropTypes from "prop-types";
import DetailMain from "./DetailMain";
import { DetailsItem } from "./styled";

const DetailsListItem = ({ item }) => {
  return (
    <DetailsItem>
      <DetailMain {...item} />
    </DetailsItem>
  );
};

DetailsListItem.propTypes = {
  item: PropTypes.object,
};

export default DetailsListItem;
