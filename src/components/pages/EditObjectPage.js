import React from 'react';
import ObjectForm from '../ObjectForm';
import {connect} from 'react-redux';
import { startEditObject }  from '../../redux/actions/object';
export class EditObjectPage extends React.Component{
    onSubmitForm = (update) => {    
        this.props.startEditObject(this.props.object.id, update);
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
    startEditObject: (id, update) => dispatch(startEditObject(id, update))
})
 const mapStateToProps = (state, props) =>({
    object:state.objects.find((object) => object.id === props.match.params.id)
 });

export default connect(mapStateToProps, mapDispatchToProps)(EditObjectPage);