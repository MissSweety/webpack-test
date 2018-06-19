import React from 'react';

const labelStr = ['日', '一', '二', '三', '四', '五', '六'];
const bigMonth = [1, 3, 5, 7, 8, 10, 12];
const smallMonth = [4, 6, 9, 11];

const daysInMonth = (year, month) => {
  const realmonth = month + 1;
  console.log(month);
  if (bigMonth.indexOf(realmonth) !== -1) {
    return 31;
  }
  if (smallMonth.indexOf(realmonth) !== -1) {
    return 30;
  } 
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 29;
  }
  return 28;
};

const getWeekNumber = (year, month, day) => {
  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(day);
  return date.getDay();
}
const prepend = (arr, data) => { 
  arr.splice(0, 0, data);
  return arr;
}

const getDateArray = (year, month, day) => {
  const today = new Date();
  const rightYear = today.getFullYear();
  const rightMonth = today.getMonth();
  const rightDay = today.getDate();

  let prevMonth = month - 1;
  let prevYear = year;
  let nextMonth = month + 1;
  let nextYear = year;

  if (month === 0) {
    prevMonth = 11;
    prevYear = year - 1;
  }
  if (month === 11) {
    nextMonth = 0;
    nextYear = year + 1;
  }
  const thisMonthDays = daysInMonth(year, month);
  const prevMonthDays = daysInMonth(prevYear, prevMonth);
  console.log('thisMonthDays: ',thisMonthDays);
  console.log('prevMonthDays: ',prevMonthDays);
  
  const firstdayWeekNo = getWeekNumber(year, month, 1);
  const lastdayWeekNo = getWeekNumber(year, month, thisMonthDays);

  let prevData = [];
  let nextData = [];
  let thisData = [];
  for (let i = 0; i < firstdayWeekNo ; i ++ ) {
    prevData = prepend(prevData, { value: prevMonthDays - i, type: 'prev-month' });
  }
  for (let j = 0; j < 6 - lastdayWeekNo ; j ++) {
    nextData.push({ value: j + 1, type: 'next-month' });
  }
  for (let k = 0; k < thisMonthDays; k ++) {
    if (k === rightDay && year === rightYear && month === rightMonth ) {
      thisData.push({ value: k + 1, type: 'this-month today'});
    } else {
      thisData.push({ value: k + 1, type: 'this-month'});
    }
  }
  console.log(thisData);
  console.log(prevData);
  console.log(nextData);

  return prevData.concat(thisData).concat(nextData);

}

class CalendarBoard extends React.Component {
  renderTableHeader() {
    return labelStr.map(item => <th key={item}>{item}</th>);
  }
  renderRow(data) {
    return (
      <tr key={data[0].value + data[0].type}>
        {data.map((item, index) =>
          <td key={index} className={item.type}>
            <span>{item.value}</span>
          </td>
        )}
      </tr>
    );
  }
  render() {
    const { year, month, day} = this.props;
    const days = daysInMonth(year, month);
    const firstdayWeekNo = getWeekNumber(year, month, 1);
    const boardData = getDateArray(year, month, day);

    return (
      <table className="board-con">
        <thead>
          <tr>
            {this.renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {boardData.map((item, index) => {
             if (index % 7 === 0) {
               return this.renderRow(boardData.slice(index, index + 7))
             }
          })}
        </tbody>
      </table>
    );
  }
}

export default CalendarBoard;
