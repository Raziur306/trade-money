import React, { useState } from "react";
import {
  AllMentionsBtnStyle,
  NewMentionBtnStyle,
  SearchInputStyle,
  TimeBtn,
} from "../../styled/HomePageStyled";

const sortBy = ["15m", "30m", "1h", "3h", "6h", "12h", "24h", "3d", "7d"];

const UserController = () => {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(6);

  return (
    <div className="flex flex-row justify-between my-14">
      <SearchInputStyle type="text" placeholder="Search by ticket" />

      <div className="flex flex-row gap-28">
        <div className="flex flex-row gap-4">
          <NewMentionBtnStyle>New Mentions</NewMentionBtnStyle>
          <AllMentionsBtnStyle>All Mentions</AllMentionsBtnStyle>
        </div>
        <div className="flex flex-row gap-3">
          {sortBy.map((item, index) => {
            return (
              <TimeBtn isSelected={selectedTimeIndex == index} key={index}>
                {item}
              </TimeBtn>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserController;
