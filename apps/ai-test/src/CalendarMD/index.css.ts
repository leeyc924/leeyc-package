import { style } from '@vanilla-extract/css';

export const styles = {
  calendar: style({
    width: '350px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    fontFamily: 'Arial, sans-serif',
  }),
  header: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    fontSize: '1.2em',
  }),
  navButton: style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5em',
    padding: '0 10px',
  }),
  days: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    marginBottom: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
  }),
  day: style({
    padding: '8px 0',
  }),
  dates: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px',
  }),
  date: style({
    width: '100%',
    padding: '10px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:focus': {
        outline: '2px solid #000',
      },
    },
  }),
};
