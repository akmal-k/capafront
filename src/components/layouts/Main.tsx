import React from "react";
import styled from "styled-components";
import HeaderLayout from "./HeaderLayout";

// type
export interface MainLayoutProps {}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <HeaderLayout />
        {props.children}
      </Wrapper>
    </OuterWrapper>
  );
};
export default MainLayout;

const OuterWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
`;
