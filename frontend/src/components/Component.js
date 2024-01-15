import {Link} from "react-router-dom";

function Component(props) {
    return (
        <div className="col">
            <div
                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg d-flex flex-column h-100 p-5 pb-3 text-shadow-1"
                style={{backgroundImage: `url('${props.url}')`, backgroundRepeat: "no-repeat"}}>
                <Link to={'/project/'+props.id} style={{textDecoration: 'none'}}>
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.title}</h2>
                    <p style={{color: 'white'}}>{props.purpose}</p>
                </Link>
            </div>
        </div>
    )
}

export default Component;