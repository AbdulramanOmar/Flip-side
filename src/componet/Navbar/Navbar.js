import "./navbar.css";
import logo from "../Assent/logo.png";
import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "../Assent/Data";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdTranslate } from "react-icons/md";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageToggled, setIsLanguageToggled] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(true);
  const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);
  useEffect(() => {
    setIsLanguageMenuVisible(!isLanguageMenuVisible)
  },[i18n.language])
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageToggled(!isLanguageToggled);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="logo" />
          <ul className={`nav-links ${isMenuToggled ? "" : "show"}`}>
            {NavLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {t(link.title)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <NavLink to="/contact">
              <button
                style={
                  isLanguageToggled
                    ? { marginRight: "10px" }
                    : { marginLeft: "10px" }
                }
              >
                {t("Contact")}
              </button>
            </NavLink>
            <button
              onClick={() => changeLanguage(isLanguageToggled ? "ar" : "en")}
            >
              {isLanguageToggled ? "عربي" : "English"}
            </button>
          </div>
          <div className="change">
            {isMenuToggled ? (
              <FaBars onClick={() => setIsMenuToggled(!isMenuToggled)} />
            ) : (
              <IoClose onClick={() => setIsMenuToggled(!isMenuToggled)} />
            )}
            <MdTranslate
              onClick={() => setIsLanguageMenuVisible(!isLanguageMenuVisible)}
            />
            <ol
              className={`language ${isLanguageMenuVisible ? "show-list" : ""}`}
            >
              <li>
                <Link onClick={() => changeLanguage("en")}>English</Link>
              </li>
              <li>
                <Link onClick={() => changeLanguage("ar")}>عربي</Link>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
