import "./tests.css";
import test from "../Assent/test.jpg";
import imgafe from "../Assent/images.jpeg";
import { testList } from "../Assent/Data";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import React from "react";
const Tests = () => {
  const { t } = useTranslation();
  return (
    <section className="tests">
      <div className="container">
        <div className="test-content">
          <div className="test-list">
            {testList.map((el, i) => {
              return (
                <div className="test-prarg" key={i}>
                  <span></span>
                  <h2
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {t(el.title)}
                  </h2>
                  <GoArrowUpRight />
                  <p>{t(el.p)}</p>
                </div>
              );
            })}
          </div>
          <div className="test-img">
            <img src={test} alt="" />
          </div>
          <div className="test-text">
            <h1>{t("testHead")}</h1>
            <p>{t("testP")}</p>
            <button>{t("herobuttonOne")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tests;
