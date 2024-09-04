import React, { useState } from "react";
import {
  Layout,
  Form,
  Input,
  Button,
  Rate,
  List,
  Divider,
  Typography,
} from "antd";

const { Content } = Layout;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

interface FeedbackFormValues {
  name: string;
  email: string;
  comment: string;
  rating: number;
}

const OpinionPage: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<FeedbackFormValues[]>([
      {
        name: "Anvar",
        rating: 5,
        comment: "Juda yaxshi maktab!",
        email: "jondoe@gmail.com",
      },
      {
        name: "Madina",
        rating: 4,
        comment: "O'qituvchilar juda tajribali.",
        email: "jondoe2@gmail.com",
      },
    ]);

  const handleFormSubmit = (values: FeedbackFormValues) => {
    setFeedbacks([...feedbacks, values]);
  };


  return (
    <Layout>
      <Content
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "auto",
          paddingTop: "60px",
        }}
      >
        <Title level={2} style={{ color: "#003366" }}>
          Sizning Fikringiz
        </Title>
        <Paragraph>
          Bizning xizmatlarimiz yoki maktabimiz haqida fikringizni bildiring!
          Sizning fikringiz biz uchun juda muhim.
        </Paragraph>


        <Form layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            label="Ism"
            name="name"
            rules={[
              { required: true, message: "Iltimos, ismingizni kiriting!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Elektron Pochta"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Iltimos, elektron pochtangizni kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Fikr-mulohaza"
            name="comment"
            rules={[
              { required: true, message: "Iltimos, fikringizni bildiring!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Umumiy Baho"
            name="rating"
            rules={[{ required: true, message: "Iltimos, baho bering!" }]}
          >
            <Rate />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Yuborish
            </Button>
          </Form.Item>

        </Form>

        <Divider>Foydalanuvchi Sharhlari</Divider>
        <List
          dataSource={feedbacks}
          renderItem={(item) => (
            <List.Item>
              <div>
                <Title level={4} style={{ marginBottom: 0 }}>
                  {item.name}
                </Title>
                <Paragraph style={{ marginTop: 0 }}>{item.email}</Paragraph>
                <Rate disabled defaultValue={item.rating} />
                <Paragraph style={{ fontSize: "16px" }}>
                  {item.comment}
                </Paragraph>
              </div>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default OpinionPage;
