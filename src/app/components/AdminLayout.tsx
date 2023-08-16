import React, { HtmlHTMLAttributes } from "react";
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
import { Event, PeopleAlt } from "@mui/icons-material";
import { signOut } from "next-auth/react";

const AdminLayout = ({ children }: LayoutProps) => (
  <>
    <Layout menu={AdminMenu} appBar={MyAppBar}>
      {children}
    </Layout>
  </>
);

const AdminMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.Item to="/events" primaryText="Events" leftIcon={<Event />} />
    <Menu.Item to="/agencies" primaryText="Agencies" leftIcon={<PeopleAlt />} />
  </Menu>
);

const MyAppBar: React.FC = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#239eff",
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

export interface LayoutProps
  extends CoreLayoutProps,
    Omit<HtmlHTMLAttributes<HTMLDivElement>, "title"> {}

export default AdminLayout;
