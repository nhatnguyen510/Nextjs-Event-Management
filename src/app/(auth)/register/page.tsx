"use client";

import React, { useState } from "react";

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

interface registerProps {}

interface registerValuesProps {
  email: string;
  password: string;
  password_confirmation: string;
}

const Register: React.FC<registerProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async ({
    email,
    password,
    password_confirmation,
  }: registerValuesProps) => {
    setIsLoading(true);

    //register logic
    if (email != "nhat0510@gmail.com") {
    }

    setIsLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
          padding: 20,
          borderRadius: 5,
          boxShadow: "0 0 10px #ccc",
          backgroundColor: "#fff",
        }}
      >
        <Typography.Title level={3}>Register</Typography.Title>

        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{
            maxWidth: 400,
            marginTop: 20,
          }}
          size="large"
        >
          <Form.Item
            label="Email"
            labelCol={{ span: 24, offset: 0 }}
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                type: "email",
                message: "The input is not a valid email address!",
              },
            ]}
          >
            <Input placeholder="Input your Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            labelCol={{ span: 24, offset: 0 }}
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password placeholder="Input your Password" />
          </Form.Item>

          <Form.Item
            label="Password Confirmation"
            labelCol={{ span: 24, offset: 0 }}
            name="password_confirmation"
            rules={[
              {
                required: true,
                message: "Please input your password confirmation!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Input your Password Confirmation" />
          </Form.Item>

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
              Register
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
              Already have an account?
            </Typography.Text>
            <Link href="/login"> Login</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
