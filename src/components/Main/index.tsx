import React from "react";
import { Layout, Typography, Row, Col, Card, Carousel } from "antd";
import rasm1 from "../../assets/toshkent.jpeg";
import rasm2 from "../../assets/navoiy.jpg";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const MainPage: React.FC = () => {
  return (
    <Layout>
      {/* Carousel */}
      <Carousel autoplay style={{ paddingTop: "60px" }}>
        {[rasm1, rasm2].map((image, index) => (
          <div key={index}>
            <img
              alt={`Carousel image ${index + 1}`}
              src={image}
              style={{
                width: "100%",
                maxHeight: "600px",
                objectFit: "cover",
                filter: "brightness(80%)",
              }}
            />
          </div>
        ))}
      </Carousel>

      <Content
        style={{
          padding: "40px",
          backgroundColor: "#f3f6f9",
          transition: "background-color 0.3s",
        }}
      >
        {/* Xush Kelibsiz! */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
            animation: "fadeInUp 1s ease-in-out",
          }}
        >
          <Title
            level={1}
            style={{
              color: "#1A5F7A",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Mehrli Maktabga Xush Kelibsiz!
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            Mehrli Maktabda sizni yuqori malakali, professional ustozlar
            kutmoqda. Ustozlarimiz dunyoning nufuzli oliy o'quv yurtlarida
            ta'lim olganlar va ko'plab xalqaro sertifikatlarga ega. Ular
            zamonaviy pedagogik metodikalarni qo'llab, har bir o'quvchining
            individual ehtiyojlariga moslashtirilgan darslar olib borishadi.
          </Paragraph>
          <Paragraph
            style={{
              fontSize: "18px",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            Maktabimizda o'quvchilarning rivojlanishi uchun maxsus o'quv
            dasturlari va innovatsion loyihalar amalga oshiriladi. Har bir
            o'quvchining ijodiy va intellektual salohiyatini oshirish, ijtimoiy
            ko'nikmalarini shakllantirish, va jamoa bilan ishlash ko'nikmalarini
            rivojlantirish uchun mo'ljallangan turli faoliyatlar o'tkaziladi.
          </Paragraph>
        </div>

        {/* Darslar va Faoliyatlar */}
        <div style={{ marginBottom: "40px" }}>
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "#1A5F7A",
              marginBottom: "30px",
            }}
          >
            Maktabdagi Darslar va Faoliyatlar
          </Title>
          <Row
            gutter={48}
            style={{ textAlign: "center", marginTop: "20px" }}
            justify="center"
          >
            <Col xs={24} md={12}>
              <Card
                cover={
                  <img
                    alt="Darslar"
                    src={`https://via.placeholder.com/300x200?text=Ustozlar+Rasmi`}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      filter: "brightness(90%)",
                    }}
                  />
                }
                bordered={false}
                style={{
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                hoverable
              >
                <Title level={3} style={{ color: "#1A5F7A" }}>
                  Ustozlarimiz
                </Title>
                <Paragraph style={{ color: "#555", lineHeight: 1.8 }}>
                  Ustozlarimiz Oksford, Garvard, Toshkent Davlat Universiteti
                  kabi nufuzli ta'lim dargohlarida tahsil olganlar. Ular xalqaro
                  pedagogik tajribaga ega bo'lib, har bir darsni interaktiv va
                  qiziqarli o'tish uchun eng yaxshi amaliyotlarni qo'llashadi.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                cover={
                  <img
                    alt="Faoliyatlar"
                    src={`https://via.placeholder.com/300x200?text=Faoliyatlar+Rasmi`}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      filter: "brightness(90%)",
                    }}
                  />
                }
                bordered={false}
                style={{
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                hoverable
              >
                <Title level={3} style={{ color: "#1A5F7A" }}>
                  Bolalarni Rivojlantirish
                </Title>
                <Paragraph style={{ color: "#555", lineHeight: 1.8 }}>
                  Maktabimizda sport, san'at, fan va texnologiya kabi sohalarda
                  ko'plab to'garaklar va tadbirlar mavjud. Ushbu tadbirlar
                  o'quvchilarimizning qobiliyatlarini rivojlantirish,
                  ijodkorliklarini oshirish va ijtimoiy ko'nikmalarini
                  shakllantirish uchun xizmat qiladi.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default MainPage;
