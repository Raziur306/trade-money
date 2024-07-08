import React from "react";
import {
  LogoMainWrapper,
  LogoTextStyle,
  SubscriptionContainer,
  SubscriptionTextWrapper,
} from "../../styled/HomePageStyled";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <LogoMainWrapper>
        <LogoTextStyle>TradeMoney</LogoTextStyle>
        <p>Find out what&apos;s trending in Crypto Twitter</p>
      </LogoMainWrapper>

      <SubscriptionContainer>
        <SubscriptionTextWrapper>
          <Image src="/coin.svg" alt="Subscribe" width={25} height={25} />
          <div className="flex flex-col">
            <h4>Start Subscription</h4>
            <p>
              For $49<span>/month</span>
            </p>
          </div>
        </SubscriptionTextWrapper>
        <button>Sign in</button>
      </SubscriptionContainer>
    </div>
  );
};

export default Header;
