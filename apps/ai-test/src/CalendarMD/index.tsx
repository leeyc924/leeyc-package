import React, { KeyboardEvent, useEffect, useState } from 'react';
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parse,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { styles } from './index.css';

const primary500 = '#006879';
const primary100 = '#A9EDFF';
const disabled = '#ddd';
const gray300 = '#aaa';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [focusedDate, setFocusedDate] = useState<Date | null>(null);
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const tempDates = [];
    let day = startDate;
    while (day <= endDate) {
      tempDates.push(day);
      day = addDays(day, 1);
    }
    setDates(tempDates);
  }, [currentMonth]);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day: Date) => {
    if (!isSameMonth(day, currentMonth)) return;
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

  const isInRange = (day: Date) => {
    if (selectedDates.length < 2) return false;
    const [start, end] = selectedDates.sort((a, b) => a.getTime() - b.getTime());
    return day > start && day < end;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, day: Date, index: number) => {
    let newIndex = index;
    switch (event.key) {
      case 'ArrowLeft':
        newIndex = index > 0 ? index - 1 : dates.length - 1;
        setFocusedDate(dates[newIndex]);
        break;
      case 'ArrowRight':
        newIndex = index < dates.length - 1 ? index + 1 : 0;
        setFocusedDate(dates[newIndex]);
        break;
      case 'ArrowUp':
        newIndex = index - 7 >= 0 ? index - 7 : dates.length - (7 - index);
        setFocusedDate(dates[newIndex]);
        break;
      case 'ArrowDown':
        newIndex = index + 7 < dates.length ? index + 7 : (index + 7) % dates.length;
        setFocusedDate(dates[newIndex]);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button aria-label='이전 달로 이동' className={styles.navButton} onClick={prevMonth}>
          &lt;
        </button>
        <div>
          {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'MMMM')}월
        </div>
        <button aria-label='다음 달로 이동' className={styles.navButton} onClick={nextMonth}>
          &gt;
        </button>
      </div>
      <div className={styles.days}>
        {['일', '월', '화', '수', '목', '금', '토'].map(day => (
          <div className={styles.day} key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.dates}>
        {dates.map((day, index) => {
          const formattedDate = format(day, 'd');
          const isDisabled = !isSameMonth(day, currentMonth);
          const isSelected = selectedDates.some(selected => isSameDay(selected, day));
          const inRange = isInRange(day);
          const isFirstOrLast =
            selectedDates.length === 2 && (isSameDay(day, selectedDates[0]) || isSameDay(day, selectedDates[1]));
          let backgroundColor = '#fff';
          let color = '#000';

          if (isFirstOrLast) {
            backgroundColor = primary500;
            color = '#fff';
          } else if (inRange) {
            backgroundColor = primary100;
            color = '#fff';
          } else if (isDisabled) {
            backgroundColor = disabled;
            color = gray300;
          }

          if (isSelected) {
            backgroundColor = primary500;
            color = '#fff';
          }

          return (
            <button
              aria-label={format(day, 'yyyy-MM-dd')}
              aria-selected={isSelected}
              className={styles.date}
              disabled={isDisabled}
              key={day.toString()}
              style={{ backgroundColor, color }}
              tabIndex={focusedDate && isSameDay(day, focusedDate) ? 0 : -1}
              onClick={() => onDateClick(day)}
              onKeyDown={e => handleKeyDown(e, day, index)}
            >
              {formattedDate}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
