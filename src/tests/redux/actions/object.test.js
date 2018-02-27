import {addObject, getObjects, editObject, deleteObject, startAddObject, getObject, startGetObjects} from '../../../redux/actions/object';
import objects from '../../fixtures/objects';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const createMockStore = configureMockStore([thunk]);
import db from '../../../firebase/firebase';
beforeEach((done) => {
    const objectsData = {};
    objects.forEach((object) => {
        objectsData[object.id] = {
            title:object.title,
            details:object.details,
            amount:object.amount,
            createdAt:object.createdAt
        };
    });
    db.ref('objects').set(objectsData).then(() => {
        done();
    });
});
//add new object
test('should set new object', () => {
    const object = addObject(objects[1]);
    expect(object).toEqual(
    {
        type:'ADD_OBJECT',
         object: objects[1]
    });
});
//get objects
test('should get objects', () => {
    const recieved = getObjects([objects[0]]);
    expect(recieved).toEqual({type:'GET_OBJECTS', objects:[objects[0]]});
});
test('should get  objects from database', (done) => {
    const store = createMockStore({});
    store.dispatch(startGetObjects()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'GET_OBJECTS', 
            objects
        });
        done();    
    });

});
//edit object
test('should edit object title', () => {
    const obj = objects[0];
    const updateTo = {...obj, title:'edited object one'};
    const editedObj = editObject(obj, updateTo);
    expect(editedObj).toEqual({
        type:'EDIT_OBJECT',
        updateTo, id: expect.any(String)
        });
});
//remove object
test('should remove the object two', () => {
    const remObj = deleteObject(objects[1]);
    expect(remObj).toEqual({type:'DELETE_OBJECT', 
    ...remObj, id:expect.any(String)});
});
//asyn with database
test('should set new object to database and store', (done) => {
    const store = createMockStore({});
    const object = {
        title:'store object',
        details: 'store details',
        amount: 10,
        createdAt: 1200
    };
    store.dispatch(startAddObject(object)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_OBJECT', 
            object:{
                id:expect.any(String),
                ...object
            }
        });
        return db.ref(`objects/${actions[0].object.id}`).once('value');
    }).then((snapshot) => { 
        expect(snapshot.val()).toEqual(object);
        done();
    }).catch((er) => {
        console.log(er); 
        done();
    });

});
test('should set default object to database and store', (done) => {
    const store = createMockStore({});
    const object = { 
        title:'',
        details:'',
        amount:0,
        createdAt:0
    };
    store.dispatch(startAddObject()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_OBJECT', 
            object:{
                id:expect.any(String),
                ...object
            }
        });
        return db.ref(`objects/${actions[0].object.id}`).once('value');
    }).then((snapshot) => { 
        expect(snapshot.val()).toEqual(object);
        done();
    }).catch((er) => {
        console.log(er); 
        done();
    });

});