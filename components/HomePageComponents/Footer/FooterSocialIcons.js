import React from "react";
import SocialIcons from "../NavBar/TopInfoAndSocial/SocialIcons";
import { isHeadingCustomerService } from "./data";
import PropTypes from "prop-types";
import { SocialIconsContainer } from "./styled";

const FooterSocialIcons = ({ heading }) => {
  return (
    <SocialIconsContainer>
      {isHeadingCustomerService(heading) ? <SocialIcons /> : null}
    </SocialIconsContainer>
  );
};

FooterSocialIcons.propTypes = {
  heading: PropTypes.string,
};

export default FooterSocialIcons;
