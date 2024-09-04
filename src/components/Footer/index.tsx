// src/components/Footer.tsx

import React from "react";
import { Layout, Typography, Row, Col, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterPage: React.FC = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#f0f2f5",
        padding: "40px 20px",
      }}
    >
      <Row gutter={16}>
        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <Title level={4}>Biz bilan bog'laning</Title>
          <Text>Telefon: +998 71 123 45 67</Text>
          <br />
          <Text>Email: info@mehrlimaktab.uz</Text>
        </Col>
        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <Title level={4}>Ijtimoiy tarmoqlar</Title>
          <FacebookOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
          <TwitterOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
          <InstagramOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
          <YoutubeOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
        </Col>
        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <Title level={4}>Manzilimiz</Title>
          <Text>Toshkent sh., Amir Temur ko'chasi, 14-uy</Text>
        </Col>
      </Row>
      <Divider />
      <Text style={{ color: "#888" }}>
        © 2024 Mehrli Maktab. Barcha huquqlar himoyalangan.
      </Text>
    </Footer>
  );
};

export default FooterPage;
