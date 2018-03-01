import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import NavigationNav from '../components/NavigationNav';
export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    return (<Route {...rest} 
       component = { (props) => isAuthenticated ? (
        <Redirect to='/objects' />
       ) : (<Component {...props}/>)}
       />);
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}
export default connect(mapStateToProps)(PublicRoute);