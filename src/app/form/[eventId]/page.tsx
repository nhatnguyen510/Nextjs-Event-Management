"use client";

import React, { useState } from "react";
import ListOfEvents from "../../../../fake-data.json";
import { toast } from "react-toastify";
import Image from "next/image";
import { Button, Form, Card, Input, Divider, Typography } from "antd";
import {
  SendOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";

interface EventFormProps {
  params: { eventId: string };
}

const EventForm: React.FC<EventFormProps> = ({ params: { eventId } }) => {
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const event = ListOfEvents.find((event) => event.id === eventId);

  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
      md: { span: 8 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
      md: { span: 12 },
      lg: { span: 16 },
    },
  };

  const handlePhoneChange = (e: any) => {
    const { value } = e.target;
    if (value && !phoneRegex.test(value)) {
      setPhoneError("Số điện thoại không hợp lệ");
    } else {
      setPhoneError("");
    }
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    console.log(values);
    const promise = new Promise((resolve, reject) => setTimeout(resolve, 3000));
    toast.promise(
      promise,
      {
        pending: "Đang xử lý...",
        success: "Đăng ký thành công",
        error: "Đăng ký thất bại",
      },
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      }
    );
    setLoading(false);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const phoneRegex = /^(?:\+84|0)(?:\d){9}$/;

  return (
    <>
      <div className="w-[90%] sm:w-3/4 lg:w-7/12">
        <Card
          cover={
            <Image
              src={event?.image as string}
              alt=""
              width={500}
              height={300}
            />
          }
          bordered={false}
        >
          <Card.Meta title={event?.title} description={event?.description} />
          <Divider />
          <Typography.Title level={3} className="text-center">
            FORM ĐĂNG KÝ SỰ KIỆN
          </Typography.Title>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
            className="mt-4 gap-0 sm:gap-2 flex flex-col"
          >
            <Form.Item
              name={["user", "name"]}
              label={<p style={{ fontWeight: "bold" }}>Họ và tên</p>}
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Họ và tên của bạn"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label={<p style={{ fontWeight: "bold" }}>Email</p>}
              rules={[{ type: "email", required: true }]}
            >
              <Input placeholder="Email của bạn" prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              name={["user", "agent"]}
              label={<p style={{ fontWeight: "bold" }}>Đơn vị</p>}
            >
              <Input placeholder="Đơn vị công tác" prefix={<HomeOutlined />} />
            </Form.Item>
            <Form.Item
              name={["user", "phone"]}
              label={<p style={{ fontWeight: "bold" }}>SĐT</p>}
              validateStatus={phoneError ? "error" : ""}
              help={phoneError}
            >
              <Input
                onChange={handlePhoneChange}
                placeholder="Số điện thoại"
                prefix={<PhoneOutlined />}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button
                type="primary"
                htmlType="submit"
                size="middle"
                style={{
                  backgroundColor: "#007FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={<SendOutlined />}
                loading={loading}
              >
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default EventForm;
