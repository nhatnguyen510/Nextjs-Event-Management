"use client";

import React, { useState } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
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
    <Content className="px-12 flex flex-col ">
      <div
        style={{ background: colorBgContainer }}
        className="p-6 min-h-[380px] flex flex-col justify-between"
      >
        <EventList />
      </div>
    </Content>
  );
};

export default Home;
