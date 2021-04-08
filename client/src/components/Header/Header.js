// import { blue, grey, red } from "@material-ui/core/colors";
import React from "react";
import "./Header.css"
import logo from "../img/filmfriskerlogo.png"


function Header(){
    return (

        <span className="header">
            <img className="logo" src={logo} alt="" />
        </span>
    )
}

export default Header;
