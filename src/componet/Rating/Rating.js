import "./rating.css";
import { casesReview, ratingImgs, stars } from "../Assent/Data";
import { useTranslation } from "react-i18next";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
const Rating = () => {
  const [revres, setRevres] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setRevres(i18n.language === "ar"); 
  }, [i18n.language]);
  return (
    <div className="reviews">
      <div className="rating">
        <div className="rating-imgs">
          {ratingImgs.map((el, i) => {
            return <img key={i} src={el.img} alt="" />;
          })}
        </div>
        <div className="rating-text">
          <span>4.9</span>
          {stars.map((el, i) => {
            return <span key={i}>{el.star}</span>;
          })}
          <p>{t("rating")}</p>
        </div>
      </div>
      <div
        className="cases"
        style={
          revres === true
            ? { flexDirection: "row-reverse" }
            : { flexDirection: "row" }
        }
      >
        <div>
          {casesReview.map((el, i) => {
            return (
              <span key={i}>
                {t(el.title)} <GoArrowUpRight />
              </span>
            );
          })}
          {casesReview.map((el, i) => {
            return (
              <span key={i + casesReview.length}>
                {t(el.title)}
                <GoArrowUpRight />
              </span>
            );
          })}
          {casesReview.map((el, i) => {
            return (
              <span key={i}>
                {t(el.title)} <GoArrowUpRight />
              </span>
            );
          })}
          {casesReview.map((el, i) => {
            return (
              <span key={i + casesReview.length}>
                {t(el.title)}
                <GoArrowUpRight />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rating;
