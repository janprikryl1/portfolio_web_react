import React, {useState} from "react";
import ExpandIcon from "../../static/images/expand-arrow-icon.svg";

function Education() {
    const [showEducation, setShowEducation] = useState(false);
    return (
        <div>
            <h1 style={{marginTop: '50px', marginBottom: '20px', color: '#0073ff'}}>Vzdělání
                <img id="education_arrow" className="arrow" src={ExpandIcon} width={40} height={40}
                     onClick={() => setShowEducation(!showEducation)}/></h1>
            <div id="education_content" style={{display: showEducation ? 'block' : 'none'}}>
                <div className="row">
                    <div className="col-sm-5">
                        <h6 style={{color: '#0073ff'}}>VYSOKÁ ŠKOLA BÁŇSKÁ -</h6>
                        <h6 style={{color: '#0073ff'}}>Technická Univerzita OSTRAVA</h6>
                        <p>Ostrava</p>
                        <p>Informatika</p>
                    </div>
                    <div className="col-sm-4" style={{textAlign: 'center'}}>
                        <p>2022 - současnost</p>
                    </div>
                    <div className="col-sm-5">
                        <h6 style={{color: '#0073ff'}}>VYŠŠÍ ODBORNÁ ŠKOLA</h6>
                        <h6 style={{color: '#0073ff'}}>A STŘENÍ PRŮMYSLOVÁ ŠKOLA</h6>
                        <h6 style={{color: '#0073ff'}}>ELEKTROTECHNICKÁ</h6>
                        <p>Olomouc</p>
                        <p>Elektrotechnika</p>
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