import React from 'react';
import ReactDOM from 'react-dom';
import {addObject, editObject, deleteObject} from '../redux/actions/object';
import {setText, 
    setSortBy, 
    setEndDate, 
    setStartDate} from '../redux/actions/filter';
import filteredObjects from '../redux/selector/filteredObjects';
import storeObjects from '../redux/store/configStore';
import {Provider, connect} from 'react-redux';
const ele = document.getElementById('appRoot');

//object test
const obj1=storeObjects.dispatch(addObject({title:'for room rent', details:'first month rent', createdAt:40}));
const obj2=storeObjects.dispatch(addObject({title:'for water bill', details:'last month rent', createdAt:5}));
const obj3=storeObjects.dispatch(editObject(obj2.object, {title:'for water:Update bill again', details:'last month:update again', createdAt:5}));
// console.log(obj3);
// const obj4=storeObjects.dispatch(deleteObject(obj3));

//filters test
// storeObjects.subscribe(()=>{
//     console.log(storeObjects.getState());
// });
storeObjects.dispatch(setText('rent'));
storeObjects.dispatch(setStartDate(1));
storeObjects.dispatch(setEndDate(100));
storeObjects.dispatch(setSortBy('date'));
storeObjects.dispatch(setSortBy('amount'));
const {objects, filter} = storeObjects.getState();
// // console.log(objects);
// console.log(filter);
console.log(filteredObjects(objects, filter));
const Info = (props) => (
        <div> 
        <h1> Info componet </h1>
        <h2> {props.info} </h2>
        </div>
);  

const Wrapper = (WrappedCompo) => 
    (props) => (
        <div>
            {props.isAuth ? <WrappedCompo {...props}/> : <h1>Not allowed!!</h1>}
        </div>
    );

const Hoc = Wrapper(Info);
// ReactDOM.render(<Info  obj={{info:"there are some information!", val:2}} k1="4" />, ele);
// ReactDOM.render(<Hoc isAuth={true} info="there are some information!"/>, document.getElementById('appRoot'));
const mapStateToProps = (state)=>{
    return {
    objects:state.objects
    };
}
const ConnectedCompo = connect(mapStateToProps)(Info);
//very important to have opening and closing component inside the Provider as a child

const jsx = (<Provider store={storeObjects}> 
        <ConnectedCompo info="there are some information!"></ConnectedCompo>
    </Provider>);

ReactDOM.render(jsx, ele);
