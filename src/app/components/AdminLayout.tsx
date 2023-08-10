import React, { HtmlHTMLAttributes } from "react";
import { CssBaseline, Container } from "@mui/material";
import { CoreLayoutProps } from "react-admin";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "react-admin";
import Header from "./AdminHeader";

const Layout = ({ children }: LayoutProps) => (
  <>
    <CssBaseline />
    <Header />
    <Container sx={{ maxWidth: { xl: 1280 }, marginX: 0 }}>
      <main id="main-content">
        {/* @ts-ignore */}
        <ErrorBoundary FallbackComponent={Error}>{children}</ErrorBoundary>
      </main>
    </Container>
  </>
);

export interface LayoutProps
  extends CoreLayoutProps,
    Omit<HtmlHTMLAttributes<HTMLDivElement>, "title"> {}

export default Layout;
