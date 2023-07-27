"use client";

import React from "react";
import { Layout, theme } from "antd";
import { EventList } from "../components/EventList";

const { Content } = Layout;

interface HomeProps {
  //
}

const Home: React.FC<HomeProps> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content className="px-12 py-4 flex flex-col">
      <div
        style={{ background: colorBgContainer }}
        className="min-h-[460px] p-6 flex-1 flex flex-col items-center justify-start"
      >
        <EventList />
      </div>
    </Content>
  );
};

export default Home;
