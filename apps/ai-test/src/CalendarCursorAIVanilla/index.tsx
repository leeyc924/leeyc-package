import React, { useState } from 'react';
import * as styles from './index.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

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

    for (let i = startDay - 1; i >= 0; i--) {
      calendarDays.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, daysInPrevMonth - i),
        currentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
        currentMonth: true,
      });
    }

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

      let style = styles.defaultDay;

      if (isDisabled) {
        style = styles.disabledDay;
      } else if (isSelected) {
        style = styles.selectedDay;
      } else if (isInRange) {
        style = styles.inRangeDay;
      }

      return (
        <div
          className={`${styles.calendarDay} ${style}`}
          key={index}
          onClick={() => !isDisabled && handleDateClick(day.date.getTime())}
        >
          {day.date.getDate()}
        </div>
      );
    });
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles.calendarBody}>{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
