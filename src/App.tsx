import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import OavPage from "./components/Oav";
import MainPage from "./components/Main";
import InfoPage from "./components/Info";
import NewsPage from "./components/News";
import AboutUsPage from "./components/About";
import BranchesPage from "./components/Branches";
import ContactUsPage from "./components/ContactUs";
import OpinionPage from "./components/Opinion";
import SocialPage from "./components/Social";
import FooterPage from "./components/Footer";
import HomiylarPage from "./components/Homiylar";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/oav" element={<OavPage />} />
        <Route path="/" element={<Navigate to="/oav" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/opinion" element={<OpinionPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/homiylar" element={<HomiylarPage />} />
      </Routes>
      <FooterPage />
    </>
  );
};

export default App;
