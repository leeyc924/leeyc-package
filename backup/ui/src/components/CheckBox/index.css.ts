import { style } from '@vanilla-extract/css';
import { palette } from '../../styles';

const defaultSize = 20;
export const container = style({
  position: 'relative',
  display: 'inline-flex',
});

export const input = style({
  position: 'absolute',
  width: 1,
  height: 1,
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
});

export const label = style({
  zIndex: 1,
  position: 'relative',
  display: 'inline-flex',
  cursor: 'pointer',
  ':before': {
    flex: 'none',
    display: 'inline-block',
    content: '',
    width: defaultSize - 4,
    height: defaultSize - 4,
    border: `2px solid ${palette.outline}`,
    borderRadius: 4,
  },
  selectors: {
    [`${input}:checked + &:before`]: {
      background: palette.primary,
    },
  },
});

export const typo = style({
  paddingLeft: 12,
  lineHeight: `${defaultSize}px !important`,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  wordBreak: 'break-word',
  userSelect: 'none',
});

export const icon = style({
  zIndex: 1,
  display: 'none',
  selectors: {
    [`${input}:checked ~ &`]: {
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
    },
  },
});
