import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

interface UserInfoProps {
  name: string;
  email: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => (
  <Card>
    <Meta
      avatar={<Avatar icon={<UserOutlined />} />}
      title={name}
      description={email}
    />
  </Card>
);
