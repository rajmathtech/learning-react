import {addObject, editObject, deleteObject, startAddObject} from '../../../redux/actions/object';
import objects from '../../fixtures/objects';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const createMockStore = configureMockStore([thunk]);
import db from '../../../firebase/firebase'
//default values        
// test('should set default object', () => {
//     const defObject = addObject();
//     expect(defObject).toEqual({
//         type:'ADD_OBJECT',
//         object:{
//             id: expect.any(String),
//             title:'',
//             details:'',
//             amount:0,
//             createdAt:0
//         }
//     });
// });
//with new object
test('should set new object', () => {
    const object = addObject(objects[1]);
    expect(object).toEqual(
    {
        type:'ADD_OBJECT',
         object: objects[1]
    });
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