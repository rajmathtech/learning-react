import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import fltReducer from '../reducers/fltReducer';
import objReducer from '../reducers/objReducer';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const storeObjects = createStore(
        combineReducers({
            objects: objReducer,
            filter: fltReducer,
            auth: authReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default storeObjects;

 