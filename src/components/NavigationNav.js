import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../redux/actions/auth';
export const NavigationNav = ({startLogout}) => (

<nav className="navigation">
    <ul className="navigation__list">
        <li className="navigation__item">
            <NavLink to="/objects" activeClassName="active-link" className="navigation__link">
                Home
            </NavLink>
        </li>
        <li className="navigation__item">
            <NavLink to="/create" activeClassName="active-link" className="navigation__link">
                Create
            </NavLink>
        </li>
        <li className="navigation__item">
            <button onClick = {startLogout}> Logout </button>
        </li>
    </ul>
</nav>

);

const mapDispatchToProps = (dispatch) =>{
    return {
        startLogout: () => dispatch(startLogout())
    }
}
export default connect(undefined, mapDispatchToProps)(NavigationNav);