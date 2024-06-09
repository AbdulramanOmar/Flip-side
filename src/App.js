import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.body.style.fontFamily =
      i18n.language === "ar" ? "Cairo" : "Poppins";
  }, [i18n.language]);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
