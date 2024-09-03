import React from "react";
import { Layout, Typography, Row, Col, Card, Button } from "antd";
import { NavLink } from "react-router-dom";
import { News } from "../News"; // Yangiliklar uchun interfeys

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface MainPageProps {
  latestNews: News[];
}

const MainPage: React.FC<MainPageProps> = ({ latestNews }) => {
  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        {/* Asosiy Sarlavha */}
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
            {latestNews?.slice(0, 3).map((news) => (
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

        {/* Bizning Xizmatlar */}
        <div style={{ marginBottom: "30px" }}>
          <Title level={2}>Bizning Xizmatlar</Title>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Ta'lim Dasturlari">
                <Paragraph>
                  Bizning turli ta'lim dasturlarimiz bilan tanishing.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Tadbirlar">
                <Paragraph>
                  Yaqinlashayotgan tadbirlar va faoliyatlar haqida ma'lumot.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Sport">
                <Paragraph>
                  Sport musobaqalari va o'yinlar haqida ma'lumot.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Galereya */}
        <div style={{ marginBottom: "30px" }}>
          <Title level={2}>Galereya</Title>
          <Row gutter={16}>
            <Col span={8}>
              <Card cover={<img alt="Example" src="/path/to/image1.jpg" />}>
                <Card.Meta title="Tadbir 1" />
              </Card>
            </Col>
            <Col span={8}>
              <Card cover={<img alt="Example" src="/path/to/image2.jpg" />}>
                <Card.Meta title="Tadbir 2" />
              </Card>
            </Col>
            <Col span={8}>
              <Card cover={<img alt="Example" src="/path/to/image3.jpg" />}>
                <Card.Meta title="Tadbir 3" />
              </Card>
            </Col>
          </Row>
        </div>

        {/* Kontakt Ma'lumotlari */}
        <div style={{ textAlign: "center" }}>
          <Title level={2}>Biz bilan Bog'lanish</Title>
          <Button type="primary">
            <NavLink to="/contact">Aloqa Formasi</NavLink>
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default MainPage;
