import Component from "../components/Component";
import {useEffect, useState} from "react";

function Projects() {
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
                <h2>Weby</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" style={{marginTop: '-15px', marginLeft: '0.1%'}}>
                    {webs.map((web) => (
                       <Component title={web.title} url={web.url} purpose={web.purpose} id={web.id}/>

                        ))}
                </div>
                <hr className="featurette-divider" style={{width: '100%'}}/>
            </div>
            <div className="container" id="apps">
                <h2>Aplikace</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" style={{marginTop: '-15px', marginLeft: '0.1%'}}>
                    {apps.map((app) => (
                        <Component title={app.title} url={app.url} description={app.description} id={app.id}/>
                    ))}
                </div>
                <hr className="featurette-divider" style={{width: '100%'}}/>
            </div>
            <div className="container" id="others">
                <h2>Ostatní</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" style={{marginTop: '-15px', marginLeft: '0.1%'}}>
                    {others.map((other) => (
                        <Component title={other.title} url={other.url} description={other.description} id={other.id}/>
                    ))}
                </div>
                <hr className="featurette-divider" style={{width: '100%'}}/>
            </div>
        </div>
    )
}
export default Projects;