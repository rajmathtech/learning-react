import {createStore} from 'redux';
const store = createStore((state={count:0}, action) => {
    // console.log(action);//default {type: "@@redux/INIT"}
    // console.log(state);
    return state;
});
console.log(store.getState());