import React from 'react';
import ObjectForm from '../ObjectForm';
import {connect} from 'react-redux';
import { editObject }  from '../../redux/actions/object';
export class EditObjectPage extends React.Component{
    onSubmitForm = (update) => {    
        this.props.editObject(this.props.object, update);
        this.props.history.push('/');
    };
    render () {
        
    return (<div className="container__main">
    <h1 className="heading-primary"> Welcome to Edit Object</h1>
    <ObjectForm object={this.props.object} onSubmitForm={this.onSubmitForm}/>
    </div>);
    }
}
const mapDispatchToProps = (dispatch) => ({
    editObject: (obj, object) => dispatch(editObject(obj, object))
})
 const mapStateToProps = (state, props) =>({
    object:state.objects.find((object) => object.id === props.match.params.id)
 });

export default connect(mapStateToProps, mapDispatchToProps)(EditObjectPage);