import {createStore, combineReducers} from 'redux';
import fltReducer from '../reducers/fltReducer';
import objReducer from '../reducers/objReducer';
    const storeObjects = createStore(
        combineReducers({
            objects: objReducer,
            filter: fltReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default storeObjects;

 