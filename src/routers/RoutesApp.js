import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ObjectsPage from '../components/pages/ObjectsPage';
import CreateObjectPage from '../components/pages/CreateObjectPage';
import DisplayObjectPage from '../components/pages/DisplayObjectPage';
import EditObjectPage from '../components/pages/EditObjectPage';
import PageNotFound from '../components/pages/PageNotFound';
import NavigationNav from '../components/NavigationNav';
const RoutesApp = ()=> (
    <BrowserRouter> 
        <div className="container">
            <NavigationNav />
            <Switch>
                <Route exact path='/' component={ObjectsPage}/>  
                <Route exact path='/create' component={CreateObjectPage}/>
                <Route path='/display/:id' component={DisplayObjectPage}/>
                <Route path='/edit/:id' component={EditObjectPage}/>
                <Route component={PageNotFound}/> 
            </Switch>
        </div>
    </BrowserRouter>
);
export default RoutesApp;