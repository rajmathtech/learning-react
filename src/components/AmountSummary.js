import React from 'react';
import numeral from 'numeral';
import totalAmount from '../redux/selector/totalAmountObjects';
const AmountSummary = (props) => {
    const len = props.objects.length;
    const total = numeral(totalAmount(props.objects)/100).format('$0,0.00');
    return (<div>
    <h1> You are viewing { len > 1 ? ` ${len} objects of total ${total}` : ` ${len} object of total ${total}` }</h1>
</div>);
    }
export default AmountSummary;