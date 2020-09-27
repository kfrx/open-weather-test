import React from 'react';
import Typography from './';
import { renderWithTheme } from 'utils/test-helpers';
import { screen, cleanup } from '@testing-library/react';

describe('Typography', () => {
  afterEach(() => cleanup);

  it('will render the Typography component with the text', () => {
    const expectedText = 'expected text';
    const { container } = renderWithTheme(
      <Typography>{expectedText}</Typography>
    );

    expect(container.querySelector('p')).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('can render the heading variants', () => {
    const variants = ['h1', 'h2', 'h3', 'h4'];
    const expectedText = 'expected text';

    variants.forEach((variant: any) => {
      const { container } = renderWithTheme(
        <Typography variant={variant}>{expectedText}</Typography>
      );

      expect(container.querySelector(variant)).toBeInTheDocument();
    });
  });
});
