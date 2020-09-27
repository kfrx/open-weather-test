import axios from 'axios';
import { WeatherApiResponse } from './api.types';
import { WEATHER_API_KEY } from 'config';

export const getWeatherByCities = (
  cityIds: number[]
): Promise<WeatherApiResponse> => {
  return axios
    .get<WeatherApiResponse>('https://api.openweathermap.org/data/2.5/group', {
      params: {
        units: 'metric',
        id: cityIds.join(','),
        appid: WEATHER_API_KEY,
      },
    })
    .then((res) => res.data);
};
