import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";

let countries = [
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
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
      <div>
      <NavDropdown title={t("Language")} id="basic-nav-dropdown">
        {countries.map((lng) => (
          <NavDropdown.Item
            key={lng.code}
            disabled={i18n.language === lng.code}
            onClick={() => i18n.changeLanguage(lng.code)}
          >
            {lng.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  );
};

export default LanguageSelector;