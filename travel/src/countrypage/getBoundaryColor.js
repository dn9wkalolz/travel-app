const getBoundaryColor = (country) => {
  const matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
  const color = 'rgb(0, 128, 0)';
  matchExpression.push(country, color, 'rgba(0, 0, 0, 0)');
  return matchExpression;
};

export default getBoundaryColor;
