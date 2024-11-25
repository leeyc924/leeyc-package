import React, { useState } from 'react';
import './index.css';

// 스타일을 위한 CSS 파일

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = date => {
    if (selectedDates.length === 2) {
      setSelectedDates([date]);
    } else {
      setSelectedDates([...selectedDates, date].sort((a, b) => a - b));
    }
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInPrevMonth = getDaysInMonth(year, month - 1);

    const calendarDays = [];

    // 이전 달 날짜
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      calendarDays.push({
        date: new Date(year, month - 1, daysInPrevMonth - i),
        currentMonth: false,
      });
    }

    // 현재 달 날짜
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        date: new Date(year, month, i),
        currentMonth: true,
      });
    }

    // 다음 달 날짜
    const nextMonthDays = 42 - calendarDays.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      calendarDays.push({
        date: new Date(year, month + 1, i),
        currentMonth: false,
      });
    }

    return calendarDays.map((day, index) => {
      const isSelected = selectedDates.some(selectedDate => selectedDate.toDateString() === day.date.toDateString());

      const isInRange = selectedDates.length === 2 && day.date > selectedDates[0] && day.date < selectedDates[1];

      const isDisabled = !day.currentMonth;

      const style = {
        backgroundColor: isSelected ? '#006879' : isInRange ? '#A9EDFF' : isDisabled ? '#ddd' : '#fff',
        color: isSelected || isInRange ? '#fff' : isDisabled ? '#aaa' : '#000',
      };

      return (
        <div
          className='calendar-day'
          key={index}
          style={style}
          onClick={() => !isDisabled && handleDateClick(day.date)}
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
      <div className='calendar-grid'>{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
