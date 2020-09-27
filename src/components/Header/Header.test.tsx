import React from 'react';
import Header from './';
import { renderWithTheme } from 'utils/test-helpers';
import { screen, cleanup } from '@testing-library/react';

describe('Header', () => {
  afterEach(() => cleanup);

  it('will render a header', () => {
    renderWithTheme(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('will render the logo', () => {
    renderWithTheme(<Header />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'Logo.svg');
  });
});
