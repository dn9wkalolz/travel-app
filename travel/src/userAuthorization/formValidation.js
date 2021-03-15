export const minLengthValidation = (requiredLength) => (value) => (value && value.length < requiredLength ? 'min length 4 chars' : undefined);
