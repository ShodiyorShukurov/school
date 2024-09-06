// components/NewsPage.tsx

import React, { useState } from "react";
import {
  Layout,
  Card,
  List,
  Typography,
  // Input,
  Button,
  // Row,
  // Col,
} from "antd";
import {
  // SearchOutlined,
  EyeOutlined,
  LikeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import rasm1 from "../../assets/navoiy.jpg";
import rasm2 from "../../assets/toshkent.jpeg";

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
  {
    id: 3,
    title: "O'quvchilarimizning muvaffaqiyatlari",
    description: "O'quvchilarimiz xalqaro tanlovda g'olib chiqishdi.",
    date: "Avgust 25, 2024",
    image: rasm2,
    views: 89,
    likes: 25,
  },
  {
    id: 4,
    title: "O'quvchilarimizning muvaffaqiyatlari",
    description: "O'quvchilarimiz xalqaro tanlovda g'olib chiqishdi.",
    date: "Avgust 25, 2024",
    image: rasm2,
    views: 89,
    likes: 25,
  },
  {
    id: 5,
    title: "O'quvchilarimizning muvaffaqiyatlari",
    description: "O'quvchilarimiz xalqaro tanlovda g'olib chiqishdi.",
    date: "Avgust 25, 2024",
    image: rasm2,
    views: 89,
    likes: 25,
  },
];

const NewsPage: React.FC = () => {
  const [newsList, setNewsList] = useState(newsData);

  const handleLike = (id: number) => {
    const updatedNews = newsList.map((news) =>
      news.id === id ? { ...news, likes: news.likes + 1 } : news
    );
    setNewsList(updatedNews);
  };

  return (
    <Layout>
      <Content style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
        <Title
          level={2}
          style={{ color: "#1A5F7A", textAlign: "center", marginTop: "50px" }}
        >
          Yangiliklar
        </Title>

        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={newsList}
          renderItem={(item) => (
            <List.Item>
              <Card
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
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
