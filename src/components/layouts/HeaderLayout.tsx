import React from "react";
import styled from "styled-components";
// assets
import Logo from "../../assets/logo.png";
import Vector from "../../assets/white_house.png";
import Menu from "./Menu";

// types
export interface HeaderLayoutProps {}
const HeaderLayout: React.FunctionComponent<HeaderLayoutProps> = (props) => {
  return (
    <Wrapper>
      <Menu />
      <ImageWrapper>
        <Image src={Logo} />
      </ImageWrapper>
      <ExtraMenu>
        <VectorImg src={Vector} />
        <Text logout={false}>A 가공 업체</Text>
        <Divide />
        <Text logout={true}>로그아웃</Text>
      </ExtraMenu>
    </Wrapper>
  );
};

export default HeaderLayout;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  top: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 70px;
  z-index: 1000;
  background-color: rgba(21, 101, 192, 1);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
const ImageWrapper = styled.div`
  margin-left: 40px;
  flex: 1;
  @media (max-width: 768px) {
    margin-left: 16px;
  }
`;
const Image = styled.img`
  width: 153px;
  height: 20px;
  @media (max-width: 360px) {
    width: 91.8px;
    height: 12px;
  }
`;

const ExtraMenu = styled.div`
  display: flex;
  flex: 1;
  margin-right: 40px;
  align-items: center;
  justify-content: flex-end;

  white-space: nowrap;
  @media (max-width: 768px) {
    display: none;
  }
`;
const VectorImg = styled.img`
  width: 16.67px;
  height: 15px;
`;
const Text = styled.text<{ logout: boolean }>`
  font-size: 14px;
  margin-left: ${(props) => (props.logout ? "32px" : "8px")};
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
`;
const Divide = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(255, 255, 255, 1);
  margin-left: 32px;
`;
