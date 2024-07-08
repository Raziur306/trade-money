import React from "react";
import {
  MentionDataWrapper,
  TokenTextWrapper,
} from "../../styled/HomePageStyled";
import SubCard from "./SubCard";

const MainCard = ({ tokenName, mention, data }: any) => {
  return (
    <div className="flex flex-row gap-10 max-h-[30vh]">
      <div className="min-w-[200px]">
        <TokenTextWrapper>
          <h1>{tokenName}</h1>
          <p>{mention}</p>
        </TokenTextWrapper>
      </div>
      <MentionDataWrapper>
        {data.map((item: any, index: number) => {
          const { mentions, time_stamp, body } = item;
          return (
            <SubCard
              key={index}
              mentions={mentions}
              time_stamp={time_stamp}
              body={body}
            />
          );
        })}
      </MentionDataWrapper>
    </div>
  );
};

export default MainCard;
