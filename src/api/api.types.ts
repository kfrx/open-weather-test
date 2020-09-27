export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherItem {
  coord: { lon: number; lat: number };
  sys: {
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  weather: Weather[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  id: number;
  name: string;
}

export interface WeatherApiResponse {
  cnt: number;
  list: WeatherItem[];
}

export interface WeatherApiError {
  cod: string;
  message: string;
}
