import React, {useState} from "react";
import ExpandIcon from "../../static/images/expand-arrow-icon.svg";
import { useTranslation } from "react-i18next";

function Experiences() {
    const { t } = useTranslation();
    const [showExperiences, setShowExperiences] = useState(false);
    return (
        <div>
            <h1 style={{ marginTop: '50px', marginBottom: '20px', color: '#0073ff' }}>{t("Work experience")}
                            <img id="experiences_arrow" className="arrow" src={ExpandIcon} width={40} height={40} onClick={() => setShowExperiences(!showExperiences)}/></h1>
                        <div id="experiences_content" style={{ display: showExperiences?'block':'none' }}>
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#0073ff' }}>ITIXO, s.r.o.</h6>
                                    <ul>
                                        <li>Frontend developer (React)</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                                    <p>2024 - {t("present")}</p>
                                </div>
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#0073ff' }}>IT NETWORK</h6>
                                    <ul>
                                        <li>{t("Writing articles")}</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                                    <p>2023</p>
                                </div>
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#0073ff' }}>WERNHERD TECHNOLOGY</h6>
                                    <p>Dětkovice</p>
                                    <ul>
                                        <li>{t("Repair of accumulators")}</li>
                                        <li>{t("Programming applications for")} Android</li>
                                        <li>{t("Programming of Arduino")}</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                                    <p>2022 - 2023</p>
                                </div>
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#0073ff' }}>OBEC SMRŽICE</h6>
                                    <p>Smržice</p>
                                    <ul>
                                        <li>{t("Grass cutting")}</li>
                                        <li>{t("Garden jobs")}</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                                    <p>2019, 2020, 2021, 2022</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#0073ff' }}>ARBOEKO</h6>
                                    <p>Smržice</p>
                                    <ul>
                                        <li>{t("Garden jobs")}</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                                    <p>2018</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#0073ff' }}>{t("Camp counselor")}</h6>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                                    <p>2020, 2021, 2022, 2023</p>
                                </div>
                            </div>
                        </div>
            <hr className="featurette-divider" />
        </div>
    )
}
export default Experiences;