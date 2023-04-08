import React from "react";
import { NavLink } from "react-router-dom";
import logoHeader from "../assets/logo.png";

function Navigation() {
  return (
    <div className="header">
      <NavLink className="header__logo" to='/'>
        <img src={logoHeader} alt="logo" />
      </NavLink>
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink to='/' className={({isActive}) => (isActive ? 'active-link' : undefined)}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({isActive}) => (isActive ? 'active-link' : undefined)}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
