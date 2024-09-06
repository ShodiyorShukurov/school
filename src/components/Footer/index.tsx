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
        background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
        padding: "40px 20px",
      }}
    >
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#1A5F7A" }}>
            Biz bilan bog'laning
          </Title>
          <Text style={{ display: "block", marginBottom: "8px" }}>
            Telefon: +998 71 123 45 67
          </Text>
          <Text>Email: info@mehrlimaktab.uz</Text>
        </Col>
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#1A5F7A" }}>
            Ijtimoiy tarmoqlar
          </Title>
          <div>
            <FacebookOutlined
              style={{
                fontSize: "24px",
                margin: "0 10px",
                cursor: "pointer",
                color: "#3b5998",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A5F7A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3b5998")}
            />
            <TwitterOutlined
              style={{
                fontSize: "24px",
                margin: "0 10px",
                cursor: "pointer",
                color: "#00aced",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A5F7A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#00aced")}
            />
            <InstagramOutlined
              style={{
                fontSize: "24px",
                margin: "0 10px",
                cursor: "pointer",
                color: "#e4405f",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A5F7A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e4405f")}
            />
            <YoutubeOutlined
              style={{
                fontSize: "24px",
                margin: "0 10px",
                cursor: "pointer",
                color: "#ff0000",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A5F7A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ff0000")}
            />
          </div>
        </Col>
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#1A5F7A" }}>
            Manzilimiz
          </Title>
          <Text>Toshkent sh., Amir Temur ko'chasi, 14-uy</Text>
        </Col>
      </Row>
      <Divider style={{ borderColor: "#ddd" }} />
      <Text style={{ color: "#888" }}>
        © 2024 Mehrli Maktab. Barcha huquqlar himoyalangan.
      </Text>
    </Footer>
  );
};

export default FooterPage;
