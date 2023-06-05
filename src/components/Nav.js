import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {

  return (
    <div className="navigation">
      <nav>
        <NavLink exact="true" to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink exact="true" to="/about" activeclassname="active">
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;

