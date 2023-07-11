"use client";

import React from "react";
import Image from "next/image";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import MobifoneLogo from "@/public/mobifone_logo.png";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems: ItemType<MenuItemType>[] = [
    {
      key: "1",
      label: "nav 1",
    },
    {
      key: "2",
      label: "nav 2",
    },
    {
      key: "3",
      label: "nav 3",
    },
  ];

  const breadcrumbItems: Partial<
    BreadcrumbItemType & BreadcrumbSeparatorType
  >[] = [
    { breadcrumbName: "Home", key: "home", title: "Home" },
    { breadcrumbName: "List", key: "list", title: "List" },
    { breadcrumbName: "App", key: "app", title: "App" },
  ];

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          className="demo-logo"
          src={MobifoneLogo}
          alt="logo"
          width={200}
        />
        <Menu theme="dark" mode="horizontal" items={menuItems} />
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={breadcrumbItems}
        ></Breadcrumb>
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
