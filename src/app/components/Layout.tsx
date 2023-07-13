"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Layout } from "antd";

interface CustomLayoutProps {
  children: React.ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </Layout>
    </>
  );
};

export default CustomLayout;
