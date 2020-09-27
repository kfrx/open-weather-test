import React from 'react';
import {
  StyledWeather,
  StyledWeatherGrid,
  StyledWeatherHero,
  StyledContainer,
  StyledWeatherMain,
} from './Weather.styles';
import { useQuery } from 'react-query';
import { WeatherProps } from './Weather.types';
import { getWeatherByCities } from 'api';
import { WeatherApiResponse, WeatherApiError } from 'api/api.types';
import Typography from 'components/Typography';
import WeatherInfo from 'components/WeatherInfo';
import { format } from 'date-fns';

const AU_CITIES_WEATHER_IDS: Record<string, number> = {
  Melbourne: 2158177,
  Sydney: 2147714,
  Perth: 2153391,
  Brisbane: 2174003,
  Adelaide: 7839644,
  Darwin: 2073124,
  Canberra: 2172517,
  Hobart: 7839672,
};

const AU_CITY_IDS = Object.values(AU_CITIES_WEATHER_IDS);

export const Weather: React.FC<WeatherProps> = () => {
  const { isLoading, error, data } = useQuery<
    WeatherApiResponse,
    WeatherApiError
  >('weather', () => getWeatherByCities(AU_CITY_IDS));

  return (
    <StyledWeather>
      <StyledWeatherHero>
        <StyledContainer>
          <Typography variant="h1">Weather</Typography>
        </StyledContainer>
      </StyledWeatherHero>
      <StyledWeatherMain>
        <StyledContainer>
          <Typography variant="h2">Australian cities</Typography>
          <Typography variant="h4">
            {format(new Date(), 'dd MMM yyyy')}
          </Typography>
          <StyledWeatherGrid>
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error.message}</div>
            ) : (
              data?.list.map((item) => {
                return (
                  <WeatherInfo
                    key={item.id}
                    data-testid="weather-info"
                    cityName={item.name}
                    degreesCelcius={item.main.temp}
                    iconSrc={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    description={item.weather[0].description}
                  />
                );
              })
            )}
          </StyledWeatherGrid>
        </StyledContainer>
      </StyledWeatherMain>
    </StyledWeather>
  );
};

export default Weather;
