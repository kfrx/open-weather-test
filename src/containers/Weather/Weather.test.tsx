import React from 'react';
import Weather from './';
import { renderWithTheme } from 'utils/test-helpers';
import { screen, cleanup } from '@testing-library/react';
import { format } from 'date-fns';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { WeatherItem } from 'api/api.types';

describe('Weather', () => {
  let mock: MockAdapter;
  const expectedData = {
    cnt: 2,
    list: [
      {
        coord: { lon: 144.96, lat: -37.81 },
        sys: {
          country: 'AU',
          timezone: 36000,
          sunrise: 1601150508,
          sunset: 1601194828,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        main: {
          temp: 12.87,
          feels_like: 7.67,
          temp_min: 11,
          temp_max: 14.44,
          pressure: 1026,
          humidity: 57,
        },
        visibility: 10000,
        wind: { speed: 5.7, deg: 170 },
        clouds: { all: 90 },
        dt: 1601176232,
        id: 2158177,
        name: 'Melbourne',
      },
      {
        coord: { lon: 144.96, lat: -37.81 },
        sys: {
          country: 'AU',
          timezone: 36000,
          sunrise: 1601150508,
          sunset: 1601194828,
        },
        weather: [
          {
            id: 804,
            main: 'Sunny',
            description: 'sunny',
            icon: '04d',
          },
        ],
        main: {
          temp: 18.87,
          feels_like: 7.67,
          temp_min: 11,
          temp_max: 14.44,
          pressure: 1026,
          humidity: 57,
        },
        visibility: 10000,
        wind: { speed: 5.7, deg: 170 },
        clouds: { all: 90 },
        dt: 1601176232,
        id: 2158178,
        name: 'Sydney',
      },
    ],
  };

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock
      .onGet('https://api.openweathermap.org/data/2.5/group')
      .reply(200, expectedData);

    renderWithTheme(<Weather />);
  });

  afterEach(() => {
    mock.reset();
    cleanup();
  });

  it('will render the current date', () => {
    const expectedDate = format(new Date(), 'dd MMM yyyy');

    expect(screen.getByText(expectedDate)).toBeInTheDocument();
  });

  it('will render the WeatherInfo items', () => {
    const weatherItems = screen.getAllByTestId('weather-info');

    expect(weatherItems).toHaveLength(expectedData.list.length);

    weatherItems.forEach((item: WeatherItem, index: number) => {
      expect(item).toHaveTextContent(expectedData.list[index].name);
      expect(item).toHaveTextContent(
        expectedData.list[index].weather[0].description
      );
      expect(item).toHaveTextContent(`${expectedData.list[index].main.temp}`);
    });
  });
});
