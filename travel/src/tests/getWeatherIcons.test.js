import getIcon from '../countrypage/getWeatherIcons';
import Drizzle from '../countrypage/weather-icons/drizzle.svg';
import Clear from '../countrypage/weather-icons/clear-day.svg';
import Clouds from '../countrypage/weather-icons/cloudy.svg';

test('get icon with argument', () => {
  expect(getIcon('Drizzle')).toBe(Drizzle);
  expect(getIcon('Clear')).toBe(Clear);
  expect(getIcon('Clouds')).toBe(Clouds);
});
