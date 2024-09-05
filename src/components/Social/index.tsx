import React from "react";
import { Layout, Typography, Card, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  // LinkedInOutlined,
  // YouTubeOutlined,
} from "@ant-design/icons";
// import "./IjtimoiyTarmoqlarPage.css";

const { Content } = Layout;
const { Title } = Typography;

const socialLinks = [
  {
    name: "Facebook",
    icon: <FacebookOutlined />,
    url: "https://www.facebook.com/yourpage",
  },
  {
    name: "Twitter",
    icon: <TwitterOutlined />,
    url: "https://twitter.com/yourprofile",
  },
  {
    name: "Instagram",
    icon: <InstagramOutlined />,
    url: "https://www.instagram.com/yourprofile",
  },
  {
    name: "LinkedIn",
    icon: "",
    url: "https://www.linkedin.com/company/yourcompany",
  },
  {
    name: "YouTube",
    icon: "",
    url: "https://www.youtube.com/channel/yourchannel",
  },
];

const IjtimoiyTarmoqlarPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "40px", paddingTop: "60px" }}>
        <Title level={2} style={{ textAlign: "center" }}>
          Ijtimoiy Tarmoqlar
        </Title>
        <Divider />
        {socialLinks.map((social, index) => (
          <Card
            key={index}
            hoverable
            style={{ marginBottom: "20px" }}
            actions={[
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>,
            ]}
          >
            <Card.Meta avatar={social.icon} title={social.name} />
          </Card>
        ))}
      </Content>
    </Layout>
  );
};

export default IjtimoiyTarmoqlarPage;
