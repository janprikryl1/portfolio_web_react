import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import Czech from "../../static/images/czech.png";
import English from "../../static/images/english.png";

/*let countries = [
  {
    code: "cs",
    name: "Čeština",
    country_code: "cz",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];*/

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
      <div>
      <NavDropdown title={t("Language")} id="basic-nav-dropdown">
          <NavDropdown.Item key="cs" disabled={i18n.language === "cs"} onClick={() => i18n.changeLanguage("cs")}>
            <img src={Czech} alt="Čeština"width={30}/> Čeština
          </NavDropdown.Item>
        <NavDropdown.Item key="en" disabled={i18n.language === "en"} onClick={() => i18n.changeLanguage("en")}>
            <img src={English} alt="English" width={30}/> English
          </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default LanguageSelector;