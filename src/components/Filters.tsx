import {
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
// types
export interface FiltersTypes {
  title: string;
  options: Array<string>;
  filter: Array<string>;
  setFilter: Function;
}

const Filters: React.FC<FiltersTypes> = (props) => {
  const handleChange = (event: SelectChangeEvent<typeof props.filter>) => {
    const {
      target: { value },
    } = event;
    props.setFilter(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Wrapper>
      <Select
        multiple
        displayEmpty
        value={props.filter}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Title white={props.filter.length > 0 ? true : false}>
                {props.title}
              </Title>
            );
          }

          return (
            <Title
              white={props.filter.length > 0 ? true : false}
            >{`${props.title}(${selected.length})`}</Title>
          );
        }}
        sx={{
          "&:hover": {
            "&& fieldset": {
              border: "2px solid blue",
            },
          },
          height: "32px",
          backgroundColor: props.filter.length > 0 ? "blue" : "unset",
        }}
      >
        {props.options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={props.filter.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.text<{ white: boolean }>`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  line-height: 14.06px;
  color: ${(props) =>
    props.white ? "rgba(255, 255, 255, 1)" : "rgba(50, 61, 69, 1)"};
`;
