import moment from 'moment';
const filter = {
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
    sortBy:'date',
    text: ''
};
export default (state=filter, {type, startDate,endDate, text, sortBy}) => {
    switch (type){
        case 'SET_TEXT':
            return {...state, text};
        case 'SET_START_DATE':
            return {...state, startDate};
        case 'SET_END_DATE':
            return {...state, endDate};
        case 'SET_SORT_BY':
            return {...state, sortBy};
        default: 
            return {...state};
    }
}