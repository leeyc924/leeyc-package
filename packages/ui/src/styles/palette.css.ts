import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

const theme = createThemeContract({
  primary: null,
  surfaceTint: null,
  onPrimary: null,
  primaryContainer: null,
  onPrimaryContainer: null,
  secondary: null,
  onSecondary: null,
  secondaryContainer: null,
  onSecondaryContainer: null,
  tertiary: null,
  onTertiary: null,
  tertiaryContainer: null,
  onTertiaryContainer: null,
  error: null,
  onError: null,
  errorContainer: null,
  onErrorContainer: null,
  surface: null,
  onSurface: null,
  surfaceVariant: null,
  onSurfaceVariant: null,
  outline: null,
  outlineVariant: null,
  shadow: null,
  surfaceDim: null,
  surfaceContainer: null,
  disabled: null,
});

createGlobalTheme("html[data-theme-mode='light']", theme, {
  primary: '#006879',
  surfaceTint: '#006879',
  onPrimary: '#FFFFFF',
  primaryContainer: '#A9EDFF',
  onPrimaryContainer: '#001F26',
  secondary: '#4B6268',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#CEE7EE',
  onSecondaryContainer: '#061F24',
  tertiary: '#565D7E',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#DDE1FF',
  onTertiaryContainer: '#121A37',
  error: '#BA1A1A',
  onError: '#FFFFFF',
  errorContainer: '#FFDAD6',
  onErrorContainer: '#410002',
  surface: '#F5FAFC',
  onSurface: '#171C1E',
  surfaceVariant: '#DBE4E7',
  onSurfaceVariant: '#3F484B',
  outline: '#70797B',
  outlineVariant: '#BFC8CB',
  shadow: '#000000',
  surfaceDim: 'rgba(0, 0, 0, 0.6)',
  surfaceContainer: '#E9EFF1',
  disabled: 'rgba(23, 28, 30, 0.12)',
});

createGlobalTheme("html[data-theme-mode='dark']", theme, {
  primary: '#84D2E6',
  surfaceTint: '#84D2E6',
  onPrimary: '#003640',
  primaryContainer: '#004E5C',
  onPrimaryContainer: '#A9EDFF',
  secondary: '#B2CBD2',
  onSecondary: '#1D343A',
  secondaryContainer: '#334A50',
  onSecondaryContainer: '#CEE7EE',
  tertiary: '#BEC5EB',
  onTertiary: '#282F4D',
  tertiaryContainer: '#3E4565',
  onTertiaryContainer: '#DDE1FF',
  error: '#FFB4AB',
  onError: '#690005',
  errorContainer: '#93000A',
  onErrorContainer: '#FFDAD6',
  surface: '#0F1416',
  onSurface: '#DEE3E5',
  surfaceVariant: '#3F484B',
  onSurfaceVariant: '#BFC8CB',
  outline: '#899295',
  outlineVariant: '#3F484B',
  shadow: '#000000',
  surfaceDim: 'rgba(255, 255, 255, 0.6)',
  surfaceContainer: '#1B2122',
  disabled: 'rgba(222, 227, 229, 0.12)',
});

const root = createGlobalTheme(':root', {
  blue50: '#E3F2FD',
  blue100: '#BBDEFB',
  blue200: '#90CAF9',
  blue300: '#64B5F6',
  blue400: '#42A5F5',
  blue500: '#2196F3',
  blue600: '#1E88E5',
  blue700: '#1976D2',
  blue800: '#1565C0',
  blue900: '#0D47A1',
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
  black: '#000000',
  white: '#FFFFFF',
});

export default { ...root, ...theme };
