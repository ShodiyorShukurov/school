import React from "react";
import { Layout, Card, Typography, Divider, Row, Col, Avatar, Tag } from "antd";
import {
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import oav from '../../assets/oav.jpg'

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const OAVPage: React.FC = () => {
  const pressReleases = [
    {
      title: "Yangi Tashabbus E'lon Qilindi",
      date: "2024-09-01",
      description: "Yangi tashabbus haqida batafsil ma'lumotlar.",
    }
  ];

  const mediaContacts = [
    {
      name: "Shodiyor Shukurov",
      role: "PR Menedjer",
      phone: "+998 90 123 4567",
      email: "alisher@mehrlimaktab.uz",
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
        <Title level={2} style={{ color: "#003366", textAlign: "center" }}>
          OAV Sahifasi
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#666",
          }}
        >
          Mehrli Maktabning matbuot xabarlari, yangiliklari va media uchun aloqa
          ma'lumotlari bilan tanishing.
        </Paragraph>

        <Divider style={{ borderColor: "#003366" }}>Matbuot Xabarlari</Divider>
        <Row gutter={[16, 16]}>
          {pressReleases.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                cover={
                  <img
                    alt="News"
                    src={oav}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                }
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Title level={4} style={{ marginBottom: "8px" }}>
                  {item.title}
                </Title>
                <Text type="secondary">
                  <CalendarOutlined />{" "}
                  {new Date(item.date).toLocaleDateString()}
                </Text>
                <Paragraph style={{ marginTop: "8px" }}>
                  {item.description}
                </Paragraph>
                <Tag color="blue">Matbuot xabari</Tag>
              </Card>
            </Col>
          ))}
        </Row>

        <Divider style={{ borderColor: "#003366" }}>
          Media uchun Aloqa Ma'lumotlari
        </Divider>
        <Row gutter={[16, 16]}>
          {mediaContacts.map((contact, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                bordered={false}
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Card.Meta
                  avatar={
                    <Avatar style={{ backgroundColor: "#87d068" }}>
                      {contact.name[0]}
                    </Avatar>
                  }
                  title={contact.name}
                  description={<Text strong>{contact.role}</Text>}
                />
                <p style={{ margin: "8px 0" }}>
                  <PhoneOutlined /> {contact.phone}
                </p>
                <p style={{ margin: "8px 0" }}>
                  <MailOutlined /> {contact.email}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default OAVPage;
