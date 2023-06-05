import React from "react";
import Nav from "../components/Nav";
import logo1 from "../assets/logo_kasa.png"

function Header () {
    return (
        <div className="header">
            <img src={logo1} alt="logo Kasa"/>
            <Nav/>
        </div>
    )
}

export default Header;