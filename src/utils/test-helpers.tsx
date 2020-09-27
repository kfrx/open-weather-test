import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

export const renderWithTheme = (
  component: React.ReactElement
): React.ReactElement => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
