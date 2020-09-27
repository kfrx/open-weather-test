export const theme = {
  palette: {
    primary: {
      main: '#e3710a',
    },
    secondary: {
      main: '#3c4a60',
    },
    accents: {
      grey: '#ECEDEF',
      lightGrey: '#F9F9F9',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  typography: {
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    h1: {
      fontSize: 36,
    },
    h2: {
      fontSize: 30,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
  },
  breakpoints: {
    up: (size: string): string => {
      switch (size) {
        case 'sm':
          return '@media (min-width: 600px)';
        case 'md':
          return '@media (min-width: 960px)';
        case 'lg':
          return '@media (min-width: 1280px)';
        default:
          return '';
      }
    },
  },
};

export default theme;
