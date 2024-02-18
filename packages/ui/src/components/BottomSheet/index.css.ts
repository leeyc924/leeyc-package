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
});

export const dimmed = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.6)',
  overflow: 'hidden',
  overscrollBehavior: 'none',
  touchAction: 'none',
});

export const section = styleVariants({
  base: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    left: 0,
    background: palette.White,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: '20px 0',
    borderRadius: '20px 20px 0px 0px',
  },
  small: { maxHeight: '50%' },
  meidum: { maxHeight: '70%' },
  large: { maxHeight: '90%' },
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
  gap: 4,
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
