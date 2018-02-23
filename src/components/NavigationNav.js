import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationNav = (props) => (

<nav className="navigation">
    <ul className="navigation__list">
        <li className="navigation__item">
            <NavLink to="/" exact activeClassName="active-link" className="navigation__link">
                Home
            </NavLink>
        </li>
        <li className="navigation__item">
            <NavLink to="/create" activeClassName="active-link" className="navigation__link">
                Create
            </NavLink>
        </li>
    </ul>
</nav>

);

export default NavigationNav;