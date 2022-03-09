import React from "react";
import styled from "styled-components";

export interface ExtraDetailsProps {
  count?: number;
  amount?: number;
  method?: Array<string>;
  materials?: Array<string>;
  docs?: number;
}

const ExtraDetails: React.FC<ExtraDetailsProps> = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <DetailsTitle>도면개수</DetailsTitle>
        <DetailsTitle>총 수량</DetailsTitle>
        <DetailsTitle>가공방식</DetailsTitle>
        <DetailsTitle>재료</DetailsTitle>
      </TitleWrapper>
      <CountWrapper>
        <Counts>{`${
          props.count !== undefined ? props.count : props.docs
        }개`}</Counts>
        <Counts>{`${props.amount}개`}</Counts>
        <Counts>{`${props.method}`}</Counts>
        <Counts>{`${props.materials}`}</Counts>
      </CountWrapper>
    </Wrapper>
  );
};

export default ExtraDetails;

const Wrapper = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
  flex-direction: row;
`;
const TitleWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 8px;
`;
const CountWrapper = styled.div`
  margin-top: 8px;
  flex-direction: column;
  display: flex;
  margin-left: 32px;
`;
const DetailsTitle = styled.text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
  color: rgba(50, 61, 69, 1);
`;
const Counts = styled.text`
  width: 100%;
  color: rgba(50, 61, 69, 1);
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`;
