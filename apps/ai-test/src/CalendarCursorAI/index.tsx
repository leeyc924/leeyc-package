import React, { useState } from 'react';
import './index.css'; // 스타일을 위한 CSS 파일

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    if (selectedDates.length === 2) {
      setSelectedDates([date]);
    } else {
      setSelectedDates([...selectedDates, date].sort((a, b) => a.getTime() - b.getTime()));
    }
  };

  const isDateInRange = date => {
    if (selectedDates.length === 2) {
      return date >= selectedDates[0] && date <= selectedDates[1];
    }
    return false;
  };

  const renderCalendar = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const daysInMonth = endOfMonth.getDate();

    const prevMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    const daysInPrevMonth = prevMonthEnd.getDate();

    const calendarDays = [];

    // 이전 달 날짜
    for (let i = startDay - 1; i >= 0; i--) {
      calendarDays.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, daysInPrevMonth - i),
        currentMonth: false,
      });
    }

    // 현재 달 날짜
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
        currentMonth: true,
      });
    }

    // 다음 달 날짜
    const nextMonthDays = 42 - calendarDays.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      calendarDays.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i),
        currentMonth: false,
      });
    }

    return calendarDays.map((day, index) => {
      const isDisabled = !day.currentMonth;
      const isSelected = selectedDates.includes(day.date.getTime());
      const isInRange = isDateInRange(day.date.getTime());

      let style = {
        backgroundColor: 'white',
        color: 'black',
      };

      if (isDisabled) {
        style = {
          backgroundColor: '#ddd',
          color: '#aaa',
        };
      } else if (isSelected) {
        style = {
          backgroundColor: '#006879',
          color: 'white',
        };
      } else if (isInRange) {
        style = {
          backgroundColor: '#A9EDFF',
          color: 'white',
        };
      }

      return (
        <div
          className='calendar-day'
          key={index}
          style={style}
          onClick={() => !isDisabled && handleDateClick(day.date.getTime())}
        >
          {day.date.getDate()}
        </div>
      );
    });
  };

  return (
    <div className='calendar'>
      <div className='calendar-header'>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className='calendar-body'>{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
