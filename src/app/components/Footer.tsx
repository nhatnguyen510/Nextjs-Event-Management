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
            <p>Event App ©2023 - Mobifone</p>
            <p>
              Địa chỉ: 236a Phan Trung, P.Tân Tiến, TP.Biên Hòa, Tỉnh Đồng Nai
            </p>
            <p>Email: c8_khcn@mobifone.vn</p>
            <p>Hotline: 18001090</p>
          </Col>
          <Col span={8}>
            <p>
              <Link href="/">Trang chủ</Link>
            </p>
            <p>
              <Link href="/">Giới thiệu</Link>
            </p>
            <p>
              <Link href="/">Sự kiện</Link>
            </p>
            <p>
              <Link href="/">Quảng cáo</Link>
            </p>
            <p>
              <Link href="/">Tin tức</Link>
            </p>
          </Col>
          <Col span={8}>
            <p>
              <Link href="/">Theo dõi chúng tôi!</Link>
            </p>
            <p>
              <Link href="/">Facebook</Link>
            </p>
            <p>
              <Link href="/">Youtube</Link>
            </p>
            <p>
              <Link href="/">Instagram</Link>
            </p>
            <p>
              <Link href="/">Zalo</Link>
            </p>
          </Col>
        </Row>
      </Footer>
    </>
  );
};

export default CustomFooter;
