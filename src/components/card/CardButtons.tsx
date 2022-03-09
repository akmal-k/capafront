import { Button, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

//types
export interface CardButtonsType {}
const CardButtons: React.FC<CardButtonsType> = (props) => {
  return (
    <Wrapper>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" size="small">
          요청 내역 보기
        </Button>
        <Button variant="outlined" size="small">
          채팅하기
        </Button>
      </Stack>
    </Wrapper>
  );
};
export default CardButtons;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
