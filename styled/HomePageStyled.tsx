import styled from "styled-components";

export const LogoTextStyle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  font-family: "Poppins";
`;

export const LogoMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  align-items: center;
  & p {
    font-size: 0.9375vw;
    font-weight: bold;
    color: #30ca4c;
    background: rgba(48, 202, 76, 0.13);
    padding: 0.46875vw 0.88542vw 0.41667vw 0.83333vw;
    border-radius: 289.32292vw;
  }
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #30ca4c;
  border-radius: 289.32292vw;
  height: 2.70833vw;
  & button {
    padding: 0 1.66667vw 0 1.25vw;
    font-size: 0.83333vw;
    font-weight: bold;
    color: #fff;
  }
`;

export const SubscriptionTextWrapper = styled.div`
  background: url("/subscribelink_bg.svg");
  background-size: cover;
  width: 13.22917vw;
  height: 2.70833vw;
  padding: 0 0.83333vw;
  border-radius: 289.32292vw;
  display: flex;
  align-items: start;
  gap: 10px;
  align-items: center;
  h4 {
    color: #fff;
    margin-bottom: 0.10417vw;
    font-size: 0.83333vw;
    font-weight: bold;
    line-height: 1;
  }
  p {
    color: #30ca4c;
    font-size: 0.83333vw;
    font-weight: bold;
    display: inline-block;
    span {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.83333vw;
      font-weight: bold;
      display: inline-block;
    }
  }
`;

export const SearchInputStyle = styled.input`
  max-width: 30%;
  height: 2.39583vw;
  border: 2px solid rgba(33, 37, 49, 0.1);
  border-radius: 1.45833vw;
  width: 100%;
  display: block;
  padding-left: 3.125vw;
  background-color: #fff;
  background-image: url(../Search.svg);
  background-position: left 1.09375vw center;
  background-repeat: no-repeat;
  background-size: 1.14583vw;
  font-size: 0.83333vw;
  &:focus {
    border: 2px solid #30ca4c;
    outline: none;
  }
`;

export const NewMentionBtnStyle = styled.button`
  width: 100%;
  min-width: fit-content;
  padding: 0.78125vw 1.66667vw;
  font-size: 0.83333vw;
  margin-right: 0.41667vw;
  border: 0.10417vw solid #e1e4e7;
  border-radius: 555px;
  font-style: normal;
  font-weight: 700;
  font-size: 0.83333vw;
  line-height: 100%;
  display: block;
  color: rgba(33, 37, 49, 0.4);
  transition: all 0.3s ease;
  &:hover {
    color: black;
    border: 0.10417vw solid #30ca4c;
  }
`;

export const AllMentionsBtnStyle = styled.button`
  width: 100%;
  min-width: fit-content;
  padding: 0.78125vw 1.66667vw;
  font-size: 0.83333vw;
  margin-right: 0.41667vw;
  border: 0.10417vw solid #30ca4c;
  background: #30ca4c;
  border-radius: 555px;
  font-style: normal;
  font-weight: 700;
  font-size: 0.83333vw;
  line-height: 100%;
  display: block;
  color: #ffff;
  transition: all 0.3s ease;
`;

export const TimeBtn = styled.button<{ isSelected?: boolean }>`
  font-size: 0.83333vw;
  line-height: 1;
  height: unset;
  padding: 0.625vw 0.52083vw;
  font-weight: 600;
  border-radius: 10px;
  background: ${(props) => (props.isSelected ? "#30ca4c" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "black")};
  &:hover {
    color: #fff;
    background: #30ca4c;
  }
`;

export const TokenTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & h1 {
    font-size: 1.35417vw;
    color: #212531;
    font-weight: bold;
    display: block;
    margin-right: 0.625vw;
  }
  & p {
    font-size: 0.9375vw;
    margin-bottom: 0.46875vw;
    font-weight: bold;
    color: rgba(33, 37, 49, 0.3);
  }
`;

export const SubCardStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: #f3f5f8;
  padding: 10px;
  border-radius: 20px;
  a {
    display: block;
    line-height: 100%;
    color: #0085ff;
    font-size: 0.72917vw;
    font-weight: bold;
  }
  span {
    font-size: 0.72917vw;
    color: rgba(33, 37, 49, 0.5);
  }
  p {
  }
`;

export const MentionDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding: 40px;
  scrollbar-color: #30ca4c #eaecf0;
  scrollbar-width: thin;
`;

export const FooterContainer = styled.div`
  background: #212531;
  height: 10vh;
  padding-left: 8rem;
  padding-right: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #ffff;
  margin-top: 35px;
`;

export const SocialIconWrapper = styled.div`
  border: 2px solid #30ca4c;
  padding: 10px;
  border-radius: 100%;
`;
