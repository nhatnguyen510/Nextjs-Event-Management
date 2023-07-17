"use client";

import { Layout, theme } from "antd";

const { Content } = Layout;

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Content className="px-24 flex flex-col ">
        <div
          style={{ background: colorBgContainer }}
          className="p-12 min-h-[380px] max-w-5xl flex flex-col justify-between"
        >
          {children}
        </div>
      </Content>
    </>
  );
}
