import "./meet.css";
import meet1 from "../Assent/meet 1.jpg";
import meet2 from "../Assent/meet 2.webp";
import meet3 from "../Assent/meet 3.webp";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const Meet = () => {
  const [revres, setRevres] = useState(false);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    setRevres(i18n.language === "ar");
  }, [i18n.language]);
  return (
    <div className="meet">
      <div className="container">
        <div className="meet-content">
          <div className="meet-imgs">
            <div
              className="meet-handle"
              style={
                revres === true
                  ? {left:"75%",top:"50%"}
                  : { left:"50%",top:"50%" }
              }
            >
              <h1>12k+</h1>
              <p>Case Handle</p>
            </div>
            <div className="meet-img">
              <img src={meet3} alt="" />
              <img src={meet2} alt="" />
            </div>
            <div className="meet-img-frist">
              <img src={meet1} alt="" />
            </div>
          </div>
          <div className="meet-text">
            <h1>{t("meetHead")}</h1>
            <h2>
              <span>{t("meetHead2")}</span>
              <div>
                <GoArrowUpRight />
              </div>
            </h2>
            <p>{t("meetparg")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
