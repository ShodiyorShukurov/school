import React from "react";
import { Layout, Typography, Card, Divider, Row, Col, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const socialLinks = [
  {
    name: "Facebook",
    icon: <FacebookOutlined style={{ fontSize: "40px", color: "#3b5998" }} />,
    url: "https://www.facebook.com/yourpagehttps://www.facebook.com/share/7ahfV9wB9H5t17a3/?mibextid=qi2Omg",
    description:
      "Facebook sahifamizga qo'shiling va yangiliklardan xabardor bo'ling!",
  },
  {
    name: "Twitter",
    icon: <TwitterOutlined style={{ fontSize: "40px", color: "#1da1f2" }} />,
    url: "https://x.com/KunUzNews?t=VbU1y9-Msi5am8HfFjHr3Q&s=09",
    description:
      "Twitter sahifamizga qo'shiling va yangiliklardan xabardor bo'ling!",
  },
  {
    name: "Instagram",
    icon: <InstagramOutlined style={{ fontSize: "40px", color: "#e4405f" }} />,
    url: "https://www.instagram.com/kun.uz?igsh=MWRoMWxwejM2bjU1MQ==",
    description:
      "Instagramda sahifamizga qo'shiling va yangiliklardan xabardor bo'ling!",
  },
  {
    name: "YouTube",
    icon: <YoutubeOutlined style={{ fontSize: "40px", color: "#ff0000" }} />,
    url: "https://youtube.com/@kunuz_official?si=B3o9RDF3DbJTZAtD",
    description:
      "YouTube sahifamizga qo'shiling va yangiliklardan xabardor bo'ling!",
  },
];

const SocialPage: React.FC = () => {
  return (
    <Layout>
      <Content
        style={{
          padding: "40px",
          paddingTop: "60px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#1A5F7A",
          }}
        >
          Ijtimoiy Tarmoqlar
        </Title>
        <Divider style={{ borderColor: "#003366" }} />
        <Row gutter={[16, 16]}>
          {socialLinks.map((social, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  background: "white",
                  padding: "20px",
                  height: "100%",
                }}
              >
                {social.icon}
                <Title level={4} style={{ marginTop: "15px" }}>
                  {social.name}
                </Title>
                <Paragraph>{social.description}</Paragraph>
                <Button
                  type="primary"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: social.icon.props.style.color,
                    borderColor: social.icon.props.style.color,
                  }}
                >
                  Sahifaga o‘tish
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        <Divider style={{ borderColor: "#003366", marginTop: "40px" }}>
          <Title
            level={4}
            style={{ textAlign: "center", margin: "0px", color: "#1A5F7A" }}
          >
            Ijtimoiy tarmoqlarimizdagi foydalanuvchilar soni
          </Title>
        </Divider>
        <Row gutter={[32, 32]} justify="center" style={{ marginTop: "20px" }}>
          {[
            { name: "Facebook", count: 16321, color: "#3b5998" },
            { name: "Twitter", count: 1034, color: "#1da1f2" },
            { name: "Instagram", count: 22907, color: "#e4405f" },
            { name: "YouTube", count: 15989, color: "#ff0000" },
          ].map((social, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={4}
              key={index}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  padding: "20px",
                  height: "100%",
                }}
              >
                <Paragraph
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: social.color,
                  }}
                >
                  <CountUp start={0} end={social.count} duration={2.5} />
                </Paragraph>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "normal",
                    display: "block",
                  }}
                >
                  {social.name} foydalanuvchilar soni
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default SocialPage;
