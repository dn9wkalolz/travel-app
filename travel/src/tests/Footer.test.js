import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from '../components/Footer/Footer';

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

it('render description with props', () => {
  act(() => {
    render(<Footer />, container);
  });
  expect(container.querySelector('[data-testid="building"]').textContent).toBe('Building by:');
});
