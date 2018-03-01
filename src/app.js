import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import RoutesApp, {history} from './routers/RoutesApp';
import {startAddObject,
    startGetObjects, 
    editObject,
    deleteObject} from './redux/actions/object';
import {login, logout} from './redux/actions/auth';
import {setText, 
    setSortBy, 
    setEndDate, 
    setStartDate} from './redux/actions/filter';
import filteredObjects from './redux/selector/filteredObjects';
import total from './redux/selector/totalAmountObjects';
import storeObjects from './redux/store/configStore';
import {firebase} from '../src/firebase/firebase';
const appRoot = document.getElementById('appRoot');
const jsx = (<Provider store={storeObjects}> 
    <RoutesApp />
</Provider>);
ReactDOM.render(<p> Loading...</p>, appRoot);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, appRoot);
        hasRendered = true;
    }
    
}

firebase.auth().onAuthStateChanged((user) => {
if (user) {
    storeObjects.dispatch(login(user.uid));
    storeObjects.dispatch(startGetObjects()).then(() => {
        renderApp();
        if (history.location.pathname === '/') {   
            history.push('/objects');
        }
    });
} else {
    storeObjects.dispatch(logout());
    renderApp();
    history.push('/');
}
});