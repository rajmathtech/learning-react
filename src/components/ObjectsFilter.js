import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setText, setSortBy, setStartDate, setEndDate } from '../redux/actions/filter';

export class ObjectsFilter extends React.Component {
  state = {
    focused: null
  };
  onChangeText = (e) => {
    const text = e.target.value;
    this.props.setText(text);
    }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (focused) => {
    this.setState(() => ({ focused }));
  }
  render() {
    return (
      <div>
      <input type="text" value={this.props.filter.text} 
      onChange={this.onChangeText} />
        <select
          value={this.props.filter.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.setSortBy('date');
            } else if (e.target.value === 'amount') {
              this.props.setSortBy('amount');
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filter.startDate}
          endDate={this.props.filter .endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({ filter: state.filter });
const mapDispatchToProps = (dispatch) => ({
  setText: (text) => dispatch(setText(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setSortBy: (by) => dispatch(setSortBy(by))

});
export default connect(mapStateToProps, mapDispatchToProps)(ObjectsFilter);
