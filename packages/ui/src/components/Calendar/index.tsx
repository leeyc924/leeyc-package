import { useCallback, useMemo, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Icon from '@breadlee/icons';
import { classnames } from '@breadlee/utils';
import useCalendarKeyEvent from '@hooks/useCalendarKeyEvent';
import { palette } from '@styles';
import Typography from '../Typography';
import * as styles from './index.css';
import { isHoliday } from './lunarDay';

export interface CalendarProps {
  currentViewDate?: Dayjs;
  selectedDateList: Dayjs[];
  onDateClick({ dateList, selectedDate }: { dateList: Dayjs[]; selectedDate: Dayjs }): void;
  onPrevClick?(date: Dayjs): void;
  onNextClick?(date: Dayjs): void;
  useRange?: boolean;
}

interface DateItem {
  dateInfo: string;
  year: number;
  month: number;
  day: number;
  week: number;
  isHoliday: boolean;
  disabled: boolean;
}

const WEEK_TO_KR = ['일', '월', '화', '수', '목', '금', '토'] as const;
const DATA_DATE_ATTRIBUTE = 'data-date-info';

const Calendar = ({
  currentViewDate,
  onDateClick,
  onNextClick,
  onPrevClick,
  selectedDateList,
  useRange,
}: CalendarProps) => {
  const [_currentViewDate, setCurrentViewDate] = useState<Dayjs>(currentViewDate || dayjs());
  const sortSelectedDateList = useMemo(
    () => selectedDateList.sort((a, b) => (a.isAfter(b) ? 1 : -1)) || [],
    [selectedDateList],
  );
  const dateGridElRef = useRef<HTMLDivElement>(null);
  const onKeyDown = useCalendarKeyEvent(dateGridElRef, DATA_DATE_ATTRIBUTE);

  const handlePrevClick = () => {
    const prev = _currentViewDate.subtract(1, 'month');
    setCurrentViewDate(prev);
    onPrevClick?.(prev);
  };

  const handleNextClick = () => {
    const next = _currentViewDate.add(1, 'month');
    setCurrentViewDate(next);
    onNextClick?.(next);
  };

  const handleDateClick = (dateInfo: string) => {
    const dateInfoDayjs = dayjs(dateInfo);
    const isSmae = selectedDateList.some(selected => selected.isSame(dateInfoDayjs, 'day'));
    onDateClick({ dateList: isSmae ? [] : [dateInfoDayjs], selectedDate: dateInfoDayjs });
  };

  const getBetweenDate = useCallback((startDate: Dayjs, endDate: Dayjs) => {
    const diffDay = Math.abs(startDate.diff(endDate, 'day'));
    let currentDate = startDate.isAfter(endDate) ? endDate : startDate;
    const betweenDateList: Dayjs[] = [];
    for (let index = 0; index <= diffDay; index++) {
      betweenDateList.push(currentDate);
      currentDate = currentDate.add(1, 'day');
    }

    return betweenDateList;
  }, []);

  const handleDateRangeClick = useCallback(
    (dateInfo: string) => {
      const dateInfoDayjs = dayjs(dateInfo);

      // 선택된 날짜가 없을경우 클릭한 날짜만 반환
      if (sortSelectedDateList.length === 0) {
        onDateClick({
          dateList: [dateInfoDayjs],
          selectedDate: dateInfoDayjs,
        });
        return;
      }

      // 선택된 날짜가 하나인 경우 선택된 날짜와 클릭한 날짜 사이의 날짜 사이 값들 반환
      if (sortSelectedDateList.length === 1) {
        const returnSelectedDateList = getBetweenDate(sortSelectedDateList[0], dateInfoDayjs);
        onDateClick({
          dateList: returnSelectedDateList,
          selectedDate: dateInfoDayjs,
        });
        return;
      }

      const startDate = sortSelectedDateList[0];
      const endDate = sortSelectedDateList[sortSelectedDateList.length - 1];
      // 클릭한 날짜가 마지막 선택된 날짜보다 뒤일 경우 클릭한 해당 날짜만 반환
      if (dateInfoDayjs.isAfter(endDate, 'day')) {
        onDateClick({
          dateList: [dateInfoDayjs],
          selectedDate: dateInfoDayjs,
        });
        return;
      }

      // 클릭한 날짜가 시작 날짜보다 뒤일 경우 마지막 선택된 날짜와 클릭한 날짜 사이 값들 반환
      if (dateInfoDayjs.isAfter(startDate, 'day')) {
        const returnSelectedDateList = getBetweenDate(dateInfoDayjs, endDate);
        onDateClick({
          dateList: returnSelectedDateList,
          selectedDate: dateInfoDayjs,
        });
        return;
      }

      // 클릭한 날짜가 시작 날짜 보다 전일 경우 클릭한 날짜만 반환
      onDateClick({
        dateList: [dateInfoDayjs],
        selectedDate: dateInfoDayjs,
      });
      return;
    },
    [getBetweenDate, onDateClick, sortSelectedDateList],
  );

  const dayRowList = useMemo(() => {
    const dateList: DateItem[][] = [[]];
    const startDay = _currentViewDate.startOf('month').date();
    const endDay = _currentViewDate.endOf('month').date();
    const startWeek = _currentViewDate.startOf('month').day();
    const endWeek = _currentViewDate.endOf('month').day();
    const currentViewYear = _currentViewDate.get('year');
    const currentViewMonth = _currentViewDate.get('month');
    let weekIndex = 0;

    // 첫주 시작 요일까지
    for (let week = 0; week < startWeek; week++) {
      const date = _currentViewDate.startOf('month').subtract(startWeek - week, 'day');
      dateList[weekIndex].push({
        year: date.year(),
        month: date.month() + 1,
        day: date.date(),
        dateInfo: date.format('YYYY-MM-DD'),
        week,
        isHoliday: isHoliday(date.year(), date.month() + 1, date.date()),
        disabled: true,
      });
    }

    // 해당 월의 요일
    for (let day = startDay; day <= endDay; day++) {
      const year = currentViewYear;
      const month = currentViewMonth + 1;

      const week = (day - 1 + startWeek) % 7;
      dateList[weekIndex].push({
        year,
        month,
        day,
        dateInfo: dayjs(`${year}-${month}-${day}`).format('YYYY-MM-DD'),
        week,
        isHoliday: isHoliday(year, month, day),
        disabled: false,
      });

      if (week === 6 && day !== endDay) {
        dateList.push([]);
        weekIndex++;
      }
    }

    // 마지막주 토요일까지
    for (let week = endWeek + 1; week < 7; week++) {
      const date = _currentViewDate.endOf('month').add(week - endWeek, 'day');
      dateList[weekIndex].push({
        year: date.year(),
        month: date.month() + 1,
        day: date.date(),
        dateInfo: date.format('YYYY-MM-DD'),
        week,
        isHoliday: isHoliday(date.year(), date.month() + 1, date.date()),
        disabled: true,
      });
    }

    return dateList;
  }, [_currentViewDate]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {!!onPrevClick && (
          <button type="button" onClick={handlePrevClick}>
            <Icon color={palette.Gray900} irName="전월 보기" name="arrow_left" size={24} />
          </button>
        )}
        <Typography>
          {_currentViewDate.get('year')}년 {_currentViewDate.get('month') + 1}월
        </Typography>
        {!!onNextClick && (
          <button type="button" onClick={handleNextClick}>
            <Icon color={palette.Gray900} irName="명월 보기" name="arrow_right" size={24} />
          </button>
        )}
      </div>
      <div className={styles.box} role="grid">
        <div role="row-group">
          <div className={styles.dayOfWeek} role="row">
            {WEEK_TO_KR.map((text, index) => (
              <div className={styles.dayOfWeekItem} key={index}>
                <Typography
                  aria-label={text}
                  color={index === 0 ? 'Error' : index === 6 ? 'Primary' : 'Gray700'}
                  tabIndex={-1}
                  variant="D1"
                  weight="bold"
                >
                  {text}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.dateBox} ref={dateGridElRef} role="row-group">
          {dayRowList.map((dateList, i) => (
            <ul aria-rowindex={i} className={styles.dateItem['row']} key={i} role="row">
              {dateList.map((dateItem, j) => {
                const selectedIndex = sortSelectedDateList?.findIndex(selected =>
                  selected.isSame(dayjs(dateItem.dateInfo), 'dates'),
                );
                const isSelected = selectedIndex > -1;
                const isSelectedStart = selectedIndex === 0;
                const isSelectedEnd =
                  sortSelectedDateList.length > 0 && selectedIndex === sortSelectedDateList.length - 1;

                return (
                  <li
                    key={`${i}-${j}-${dateItem.dateInfo}`}
                    className={classnames(styles.dateItem['col'], {
                      [styles.dateItem['selected']]: isSelected,
                      [styles.dateItem['single']]: isSelected && sortSelectedDateList?.length === 1,
                      [styles.dateItem['start']]: isSelectedStart,
                      [styles.dateItem['end']]: isSelectedEnd,
                    })}
                  >
                    <button
                      aria-colindex={j}
                      aria-disabled={dateItem.disabled}
                      aria-label={`${dayjs(dateItem.dateInfo).format('YYYY년 MM월 DD일')} ${WEEK_TO_KR[dateItem.week]}요일`}
                      aria-selected={isSelected}
                      className={styles.dateItem['button']}
                      {...{ [DATA_DATE_ATTRIBUTE]: dateItem.dateInfo }}
                      disabled={dateItem.disabled}
                      role="gridcell"
                      style={{ ...((isSelectedEnd || isSelectedStart) && { background: palette.PrimaryContainer }) }}
                      type="button"
                      onKeyDown={onKeyDown}
                      onClick={() =>
                        useRange ? handleDateRangeClick(dateItem.dateInfo) : handleDateClick(dateItem.dateInfo)
                      }
                    >
                      <Typography
                        variant="D1"
                        weight="bold"
                        color={
                          dateItem.disabled
                            ? 'Gray300'
                            : isSelected
                              ? 'White'
                              : dateItem.week === 0 || dateItem.isHoliday
                                ? 'Error'
                                : dateItem.week === 6
                                  ? 'Primary'
                                  : 'Gray900'
                        }
                      >
                        {dateItem.day}
                      </Typography>
                    </button>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
