import { style } from '@vanilla-extract/css';

export const colors = {
  primary500: '#006879',
  primary100: '#A9EDFF',
  disabled: '#ddd',
  gray300: '#aaa',
  white: '#fff',
  black: '#000',
};

export const calendarStyles = {
  container: style({
    width: '400px',
    backgroundColor: colors.white,
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
  }),
  header: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  }),
  button: style({
    padding: '0.5rem',
    color: colors.gray300,
  }),
  date: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
  }),
  dayNames: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    color: colors.gray300,
    marginBottom: '0.5rem',
  }),
  days: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    gap: '0.5rem',
  }),
  day: style({
    padding: '0.5rem',
    borderRadius: '50%',
  }),
  primaryDay: style({
    backgroundColor: colors.primary500,
    color: colors.white,
  }),
  selectedDay: style({
    backgroundColor: colors.primary100,
    color: colors.white,
  }),
  disabledDay: style({
    backgroundColor: colors.disabled,
    color: colors.gray300,
  }),
  normalDay: style({
    backgroundColor: colors.white,
    color: colors.black,
  }),
};
