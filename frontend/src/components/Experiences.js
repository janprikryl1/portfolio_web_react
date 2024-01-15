import React, {useState} from "react";
import ExpandIcon from "../../static/images/expand-arrow-icon.svg";

function Experiences() {
    const [showExperiences, setShowExperiences] = useState(false);
    return (
        <div>
<h1 style={{ marginTop: '50px', marginBottom: '20px', color: '#0073ff' }}>Pracovní zkušenosti
                            <img id="experiences_arrow" className="arrow" src={ExpandIcon} width={40} height={40} onClick={() => setShowExperiences(!showExperiences)}/></h1>
                        <div id="experiences_content" style={{ display: showExperiences?'block':'none' }}>
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#0073ff' }}>WERNHERD TECHNOLOGY</h6>
                                    <p>Dětkovice</p>
                                    <ul>
                                        <li>Oprava akumulátorů</li>
                                        <li>Oprava akumulátorů</li>
                                        <li>Programování Arduina</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                                    <p>2022 - současnost</p>
                                </div>
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#0073ff' }}>OBEC SMRŽICE</h6>
                                    <p>Smržice</p>
                                    <ul>
                                        <li>Sečení trávy</li>
                                        <li>Zahradnické práce</li>
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
                                        <li>Zahradnické práce</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                                    <p>2018</p>
                                </div>
                            </div>
                        </div>

                        <hr className="featurette-divider" />
        </div>
    )
}
export default Experiences;