import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CountryRating from '../countrypage/Rating';

let container = null;
const countryInf = {
  country: {
    image: {
      alt: 'Moscow, Russia',
    },
  },
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render rating component', () => {
  act(() => {
    render(<CountryRating {...{ countryInf }} />, container);
  });
  expect(container.querySelector('[data-testid="rating"]').textContent).toBe('Rating');
});
