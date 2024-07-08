import React from "react";
import RightIcon from "../../public/rightIcon";
import { ArrowBtnStyle, NumberBtnStyle } from "../../styled/HomePageStyled";

function Pagination() {
  return (
    <div className="flex flex-row justify-center gap-10">
      <NumberBtnStyle>1</NumberBtnStyle>
      <NumberBtnStyle>2</NumberBtnStyle>
      <ArrowBtnStyle>
        <RightIcon />
      </ArrowBtnStyle>
    </div>
  );
}

export default Pagination;
