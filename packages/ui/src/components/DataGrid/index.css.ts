import { style, styleVariants } from '@vanilla-extract/css';
import { palette } from '../../styles';

const borderColor = {
  header: palette.SurfaceOn,
  body: palette.SurfaceVariant,
};
export const container = style({
  width: '100%',
  overflowX: 'auto',
});

export const header = style({
  display: 'flex',
  alignItems: 'stretch',
  background: palette.Surface,
  borderTop: `1px solid ${borderColor.header}`,
  borderBottom: `1px solid ${borderColor.header}`,
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  background: borderColor.body,
  width: '100%',
});

export const column = styleVariants({
  base: {
    display: 'flex',
    alignItems: 'center',
    selectors: {
      '& + &': {
        borderLeft: `1px solid ${borderColor.header}`,
      },
    },
  },
  body: {
    selectors: {
      '& + &': {
        borderLeft: `1px solid ${borderColor.body}`,
      },
    },
  },
});

export const columnGroup = styleVariants({
  base: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flex: 1,
  },
  cells: {
    display: 'flex',
    flexWrap: 'nowrap',
    flex: 1,
    borderTop: `1px solid ${borderColor.header}`,
    overflow: 'hidden',
  },
  body: {
    borderTop: 'none',
  },
});

export const columnItem = styleVariants({
  base: {
    padding: 8,
    display: 'flex',
    overflow: 'hidden',
    selectors: {
      '& + &': {
        borderLeft: `1px solid ${borderColor.header}`,
      },
    },
  },
  body: {
    minHeight: 30,
    selectors: {
      '& + &': {
        borderLeft: `1px solid ${borderColor.body}`,
      },
    },
  },
  center: {
    justifyContent: 'center',
  },
  start: {
    justifyContent: 'start',
  },
  end: {
    justifyContent: 'end',
  },
});

export const row = style({
  display: 'flex',
  alignItems: 'stretch',
  borderBottom: `1px solid ${palette.SurfaceVariantOn}`,
});
