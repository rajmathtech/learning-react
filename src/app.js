import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import RoutesApp from './routers/RoutesApp';
import {startAddObject, startGetObjects, editObject, deleteObject} from './redux/actions/object';
import {setText, 
    setSortBy, 
    setEndDate, 
    setStartDate} from './redux/actions/filter';
import filteredObjects from './redux/selector/filteredObjects';
import total from './redux/selector/totalAmountObjects';
import storeObjects from './redux/store/configStore';
import {Provider, connect} from 'react-redux';
// import '../src/firebase/firebase';
// import '../src/practice-place/firebase/firebase';
// import '../src/practice-place/firebase/firebase-part2';
// import '../src/practice-place/firebase/promise';
const appRoot = document.getElementById('appRoot');
//object test
// console.log(startAddObject({title:'for room rent', details:'first month rent', createdAt:moment().subtract(1,'days').valueOf(), amount:10000}));
// const obj1=storeObjects.dispatch(startAddObject({title:'for room rent', details:'first month rent', createdAt:moment().subtract(1,'days').valueOf(), amount:10000}));
// const obj2=storeObjects.dispatch(startAddObject({title:'for water bill', details:'last month rent', createdAt:moment().add(1,'days').valueOf(), amount:20000}));
// const obj3=storeObjects.dispatch(editObject(obj2.object, {title:'for water:Update bill again', details:'last month:update again', createdAt:5, amount:300}));
// const obj4=storeObjects.dispatch(deleteObject(obj3));

//filters test
// storeObjects.dispatch(setText('first'));
// storeObjects.dispatch(setStartDate(1));
// storeObjects.dispatch(setEndDate(100));
// storeObjects.dispatch(setSortBy('date'));
// storeObjects.dispatch(setSortBy('amount'));
// const {objects, filter} = storeObjects.getState();
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
ReactDOM.render(<p> Loading...</p>, appRoot);
storeObjects.dispatch(startGetObjects()).then(() => {
    ReactDOM.render(jsx, appRoot);
});
