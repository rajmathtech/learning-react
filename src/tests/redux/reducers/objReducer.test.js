import objects from '../../fixtures/objects';
    
import objReducer from '../../../redux/reducers/objReducer';
import moment from 'moment';
test('should set default object', () => {
    const receivedState = objReducer(undefined, {type:'@@INIT'});
    expect(receivedState).toEqual([]);
});
test('should set default object for adding object', () => {
    const action = {type:'ADD_OBJECT', object:objects[1]};
    const curState= [];
    const receivedState = objReducer(curState, action);
    expect(receivedState).toEqual([
        objects[1] ]);
});
test('should get objects', () => {
    const action = {type:'GET_OBJECTS', objects};
    const curState= [];
    const receivedState = objReducer(curState, action);
    expect(receivedState).toEqual(
        objects );
});
test('should edit an object with id 1 exists', () => {
    const updateTo  = {id:'2', updateTo:{title:'edited title two'}};
    const action = {
        type:'EDIT_OBJECT',
        ...updateTo
    };
    const curState= objects;
    const receivedState = objReducer(curState, action);
    expect(receivedState).toEqual([objects[0],
        {...objects[1], title:'edited title two'},  objects[2]]);
});
test('should edit an object with no id -1 exists', () => {
    const updateTo  = {id:'-1', updateTo:{title:'edited title two'}};
    const action = {
        type:'EDIT_OBJECT',
        ...updateTo
    };
    const curState= objects;
    const receivedState = objReducer(curState, action);
    expect(receivedState).toEqual(objects);
});