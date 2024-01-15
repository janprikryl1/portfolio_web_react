import React from "react";
import {useTranslation} from "react-i18next";

function NoPage() {
    const { t } = useTranslation();
    return (
        <p style={{paddingLeft:'30px'}}>{t("Page not found")}</p>
    )
}
export default NoPage;