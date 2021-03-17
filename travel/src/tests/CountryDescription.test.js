import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CountryDescription from '../countrypage/CountryDescription';

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

it('render description with props', () => {
  act(() => {
    render(<CountryDescription {...{ countryInf }} />, container);
  });
  expect(container.querySelector('[data-testid="alt"]').textContent).toBe('Moscow, Russia');
});
