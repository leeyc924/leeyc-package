import { style, styleVariants } from '@vanilla-extract/css';
import { palette } from '../../styles';

export const container = style({
  display: 'flex',
  alignItems: 'center',
});

export const tabItem = styleVariants({
  base: {
    flex: 1,
    borderBottom: `1px solid ${palette.Gray700}`,
  },
  select: {
    borderBottom: `1px solid ${palette.Primary}`,
  },
});
