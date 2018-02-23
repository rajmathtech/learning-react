import {filter, altFilter} from '../../fixtures/filters';
import fltReducer from '../../../redux/reducers/fltReducer';
import moment from 'moment';
test('should set default filter', () => {
    const receivedState = fltReducer(undefined, {type:'@@INIT'});
    expect(receivedState).toEqual(filter);
});
test('should set default filter with text', () => {
    const text = 'rent';
    const receivedState = fltReducer(undefined, {type:'SET_TEXT', text});
    expect(receivedState).toEqual({...filter, text});
});
//'SET_START_DATE'
test('should set default filter with start date', () => {
    const startDate =  moment(0).subtract(4).valueOf();
    const receivedState = fltReducer(undefined, {type:'SET_START_DATE', startDate});
    expect(receivedState).toEqual({...filter, startDate});
});
//'SET_END_DATE'
test('should set default filter with end date', () => {
    const endDate =   moment(0).add(4).valueOf();
    const receivedState = fltReducer(undefined, {type:'SET_END_DATE', endDate});
    expect(receivedState).toEqual({...filter, endDate});
});
//'SET_SORT_BY'
test('should set default filter with sort by', () => {
    const sortBy = 'amount';
    const receivedState = fltReducer(undefined, {type:'SET_SORT_BY', sortBy});
    expect(receivedState).toEqual({...filter, sortBy});
});
test('should set default filter with sort by', () => {
    const sortBy = 'date';
    const receivedState = fltReducer(undefined, {type:'SET_SORT_BY', sortBy});
    expect(receivedState).toEqual({...filter, sortBy});
});