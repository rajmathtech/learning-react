// import React from 'react';
// import {shallow} from 'enzyme';
import { login, logout } from '../../../redux/actions/auth';
test('should set login action generator', () => {
    const uid = 'someid123';
    const recieved = login(uid);
    expect(recieved).toEqual({type:'LOGIN', uid});
});
test('should set logout action generator', () => {
    const recieved = logout();
    expect(recieved).toEqual({type:'LOGOUT'});
});