import React from "react";
import { Layout, Card,  Typography, Divider, Row, Col } from "antd";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const OAVPage: React.FC = () => {
  const pressReleases = [
    { title: "Yangi Tashabbus E'lon Qilindi", date: "2023-09-01" },
    { title: "Maktabimiz Haqida So'nggi Yangiliklar", date: "2023-08-15" },
  ];

  const mediaContacts = [
    {
      name: "Alisher Qodirov",
      role: "PR Menedjer",
      phone: "+998 90 123 4567",
      email: "alisher@mehrlimaktab.uz",
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: "40px" }}>
        <Title level={2} style={{ color: "#003366", textAlign: "center" }}>
          OAV Sahifasi
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            color: "#666",
          }}
        >
          Mehrli Maktabning matbuot xabarlari, yangiliklari va media uchun aloqa
          ma'lumotlari bilan tanishing.
        </Paragraph>

        {/* Matbuot Xabarlari */}
        <Divider>Matbuot Xabarlari</Divider>
        <Row gutter={[16, 16]}>
          {pressReleases.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card hoverable>
                <Title level={4}>{item.title}</Title>
                <Text type="secondary">
                  {new Date(item.date).toLocaleDateString()}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Media uchun Aloqa Ma'lumotlari */}
        <Divider>Media uchun Aloqa Ma'lumotlari</Divider>
        <Row gutter={[16, 16]}>
          {mediaContacts.map((contact, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                bordered={false}
                style={{ border: "1px solid #e8e8e8" }}
                bodyStyle={{ padding: "20px" }}
              >
                <Title level={4}>{contact.name}</Title>
                <Text strong>{contact.role}</Text>
                <p>Telefon: {contact.phone}</p>
                <p>Email: {contact.email}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default OAVPage;
