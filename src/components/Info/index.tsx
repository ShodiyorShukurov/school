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
  Button,
} from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import yutuqlar1 from "../../assets/yutuqlar/yutuq1.jpeg";
import yutuqlar2 from "../../assets/yutuqlar/yutuq2.jpg";
import yutuqlar3 from "../../assets/yutuqlar/yutuq3.jpg";
import yutuq4 from "../../assets/yutuqlar/yutuq4.jpg";
import history from "../../assets/tarix.jpg";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const InfoPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "50px",
          }}
        >
          <Title
            level={2}
            style={{ color: "#1A5F7A", textAlign: "center", margin: "20px" }}
          >
            Mehrli Maktab Haqida
          </Title>
          <Paragraph
            style={{ fontSize: "18px", color: "#555", lineHeight: 1.6 }}
          >
            Maktabimiz o'quvchilarning har tomonlama rivojlanishi uchun
            zamonaviy sharoitlar va innovatsion usullarni qo'llaydi.
          </Paragraph>
        </div>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <iframe
            width="600"
            height="350"
            style={{
              borderRadius: "20px",
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

        <Divider style={{ borderColor: "#003366", marginBottom: "40px" }}>
          <Title level={4} style={{ color: "#1A5F7A", margin: 0 }}>
            Maktab Tarixi
          </Title>
        </Divider>

        <Row gutter={32} justify="center">
          <Col xs={24} md={12}>
            <Card
              bordered={false}
              cover={
                <Image
                  alt="Maktab tarixi"
                  src={history}
                  style={{
                    height: "300px",
                    borderRadius: "8px",
                  }}
                />
              }
              style={{
                border: "1px solid #e8e8e8",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
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

        <Divider style={{ borderColor: "#003366", marginTop: "40px" }}>
          <Title level={4} style={{ color: "#1A5F7A", margin: 0 }}>
            Bizning Yutuqlarimiz
          </Title>
        </Divider>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
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
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Content>
    </Layout>
  );
};

export default InfoPage;
