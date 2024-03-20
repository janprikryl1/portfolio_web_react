import Component from "../components/Component";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Skeleton from 'react-loading-skeleton';


function Projects() {
    const { t, i18n } = useTranslation();
    const [webs, loadWebs] = useState([]);
    const [apps, loadApps] = useState([]);
    const [others, loadOthers] = useState([]);
    useEffect(() => {
        fetch("/api/load_all", {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
            }).then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {

                }
           }).then((data) => {
             loadWebs(data.webs);
             loadApps(data.apps);
             loadOthers(data.others);
           }).catch((response) => {
               console.log("error getting data");
           });
    }, []);

    return (
        <div>
            <div className="container" id="webs">
                <h2>{t("Webs")}</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" style={{marginTop: '-15px', marginLeft: '0.1%'}}>
                    {webs.map((web) => (
                       <Component title={i18n.language === 'cs'?web.title:web.title_en} url={web.url} purpose={i18n.language === 'cs'?web.purpose:web.purpose_en} id={web.id}/>
                        )) || <Skeleton />}
                </div>
                <hr className="featurette-divider" style={{width: '100%'}}/>
            </div>
            <div className="container" id="apps">
                <h2>{t("Applications")}</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" style={{marginTop: '-15px', marginLeft: '0.1%'}}>
                    {apps.map((app) => (
                        <Component title={i18n.language === 'cs'?app.title:app.title_en} url={app.url} purpose={i18n.language === 'cs'?app.purpose:app.purpose_en} id={app.id}/>
                    )) || <Skeleton />}
                </div>
                <hr className="featurette-divider" style={{width: '100%'}}/>
            </div>
            <div className="container" id="others">
                <h2>{t("Others")}</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" style={{marginTop: '-15px', marginLeft: '0.1%'}}>
                    {others.map((other) => (
                        <Component title={i18n.language === 'cs'?other.title:other.title_en} url={other.url} purpose={i18n.language === 'cs'?other.purpose:other.purpose_en} id={other.id}/>
                    )) || <Skeleton />}
                </div>
                <hr className="featurette-divider" style={{width: '100%'}}/>
            </div>
        </div>
    )
}
export default Projects;