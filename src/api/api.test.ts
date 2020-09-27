import { getWeatherByCities } from './api';
import MockAdapter from 'axios-mock-adapter';
import { WEATHER_API_KEY } from 'config';
import axios from 'axios';

describe('api', () => {
  let mock: MockAdapter;
  const expectedData = {
    cnt: 1,
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
    ],
  };

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock
      .onGet('https://api.openweathermap.org/data/2.5/group')
      .reply(200, expectedData);
  });

  afterEach(() => {
    mock.reset();
  });

  it('can fetch the weather by cities', async () => {
    const ids = [2158177, 2158178];
    const actual = await getWeatherByCities(ids);

    expect(mock.history.get.length).toBe(1);
    expect(mock.history.get[0].params.id).toEqual(ids.join(','));
    expect(mock.history.get[0].params.units).toEqual('metric');
    expect(mock.history.get[0].params.appid).toEqual(WEATHER_API_KEY);
    expect(actual).toEqual(expectedData);
  });
});
