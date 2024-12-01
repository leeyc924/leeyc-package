// Calendar.css.ts
import { style } from '@vanilla-extract/css';

export const calendar = style({
  width: '300px',
  margin: '0 auto',
});

export const calendarHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
});

export const calendarBody = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '5px',
});

export const calendarDay = style({
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '5px',
});

export const disabledDay = style({
  backgroundColor: '#ddd',
  color: '#aaa',
});

export const selectedDay = style({
  backgroundColor: '#006879',
  color: 'white',
});

export const inRangeDay = style({
  backgroundColor: '#A9EDFF',
  color: 'white',
});

export const defaultDay = style({
  backgroundColor: 'white',
  color: 'black',
});
