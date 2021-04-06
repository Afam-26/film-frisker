// import { blue, grey, red } from "@material-ui/core/colors";
import React from "react";
import"./Header.css"
import logo from "../img/logo.png"


function Header(){
    return (
        <span className="header">
            <img className="header-image" src={logo}></img>
        </span>
    )
}

export default Header;
