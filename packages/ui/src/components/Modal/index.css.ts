import { style, styleVariants } from '@vanilla-extract/css';
import { palette } from '../../styles';

export const container = style({
  position: 'fixed',
  zIndex: 9999,
  inset: 0,
  overscrollBehavior: 'none',
  touchAction: 'none',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
});

export const dimmed = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: palette.surfaceDim,
  overflow: 'hidden',
  overscrollBehavior: 'none',
  touchAction: 'none',
});

export const section = styleVariants({
  base: {
    position: 'relative',
    width: '100%',
    background: palette.surfaceContainer,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    padding: '20px 0',
    borderRadius: 20,
    maxHeight: '70%',
    zIndex: 1,
  },
});

export const header = style({
  position: 'relative',
  width: '100%',
  padding: '0 20px',
});

export const title = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 2,
});

export const subTitle = style({
  whiteSpace: 'pre-line',
});

export const main = style({
  flex: 1,
  overflow: 'hidden auto',
  padding: '0 20px',
});

export const footer = style({
  position: 'relative',
  display: 'flex',
  padding: '0 20px',
  gap: 8,
});

export const close = style({
  position: 'absolute',
  top: 20,
  right: 20,
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
