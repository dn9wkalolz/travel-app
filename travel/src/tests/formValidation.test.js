import { minLengthValidation } from '../userAuthorization/formValidation';

test('get phrase by selected language', () => {
  expect(minLengthValidation(1)('app')).toBe(undefined);
  expect(minLengthValidation(2)('app')).toBe(undefined);
  expect(minLengthValidation(5)('app')).toBe('min length 4 chars');
});
