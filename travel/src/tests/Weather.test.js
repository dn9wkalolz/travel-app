import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Weather from '../countrypage/Weather';

let container = null;
const weatherState = {
  main: {
    feels_like: -5.25, humidity: '78',
  },
  weather: [{
    main: 'Snow', description: 'light snow',
  }],
  wind: { speed: 6.84 },
};
const lang = 'en';

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders weather with props', () => {
  act(() => {
    render(<Weather {...{ lang, weatherState }} />, container);
  });
  expect(container.querySelector('[data-testid="description"]').textContent).toBe('light snow');
  expect(container.querySelector('[data-testid="humidity"]').textContent).toBe('humidity: 78%');
});
