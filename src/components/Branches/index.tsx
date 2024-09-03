// components/FiliallarPage.tsx

import React from "react";
import { Layout, Card, List, Typography, Divider } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface Filial {
  name: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  image: string;
}

const filiallarData: Filial[] = [
  {
    name: "Toshkent Filiali",
    address: "Amir Temur ko'chasi, Toshkent",
    phone: "+998 71 123 4567",
    email: "tashkent@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: "/src/assets/toshkent.jpeg",
  },
  {
    name: "Samarqand Filiali",
    address: "Registon ko'chasi, Samarqand",
    phone: "+998 66 765 4321",
    email: "samarkand@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: '/src/assets/samarqand.jpg',
  },
  {
    name: "Navoiy Filiali",
    address: "Navoiy ko'chasi, Navoiy",
    phone: "+998 66 765 4321",
    email: "navoiy@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: '/src/assets/navoiy.jpg',
  },
];

const BranchesPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        <Title level={2}>Filiallarimiz</Title>
        <Paragraph>
          Bizning filiallarimizning joylashuvi va aloqa ma'lumotlari bilan
          tanishing.
        </Paragraph>

        {/* Filiallar ro'yxati */}
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={filiallarData}
          renderItem={(item) => (
            <List.Item>
              <Card
                cover={<span>filiallar joylashuv joyi bu yerda bo'ladi</span>}
                title={item.name}
              >
                <p>
                  <EnvironmentOutlined /> {item.address}
                </p>
                <p>
                  <PhoneOutlined /> {item.phone}
                </p>
                <p>
                  <MailOutlined /> {item.email}
                </p>
                <p>Ish vaqti: {item.workingHours}</p>
              </Card>
            </List.Item>
          )}
        />

        {/* Xarita qo'shish */}
        <Divider>Xarita</Divider>
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#f0f0f0",
            textAlign: "center",
            lineHeight: "400px",
          }}
        >
          {/* Google Map yoki boshqa xarita integratsiyasini bu yerga qo'shing */}
          <span>Xarita bu yerda bo'ladi</span>
        </div>
      </Content>
    </Layout>
  );
};

export default BranchesPage;
