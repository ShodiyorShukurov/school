import React from "react";
import { Layout, Typography, Collapse, Divider } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import toshkent from "../../assets/toshkent.jpeg";
import samarqand from "../../assets/samarqand.jpg";
import navoiy from "../../assets/navoiy.jpg";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

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
    name: "Toshkent",
    address: "Amir Temur ko'chasi, Toshkent",
    phone: "+998 71 123 4567",
    email: "tashkent@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: toshkent,
  },
  {
    name: "Samarqand Filiali",
    address: "Registon ko'chasi, Samarqand",
    phone: "+998 66 765 4321",
    email: "samarkand@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: samarqand,
  },
  {
    name: "Navoiy Filiali",
    address: "Navoiy ko'chasi, Navoiy",
    phone: "+998 66 765 4321",
    email: "navoiy@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: navoiy,
  },
  {
    name: "Jizzax Filiali",
    address: "Navoiy ko'chasi, Navoiy",
    phone: "+998 66 765 4321",
    email: "navoiy@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: navoiy,
  },
  {
    name: "Buxoro Filiali",
    address: "Navoiy ko'chasi, Navoiy",
    phone: "+998 66 765 4321",
    email: "navoiy@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: navoiy,
  },
  {
    name: "Qashqadaryo Filiali",
    address: "Navoiy ko'chasi, Navoiy",
    phone: "+998 66 765 4321",
    email: "navoiy@mehrlimaktab.uz",
    workingHours: "Dushanba-Juma: 9:00 - 18:00",
    image: navoiy,
  },
];

const BranchesPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "20px", paddingTop: "60px" }}>
        <Divider style={{ borderColor: "#003366" }}>
          <Title level={2}>Filiallarimiz</Title>
        </Divider>
        <Paragraph
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "16px",
          }}
        >
          Bizning filiallarimizning joylashuvi va aloqa ma'lumotlari bilan
          tanishing.
        </Paragraph>

        <Collapse accordion>
          {filiallarData.map((item, index) => (
            <Panel
              header={<strong style={{ fontSize: "18px" }}>{item.name}</strong>}
              key={index}
            >
              <div style={{display: "flex", justifyContent: 'space-evenly'}}>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48831.7923815649!2d65.33041391535039!3d40.098002251813455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c6d7e12931b3%3A0x613f6eb9636019bb!2z0J3QsNCy0L7QuCwg0KHQsNC80LDRgNC60LDQvdC00YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1725429066871!5m2!1sru!2s"
                    width="300"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <img
                    alt={item.name}
                    src={item.image}
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                      marginLeft: "16px",
                    }}
                  />
                  <img
                    alt={item.name}
                    src={item.image}
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                      marginLeft: "16px",
                    }}
                  />
                <div style={{marginLeft: "20px", display: "flex", justifyContent: "center", flexDirection: "column"}}
                >
                  <p>
                    <strong>Mo'ljal:</strong> <EnvironmentOutlined />{" "}
                    {item.address}
                  </p>
                  <p>
                    <strong>Telefon raqam:</strong> <PhoneOutlined />{" "}
                    {item.phone}
                  </p>
                  <p>
                    <strong>E-mail:</strong> <MailOutlined /> {item.email}
                  </p>
                  <p>
                    {" "}
                    <strong>Ish vaqti:</strong> {item.workingHours}
                  </p>
                </div>
              </div>
            </Panel>
          ))}
        </Collapse>
      </Content>
    </Layout>
  );
};

export default BranchesPage;
