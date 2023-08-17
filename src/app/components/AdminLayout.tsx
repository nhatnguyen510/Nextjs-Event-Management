import React, { HtmlHTMLAttributes, useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import {
  AppBar,
  CoreLayoutProps,
  Layout,
  Link,
  Logout,
  Menu,
  UserMenu,
} from "react-admin";
import { Event, PeopleAlt, DashboardCustomize } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import { useLocation, matchPath } from "react-router-dom";

const AdminMenu: React.FC = () => {
  const location = useLocation();

  let value = "";
  if (!!matchPath("/events/*", location.pathname)) {
    value = "events";
  } else if (!!matchPath("/agencies/*", location.pathname)) {
    value = "agencies";
  }

  return (
    <Menu>
      <Menu.DashboardItem
        leftIcon={
          <DashboardCustomize
            style={{
              color: value === "" ? "#fff" : "#000",
            }}
          />
        }
      />
      <Menu.Item
        to="/events"
        primaryText="Sự kiện"
        leftIcon={
          <Event
            style={{
              color: value === "events" ? "#fff" : "#000",
            }}
          />
        }
      />
      <Menu.Item
        to="/agencies"
        primaryText="Đơn vị"
        leftIcon={
          <PeopleAlt
            style={{
              color: value === "agencies" ? "#fff" : "#000",
            }}
          />
        }
      />
    </Menu>
  );
};
const MyAppBar: React.FC = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#FFF",
        color: "#000",
        fontWeight: "bold",
        fontSize: "1.5em",
      }}
    >
      <Box flex={1} display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Link to="/">
            <Box
              component="img"
              sx={{
                marginRight: "1em",
                height: 30,
                display: "flex",
                alignItems: "center",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MobiFone_logo.svg/2560px-MobiFone_logo.svg.png"
              alt="Mobifone Logo"
            />
          </Link>
        </Box>
        <Box display="flex">
          <UserMenu>
            <Logout
              onClick={async () => {
                await signOut({
                  callbackUrl: "/login",
                });
              }}
            />
          </UserMenu>
        </Box>
      </Box>
    </AppBar>
  );
};

const AdminLayout: React.FC = ({ children }: LayoutProps) => {
  return (
    <>
      <Layout
        menu={AdminMenu}
        appBar={MyAppBar}
        sx={{
          "& .MuiDrawer-root": {
            backgroundColor: "#FFF",
            borderRight: "1px solid #EEE",
            height: "inherit",
          },

          "& .RaLayout-content": {
            paddingLeft: "26px",
          },

          "& .RaMenuItemLink-active, & .RaMenuItemLink-active:hover": {
            backgroundColor: "#5e89ff",
            color: "#fff !important",
            fontWeight: "bold",
            borderRadius: "0px 5px 5px 0px",
          },
        }}
      >
        {children}
      </Layout>
    </>
  );
};

export interface LayoutProps
  extends CoreLayoutProps,
    Omit<HtmlHTMLAttributes<HTMLDivElement>, "title"> {}

export default AdminLayout;
