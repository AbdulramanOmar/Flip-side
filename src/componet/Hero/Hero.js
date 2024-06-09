import { useTranslation } from "react-i18next";
import "./hero.css";
import heroImg from "../Assent/with inthirejpg.jpg";
import { useEffect, useState } from "react";
const Hero = () => {
  const { t, i18n } = useTranslation();
  const [addMargin, setMargin] = useState(true);
  useEffect(() => {
    i18n.language === "ar" ? setMargin(false) : setMargin(true);
  }, [i18n.language]);
  return (
    <div
      className="hero"
      style={addMargin ? { marginLeft: "auto" } : { marginRight: "auto" }}
    >
      <div className="hero-text">
        <span className="line"></span>
        <span>{t("weCare")}</span>
        <h1>{t("heroText")}</h1>
        <p style={{ width: "400px" }}>{t("heroPrag")}</p>
        <button>{t("herobuttonOne")}</button>
        <button>{t("herobuttonTwo")}</button>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
