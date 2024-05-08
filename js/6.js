function multiplyOddByMin(matrix) {
  let min = matrix[0][0];
  for (let row of matrix) {
    for (let value of row) {
      if (value < min) {
        min = value;
      }
    }
  }

  return matrix.map((row) =>
    row.map((value) => (value % 2 !== 0 ? value * min : value))
  );
}

const originalMatrix = [
  [5, 3, 6],
  [7, 11, 2],
  [15, 9, 4],
];

const resultMatrix = multiplyOddByMin(originalMatrix);
console.log("Результат:", resultMatrix);
