import { style } from '@vanilla-extract/css';
import * as palette from './palette.css';

export const calendar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 350,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '10px',
});

export const dates = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '5px',
});

export const date = style({
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'white',
  color: 'black',
});

export const selected = style({
  backgroundColor: palette.primary100,
  color: 'white',
});

export const inRange = style({
  backgroundColor: palette.primary100,
  color: 'white',
});

export const rangeStartEnd = style({
  backgroundColor: palette.primary500,
  color: 'white',
});

export const disabled = style({
  backgroundColor: palette.disabled,
  color: palette.gray300,
});

export const empty = style({
  backgroundColor: 'transparent',
  cursor: 'default',
});