import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Gallery from '../countrypage/Gallery/Gallery';

const countryInf = {
  country: {
    video: 'https://www.youtube.com/embed/ekz6i58kVpI',
    galleryImages: [
      {
        alt: 'Cracow, Poland',
        description: 'Cracow description',
      },
    ],
  },
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

it('check image description', () => {
  act(() => {
    render(<Gallery {...{ countryInf }} />, container);
  });
  expect(container.querySelector('[data-testid="title"]').textContent).toBe('Cracow, Poland');
  expect(container.querySelector('[data-testid="description"]').textContent).toBe('Cracow description');
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
