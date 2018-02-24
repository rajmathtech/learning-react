import React from 'react';
import { Link } from 'react-router-dom';
import { deleteObject } from '../../redux/actions/object';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
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
    return (<div className="popup" id="popup"> 
        <div className="popup__content">
            <h1> Welcome to Edit Object Page</h1>
            <h2>{obj.details}</h2>
            <h3>{moment(obj.createdAt).format('MMMM Do, YYYY')}</h3>
            <h3>{numeral(obj.amount).format('$0,0.00')}</h3>
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
