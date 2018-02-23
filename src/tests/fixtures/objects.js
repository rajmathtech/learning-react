import moment from 'moment';
export default [
    {
        id:'1',
        title:'object one',
        details:' details of object one',
        amount: 400,
        createdAt:moment(0).subtract(4, 'days').valueOf()
    },
    {
        id:'2',
        title:'object two',
        details:' details of object two',
        amount: 300,
        createdAt:moment(0).valueOf()
    },
    {
        id:'3',
        title:'object three',
        details:' details of object three',
        amount: 500,
        createdAt:moment(0).add(4, 'days').valueOf()
    }
];