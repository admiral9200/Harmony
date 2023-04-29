export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 156) + 100;
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
};

export const getRandomsColors = (limit: number) => {
  let colors = [];
  for (let index = 0; index < limit; index++) {
    colors.push(getRandomColor());
  }
  return colors;
};
