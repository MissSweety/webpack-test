import React from 'react';



const CalendarHeader = props => {
  return (
      <div className="calendar-header-con">
        <span onClick={props.getPrevMonth}>{'<'}</span>
        <span className="header-display">
          <a>{props.year}</a>年
          <a>{props.month + 1}</a>月
        </span>
        <span onClick={props.getNextMonth}>{'>'}</span>
      </div>
  );
}

export default CalendarHeader;
