import React from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Divider,
  Carousel,
  Image,
  Space,
  Button,
} from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import yutuqlar1 from "../../assets/yutuqlar/yutuq1.jpeg";
import yutuqlar2 from "../../assets/yutuqlar/yutuq2.jpg";
import yutuqlar3 from "../../assets/yutuqlar/yutuq3.jpg";
import yutuq4 from "../../assets/yutuqlar/yutuq4.jpg";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const InfoPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "40px" }}>
        {/* Asosiy sarlavha */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <Title level={1} style={{ color: "#1A5F7A", fontWeight: "bold" }}>
            Mehrli Maktab Haqida
          </Title>
          <Paragraph
            style={{ fontSize: "18px", color: "#555", lineHeight: 1.6 }}
          >
            Maktabimiz o'quvchilarning har tomonlama rivojlanishi uchun
            zamonaviy sharoitlar va innovatsion usullarni qo'llaydi.
          </Paragraph>
        </div>

        {/* Video blok */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <iframe
            width="600"
            height="350"
            style={{
              borderRadius: "20px",
              border: "5px solid #1A5F7A",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            }}
            src="https://www.youtube.com/embed/UDdzksWkuUE"
            title="Maktabgacha ta'lim"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Paragraph
            style={{ fontSize: "18px", color: "#333", marginTop: "15px" }}
          >
            <VideoCameraOutlined /> Mehrli Maktabda ta'lim va tarbiya jarayoniga
            bir nazar.
          </Paragraph>
        </div>

        <Divider style={{ borderColor: "#003366", marginBottom: "40px" }} />

        {/* Maktab tarixi */}
        <Row gutter={32} justify="center">
          <Col xs={24} md={12}>
            <Card
              title={
                <Title level={3} style={{ color: "#1A5F7A" }}>
                  Maktab Tarixi
                </Title>
              }
              bordered={false}
              cover={
                <Image
                  alt="Maktab tarixi"
                  src={`https://via.placeholder.com/300x200?text=News+Image`}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              }
              style={{
                border: "1px solid #e8e8e8",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              hoverable
            >
              <Paragraph style={{ color: "#555", lineHeight: 1.8 }}>
                Mehrli Maktab 2000-yilda tashkil etilgan bo'lib, zamonaviy talab
                va imkoniyatlarga mos keluvchi ta'lim tizimini yaratgan.
              </Paragraph>
              <Button
                type="primary"
                style={{ backgroundColor: "#1A5F7A", borderColor: "#1A5F7A" }}
              >
                Batafsil o'qing
              </Button>
            </Card>
          </Col>
        </Row>

        <Divider style={{ borderColor: "#003366", marginTop: "40px" }} />

        {/* Yutuqlar qismi */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Title level={2} style={{ color: "#1A5F7A" }}>
            Bizning Yutuqlarimiz
          </Title>

          <Carousel
            autoplay
            dots={true}
            style={{ width: "80%", margin: "auto", padding: "20px 0" }}
          >
            {[yutuq4, yutuqlar1, yutuqlar2, yutuqlar3].map((item, index) => (
              <div key={index}>
                <img
                  alt="Yutuqlar"
                  src={item}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    border: "5px solid #1A5F7A",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
            ))}
          </Carousel>
          <Paragraph
            style={{ fontSize: "16px", marginTop: "20px", color: "#555" }}
          >
            Maktabimiz o'quvchilari ko'plab xalqaro va milliy tanlovlarda g'olib
            chiqishgan!
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default InfoPage;
