import React from 'react';
import WeatherInfo from './';
import { renderWithTheme } from 'utils/test-helpers';
import { screen, cleanup } from '@testing-library/react';

describe('WeatherInfo', () => {
  const expectedIconSrc = 'src';
  const expectedDescription = 'sunny';
  const expectedDegrees = 5;
  const expectedCityName = 'Melbourne';

  beforeEach(() => {
    renderWithTheme(
      <WeatherInfo
        iconSrc={expectedIconSrc}
        description={expectedDescription}
        degreesCelcius={expectedDegrees}
        cityName={expectedCityName}
      />
    );
  });

  afterEach(() => cleanup);

  it('will render the degrees', () => {
    expect(screen.getByTestId('degrees')).toHaveTextContent(
      `${expectedDegrees} °C`
    );
  });

  it('will render the city name', () => {
    expect(screen.getByTestId('city')).toHaveTextContent(expectedCityName);
  });

  it('will render the description', () => {
    expect(screen.getByTestId('description')).toHaveTextContent(
      expectedDescription
    );
  });

  it('will render the icon', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expectedIconSrc);
  });
});
