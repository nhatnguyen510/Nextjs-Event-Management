"use client";

import React, { useMemo } from "react";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import MobifoneLogo from "@/public/mobifone_logo.png";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "antd";
import type { MenuProps } from "antd/es/menu";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const menuItems: MenuProps["items"] = useMemo(() => {
    return [
      {
        key: "home",
        label: "Home",
        slug: "/",
      },
      {
        key: "events",
        label: "Events",
        slug: "/",
      },
      {
        key: "user-info",
        label: `Welcome, ${session?.user?.name || ""}!`,
        children: [
          {
            key: "settings",
            label: "Settings",
            slug: "/settings",
            icon: <SettingOutlined />,
          },
          {
            key: "logout",
            label: "Logout",
            slug: "/logout",
            icon: <LogoutOutlined />,
          },
        ],
      },
    ];
  }, [session?.user?.name]);

  const onMenuClick: MenuProps["onClick"] = async (e) => {
    // check case Logout
    switch (e.key) {
      case "logout":
        await signOut({
          callbackUrl: "/login",
        });
        break;
      default:
        router.push("/");
    }
  };
  return (
    <>
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
    </>
  );
};

export default Navbar;
