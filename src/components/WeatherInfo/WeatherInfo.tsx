import React from 'react';
import { WeatherInfoProps } from './WeatherInfo.types';
import {
  StyledWeatherInfo,
  StyledWeatherInfoIcon,
  StyledWeatherInfoContent,
  StyledDescription,
} from './WeatherInfo.styles';
import Typography from 'components/Typography';

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  degreesCelcius,
  cityName,
  iconSrc,
  description,
  ...restProps
}) => {
  return (
    <StyledWeatherInfo {...restProps}>
      <StyledWeatherInfoIcon src={iconSrc} alt={description} />
      <StyledWeatherInfoContent>
        <Typography variant="h3" data-testid="degrees">
          {degreesCelcius} &deg;C
        </Typography>
        <Typography variant="h4" data-testid="city">
          {cityName}
        </Typography>
        <StyledDescription data-testid="description">
          {description}
        </StyledDescription>
      </StyledWeatherInfoContent>
    </StyledWeatherInfo>
  );
};

export default WeatherInfo;
