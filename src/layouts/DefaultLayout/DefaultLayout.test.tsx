import React from 'react';
import DefaultLayout from './';
import { renderWithTheme } from 'utils/test-helpers';
import { screen, cleanup } from '@testing-library/react';

describe('DefaultLayout', () => {
  afterEach(() => cleanup);

  it('will render the content', () => {
    const expectedContent = 'expected content';
    renderWithTheme(<DefaultLayout>{expectedContent}</DefaultLayout>);

    expect(screen.getByText(expectedContent)).toBeInTheDocument();
  });

  it('will render the header', () => {
    renderWithTheme(<DefaultLayout />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
