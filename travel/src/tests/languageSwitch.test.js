import getPhrase from '../countrypage/languageSwitcher';

test('get phrase by selected language', () => {
  expect(getPhrase('pl', 'wind')).toBe('wiatr');
  expect(getPhrase('ru', 'wind')).toBe('ветер');
  expect(getPhrase('en', 'wind')).toBe('wind');
});
