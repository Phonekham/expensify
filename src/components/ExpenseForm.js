import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("Do MMM YYYY"));

// Setup note state

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calendarfocused: false,
    error: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmontChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarfocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please provide description and amount" }));
    } else {
      this.setState(() => ({ error: "" }));
      console.log("submitted");
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmontChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarfocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
