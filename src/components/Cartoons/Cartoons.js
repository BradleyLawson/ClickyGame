import React from "react";
import "./Cartoons.css";

const Cartoons = props => (
    <div className = "card">
        <div className = "img-container">
            <a onClick={() => props.selectCartoon(props.id)} className = "thumbnail">
                <img alt={props.id} src={props.image} />
            </a>
        </div>
    </div>
);

export default Cartoons;
