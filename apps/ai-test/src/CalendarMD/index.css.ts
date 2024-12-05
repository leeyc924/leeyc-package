import { globalStyle, style } from '@vanilla-extract/css';

export const styles = {
  calendar: style({
    width: '350px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    fontFamily: 'Arial, sans-serif',
  }),
  header: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  }),
  navButton: style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '4px',
    ':hover': {
      backgroundColor: '#f0f0f0',
    },
  }),
  currentMonth: style({
    fontSize: '18px',
    fontWeight: 'bold',
  }),
  weekDays: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    marginBottom: '8px',
  }),
  weekDay: style({
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '8px 0',
  }),
  days: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridAutoRows: '40px',
    gap: '4px',
  }),
  day: style({
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#f0f0f0',
    },
    outline: 'none',
  }),
  disabled: style({
    backgroundColor: '#ddd',
    color: '#aaa',
    cursor: 'not-allowed',
  }),
  firstLast: style({
    backgroundColor: '#006879',
    color: '#fff',
  }),
  inRange: style({
    backgroundColor: '#A9EDFF',
    color: '#fff',
  }),
};

// 글로벌 스타일: 포커스 시 스타일
globalStyle(`${styles.day}:focus`, {
  boxShadow: '0 0 0 2px #006879',
});
