// components/NewsPage.tsx

import React, { useState } from "react";
import {
  Layout,
  Card,
  List,
  Typography,
  Input,
  Button,
  Row,
  Col,
} from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  LikeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

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
    image: "../../assets/navoiy.jpg",
    views: 124,
    likes: 34,
  },
  {
    id: 2,
    title: "O'quvchilarimizning muvaffaqiyatlari",
    description: "O'quvchilarimiz xalqaro tanlovda g'olib chiqishdi.",
    date: "Avgust 25, 2024",
    image: "../../assets/samarqand.jpg",
    views: 89,
    likes: 25,
  },
  // Qo'shimcha yangiliklar ma'lumotlari bu yerda
];

const NewsPage: React.FC = () => {
  // Yoqtirish tugmasi uchun davlat boshqaruvi (state management)
  const [newsList, setNewsList] = useState(newsData);

  // Yangilikni yoqtirish funksiyasi
  const handleLike = (id: number) => {
    const updatedNews = newsList.map((news) =>
      news.id === id ? { ...news, likes: news.likes + 1 } : news
    );
    setNewsList(updatedNews);
  };

  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        {/* Sarlavha */}
        <Title level={2}>Yangiliklar</Title>

        {/* Qidiruv va Filtrlar */}
        <Row justify="space-between" style={{ marginBottom: "20px" }}>
          <Col>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Yangiliklarni qidirish"
              style={{ width: "300px" }}
            />
          </Col>
          <Col>
            <Button type="primary">Kategoriya bo'yicha filtrlash</Button>
          </Col>
        </Row>

        {/* Yangiliklar ro'yxati */}
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={newsList}
          renderItem={(item) => (
            <List.Item>
              <Card
                cover={<img alt={item.title} src={item.image} />}
                actions={[
                  <Button type="link" onClick={() => handleLike(item.id)}>
                    <LikeOutlined /> {item.likes}
                  </Button>,
                  <span>
                    <EyeOutlined /> {item.views}
                  </span>,
                  <Link to={`/news/${item.id}`}>
                    <Button type="link">
                      <InfoCircleOutlined /> More Info
                    </Button>
                  </Link>,
                ]}
              >
                <Card.Meta title={item.title} description={item.description} />

                <p style={{ marginTop: "10px", color: "gray" }}>{item.date}</p>
              </Card>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default NewsPage;
