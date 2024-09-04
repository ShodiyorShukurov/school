import React from "react";
import { Layout, Typography, Row, Col, Card,  Carousel } from "antd";
import { NavLink } from "react-router-dom";
import rasm1 from "../../assets/toshkent.jpeg";
import rasm2 from "../../assets/navoiy.jpg";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  views: number;
  likes: number;
}

const newsData: News[] = [
  {
    id: 1,
    title: "Maktabdagi yangiliklar",
    description:
      "Mehrli maktabda yangi o'quv yilining boshlanishi nishonlandi.",
    date: "Sentabr 01, 2024",
    image: rasm1,
    views: 124,
    likes: 34,
  },
  {
    id: 2,
    title: "O'quvchilarimizning muvaffaqiyatlari",
    description: "O'quvchilarimiz xalqaro tanlovda g'olib chiqishdi.",
    date: "Avgust 25, 2024",
    image: rasm2,
    views: 89,
    likes: 25,
  },
];

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Carousel autoplay style={{paddingTop: '60px'}}>
        {newsData.map((news) => (
          <div key={news.id}>
            <img
              alt={news.title}
              src={news.image}
              style={{
                width: "100%",
                maxHeight: "600px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Carousel>
      <Content style={{ padding: "20px" }}>
      
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <Title level={1}>Mehrli Maktabga Xush Kelibsiz!</Title>
          <Paragraph>
            Bizning maktabimizning so'nggi yangiliklari va e'lonlari bilan
            tanishing.
          </Paragraph>
        </div>

        {/* Yangiliklar Bloki */}
        <div style={{ marginBottom: "30px" }}>
          <Title level={2}>So'nggi Yangiliklar</Title>
          <Row gutter={16}>
            {newsData.slice(0, 3).map((news) => (
              <Col span={8} key={news.id}>
                <Card
                  cover={<img alt={news.title} src={news.image} />}
                  actions={[
                    <NavLink to={`/news/${news.id}`}>Ko'proq o'qish</NavLink>,
                  ]}
                >
                  <Card.Meta
                    title={news.title}
                    description={news.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Boshqa bloklar kodini davom ettiring... */}
      </Content>
    </Layout>
  );
};

export default MainPage;
