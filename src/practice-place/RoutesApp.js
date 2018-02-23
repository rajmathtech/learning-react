import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderPage from '../components/HeaderPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import UsersPage from '../components/UsersPage';
import UserPage from '../components/UserPage';
import PageNotFound from '../components/PageNotFound';
const RoutesApp = ()=> (
    <BrowserRouter> 
        <div className="container">
            <HeaderPage /> 
            <Switch>
                <Route exact path='/' component={HomePage}/> 
                <Route path='/contact' component={ContactPage}/> 
                <Route exact path='/users' component={UsersPage}/>
                <Route  path='/users/:id' component={UserPage}/> 
                <Route component={PageNotFound}/> 
            </Switch>
        </div>
    </BrowserRouter>
);
export default RoutesApp;