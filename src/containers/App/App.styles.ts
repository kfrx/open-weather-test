import { createGlobalStyle } from 'styled-components';
import theme from 'theme';

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    background-color: ${theme.palette.accents.lightGrey};
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
  }
`;
