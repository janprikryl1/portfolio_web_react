import React, { useState } from "react";
import ExpandIcon from "../../static/images/expand-arrow-icon.svg";
import {useTranslation} from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div>
      <div className="col-sm-16" id="skills" style={{ marginTop: '50px', marginBottom: '20px' }}>
        <h1 style={{ color: '#0073ff' }}>
          {t("Skills")}
          <img
            id="skills_arrow"
            className="arrow"
            src={ExpandIcon}
            width={40}
            height={40}
            onClick={toggleSkills}
            alt="expand-icon"
          />
        </h1>
        <div id="skills_content" className={`collapse ${showSkills ? 'show' : ''}`}>
          <p>{t("Languages")}, {t("libraries")}, {t("technologies")}, {t("Others")}</p>
          <div className="container">
            <div className="row" style={{ paddingBottom: '50px' }}>
            <div className="col-sm-2">
              <div className="list-group" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" data-toggle="list" href="#list-python" role="tab" aria-controls="home">
                  Python
                </a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#list-web" role="tab" aria-controls="profile">
                  {t("Webs")}
                </a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#list-android" role="tab" aria-controls="messages">
                  Android
                </a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#list-mcu" role="tab" aria-controls="messages">
                  {t("Electro")}
                </a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#list-others" role="tab" aria-controls="settings">
                  {t("Others")}
                </a>
              </div>
            </div>
            <div className="col-sm-8" style={{ width: '70%' }}>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-python" role="tabpanel" aria-labelledby="list-home-list">
                  <ul>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>PyQt</li>
                    <li>Tkinter</li>
                    <li>Kivi</li>
                    <li>OpenCV</li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="list-web" role="tabpanel" aria-labelledby="list-profile-list">
                  <ul>
                    <li>React</li>
                    <li>Python (Django, flask)</li>
                    <li>Javascript, jQuery</li>
                    <li>CSS (Bootstrap)</li>
                    <li>SQL {t("database")}</li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="list-android" role="tabpanel" aria-labelledby="list-messages-list">
                  <p>{t("Application development")} ({t("most")} Java)</p>
                </div>
                <div className="tab-pane fade" id="list-mcu" role="tabpanel" aria-labelledby="list-messages-list">
                  <p>Raspberry PI, Arduino, STM, ...</p>
                </div>
                <div className="tab-pane fade" id="list-others" role="tabpanel" aria-labelledby="list-settings-list">
                  <ul>
                    <li>Microsoft Office</li>
                    <li>Windows, Linux, Mac OS X</li>
                    <li>Git</li>
                    <li>{t("Editing images in Gimp")}</li>
                    <li>{t("Video editing")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
