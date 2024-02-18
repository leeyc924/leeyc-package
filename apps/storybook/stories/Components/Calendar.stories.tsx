import { Calendar, CalendarProps } from '@components';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

const story: Meta<CalendarProps> = {
  component: Calendar,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryFn<CalendarProps> = arg => {
  const [selectedDateList, setSelectedDateList] = useState<Dayjs[]>([]);

  return (
    <Calendar
      currentViewDate={dayjs()}
      selectedDateList={selectedDateList}
      onDateClick={({ dateList }) => setSelectedDateList(dateList)}
      onNextClick={date => console.log(date)}
      onPrevClick={date => console.log(date)}
    />
  );
};
