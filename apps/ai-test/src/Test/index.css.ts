import { style } from '@vanilla-extract/css';

const palette = {
  primary500: '#006879',
  primary100: '#A9EDFF',
  disabled: '#ddd',
  gray300: '#aaa',
  white: '#ffffff',
  black: '#000000',
};

export const calendarContainer = style({
  width: '350px',
  border: `1px solid ${palette.gray300}`,
  borderRadius: '8px',
  padding: '16px',
  fontFamily: 'Arial, sans-serif',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

export const navButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  color: palette.primary500,
  ':focus': {
    outline: `2px solid ${palette.primary500}`,
  },
});

export const monthYear = style({
  fontSize: '18px',
  fontWeight: 'bold',
  color: palette.primary500,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '4px',
});

export const cell = style({
  padding: '8px',
  textAlign: 'center',
  borderRadius: '4px',
  backgroundColor: palette.white,
  color: palette.black,
  border: `1px solid ${palette.gray300}`,
  cursor: 'pointer',
  ':focus': {
    outline: `2px solid ${palette.primary500}`,
  },
});

export const disabledCell = style({
  padding: '8px',
  textAlign: 'center',
  borderRadius: '4px',
  backgroundColor: palette.disabled,
  color: palette.gray300,
  border: `1px solid ${palette.gray300}`,
  cursor: 'not-allowed',
});

export const selectedCellStartEnd = style({
  padding: '8px',
  textAlign: 'center',
  borderRadius: '4px',
  backgroundColor: palette.primary500,
  color: palette.white,
  border: `1px solid ${palette.primary500}`,
});

export const selectedCellRange = style({
  padding: '8px',
  textAlign: 'center',
  borderRadius: '4px',
  backgroundColor: palette.primary100,
  color: palette.white,
  border: `1px solid ${palette.primary100}`,
});
