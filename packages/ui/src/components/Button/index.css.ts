import { style } from '@vanilla-extract/css';
import { palette } from '../../styles';

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  padding: '0 24px',
  borderRadius: 8,
});

const fullWidth = style({
  width: '100%',
});

const size = {
  xlarge: style({
    height: 52,
  }),
  large: style({
    height: 48,
  }),
  medium: style({
    height: 40,
  }),
  small: style({
    height: 32,
    borderRadius: 4,
    padding: '0 12px',
  }),
};

const color = {
  primary: style({
    backgroundColor: palette.Primary,
    border: `1px solid ${palette.Primary}`,
    color: palette.PrimaryOn,

    ':active': {
      backgroundColor: palette.PrimaryContainer,
      border: `1px solid ${palette.PrimaryContainer}`,
      color: palette.PrimaryContainerOn,
    },
    ':disabled': {
      backgroundColor: palette.Gray500,
      border: `1px solid ${palette.Gray500}`,
    },
  }),
  secondary: style({
    backgroundColor: palette.Secondary,
    border: `1px solid ${palette.Secondary}`,
    color: palette.SecondaryOn,

    ':active': {
      backgroundColor: palette.SecondaryContainer,
      border: `1px solid ${palette.SecondaryContainer}`,
      color: palette.SecondaryContainerOn,
    },
    ':disabled': {
      backgroundColor: palette.Gray500,
      border: `1px solid ${palette.Gray500}`,
    },
  }),
  tertiary: style({
    backgroundColor: palette.Tertiary,
    border: `1px solid ${palette.Tertiary}`,
    color: palette.TertiaryOn,

    ':active': {
      backgroundColor: palette.TertiaryContainer,
      border: `1px solid ${palette.TertiaryContainer}`,
      color: palette.TertiaryContainerOn,
    },
    ':disabled': {
      backgroundColor: palette.Gray500,
      border: `1px solid ${palette.Gray500}`,
    },
  }),
  error: style({
    backgroundColor: palette.Error,
    border: `1px solid ${palette.Error}`,
    color: palette.ErrorOn,

    ':active': {
      backgroundColor: palette.ErrorContainer,
      border: `1px solid ${palette.ErrorContainer}`,
      color: palette.ErrorContainerOn,
    },
    ':disabled': {
      backgroundColor: palette.Gray500,
      border: `1px solid ${palette.Gray500}`,
    },
  }),
};

const buttonStyle = {
  base,
  fullWidth,
  size,
  color,
};
export default buttonStyle;
