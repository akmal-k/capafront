import { Refresh } from "@mui/icons-material";
import { Button, FormControlLabel, Switch } from "@mui/material";
import React from "react";
// redux
import { useDispatch } from "react-redux";
import styled from "styled-components";
// slice
import { getData } from "../slice/DataSlice";
//components
import Filters from "./Filters";

// types
export interface ControllersTypes {}
const Controllers: React.FC<ControllersTypes> = () => {
  const [method, setFilterMethod] = React.useState<string[]>([]);
  const [material, setFilterMaterial] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState<string>("");
  const dispatch = useDispatch();
  const handleChange = (
    method: Array<string>,
    material: Array<string>,
    status: string
  ) => {
    dispatch(getData({ method, material, status }));
  };
  const ResetFilters = () => {
    setFilterMethod([]);
    setFilterMaterial([]);
    handleChange([], [], "");
  };
  return (
    <Wrapper>
      <FiltersWrapper>
        <Filters
          title={"가공방식"}
          options={["밀링", "선반"]}
          filter={method}
          setFilter={(value: Array<string>) => {
            setFilterMethod(value);
            handleChange(value, material, status);
          }}
        />
        <Filters
          title={"재료"}
          options={["알루미늄", "탄소강", "구리", "합금강", "강철"]}
          filter={material}
          setFilter={(value: Array<string>) => {
            setFilterMaterial(value);
            handleChange(method, value, status);
          }}
        />
        {(method.length > 0 || material.length > 0) && (
          <Button style={{ marginLeft: "16.01px" }} onClick={ResetFilters}>
            <Refresh sx={{ xs: { width: "10.99px", height: "10px" } }} />

            <RefreshText>필터링 리셋</RefreshText>
          </Button>
        )}
      </FiltersWrapper>
      <FormControlLabel
        control={
          <Switch
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.checked) {
                setStatus("상담중");
                handleChange(method, material, "상담중");
              } else {
                setStatus("");
                handleChange(method, material, "");
              }
            }}
          />
        }
        label="상담 중인 요청만 보기"
      />
    </Wrapper>
  );
};
export default Controllers;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
  margin-top: 32px;
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: unset;
  }
`;
const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 780px) {
    justify-content: flex-start;
    margin-bottom: 20px;
  }
`;
const RefreshText = styled.text`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 12px;
`;
