import { style } from '@vanilla-extract/css';

const baseFont = 16;
const pxToRem = (px: `${number}px`) => {
  const [_px] = px.split('px');
  return `${Number(_px) / baseFont}rem`;
};

const base = style({
  verticalAlign: 'baseline',
  fontFamily: '"Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", sans-self',
});

const ellipsisOneLine = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const ellipsisTwoLine = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

const underline = style({
  textDecoration: 'underline',
});

const variant = {
  H1: style({
    fontSize: pxToRem('32px'),
    letterSpacing: -0.5,
    lineHeight: pxToRem('44px'),
  }),
  H2: style({
    fontSize: pxToRem('28px'),
    letterSpacing: -0.5,
    lineHeight: pxToRem('36px'),
  }),
  H3: style({
    fontSize: pxToRem('24px'),
    letterSpacing: -0.5,
    lineHeight: pxToRem('32px'),
  }),
  H4: style({
    fontSize: pxToRem('20px'),
    letterSpacing: -0.5,
    lineHeight: pxToRem('28px'),
  }),
  B1: style({
    fontSize: pxToRem('18px'),
    letterSpacing: 0,
    lineHeight: pxToRem('28px'),
  }),
  B2: style({
    fontSize: pxToRem('16px'),
    letterSpacing: 0,
    lineHeight: pxToRem('24px'),
  }),
  B3: style({
    fontSize: pxToRem('14px'),
    letterSpacing: 0,
    lineHeight: pxToRem('22px'),
  }),
  D1: style({
    fontSize: pxToRem('13px'),
    letterSpacing: 0,
    lineHeight: pxToRem('20px'),
  }),
  D2: style({
    fontSize: pxToRem('12px'),
    letterSpacing: 0,
    lineHeight: pxToRem('16px'),
  }),
};

const weight = {
  regular: style({
    fontWeight: 400,
  }),
  medium: style({
    fontWeight: 600,
  }),
  bold: style({
    fontWeight: 700,
  }),
};

const typographyStyle = {
  base,
  variant,
  weight,
  ellipsisOneLine,
  ellipsisTwoLine,
  underline,
};

export default typographyStyle;
