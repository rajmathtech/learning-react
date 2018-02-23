import React from 'react';
import {NavLink} from 'react-router-dom';
const HeaderPage = () => (<div>
    <NavLink to="/" exact activeClassName="active-link"> home </NavLink>
    <NavLink to="/contact" activeClassName="active-link"> contact </NavLink>
    <NavLink to="/users" activeClassName="active-link"> users </NavLink>
</div>);
export default HeaderPage;