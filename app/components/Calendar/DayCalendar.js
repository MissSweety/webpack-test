import React, { Component } from 'react';

import CalendarHeader from './CalendarHeader';
import CalendarBoard from './CalendarBoard';

class DayCalendar extends Component {
  constructor() {
    super();
    const date = new Date();
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    };
  }
  getPrevMonth() {
    const { year, month, day } = this.state;
    let prevMonth = month - 1;
    let prevYear = year;
    if (month === 0) {
      prevMonth = 11;
      prevYear = year - 1;
    }
    this.setState({
      year: prevYear,
      month: prevMonth,
    })
  }
  getNextMonth() {
    const { year, month, day } = this.state;
    let nextMonth = month + 1;
    let nextYear = year;
    if (month === 11) {
      nextMonth = 0;
      nextYear = year + 1;
    }
    this.setState({
      year: nextYear,
      month: nextMonth,
    })
  }
  render() {
    const { year, month, day } = this.state;
    return (
      <div className="calendar-con">
        <CalendarHeader
          getPrevMonth={() => this.getPrevMonth()}
          getNextMonth={() => this.getNextMonth()}
          year={year}
          month={month}
          day={day}
        />
        <CalendarBoard
          type={'day'}
          year={year}
          month={month}
          day={day}
        />
      </div>
    );
  }
}

export default DayCalendar;
