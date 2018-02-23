import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import RoutesApp from './routers/RoutesApp';
import {addObject, editObject, deleteObject} from './redux/actions/object';
import {setText, 
    setSortBy, 
    setEndDate, 
    setStartDate} from './redux/actions/filter';
import filteredObjects from './redux/selector/filteredObjects';
import storeObjects from './redux/store/configStore';
import {Provider, connect} from 'react-redux';
const appRoot = document.getElementById('appRoot');

//object test
const obj1=storeObjects.dispatch(addObject({title:'for room rent', details:'first month rent', createdAt:moment().subtract(1,'days').valueOf(), amount:10000}));
const obj2=storeObjects.dispatch(addObject({title:'for water bill', details:'last month rent', createdAt:moment().add(1,'days').valueOf(), amount:20000}));
// const obj3=storeObjects.dispatch(editObject(obj2.object, {title:'for water:Update bill again', details:'last month:update again', createdAt:5, amount:300}));
// const obj4=storeObjects.dispatch(deleteObject(obj3));

//filters test
// storeObjects.dispatch(setText('first'));
// storeObjects.dispatch(setStartDate(1));
// storeObjects.dispatch(setEndDate(100));
storeObjects.dispatch(setSortBy('date'));
storeObjects.dispatch(setSortBy('amount'));
const {objects, filter} = storeObjects.getState();
// console.log('filtered');
// console.log(filteredObjects(objects, filter));

// const mapStateToProps = (state)=>{
//     return {
//         objects:state.objects
//     };
// }
// const ConnectedCompo = connect(mapStateToProps)(Info);
const jsx = (<Provider store={storeObjects}> 
        <RoutesApp />
    </Provider>);
ReactDOM.render(jsx, appRoot);