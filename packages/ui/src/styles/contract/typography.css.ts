import { createGlobalThemeContract } from '@vanilla-extract/css';

export const themeTypographyWeightContract = createGlobalThemeContract({
  medium: 'typography-weight-medium',
  regular: 'typography-weight-regular',
  bold: 'typography-weight-bold',
});

export const themeTypographyVariantContract = createGlobalThemeContract({
  h1: {
    fontSize: 'typography-h1-font-size',
    lineHeight: 'typography-h1-line-height',
    letterSpacing: 'typography-h1-letter-spacing',
  },
  h2: {
    fontSize: 'typography-h2-font-size',
    lineHeight: 'typography-h2-line-height',
    letterSpacing: 'typography-h2-letter-spacing',
  },
  h3: {
    fontSize: 'typography-h3-font-size',
    lineHeight: 'typography-h3-line-height',
    letterSpacing: 'typography-h3-letter-spacing',
  },
  b1: {
    fontSize: 'typography-b1-font-size',
    lineHeight: 'typography-b1-line-height',
    letterSpacing: 'typography-b1-letter-spacing',
  },
  b2: {
    fontSize: 'typography-b2-font-size',
    lineHeight: 'typography-b2-line-height',
    letterSpacing: 'typography-b2-letter-spacing',
  },
  d1: {
    fontSize: 'typography-d1-font-size',
    lineHeight: 'typography-d1-line-height',
    letterSpacing: 'typography-d1-letter-spacing',
  },
  d2: {
    fontSize: 'typography-d2-font-size',
    lineHeight: 'typography-d2-line-height',
    letterSpacing: 'typography-d2-letter-spacing',
  },
});
