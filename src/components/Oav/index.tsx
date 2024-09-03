// components/OAVPage.tsx

import React from "react";
import { Layout, Card, List, Typography, Divider } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const OAVPage: React.FC = () => {
  const pressReleases = [
    { title: "Yangi Tashabbus E'lon Qilindi", date: "2023-09-01" },
    { title: "Maktabimiz Haqida So'nggi Yangiliklar", date: "2023-08-15" },
  ];

  const mediaContacts = [
    {
      name: "Alisher Qodirov",
      role: "PR Menedjer",
      phone: "+998 90 123 4567",
      email: "alisher@mehrlimaktab.uz",
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        <Title level={2}>OAV sahifasi</Title>
        <Paragraph>
          Matbuot xabarlari, yangiliklar, va boshqa resurslar bilan tanishing.
        </Paragraph>

        {/* Press Releases */}
        <Divider>Matbuot xabarlari</Divider>
        <List
          dataSource={pressReleases}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>{item.date}</Card>
            </List.Item>
          )}
        />

        {/* Media Contacts */}
        <Divider>Media uchun aloqa ma'lumotlari</Divider>
        <List
          dataSource={mediaContacts}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.name}>
                <p>{item.role}</p>
                <p>Telefon: {item.phone}</p>
                <p>Email: {item.email}</p>
              </Card>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default OAVPage;
