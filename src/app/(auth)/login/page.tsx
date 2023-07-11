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

    await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/",
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
            Login
          </Typography.Title>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Input your Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Input your Password" />
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
              <Link href="/forgot-password">Forgot your password?</Link>
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
              Login
            </Button>
          </Form.Item>

          <Divider>
            <Typography.Text type="secondary">Or</Typography.Text>
          </Divider>

          <Form.Item
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography.Text type="secondary">
              Don't have an account?
            </Typography.Text>
            <Link href="/register"> Register</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
