import {addObject, 
    getObjects, 
    editObject, 
    startDeleteObject,
    deleteObject, 
    startAddObject, 
    getObject, 
    startGetObjects} from '../../../redux/actions/object';
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
//delete object
test('should remove the object two', () => {
    const remObj = deleteObject(objects[1].id);
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
//asyn delete
test('should remove the object two from database and store: test remaining', (done) => {
    const store = createMockStore(objects);
    const id = objects[1].id;
    store.dispatch(startDeleteObject(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'DELETE_OBJECT', 
            id
        });
        return db.ref(`objects`).once('value');
    }).then((snapshot) => { 
        const objs = [];
        snapshot.forEach((childSnapshot) => {
            objs.push({
                id:childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        expect(objs).toEqual([objects[0], objects[2]]);
        done();
    }).catch((er) => {
        console.log(er); 
        done();
    });
});
//
test('should remove the object two from database and store:test deleted', (done) => {
    const store = createMockStore(objects);
    const id = objects[1].id;
    store.dispatch(startDeleteObject(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'DELETE_OBJECT', 
            id
        });
        return db.ref(`objects/id`).once('value');
    }).then((snapshot) => { 
        // expect(snapshot.val()).toEqual(null);
        expect(snapshot.val()).toBeFalsy();
        done();
    }).catch((er) => {
        console.log(er); 
        done();
    });
});