import React from "react";
import {
  Layout,
  Form,
  Input,
  Button,
  // Card,
  // List,
  Typography,
  // Divider,
} from "antd";
// import {
//   EnvironmentOutlined,
//   PhoneOutlined,
//   MailOutlined,
// } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

// const contactInfo = [
//   {
//     icon: <PhoneOutlined />,
//     label: "Telefon raqami",
//     value: "+998 90 123 4567",
//   },
//   {
//     icon: <MailOutlined />,
//     label: "Elektron pochta",
//     value: "info@mehrlimaktab.uz",
//   },
//   {
//     icon: <EnvironmentOutlined />,
//     label: "Manzil",
//     value: "Toshkent shahar, Amir Temur ko'chasi",
//   },
// ];
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUsPage: React.FC = () => {
  const handleFormSubmit = (values: FormData) => {
    console.log("Murojaat yuborildi:", values);
  };

  return (
    <Layout>
      <Content
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "auto",
          paddingTop: "60px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Title level={2} style={{ color: "#1A5F7A" }}>
          Biz bilan Aloqa
        </Title>
        <Paragraph>
          Agar sizda biror savol yoki fikr-mulohaza bo'lsa, biz bilan
          bog'laning. Sizning fikringiz biz uchun muhim.
        </Paragraph>

        {/* Kontakt Formasi */}
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
            label="Elektron pochta"
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
            label="Telefon raqam"
            name="phone"
            rules={[
              {
                required: true,
                message: "Iltimos, telefon raqamingizni kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Xabar"
            name="message"
            rules={[
              { required: true, message: "Iltimos, xabaringizni yozing!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Yuborish
            </Button>
          </Form.Item>
        </Form>

        {/* Aloqa Ma'lumotlari */}
        {/*<Divider>Aloqa Ma'lumotlari</Divider>
        <List
          dataSource={contactInfo}
          renderItem={(item) => (
            <List.Item>
              <Card>
                <Title level={4}>
                  {item.icon} {item.label}
                </Title>
                <Paragraph>{item.value}</Paragraph>
              </Card>
            </List.Item>
          )}
        />*/}

        {/* Xarita */}
        {/*<Divider>Xarita</Divider>
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#f0f0f0",
            textAlign: "center",
            lineHeight: "400px",
          }}
        >
          <span>Xarita bu yerda bo'ladi</span>
        </div>*/}

        {/* Ijtimoiy Tarmoq Havolalari */}
        {/*<Divider>Ijtimoiy Tarmoqlar</Divider>
        <Paragraph>
          <a
            href="https://facebook.com/mehrlimaktab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |{" "}
          <a
            href="https://twitter.com/mehrlimaktab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          |{" "}
          <a
            href="https://instagram.com/mehrlimaktab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </Paragraph>*/}
      </Content>
    </Layout>
  );
};

export default ContactUsPage;
