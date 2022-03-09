import React from "react";
// redux
import { useSelector } from "react-redux";
import styled from "styled-components";
// components
import Card from "../components/card/Card";
import Controllers from "../components/Controllers";
import HomePageTitle from "../components/HomePageTitle";
import MainLayout from "../components/layouts/Main";
// types
import { DataType } from "../components/types";

export interface homeProps {}

const Home: React.FunctionComponent<homeProps> = (props) => {
  const { productData } = useSelector((state: any) => state.product);

  return (
    <MainLayout>
      <Wrapper>
        <InnerWrapper>
          <HomePageTitle />
          <Controllers />
          <CardWrapper>
            {productData && productData.length ? (
              productData.map((item: DataType, index: number) => (
                <Card {...item} key={index} />
              ))
            ) : (
              <NoDataWrapper>
                <NoDataText>조건에 맞는 견적 요청이 없습니다.</NoDataText>
              </NoDataWrapper>
            )}
          </CardWrapper>
        </InnerWrapper>
      </Wrapper>
    </MainLayout>
  );
};
export default Home;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 70px;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const InnerWrapper = styled.div`
  margin-top: 40px;
  z-index: 2;
  margin-left: 155px;
  margin-right: 155px;
  width: 100%;
  max-width: 1146.01px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 320px;
    margin-left: 100px;
    margin-right: 100px;
  }
  @media (max-width: 390px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 390px) {
    justify-content: center;
  }
`;
const NoDataWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(194, 194, 194, 1);
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const NoDataText = styled.text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400px;
  color: rgba(147, 159, 165, 1);
`;
