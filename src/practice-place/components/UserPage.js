import React from 'react';
import {Link} from 'react-router-dom';
const UserPage = (props) => (<div>
    <h1> welcome to user page</h1>
    <p> I am {props.match.params.id} </p>
    <Link to='/users'> go back </Link>
</div>);
export default UserPage;