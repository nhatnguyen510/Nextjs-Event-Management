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
    const baseItems = [
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

    // Check if user is admin and add the "Dashboard" menu item
    if (session?.user?.name === "admin") {
      baseItems.splice(1, 0, {
        key: "dashboard",
        label: "Dashboard",
        slug: "/dashboard",
      });
    }

    return baseItems;
  }, [session?.user?.name, session?.user?.name]);

  const onMenuClick: MenuProps["onClick"] = async (e) => {
    // check case Logout
    switch (e.key) {
      case "dashboard":
        router.push("/dashboard");
        break;

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
