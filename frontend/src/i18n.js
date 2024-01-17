import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["cs"];

i18n
  .use(Backend) // Použito pro načítání dat z jiného adresáře
  .use(LanguageDetector) // Detekce aktuálního jazyka
  .use(initReactI18next) // Předává i18n do react-i18next
  .init({
    fallbackLng, // Výchozí jazyk
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    interpolation: {
      escapeValue: false, // Není třeba pro React, který escapuje výchozím způsobem
    },
    backend: {
      // Přidána konfigurace pro i18next-xhr-backend
      loadPath: "../../static/locale/{{lng}}/translation.json", // Změněn cestu k datům
    },
  });

/*if (!i18n.language) {
  i18n.changeLanguage("cs");
}*/
if (!i18n.language) {
  const userLanguage = window.navigator.language.split('-')[0]; // Získá jazyk uživatele ze systému
  const supportedLanguages = ["cs", "en"]; // Podporované jazyky
  const defaultLanguage = supportedLanguages.includes(userLanguage) ? userLanguage : "en";

  i18n.changeLanguage(defaultLanguage);
}

export default i18n;
