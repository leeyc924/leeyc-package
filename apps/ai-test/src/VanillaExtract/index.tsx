import React, { useState } from 'react';

import { calendarStyles, colors } from './index.css';

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleMonthChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
      if (currentMonth === 0) setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
      if (currentMonth === 11) setCurrentYear(prev => prev + 1);
    }
  };

  const handleDateClick = (date: number) => {
    if (selectedDates.length === 2) {
      setSelectedDates([date]);
    } else {
      setSelectedDates(prev => [...prev, date].sort((a, b) => a - b));
    }
  };

  const isDateInRange = (date: number) => {
    if (selectedDates.length === 2) {
      return date > selectedDates[0] && date < selectedDates[1];
    }
    return false;
  };

  const renderDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const days = [];

    // Previous month's days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className={`${calendarStyles.day} ${calendarStyles.disabledDay}`}>
          {daysInPrevMonth - i}
        </div>,
      );
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDates.includes(i);
      const isInRange = isDateInRange(i);
      const dayStyle = isSelected
        ? calendarStyles.primaryDay
        : isInRange
          ? calendarStyles.selectedDay
          : calendarStyles.normalDay;

      days.push(
        <div key={`current-${i}`} className={`${calendarStyles.day} ${dayStyle}`} onClick={() => handleDateClick(i)}>
          {i}
        </div>,
      );
    }

    // Next month's days
    const nextMonthDays = 42 - days.length; // 42 = 6 weeks * 7 days
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <div key={`next-${i}`} className={`${calendarStyles.day} ${calendarStyles.disabledDay}`}>
          {i}
        </div>,
      );
    }

    return days;
  };

  return (
    <div id='webcrumbs'>
      <div className={calendarStyles.container}>
        <div className={calendarStyles.header}>
          <button className={calendarStyles.button} onClick={() => handleMonthChange('prev')}>
            <span className='material-symbols-outlined'>chevron_left</span>
          </button>
          <div className={calendarStyles.date}>
            <div>{currentYear}</div>
            <div>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}</div>
          </div>
          <button className={calendarStyles.button} onClick={() => handleMonthChange('next')}>
            <span className='material-symbols-outlined'>chevron_right</span>
          </button>
        </div>
        <div className={calendarStyles.dayNames}>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
          <div>Su</div>
        </div>
        <div className={calendarStyles.days}>{renderDays()}</div>
      </div>
    </div>
  );
};

export default Calendar;
