import React from "react";
import { Layout, Row, Col } from "antd";
import Image from "next/image";
import MobifoneLogo from "@/public/mobifone_logo.png";
import Link from "next/link";

interface FooterProps {}

const { Footer } = Layout;

const CustomFooter: React.FC<FooterProps> = (props) => {
  return (
    <>
      <Footer
        style={{
          background: "linear-gradient(to right, #434343 0%, black 100%)",
          color: "#fff",
        }}
        className="md:px-12 px-6"
      >
        <Row
          gutter={[24, 24]}
          style={{
            fontSize: "16px",
          }}
        >
          <Col span={24}>
            <Image src={MobifoneLogo} alt="logo" width={200} height={50} />
          </Col>
          <Col span={8}>
            <p>Event App ©2023 Created by Mobifone</p>
            <p>
              Address: 236a Phan Trung Street, Tan Tien Ward, Bien Hoa City,
              Dong Nai Province
            </p>
            <p>Email: c8_khcn@mobifone.vn</p>
            <p>Hotline: 18001090</p>
          </Col>
          <Col span={8}>
            <p>
              <Link href="/">Home</Link>
            </p>
            <p>
              <Link href="/">Introduction</Link>
            </p>
            <p>
              <Link href="/">Events</Link>
            </p>
            <p>
              <Link href="/">Promotion</Link>
            </p>
            <p>
              <Link href="/">News</Link>
            </p>
          </Col>
          <Col span={8}>
            <p>Follow us!</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Instagram</p>
            <p>Zalo</p>
          </Col>
        </Row>
      </Footer>
    </>
  );
};

export default CustomFooter;
