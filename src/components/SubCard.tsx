import React from "react";
import { SubCardStyles } from "../../styled/HomePageStyled";

const SubCard = ({ mentions, time_stamp, body }: any) => {
  return (
    <SubCardStyles>
      <div className="flex flex-col gap-1 my-auto">
        <a>{mentions}</a>
        <span>{time_stamp}</span>
      </div>
      <p>{body}</p>
    </SubCardStyles>
  );
};

export default SubCard;
