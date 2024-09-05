import React from "react";
import { Layout, Typography, Row, Col, Divider } from "antd";
import maktab from "../../assets/mehrli maktab.jpeg";
import direktor from "../../assets/direktor.jpg";
import asoschi from "../../assets/asoschi.jpg";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "20px", paddingTop: "60px" }}>
        <Title level={1} style={{ textAlign: "center", color: "#000" }}>
          Biz haqimizda
        </Title>

        <Paragraph
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            marginBottom: "30px",
            fontSize: "18px",
          }}
        >
          <strong>Mehrli Maktab </strong> - bu nafaqat bilim olish joyi, balki
          bolalarning ruhiy va ma'naviy rivojlanishiga xizmat qiladigan ma'naviy
          maskandir. Biz har bir bola noyob va iste'dodli ekanligiga ishonamiz
          va ularning qobiliyatlarini rivojlantirish uchun zarur muhit
          yaratamiz.
        </Paragraph>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src={maktab}
            alt="Mehrli Maktab"
            style={{
              maxWidth: "600px",
              maxHeight: "400px",
              borderRadius: "8px",
            }}
          />
        </div>

        <div style={{ padding: "20px", textAlign: "center" }}>
          <Title level={3}>
            <strong style={{ fontWeight: 800 }}>"Bizning maqsadimiz</strong>-
            bolalarning bilim va iste'dodlarini eng yuqori cho'qqilarga
            ko'tarishdir. <strong style={{ fontWeight: 800 }}>"</strong>
          </Title>
          <Paragraph style={{ fontWeight: "600", fontSize: "16px" }}>
            Bizning maktabimizda har bir o'quvchining talanti va qobiliyatlarini
            rivojlantirishga alohida e'tibor qaratiladi. Buning uchun biz
            zamonaviy va innovatsion ta'lim usullaridan foydalanamiz.
          </Paragraph>
        </div>

        <Divider style={{ borderColor: "#003366" }} />
        <Title
          level={2}
          style={{
            textAlign: "center",
            fontStyle: "italic",
            color: "#004d40",
            margin: "40px 0",
          }}
        >
          "Kelajak bu erda boshlanadi!"
        </Title>
        <Divider style={{ borderColor: "#003366" }} />

        <Row gutter={16} style={{ marginTop: "40px" }}>
          <Col xs={24} md={12} style={{ textAlign: "center" }}>
            <img
              src={direktor}
              alt="Direktor"
              style={{ width: "150px", borderRadius: "50%", height: "150px" }}
            />
            <Title level={4}>Direktor: Maftuna Karimova</Title>
            <Text>Bolalar ta'limi sohasida 15 yillik tajriba.</Text>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: "center" }}>
            <img
              src={asoschi}
              alt="Asoschi"
              style={{ width: "150px", borderRadius: "50%", height: "150px" }}
            />
            <Title level={4}>Asoschi: Akmal Bekmurodov</Title>
            <Text>
              Mehrli Maktab asoschisi va ta'lim faoliyati tashabbuskori.
            </Text>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AboutUsPage;
