import React from 'react';
import { Link } from 'react-router-dom';
import { deleteObject } from '../../redux/actions/object';
import { connect } from 'react-redux';
const DisplayObjectPage = (props) => {
    let obj=undefined;const id=props.match.params.id;
    props.objects.filter((object) => 
    {
        if (object.id === props.match.params.id) {
            obj=object;
            return true;
        }
    });
    const onDeleteObject = () => {
        props.dispatch(deleteObject(obj));  
        props.history.push('/');  
    }
    return (<div className="fullPage"> 
        <div className="popup-content">
            <h1> Welcome to Edit Object {id}</h1>
            {obj.details}
            <Link to="/" className="editLink"> Go back</Link>
            <Link to={`/edit/${id}`} className="editLink"> Edit</Link>
            <button onClick={onDeleteObject}> Delete </button>
        </div>  
    </div>);
};
    
const mapStateToProps = (state)=>
{ 
    return {
        objects:state.objects
    };
};
export default connect(mapStateToProps)(DisplayObjectPage);
