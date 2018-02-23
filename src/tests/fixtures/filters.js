import moment from 'moment';
export const filter = {
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
    sortBy:'date',
    text: ''
};
export const altFilter = {
    text:'rent',
    startDate: moment(0).subtract(4),
    endDate: moment(0).add(4),
    sortBy:'amount'
};
export const filterTest = {
    startDate:undefined,
    endDate:undefined,
    sortBy:'date',
    text: ''
};