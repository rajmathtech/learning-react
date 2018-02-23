import React from 'react';
import {Link} from 'react-router-dom';
const ObjectSingle = (props) => (
    <div className="singleObject"> 
        <Link to={`display/${props.object.id}`} className="objectLink" >
            {props.object.title.toUpperCase()}
        </Link>
    </div>
);
export default ObjectSingle;