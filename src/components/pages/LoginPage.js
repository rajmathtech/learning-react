import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../../redux/actions/auth';
export const LoginPage = ({startLogin}) => (
    <div> 
    <h1> welcome to Log in Page </h1>
    <button onClick={startLogin}> LogIn </button>
    </div>
);
const mapDispatchToProps = (dispatch) =>{
    return {
        startLogin: () => dispatch(startLogin())
    }
}
export default connect(undefined, mapDispatchToProps)(LoginPage);