import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import UsersPage from './components/UsersPage';
import RoutesApp from './routers/RoutesApp';
const users = ['user one', 'user two', 'user three'];
UsersPage.defaultProps = {users};
const appRoot = document.getElementById('appRoot');

ReactDOM.render(<RoutesApp />, appRoot);