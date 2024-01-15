import {Image} from "react-bootstrap";
import React from "react";

function Icon(props) {
    return (
        <Image src={props.src} alt={props.alt} width={40} height={45} />
    )
}
export default Icon;