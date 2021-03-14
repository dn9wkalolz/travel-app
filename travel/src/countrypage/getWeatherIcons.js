import Drizzle from './weather-icons/drizzle.svg';
import Clear from './weather-icons/clear-day.svg';
import Clouds from './weather-icons/cloudy.svg';
import Rain from './weather-icons/rain.svg';
import Fog from './weather-icons/mist.svg';
import Snow from './weather-icons/snow.svg';
import Thunderstorm from './weather-icons/thunder.svg';
import Default from './weather-icons/partly-cloudy-day.svg';

const getIcon = (weatherName) => {
  switch (weatherName) {
    case ('Drizzle'):
      return Drizzle;
    case ('Clear'):
      return Clear;
    case ('Clouds'):
      return Clouds;
    case ('Rain'):
      return Rain;
    case ('Fog'):
      return Fog;
    case ('Haze'):
      return Fog;
    case ('Snow'):
      return Snow;
    case ('Thunderstorm'):
      return Thunderstorm;
    default:
      return Default;
  }
};

export default getIcon;
