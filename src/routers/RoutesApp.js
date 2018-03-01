import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import creatHistory from 'history/createBrowserHistory';
import LoginPage from '../components/pages/LoginPage';
import ObjectsPage from '../components/pages/ObjectsPage';
import CreateObjectPage from '../components/pages/CreateObjectPage';
import DisplayObjectPage from '../components/pages/DisplayObjectPage';
import EditObjectPage from '../components/pages/EditObjectPage';
import PageNotFound from '../components/pages/PageNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = creatHistory();
const RoutesApp = ()=> (
    <Router history={history}> 
        <div className="container">
            <Switch>
                <PublicRoute exact path='/' component={LoginPage}/>
                <PrivateRoute exact path='/objects' component={ObjectsPage}/>  
                <PrivateRoute exact path='/create' component={CreateObjectPage}/>
                <PrivateRoute path='/display/:id' component={DisplayObjectPage}/>
                <PrivateRoute path='/edit/:id' component={EditObjectPage}/>
                <Route component={PageNotFound}/> 
            </Switch>
        </div>
    </Router>
);
export default RoutesApp;