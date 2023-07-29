function findMaxNumber(array: number[]) {
  return Math.max(...array);
}

const collection = [12, 45, 67, 8, 2233, 23]?.map(
  (item, index) => item + index + item / 2
);
