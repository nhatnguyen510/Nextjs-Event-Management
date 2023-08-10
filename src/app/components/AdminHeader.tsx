import React, { useEffect, useState } from "react";
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UserMenu, Logout, LoadingIndicator, TabProps } from "react-admin";
import { signOut } from "next-auth/react";
import { styled } from "@mui/material/styles";
import { useLocation, matchPath } from "react-router-dom";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: string;
}

interface StyledTabProps {
  label: string;
  value: string;
  component: any;
  to: string;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.5)",
  "&.Mui-selected": {
    color: "#000",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

const Header: React.FC = () => {
  const location = useLocation();

  let value = "/";
  if (!!matchPath("/events/*", location.pathname)) {
    value = "/events";
  } else if (!!matchPath("/attendees/*", location.pathname)) {
    value = "/attendees";
  } else if (!!matchPath("/agencies/*", location.pathname)) {
    value = "/agencies";
  }

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
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
              <StyledTabs aria-label="Navigation Tabs" value={value}>
                <StyledTab
                  label={"Dashboard"}
                  component={Link}
                  to="/"
                  value="/"
                />
                <StyledTab
                  label={"Events"}
                  component={Link}
                  to="/events"
                  value="/events"
                />
                <StyledTab
                  label={"Agencies"}
                  component={Link}
                  to="/agencies"
                  value="/agencies"
                />
                {/* <StyledTab
                  label={"Attendees"}
                  component={Link}
                  to="/attendees"
                  value="/attendees"
                /> */}
              </StyledTabs>
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
