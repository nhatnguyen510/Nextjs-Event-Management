"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Breadcrumb, Col, Layout, Menu, Row, theme } from "antd";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import MobifoneLogo from "@/public/mobifone_logo.png";
import type { MenuProps } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { UserInfo } from "./components/UserInfo";
import { EventList } from "./components/EventList";
import { EventDetail } from "./components/EventDetail";

const { Header, Content, Footer } = Layout;

interface HomeProps {
  //
}

const Home: React.FC<HomeProps> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { data: session, status } = useSession();

  const menuItems: MenuProps["items"] = useMemo(() => {
    return [
      {
        key: "home",
        label: "Home",
      },
      {
        key: "events",
        label: "Events",
      },
      {
        key: "user-info",
        label: `Welcome, ${session?.user?.name || ""}!`,
        children: [
          {
            label: "Settings",
            key: "settings",
            icon: <SettingOutlined />,
          },
          {
            label: "Logout",
            key: "logout",
            icon: <LogoutOutlined />,
          },
        ],
      },
    ];
  }, [session?.user?.name]);

  const breadcrumbItems: Partial<
    BreadcrumbItemType & BreadcrumbSeparatorType
  >[] = [{ breadcrumbName: "Home", key: "home", title: "Home" }];

  const onMenuClick: MenuProps["onClick"] = async (e) => {
    // check case Logout
    if (e.key === "logout") {
      // logout
      await signOut({
        callbackUrl: "/login",
      });
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
        }}
      >
        <Image src={MobifoneLogo} alt="logo" width={200} height={50} />
        <Menu
          theme="light"
          mode="horizontal"
          items={menuItems}
          disabledOverflow={true}
          onClick={onMenuClick}
        />
      </Header>
      <Content className="px-12 flex flex-col ">
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={breadcrumbItems}
        ></Breadcrumb>
        <div
          style={{ background: colorBgContainer }}
          className="p-6 min-h-[380px] flex flex-col justify-between"
        >
          <EventList />
        </div>
      </Content>
      <Footer
        style={{
          background: "linear-gradient(to right, #434343 0%, black 100%)",
          color: "#fff",
        }}
        className="md:px-12 px-6"
      >
        <Row
          gutter={[24, 24]}
          style={{
            fontSize: "16px",
          }}
        >
          <Col span={24}>
            <Image src={MobifoneLogo} alt="logo" width={200} height={50} />
          </Col>
          <Col span={8}>
            <p>Event App ©2023 Created by Mobifone</p>
            <p>
              Address: 236a Phan Trung Street, Tan Tien Ward, Bien Hoa City,
              Dong Nai Province
            </p>
            <p>Email: c8_khcn@mobifone.vn</p>
            <p>Hotline: 18001090</p>
          </Col>
          <Col span={8}>
            <p>
              <Link href="/">Home</Link>
            </p>
            <p>
              <Link href="/">Introduction</Link>
            </p>
            <p>
              <Link href="/">Events</Link>
            </p>
            <p>
              <Link href="/">Promotion</Link>
            </p>
            <p>
              <Link href="/">News</Link>
            </p>
          </Col>
          <Col span={8}>
            <p>Follow us!</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Instagram</p>
            <p>Zalo</p>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default Home;
