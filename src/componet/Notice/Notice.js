import { useTranslation } from "react-i18next";
import "./notice.css";

const Notice = () => {
  const { t } = useTranslation();
  return (
    <div className="notice">
      <div className="notice-content">
        <h2>{t("notice")}</h2>
      </div>
    </div>
  );
};

export default Notice;
