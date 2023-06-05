import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function Notfound () {
    return (
        <div className="wrapper">
            <Header/>
            <div className="main error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                    <p className="lien">Retourner sur la page d'accueil</p>
                </NavLink>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Notfound;