import React from "react";
import VerticalIcons from "../components/VerticalIcons";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Photo from "../../static/images/img2.png"
import Education from "../components/Education";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import {useTranslation} from "react-i18next";

function Index() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="container" id="overview" style={{ paddingLeft: '15px' }}>
                <div className="row" style={{ paddingTop: '5px' }}>
                    <div className="col-sm-8">
                        <h1 style={{ color: '#0073ff' }} id="title">{t("Hi")},</h1>
                        <h1 id="welcome">{t("My name is")} Jan Přikryl</h1>
                        <Link to="contact" className="nav-link" style={{ marginTop: '5px' }} id="contact"><Button variant='outline-primary'>{t("Text me")}</Button></Link>
                        <VerticalIcons />
                    </div>
                    <div className="col-sm-4">
                        <img id="photo" src={Photo} style={{ width: '300px', paddingTop: '20px' }} alt="Jan Přikryl" />
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row" style={{ bottom: '0', height: '0px', position: 'absolute', marginTop: '100px' }}>
                    <div className="col-sm-16" id="about">
                        <h1>{t("Welcome to my web")},</h1>
                        <br />
                        <h3 style={{ paddingRight: '60px' }}>{t("I am a student, programmer and I like to learn new things")}.</h3>
                        <hr className="featurette-divider" />
                        <Education />
                        <Experiences />
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
