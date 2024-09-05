import React from "react";
import {
  Layout,
  // Typography, Row, Col, Card
} from "antd";

const { Content } = Layout;
// const { Title, Paragraph } = Typography;

const InfoPage: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: "20px", paddingTop: "60px" }}>
        Main Page
        {/*<div style={{ marginBottom: "30px" }}>
          <Title level={2}>Maktab Tarixi</Title>
          <Paragraph>
            Mehrli Maktab 1990-yilda tashkil etilgan. O'shandan beri, biz
            ta'limda yuqori sifatni ta'minlashga intilamiz. Maktabimiz bir necha
            yillar davomida ta'limda yuqori natijalar ko'rsatdi.
          </Paragraph>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <Title level={2}>Vazifalar</Title>
          <Paragraph>
            Bizning vazifamiz - har bir o'quvchiga sifatli ta'lim berish va
            ularni kelajakda muvaffaqiyatli insonlar sifatida tarbiyalashdir.
          </Paragraph>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <Title level={2}>Ta'lim Dasturlari</Title>
          <Row gutter={16}>
            <Col span={8}>
              <Card cover="rasmlar bo'ladi" title="Boshlang'ich Ta'lim">
                <Paragraph>6-11 yoshdagi bolalar uchun dasturlar.</Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card cover="rasmlar bo'ladi" title="O'rta Ta'lim">
                <Paragraph>
                  12-17 yoshdagi o'quvchilar uchun bilim dasturlari.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card cover="rasmlar bo'ladi" title="Maxsus Dasturlar">
                <Paragraph>
                  San'at, sport va ilm-fan bo'yicha maxsus dasturlar.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Xodimlar */}
        {/*<div style={{ marginBottom: "30px" }}>
          <Title level={2}>Xodimlar</Title>
          <Paragraph>
            Bizning jamoamiz tajribali o'qituvchilardan iborat. Har bir xodim
            maktabimizning muvaffaqiyatiga hissa qo'shadi.
          </Paragraph>
        </div>*/}
        {/* Yutuqlar va Mukofotlar */}
        {/*<div style={{ marginBottom: "30px" }}>
          <Title level={2}>Yutuqlar va Mukofotlar</Title>
          <Paragraph>
            Maktabimiz bir necha xalqaro va milliy mukofotlarga sazovor bo'ldi.
            Boshqa yutuqlarimiz bilan tanishing.
          </Paragraph>
        </div>*/}
        {/* Maktab Hayoti */}
        {/*<div style={{ marginBottom: "30px" }}>
          <Title level={2}>Maktab Hayoti</Title>
          <Paragraph>
            Maktab hayoti doimo qiziqarli va faoliyatlarga boy. Bizning
            tadbirlar va faoliyatlarimiz haqida ma'lumot oling.
          </Paragraph>
        </div>*/}
        {/* Maktab Tashkilotlari */}
        {/*<div>
          <Title level={2}>Maktab Tashkilotlari</Title>
          <Paragraph>
            Maktabimizda turli tashkilotlar va klub va jamoalar faoliyat
            yuritmoqda. Ushbu tashkilotlar o'quvchilarga qo'shimcha imkoniyatlar
            taqdim etadi.
          </Paragraph>
        </div>*/}
      </Content>
    </Layout>
  );
};

export default InfoPage;
