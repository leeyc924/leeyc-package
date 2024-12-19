import React, { KeyboardEvent, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import dayjs, { Dayjs } from 'dayjs';
import { styles } from './index.css';

const Calendar: React.FC = () => {
  // 현재 날짜 상태
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  // 선택된 날짜 두 개
  const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);
  // 캘린더 날짜 배열
  const [calendarDays, setCalendarDays] = useState<Dayjs[]>([]);
  // 포커스된 날짜 인덱스
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // 캘린더 날짜 생성
  useEffect(() => {
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');

    // 시작 요일 (0: 일요일, 6: 토요일)
    const startDay = startOfMonth.day();
    // 종료 요일
    const endDay = endOfMonth.day();

    // 이전 달 날짜
    const prevMonth = currentDate.subtract(1, 'month');
    const prevMonthDays = prevMonth.daysInMonth();

    const days: Dayjs[] = [];

    // 이전 달의 날짜 채우기
    for (let i = startDay - 1; i >= 0; i--) {
      days.push(prevMonth.date(prevMonthDays - i));
    }

    // 현재 달 날짜 채우기
    for (let i = 1; i <= currentDate.daysInMonth(); i++) {
      days.push(currentDate.date(i));
    }

    // 다음 달 날짜 채우기
    for (let i = 1; days.length % 7 !== 0; i++) {
      days.push(currentDate.add(1, 'month').date(i));
    }

    setCalendarDays(days);
    setFocusedIndex(null);
  }, [currentDate]);

  // 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  // 날짜 선택
  const handleDateClick = (date: Dayjs) => {
    let newSelected = [...selectedDates];
    if (newSelected.find(d => d.isSame(date, 'day'))) {
      newSelected = newSelected.filter(d => !d.isSame(date, 'day'));
    } else {
      if (newSelected.length < 2) {
        newSelected.push(date);
      } else {
        newSelected = [newSelected[1], date];
      }
    }
    setSelectedDates(newSelected);
  };

  // 날짜 간 색상 변경
  const isInRange = (date: Dayjs) => {
    if (selectedDates.length < 2) return false;
    const [start, end] = selectedDates.sort((a, b) => a.unix() - b.unix());
    return date.isAfter(start, 'day') && date.isBefore(end, 'day');
  };

  // 키보드 이벤트 처리
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % calendarDays.length;
      setFocusedIndex(newIndex);
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + calendarDays.length) % calendarDays.length;
      setFocusedIndex(newIndex);
    } else if (e.key === 'ArrowDown') {
      newIndex = (index + 7) % calendarDays.length;
      setFocusedIndex(newIndex);
    } else if (e.key === 'ArrowUp') {
      newIndex = (index - 7 + calendarDays.length) % calendarDays.length;
      setFocusedIndex(newIndex);
    }
  };

  return (
    <div className={styles.calendar}>
      {/* 헤더 */}
      <div className={styles.header}>
        <button aria-label='이전 달' className={styles.navButton} onClick={handlePrevMonth}>
          <ChevronLeft />
        </button>
        <div className={styles.currentMonth}>{currentDate.format('YYYY년 M월')}</div>
        <button aria-label='다음 달' className={styles.navButton} onClick={handleNextMonth}>
          <ChevronRight />
        </button>
      </div>
      {/* 요일 */}
      <div className={styles.weekDays}>
        {['일', '월', '화', '수', '목', '금', '토'].map(day => (
          <div className={styles.weekDay} key={day}>
            {day}
          </div>
        ))}
      </div>
      {/* 날짜 셀 */}
      <div className={styles.days}>
        {calendarDays.map((day, index) => {
          const isDisabled = day.month() !== currentDate.month();
          const isSelected = selectedDates.some(d => d.isSame(day, 'day'));
          const inRange = isInRange(day);
          const isFirst = selectedDates.length === 2 && day.isSame(selectedDates[0], 'day');
          const isLast = selectedDates.length === 2 && day.isSame(selectedDates[1], 'day');

          let dayStyle = styles.day;
          if (isFirst || isLast) {
            dayStyle = `${styles.day} ${styles.firstLast}`;
          } else if (inRange) {
            dayStyle = `${styles.day} ${styles.inRange}`;
          } else if (isDisabled) {
            dayStyle = `${styles.day} ${styles.disabled}`;
          }

          return (
            <button
              aria-label={day.format('YYYY년 M월 D일')}
              aria-selected={isSelected}
              className={dayStyle}
              disabled={isDisabled}
              key={index}
              tabIndex={focusedIndex === index || focusedIndex === null ? 0 : -1}
              onClick={() => handleDateClick(day)}
              onKeyDown={e => handleKeyDown(e, index)}
            >
              {day.date()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
