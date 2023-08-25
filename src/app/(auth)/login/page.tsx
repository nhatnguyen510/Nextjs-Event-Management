"use client";

import React, { useState } from "react";
import Image from "next/image";
import MobifoneLogo from "@/public/mobifone_logo.png";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Divider,
} from "antd";
import { signIn } from "next-auth/react";
import Link from "next/link";
interface loginProps {}

const Login: React.FC<loginProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    setIsLoading(true);

    const res = await signIn("credentials", {
      username: values.username,
      password: values.password,
      callbackUrl: "/dashboard",
    });

    setIsLoading(false);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Col
        xs={20}
        sm={16}
        md={12}
        lg={10}
        xl={8}
        span={8}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 20px",
          gap: 20,
          borderRadius: 5,
          boxShadow: "0 0 10px #ccc",
          backgroundColor: "#fff",
        }}
      >
        <Image alt="logo" src={MobifoneLogo} width={200} height={40} />

        <Typography.Title
          level={3}
          className="text-center"
          style={{
            color: "#0967c2",
          }}
        >
          Hệ thống quản lý sự kiện
        </Typography.Title>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{
            minWidth: 300,
            marginTop: 20,
          }}
          size="large"
        >
          <Typography.Title level={3} className="text-center">
            Đăng nhập
          </Typography.Title>

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập của bạn!",
              },
            ]}
          >
            <Input placeholder="Tên đăng nhập" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu của bạn!" },
            ]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Row justify="space-between">
            <Col span={12}>
              <Form.Item
                name="remember"
                valuePropName="checked"
                style={{
                  marginBottom: 0,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col
              span={12}
              style={{
                textAlign: "right",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link href="/">Quên mật khẩu?</Link>
            </Col>
          </Row>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{
                width: "100%",
                backgroundColor: "#0967c2",
              }}
              loading={isLoading}
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <Divider>
            <Typography.Text type="secondary">Hoặc</Typography.Text>
          </Divider>

          <Form.Item
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography.Text type="secondary">
              Bạn chưa có tài khoản?
            </Typography.Text>
            <Link href="/register">Đăng ký</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
