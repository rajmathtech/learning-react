import React from 'react';
import {connect} from 'react-redux';
import ObjectForm from '../ObjectForm';
import { startAddObject } from '../../redux/actions/object';
export class CreateObjectPage extends React.Component{
    onSubmitForm= (object) => {
        this.props.startAddObject(object);
        this.props.history.push('/'); 
     };
    render () {
        return (<div className="container__main">
        <h1 className="heading-primary"> Welcome to Create Object</h1>
        <ObjectForm  object={{}} onSubmitForm={this.onSubmitForm}/>
        </div>)
    }
} 

const mapDispatchToProps = (dispatch) => ({
    startAddObject:(object)=>dispatch(startAddObject(object))
});

export default connect(undefined, mapDispatchToProps)(CreateObjectPage);