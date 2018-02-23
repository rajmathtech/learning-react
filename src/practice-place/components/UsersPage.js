import React from 'react';
import {Link} from 'react-router-dom';
const UsersPage = (props) => (<div>
    <h1> welcome to users page</h1>
    {
        props.users.map(
            (user, index) => <Link key= {index} to={`/users/${index}`}> {user} </Link>
       )
    }
</div>);
export default UsersPage;