import { style, styleVariants } from '@vanilla-extract/css';
import { palette } from '../../styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  height: 32,
  padding: '0 15px',
  justifyContent: 'space-between',
});

export const box = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: '0 15px',
});

export const dayOfWeek = style({
  display: 'flex',
});

export const dayOfWeekItem = style({
  flex: 1,
  textAlign: 'center',
});

export const dateBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

export const dateItem = styleVariants({
  row: {
    display: 'flex',
  },
  col: {
    flex: 1,
    textAlign: 'center',
    height: 32,
    position: 'relative',
  },
  selected: {
    background: palette.Primary,
  },
  start: {
    background: `linear-gradient(to right, #fff 50%, #49d7f4 50%)`,
  },
  end: {
    background: `linear-gradient(to left, #fff 50%, #49d7f4 50%)`,
  },
  single: {
    background: palette.White,
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: '50%',
    ':disabled': {
      cursor: 'initial',
    },
  },
});
