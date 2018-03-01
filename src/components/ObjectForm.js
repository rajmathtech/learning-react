import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
export default class ObjectForm extends React.Component {
  constructor(props) {
    super(props);
    const { title, details, amount, createdAt } = this.props.object;
    this.state = {
      title: title ? title : "",
      details: details ? details : "",
      createdAt: createdAt ? moment(createdAt) : moment(),
      amount: amount ? (amount / 100).toString() : "",
      error: "",
      focused: false
    };
  }
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };
  render() {
    return (
      <div>
        <h1>from Object form </h1>
        <h2>{this.state.error}</h2>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            name="details"
            rows="10"
            cols="50"
            placeholder="details"
            value={this.state.details}
            onChange={this.onDetailsChange}
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <button type="submit"> Add </button>
        </form>
      </div>
    );
  }
  onSubmitForm = e => {
    e.preventDefault();

    if (!this.state.amount || !this.state.title) {
      this.setState(() => ({ error: "Please enter title and amount!" }));
    } else {
      this.props.onSubmitForm({
        ...this.state,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onDetailsChange = e => {
    const details = e.target.value;
    this.setState(() => ({ details }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
}
