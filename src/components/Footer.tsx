import React from "react";
import {
  FooterContainer,
  SocialIconWrapper,
} from "../../styled/HomePageStyled";
import Telegram from "../../public/telegram";
import Twitter from "../../public/Twitter";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="flex flex-row gap-3">
        <SocialIconWrapper>
          <Telegram />
        </SocialIconWrapper>
        <SocialIconWrapper>
          <Twitter />
        </SocialIconWrapper>
      </div>
      <p>© TradeMoney 2024 | All rights reserved</p>
    </FooterContainer>
  );
};

export default Footer;
