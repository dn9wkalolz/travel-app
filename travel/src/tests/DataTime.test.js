import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import DataTime from '../countrypage/DataTime';

const language = 'en';
const timezone = 'Europe/Minsk';
let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render DataTime component with props', () => {
  act(() => {
    render(<DataTime {...{ language, timezone }} />, container);
  });
  expect(container.querySelector('[data-testid="currenttime"]').textContent).toBe('Current Time');
});
