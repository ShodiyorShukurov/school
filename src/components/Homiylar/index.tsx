import React from "react";
import { Layout, Card, Typography, Row, Col, Divider, Button } from "antd";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

interface Sponsor {
  name: string;
  description: string;
  logo: string;
  website: string;
  category: string;
}

const sponsorsData: Sponsor[] = [
  {
    name: "Oltin Homiy Kompaniyasi",
    description: "Bu kompaniya bizni birinchi kundan qo'llab-quvvatlaydi.",
    logo: "/src/assets/gold-sponsor.png",
    website: "https://www.goldsponsor.uz",
    category: "Oltin",
  },
  {
    name: "Kumush Homiy Kompaniyasi",
    description: "Bizning uzoq muddatli hamkorlarimizdan biri.",
    logo: "/src/assets/silver-sponsor.png",
    website: "https://www.silversponsor.uz",
    category: "Kumush",
  },
  {
    name: "Bronza Homiy Kompaniyasi",
    description: "Bizning tadbirlarimizda faol ishtirok etadi.",
    logo: "/src/assets/bronze-sponsor.png",
    website: "https://www.bronzesponsor.uz",
    category: "Bronza",
  },
];

const HomiylarPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "40px" }}>
        <Title level={2} style={{ color: "#003366", textAlign: "center" }}>
          Homiylarimiz
        </Title>
        <Paragraph
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            color: "#666",
          }}
        >
          Bizning homiylarimizga minnatdorchilik bildiramiz! Ularning
          qo'llab-quvvatlashi biz uchun juda muhim.
        </Paragraph>

        {/* Homiylar Toifalari */}
        {["Oltin", "Kumush", "Bronza"].map((category) => (
          <>
            <Divider>{category} Homiylar</Divider>
            <Row gutter={[16, 16]} justify="center">
              {sponsorsData
                .filter((sponsor) => sponsor.category === category)
                .map((sponsor) => (
                  <Col xs={24} sm={12} md={8} key={sponsor.name}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={sponsor.name}
                          src={sponsor.logo}
                          style={{ height: "150px", objectFit: "contain" }}
                        />
                      }
                      actions={[
                        <Button
                          type="link"
                          href={sponsor.website}
                          target="_blank"
                        >
                          Saytga o'tish
                        </Button>,
                      ]}
                    >
                      <Card.Meta
                        title={sponsor.name}
                        description={sponsor.description}
                      />
                    </Card>
                  </Col>
                ))}
            </Row>
          </>
        ))}

        {/* Homiy bo'lish chaqirig'i */}
        <Divider>Homiy bo'ling</Divider>
        <Paragraph style={{ textAlign: "center", color: "#666" }}>
          Bizning tashabbuslarimizni qo'llab-quvvatlashni istaysizmi? Quyidagi
          tugmani bosib biz bilan bog'laning!
        </Paragraph>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button type="primary" size="large">
            Homiy bo'ling
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default HomiylarPage;
