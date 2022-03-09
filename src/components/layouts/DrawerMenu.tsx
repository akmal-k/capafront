import { Divider, Drawer } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
// assets
import Logo from "../../assets/colorlogo.png";
import House from "../../assets/Vector.png";

// types
export interface MenuItem {}

const DrawerMenu: React.FunctionComponent<MenuItem> = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <MenuBar
      onClick={() => {
        setOpenDrawer(!openDrawer);
      }}
    >
      <MenuBarItem />
      <MenuBarItem />
      <MenuBarItem />
      <Drawer
        onClose={handleDrawerOpen}
        sx={{
          width: "50%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "50%",
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        open={openDrawer}
      >
        <DrawerHeader>
          <Image src={Logo} />
        </DrawerHeader>
        <Divider />
        <MenuItem>
          <OneItem>
            <VectorImg src={House} />
            <Text logout={false}>파트너정밀가공</Text>
          </OneItem>
          <OneItem>
            <Text logout={true}>로그아웃</Text>
          </OneItem>
        </MenuItem>
      </Drawer>
    </MenuBar>
  );
};

export default DrawerMenu;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 44px;
  z-index: 9999;
`;
const Image = styled.img`
  height: 12px;
  width: 91.52px;
`;
const VectorImg = styled.img`
  width: 15px;
  height: 15px;
`;
const Text = styled.text<{ logout: boolean }>`
  font-size: 14px;
  margin-left: ${(props) => !props.logout && "8px"};
  margin-bottom: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  color: rgba(50, 61, 69, 1);
`;
const MenuItem = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 36px;
  padding-left: 32px;
`;
const OneItem = styled.div`
  width: 100%;
  flex-direction: row;
  margin-bottom: 24px;
`;

const MenuBar = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    flex-direction: column;
    margin-left: 20px;
    cursor: pointer;
  }
`;

const MenuBarItem = styled.div`
  width: 18px;
  display: flex;
  height: 2px;
  background: white;
  margin-bottom: 3px;
`;
