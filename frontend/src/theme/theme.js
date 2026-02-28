import { createTheme } from '@mui/material/styles';

export const themeColors = {
  black: '#000000',
  white: '#ffffff',
  primary: '#e6c2a1',
  primaryLight: '#d6d1ce',
  softPrimary: '#2c2c2cb3',
  darkPrimary: '#e3b181ff',
  background: '#000000',
  paragraph: '#d4d4d4b3',
  accent: '#e6c2a1',
  border: 'rgba(214, 209, 206, 0.3)',
  overlay: 'rgba(0, 0, 0, 0.5)',
  borderLight: '#bcbcbc4e',
  divider: 'rgba(214, 209, 206, 0.7)',
  MarleyLight: '#e1f9f3b3',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: themeColors.primary,
      light: themeColors.primaryLight,
      soft: themeColors.softPrimary,
      dark: themeColors.darkPrimary,
    },
    background: {
      default: themeColors.background,
      paper: themeColors.background,
    },
    text: {
      black: themeColors.black,
      white: themeColors.white,
      primaryLight: themeColors.primaryLight,
      primary: themeColors.primary,
      secondary: themeColors.paragraph,
    },
    custom: {
      black: themeColors.black,
      white: themeColors.white,
      accent: themeColors.accent,
      heading: themeColors.primaryLight,
      paragraph: themeColors.paragraph,
      primary: themeColors.primary,
      background: themeColors.background,
      border: themeColors.border,
      overlay: themeColors.overlay,
      borderLight: themeColors.borderLight,
      divider: themeColors.divider,
      MarleyLight: themeColors.MarleyLight,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1320,
    },
  },
  typography: {
    fontFamily: '"Inter", "Fraunces", sans-serif',
    h1: {
      fontFamily: '"Fraunces", sans-serif',
      color: themeColors.primaryLight,
      fontWeight: 600,
    },
    h2: { color: themeColors.primaryLight },
    h3: { color: themeColors.primaryLight },
    h4: { color: themeColors.primaryLight },
    h5: { color: themeColors.primaryLight },
    h6: { color: themeColors.primaryLight },
    body1: {
      color: themeColors.paragraph,
    },
    body2: {
      color: themeColors.paragraph,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--color-black': themeColors.black,
          '--color-white': themeColors.white,
          '--color-primary': themeColors.primary,
          '--color-primary-light': themeColors.primaryLight,
          '--color-background': themeColors.background,
          '--color-paragraph': themeColors.paragraph,
          '--color-border': themeColors.border,
          '--color-overlay': themeColors.overlay,
          '--color-border-light': themeColors.borderLight,
        },
      },
    },
  },
});

export default theme;
