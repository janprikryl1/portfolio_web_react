import React, {useState} from "react";
import ExpandIcon from "../../static/images/expand-arrow-icon.svg";
import { useTranslation } from "react-i18next";

function Education() {
    const { t } = useTranslation();
    const [showEducation, setShowEducation] = useState(false);
    return (
        <div>
            <h1 style={{marginTop: '50px', marginBottom: '20px', color: '#0073ff'}}>{t("Education")}
                <img id="education_arrow" className="arrow" src={ExpandIcon} width={40} height={40}
                     onClick={() => setShowEducation(!showEducation)}/></h1>
            <div id="education_content" style={{display: showEducation ? 'block' : 'none'}}>
                <div className="row">
                    <div className="col-sm-5">
                        <h6 style={{color: '#0073ff'}}>VYSOKÁ ŠKOLA BÁŇSKÁ -</h6>
                        <h6 style={{color: '#0073ff'}}>{t("TECHNICAL UNIVERSITY OF")} OSTRAVA</h6>
                        <p>Ostrava</p>
                        <p>{t("Informatics")}</p>
                    </div>
                    <div className="col-sm-4" style={{textAlign: 'center'}}>
                        <p>2022 - {t("present")}</p>
                    </div>
                    <div className="col-sm-5">
                        <h6 style={{color: '#0073ff'}}>VYŠŠÍ ODBORNÁ ŠKOLA</h6>
                        <h6 style={{color: '#0073ff'}}>A STŘENÍ PRŮMYSLOVÁ ŠKOLA</h6>
                        <h6 style={{color: '#0073ff'}}>ELEKTROTECHNICKÁ</h6>
                        <p>Olomouc</p>
                        <p>{t("Electrotechnics")}</p>
                    </div>
                    <div className="col-sm-4" style={{textAlign: 'center'}}>
                        <p>2018 - 2022</p>
                    </div>
                </div>
                <h6 style={{color: '#0073ff'}}>ZÁKLADNÍ ŠKOLA E. VALENY</h6>
                <p>Prostějov</p>
            </div>

            <hr className="featurette-divider"/>
        </div>
    )
}

export default Education;