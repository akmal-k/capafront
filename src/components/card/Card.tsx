import React from "react";
import styled from "styled-components";
import CardButtons from "./CardButtons";
import CardDetails from "./CardDetails";
import ExtraDetails from "./ExtraDetails";

export interface CardType {
  id?: number;
  title?: string;
  client?: string;
  due?: string;
  count?: number;
  amount?: number;
  method?: Array<string>;
  material?: Array<string>;
  status?: string;
  docs?: number;
}
const Card: React.FC<CardType> = (props) => {
  return (
    <Wrapper>
      <InnerWrapper key={props.id}>
        <CardDetails
          title={props.title}
          client={props.client}
          due={props.due}
          status={props.status}
        />
        <ExtraDetails
          count={props.count}
          amount={props.amount}
          method={props.method}
          materials={props.material}
          docs={props.docs}
        />
        <CardButtons />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;
  width: 366px;
  height: 356px;
  margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  flex-direction: column;
  :hover {
    border: 2px solid rgba(33, 150, 243, 1);
  }
  @media (max-width: 1070px) {
    margin-right: unset;
  }
  @media (max-width: 780px) {
    width: 320px;
    height: 344px;
    margin-right: unset;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 24px;
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 24px;
`;
