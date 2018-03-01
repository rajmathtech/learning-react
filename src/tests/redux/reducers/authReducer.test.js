import authReducer from '../../../redux/reducers/authReducer';
test('should set default state', () => {
    const receivedState = authReducer(undefined, {type:'@@INIT'});
    expect(receivedState).toEqual({});
});
test('should set login state', () => {
    const curState = {uid:'someid12'};
    const action =  {type:'LOGIN',uid:'someid12'}
    const receivedState = authReducer(undefined, action);
    expect(receivedState).toEqual(curState);
});
test('should set logout state', () => {
    const curState = {uid:'someid12'};
    const action =  {type:'LOGOUT'}
    const receivedState = authReducer(curState, action);
    expect(receivedState).toEqual({});
});