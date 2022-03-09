import React from "react";
import styled from "styled-components";

// types
export interface TitleProps {}

const HomePageTitle: React.FC<TitleProps> = ({ children }) => {
  return (
    <Wrapper>
      <Title>들어온 요청</Title>
      <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
    </Wrapper>
  );
};
export default HomePageTitle;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.text`
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
  color: rgba(50, 61, 69, 1);
`;
const SubTitle = styled.text`
  font-size: 16px;
  line-height: 24px;
  color: rgba(50, 61, 69, 1);
`;
