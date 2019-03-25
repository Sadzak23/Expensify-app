import React from "react";
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import 'react-dates/initialize';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused });
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  };
  onSortByChange = (e) => {
    if (e.target.value === "amount") {
      this.props.sortByAmount()
    } else if (e.target.value === "date") {
      this.props.sortByDate()
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="item_group">
          <div className="item_group__item">
            <input
              className="text-input"
              type="text"
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange} />
          </div>
          <div className="item_group__item">
            <select
              className="select"
              value={this.props.filters.value}
              onChange={this.onSortByChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="item_group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId="start-date_id"
              endDate={this.props.filters.endDate}
              endDateId="end-date_id"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              firstDayOfWeek={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)