import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-justified">
            <li><a href="/">Cartoon Clicky Game</a></li>
            <li>Score: <span>{props.curScore}</span> </li>
            <li>Top Score: <span>{props.topScore}</span></li>
        </ul>
    </div>
);

export default Nav;