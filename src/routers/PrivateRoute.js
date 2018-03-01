import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import NavigationNav from '../components/NavigationNav';
export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    return (<Route {...rest} 
       component = { (props) => isAuthenticated ? (
        <div>
            <NavigationNav />
            <Component {...props}/>
        </div>
       ) : (<Redirect to='/' />)}
       />);
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}
export default connect(mapStateToProps)(PrivateRoute);