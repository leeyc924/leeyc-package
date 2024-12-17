import { createGlobalTheme } from '@vanilla-extract/css';
import { themeColorContract } from '../contract/color.css';
import { themeTypographyVariantContract, themeTypographyWeightContract } from '../contract/typography.css';

createGlobalTheme("html[data-theme='light']", themeTypographyVariantContract, {
  h1: {
    fontSize: '28px',
    lineHeight: '38px',
    letterSpacing: '-0.5px',
  },
  h2: {
    fontSize: '22px',
    lineHeight: '30px',
    letterSpacing: '-0.5px',
  },
  h3: {
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '-0.5px',
  },
  b1: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },
  b2: {
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '0px',
  },
  d1: {
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  d2: {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0px',
  },
});

createGlobalTheme("html[data-theme='light']", themeTypographyWeightContract, {
  medium: '600',
  regular: '300',
  bold: '700',
});

createGlobalTheme("html[data-theme='light']", themeColorContract, {
  logoMainblue: '#111aff',
  logoSublime: '#b8ff00',
  secondaryBlue: '#0057ff',
  secondaryNavyblue: '#0029ad',
  secondaryNavy: '#2e3245',
  secondaryGreen: '#18bc7b',
  accentYellow: '#ffcc00',
  accentNegativered: '#ff0000',
  accentRed: '#ff501b',
  accentOrange: '#ff9d00',
  grayscaleGray900: '#222222',
  grayscaleGray800: '#444444',
  grayscaleGray700: '#6a6a6a',
  grayscaleGray500: '#9e9e9e',
  grayscaleGray400: '#b7b7b7',
  grayscaleGray300: '#d2d2d2',
  grayscaleGray200: '#e8e8e8',
  grayscaleGray100: '#f4f4f4',
  grayscaleGray50: '#f7f7f7',
  white: '#ffffff',
  black: '#000000',
  bluegray: '#eef0f4',
  disable: '#c6c6c9',
  bluescaleBlue900: '#0029ad',
  bluescaleBlue700: '#003cff',
  bluescaleBlue600: '#5288ff',
  bluescaleBlue300: '#a3c0ff',
  bluescaleBlue200: '#ccdcff',
  bluescaleBlue100: '#e0eaff',
  bluescaleBlue50: '#e0eaff',
  contentsbg: '#f2f4f7',
  primary: '#3366ff',
});
