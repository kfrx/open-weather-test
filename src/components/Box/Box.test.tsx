import React from 'react';
import Box from './';
import { renderWithTheme } from 'utils/test-helpers';
import { screen, cleanup } from '@testing-library/react';

describe('Box', () => {
  afterEach(() => cleanup);

  it('will render the content', () => {
    const expectedContent = 'expected content';

    renderWithTheme(<Box>{expectedContent}</Box>);

    expect(screen.getByText(expectedContent)).toBeInTheDocument();
  });
});
