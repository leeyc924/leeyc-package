import { useRef, useState } from 'react';

import * as styles from './index.css';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const dateRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date): void => {
    if (selectedDates.length === 2) {
      setSelectedDates([date]);
    } else {
      setSelectedDates([...selectedDates, date].sort((a, b) => a.getTime() - b.getTime()));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number): void => {
    const totalDays = dateRefs.current.length;
    let newIndex = index;

    switch (event.key) {
      case 'ArrowUp': {
        newIndex = (index - 7 + totalDays) % totalDays;
        break;
      }
      case 'ArrowDown': {
        newIndex = (index + 7) % totalDays;

        break;
      }
      case 'ArrowLeft':
        newIndex = (index - 1 + totalDays) % totalDays;
        break;
      case 'ArrowRight':
        newIndex = (index + 1) % totalDays;
        break;
      default:
        return;
    }

    dateRefs.current[newIndex]?.focus();
    event.preventDefault();
  };

  const renderCalendarDays = (): JSX.Element[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days: JSX.Element[] = [];

    // Previous month's dates
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <div aria-disabled='true' className={`${styles.date} ${styles.disabled}`} key={`prev-${i}`}>
          {prevMonthDays - i}
        </div>,
      );
    }

    // Current month's dates
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDates.some(selectedDate => selectedDate.getTime() === date.getTime());
      const isInRange =
        selectedDates.length === 2 &&
        selectedDates[0] &&
        selectedDates[1] &&
        date > selectedDates[0] &&
        date < selectedDates[1];
      const isRangeStartEnd =
        selectedDates.length === 2 &&
        selectedDates[0] &&
        selectedDates[1] &&
        (date.getTime() === selectedDates[0].getTime() || date.getTime() === selectedDates[1].getTime());

      let className = styles.date;
      if (isRangeStartEnd) {
        className += ` ${styles.rangeStartEnd}`;
      } else if (isSelected) {
        className += ` ${styles.selected}`;
      } else if (isInRange) {
        className += ` ${styles.inRange}`;
      }

      days.push(
        <button
          aria-pressed={isSelected}
          className={className}
          key={day}
          ref={el => {
            dateRefs.current[day - 1] = el;
          }}
          onClick={() => handleDateClick(date)}
          onKeyDown={event => handleKeyDown(event, day - 1)}
        >
          {day}
        </button>,
      );
    }

    // Next month's dates
    const nextMonthDays = 42 - days.length; // 42 = 6 weeks * 7 days
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <div aria-disabled='true' className={`${styles.date} ${styles.disabled}`} key={`next-${i}`}>
          {i}
        </div>,
      );
    }

    return days;
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button aria-label='Previous month' onClick={handlePrevMonth}>
          &lt;
        </button>
        <span>
          {currentDate.getFullYear()} - {currentDate.getMonth() + 1}
        </span>
        <button aria-label='Next month' onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className={styles.dates} role='grid'>
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;
