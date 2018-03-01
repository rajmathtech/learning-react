import React from 'react';
import { Link } from 'react-router-dom';
import { startDeleteObject } from '../../redux/actions/object';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
const DisplayObjectPage = (props) => {
    const onDeleteObject = () => {
        props.dispatch(startDeleteObject(props.object.id));  
        props.history.push('/');  
    }
    const {id, title, details, amount, createdAt} = props.object;
    return  (<div className="popup"> 
        <div className="popup__content">
            <h1> Welcome to Edit Object Page</h1>
            <h2>{title}</h2>
            <h2>{details}</h2>
            <h3>{moment(createdAt).format('MMMM Do, YYYY')}</h3>
            <h3>{numeral(amount/100).format('$0,0.00')}</h3>
            <Link to="/" className="editLink"> Go back</Link>
            <Link to={`/edit/${id}`} className="editLink"> Edit</Link>
            <button onClick={onDeleteObject}> Delete </button>
        </div>  
    </div>);
};
    
const mapStateToProps = (state, props)=>
{ 
    return {
        object:state.objects.find((obj) => 
        {
            if (obj.id === props.match.params.id) {
                return true;
            }
        })
    };
};
export default connect(mapStateToProps)(DisplayObjectPage);
