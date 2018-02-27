import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import fltReducer from '../reducers/fltReducer';
import objReducer from '../reducers/objReducer';
import thunk from 'redux-thunk';
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    const storeObjects = createStore(
        combineReducers({
            objects: objReducer,
            filter: fltReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default storeObjects;

 