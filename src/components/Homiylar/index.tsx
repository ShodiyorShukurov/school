import React from "react";
import { Layout, Button, Divider, Typography } from "antd";
import boshhomiy from "../../assets/sponsor/boshhomiy.jpeg";
import homiy1 from "../../assets/sponsor/homiy1.png";
import homiy2 from "../../assets/sponsor/homiy2.svg";
import homiy3 from "../../assets/sponsor/homiy3.png";
import homiy4 from "../../assets/sponsor/homiy4.png";
import homiy5 from "../../assets/sponsor/homiy5.svg";
import "./HomiylarPage.css";
import { NavLink } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const mainSponsor = {
  name: "Bosh homiymiz",
  description: "O'zbekiston Respulikasi Vazirlar Mahkamasi",
  logo: boshhomiy,
  website: "https://gov.uz/oz/pages/main_info/",
};

const sponsorsData = [homiy4, homiy3, homiy2, homiy1, homiy5];

const HomiylarPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "40px", paddingTop: "60px" }}>
        <Title level={2} style={{ textAlign: "center" }}>
          Bizning homiylar
        </Title>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ textAlign: "center" }}>
            <Divider style={{ borderColor: "#003366" }}>
              <Title level={3} style={{ margin: 0 }}>
                {mainSponsor.name}
              </Title>
            </Divider>
            <img
              alt={mainSponsor.name}
              src={mainSponsor.logo}
              style={{
                width: "400px",
                maxHeight: "200px",
                borderRadius: "15px",
              }}
            />
          </div>
          <Paragraph style={{ fontSize: "16px", margin: "6px" }}>
            {mainSponsor.description}
          </Paragraph>
          <Button type="link" href={mainSponsor.website} target="_blank">
            Saytga o'tish
          </Button>
        </div>

        <Divider style={{ borderColor: "#003366" }}>
          <Title level={4} style={{ margin: 0 }}>
            Boshqa homiylar
          </Title>
        </Divider>
        <div className="sponsors-container" style={{ marginBottom: "40px" }}>
          {sponsorsData.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <img
                alt={`Sponsor ${index + 1}`}
                src={sponsor}
                className="sponsor-image"
              />
            </div>
          ))}
        </div>

        <Divider style={{ borderColor: "#003366" }}>
          <Title level={4} style={{ margin: 0 }}>
            Homiy bo'ling
          </Title>
        </Divider>
        <Paragraph
          style={{ textAlign: "center", color: "#666", fontSize: "16px" }}
        >
          Bizning tashabbuslarimizni qo'llab-quvvatlashni istaysizmi?
          <span style={{ display: "block" }}>
            Quyidagi tugmani bosib biz bilan bog'laning!
          </span>
        </Paragraph>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <NavLink to="/contact">
            <Button type="primary" size="large">
              Homiy bo'ling
            </Button>
          </NavLink>
        </div>
      </Content>
    </Layout>
  );
};

export default HomiylarPage;
