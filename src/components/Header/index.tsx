import React from "react";
import { Layout, Menu, Button } from "antd";
import logo from "../../assets/Logo.jpg";
import { NavLink } from "react-router-dom";

const { Header } = Layout;
const { SubMenu } = Menu;

const HeaderPage: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: "100",
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a style={{ display: "flex", alignItems: "center" }} href="/">
          {/* Logotip qo'shish */}
          <img
            src={logo}
            alt="Mehrli Maktab Logo"
            style={{ height: "62px", marginRight: "20px" }}
          />
        </a>
        <Menu mode="horizontal" style={{ borderBottom: "none" }}>
          <Menu.Item key="oav">
            <NavLink to="/oav">OAV</NavLink>
          </Menu.Item>

          <Menu.Item key="asosiy">
            <NavLink to="/main">Asosiy</NavLink>
          </Menu.Item>

          <Menu.Item key="malumot">
            <NavLink to="/info">Ma'lumot</NavLink>
          </Menu.Item>

          <Menu.Item key="yangiliklar">
            <NavLink to="/news">Yangiliklar</NavLink>
          </Menu.Item>

          <Menu.Item key="biz_haqimizda">
            <NavLink to="/about">Biz haqimizda</NavLink>
          </Menu.Item>

          <Menu.Item key="filiallar">
            <NavLink to={"/branches"}>Filiallar</NavLink>
          </Menu.Item>

          <SubMenu key="biz_bilan_aloqa" title="Biz bilan aloqa">
            <Menu.Item key="biz_haqimizda:mission">
              <NavLink to="/contact">Biz bilan aloqa</NavLink>
            </Menu.Item>
            <Menu.Item key="biz_haqimizda:team">
              <NavLink to="/opinion">Sizning fikringiz</NavLink>
            </Menu.Item>
            <Menu.Item key="biz_haqimizda:careers">
              <NavLink to="/social">Ijtimoiy tarmoqlar</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>

        <NavLink to="/homiylar">
          <Button
            type="primary"
            shape="round"
            style={{ backgroundColor: "#F0C040", borderColor: "#F0C040" }}
          >
            Homiylar
          </Button>
        </NavLink>
      </Header>
    </Layout>
  );
};

export default HeaderPage;


