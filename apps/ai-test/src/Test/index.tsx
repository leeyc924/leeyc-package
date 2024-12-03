import React, { KeyboardEvent, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import {
  calendarContainer,
  cell,
  disabledCell,
  grid,
  header,
  monthYear,
  navButton,
  selectedCellRange,
  selectedCellStartEnd,
} from './index.css';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);
  const [focusedDate, setFocusedDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    // 초기 포커스 설정
    setFocusedDate(dayjs());
  }, []);

  const startOfMonth = currentMonth.startOf('month');
  const endOfMonth = currentMonth.endOf('month');
  const startDay = startOfMonth.day();
  const daysInMonth = currentMonth.daysInMonth();

  const prevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  const handleDateClick = (day: Dayjs) => {
    if (day.month() !== currentMonth.month()) return;
    let newSelectedDates = [...selectedDates];
    if (newSelectedDates.length === 2) {
      newSelectedDates = [day];
    } else {
      newSelectedDates.push(day);
      if (newSelectedDates.length > 2) {
        newSelectedDates = [newSelectedDates[newSelectedDates.length - 1]];
      }
    }
    setSelectedDates(newSelectedDates);
  };

  const isSelected = (day: Dayjs) => {
    return selectedDates.some(selected => selected.isSame(day, 'day'));
  };

  const isInRange = (day: Dayjs) => {
    if (selectedDates.length !== 2) return false;
    const [start, end] = selectedDates.sort((a, b) => a.diff(b));
    return day.isAfter(start, 'day') && day.isBefore(end, 'day');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, day: Dayjs) => {
    let newFocus: Dayjs | null = null;
    switch (event.key) {
      case 'ArrowUp':
        newFocus = day.subtract(7, 'day');
        break;
      case 'ArrowDown':
        newFocus = day.add(7, 'day');
        break;
      case 'ArrowLeft':
        newFocus = day.subtract(1, 'day');
        break;
      case 'ArrowRight':
        newFocus = day.add(1, 'day');
        break;
      case 'Home':
        newFocus = day.startOf('week');
        break;
      case 'End':
        newFocus = day.endOf('week');
        break;
      default:
        break;
    }
    if (newFocus) {
      event.preventDefault();
      setFocusedDate(newFocus);
    }
  };

  const generateCalendar = () => {
    const calendar = [];
    let dayCounter = 1;
    let nextMonthDay = 1;
    for (let week = 0; week < 6; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        const currentDay = week * 7 + day;
        let date: Dayjs;
        let isCurrentMonth = true;
        if (currentDay < startDay) {
          date = startOfMonth
            .subtract(1, 'month')
            .date(startOfMonth.subtract(1, 'month').daysInMonth() - startDay + day + 1);
          isCurrentMonth = false;
        } else if (dayCounter > daysInMonth) {
          date = endOfMonth.add(nextMonthDay, 'day');
          nextMonthDay++;
          isCurrentMonth = false;
        } else {
          date = startOfMonth.date(dayCounter);
          dayCounter++;
        }

        const disabled = !isCurrentMonth;
        const selectedStart = selectedDates[0]?.isSame(date, 'day');
        const selectedEnd = selectedDates[1]?.isSame(date, 'day');
        const inRange = isInRange(date);

        let className = cell;
        if (disabled) className = disabledCell;
        if (selectedStart || selectedEnd) className = selectedCellStartEnd;
        if (inRange) className = selectedCellRange;

        weekDays.push(
          <button
            aria-label={date.format('YYYY년 MM월 DD일')}
            aria-selected={isSelected(date)}
            className={className}
            disabled={disabled}
            key={date.toString()}
            tabIndex={focusedDate?.isSame(date, 'day') ? 0 : -1}
            onClick={() => handleDateClick(date)}
            onKeyDown={e => handleKeyDown(e, date)}
          >
            {date.date()}
          </button>,
        );
      }
      calendar.push(
        <div className={grid} key={week}>
          {weekDays}
        </div>,
      );
    }
    return calendar;
  };

  return (
    <div className={calendarContainer}>
      <div className={header}>
        <button aria-label='이전 달로 이동' className={navButton} onClick={prevMonth}>
          &lt;
        </button>
        <div className={monthYear}>
          {currentMonth.year()}년 {currentMonth.month() + 1}월
        </div>
        <button aria-label='다음 달로 이동' className={navButton} onClick={nextMonth}>
          &gt;
        </button>
      </div>
      <div className={grid}>
        {['일', '월', '화', '수', '목', '금', '토'].map(day => (
          <div className={cell} key={day}>
            {day}
          </div>
        ))}
      </div>
      {generateCalendar()}
    </div>
  );
};

export default Calendar;
