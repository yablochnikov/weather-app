export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  pressure: number;
  humidity: number;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IClouds {
  all: number;
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeather {
  coord?: ICoord;
  weather?: IWeatherData[];
  base?: string;
  main?: IMain;
  visibility?: number;
  wind?: IWind;
  clouds?: IClouds;
  dt?: number;
  sys?: ISys;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}

export interface IWeekForecast {
  daily?: {
    dt?: number;
    temp?: {
      min?: number;
      max?: number;
    };
    weather?: IWeatherData[];
    uvi: number;
    sunrise?: number;
    sunset?: number;
    humidity?: number;
    wind_speed?: number;
  }[];
  timezone?: string;
  timezone_offset?: number;
  lon?: number;
  lat?: number;
  hourly?: {
    dt?: number;
    temp: number;
    weather?: IWeatherData[];
  }[];
}
