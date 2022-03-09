import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

export interface CardDetailsType {
  title?: string;
  client?: string;
  due?: string;
  status?: string;
}
const CardDetails: React.FC<CardDetailsType> = (props) => {
  return (
    <>
      <TitleWrapper>
        <Title key={props.title}>{props.title}</Title>
        {props.status === "상담중" && (
          <ConsultingTextWrapper>
            <ConsultingText>상담중</ConsultingText>
          </ConsultingTextWrapper>
        )}
      </TitleWrapper>
      <Subtitle>{props.client}</Subtitle>
      <Date>{`${props.due}까지 남기`}</Date>
      <Divider />
    </>
  );
};

export default CardDetails;
const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  font-style: normal;
`;
const ConsultingTextWrapper = styled.div`
  border: 1px solid rgba(255, 160, 0, 1);
  border-radius: 12px;
  width: 50px;
  height: 24px;
  text-align: center;
`;
const ConsultingText = styled.text`
  font-size: 12px;
  line-height: 20px;
  font-style: normal;
  font-weight: 500;
  color: rgba(255, 160, 0, 1);
`;
const Subtitle = styled.text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  font-style: normal;
  color: rgba(50, 61, 69, 1);
`;
const Date = styled(Typography)`
  margin-top: 24px;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  font-style: normal;
  color: rgba(147, 159, 165, 1);
`;
const Divider = styled.div`
  margin-top: 16px;
  width: 334px;
  border: 1px solid rgba(229, 229, 229, 1);
  @media (max-width: 780px) {
    width: 282px;
  }
`;
