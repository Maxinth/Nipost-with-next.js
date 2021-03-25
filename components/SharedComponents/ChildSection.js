import React from "react";
import OnlineTools from "./OnlineTools";
import { Section } from "../CalculatorPageComps/styled";
import PropTypes from "prop-types";

const ChildSection = ({ comp }) => {
  return (
    <Section>
      {comp}
      <OnlineTools />
    </Section>
  );
};

ChildSection.propTypes = {
  comp: PropTypes.object,
};

export default ChildSection;
