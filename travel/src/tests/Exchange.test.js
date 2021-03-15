import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Exchange from '../countrypage/Exchange';

let container = null;
const rates = {
  EUR: 20.111,
  USD: 10.222,
  RUB: 100.555,
};
const language = 'en';

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render exchange rate with props', () => {
  act(() => {
    render(<Exchange {...{ language, rates }} />, container);
  });
  expect(container.querySelector('[data-testid="USD"]').textContent).toBe(`USD: ${rates.USD.toFixed(2)}`);
  expect(container.querySelector('[data-testid="EUR"]').textContent).toBe(`EUR: ${rates.EUR.toFixed(2)}`);
});
