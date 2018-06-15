import React from 'react';
import { DayCalendar } from '../components/Calendar';

const now = new Date();

const CalCon = () =>
  <div>
    日历组件测试
    <DayCalendar onSelectDate={val => console.log(val)} />
  </div>;

export default CalCon;
