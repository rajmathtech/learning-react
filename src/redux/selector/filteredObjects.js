import moment from 'moment';

export default (objects, {startDate, text, endDate, sortBy}) => {
    return objects.filter(({ details, createdAt, title}) => {
        const createdAtMoment = moment(createdAt);
        // const startDateMatched = typeof startDate === 'undefined'  || startDate <= createdAt;
        const startDateMatched = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        // const endDateMatched = typeof endDate === 'undefined' || endDate >= createdAt;
        const endDateMatched = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatched = !text ||title.toLowerCase().includes(text.toLowerCase());
        return startDateMatched && endDateMatched && textMatched;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? -1 : 1;
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1;
        }
    });
}