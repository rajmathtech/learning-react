import {setText,  setStartDate, setEndDate, setSortBy} from '../../../redux/actions/filter';
import moment from 'moment';
test('should set default text', () => {
    const received = setText();
    const expected = {type:'SET_TEXT', text:''};
    expect(received).toEqual(expected);
});
test('should set default text', () => {
    const received = setText('rent');
    const expected = {type: 'SET_TEXT', text: 'rent'};
    expect(received).toEqual(expected);
});
test('should set start date', () => {
    const received = setStartDate(moment(0).valueOf());
    const expected = {type: 'SET_START_DATE', startDate: moment(0).valueOf()};
    expect(received).toEqual(expected);
});
test('should set end date', () => {
    const received = setEndDate(moment(0).add(4, 'days').valueOf());
    const expected = {type: 'SET_END_DATE', endDate: moment(0).add(4,'days').valueOf()};
    expect(received).toEqual(expected);
});
test('should set sort by date', () => {
    const received = setSortBy('date');
    const expected = {type: 'SET_SORT_BY', sortBy: 'date'};
    expect(received).toEqual(expected);
});
test('should set sort by amount', () => {
    const received = setSortBy('amount');
    const expected = {type: 'SET_SORT_BY', sortBy: 'amount'};
    expect(received).toEqual(expected);
});