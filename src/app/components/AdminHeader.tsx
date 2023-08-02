import React from "react";
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UserMenu, Logout, LoadingIndicator } from "react-admin";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Box flex={1} display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
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
            </Box>
            <Box>
              <Tabs
                aria-label="Navigation Tabs"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab label={"Dashboard"} component={Link} to="/" value="/" />
                <Tab
                  label={"Events"}
                  component={Link}
                  to="/events"
                  value="events"
                />
                <Tab
                  label={"Attendees"}
                  component={Link}
                  to="/attendees"
                  value="attendees"
                />
              </Tabs>
            </Box>
            <Box display="flex" alignItems="center">
              <LoadingIndicator
                sx={{
                  "& .RaLoadingIndicator-loader": {
                    marginTop: 2,
                  },
                }}
              />
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
