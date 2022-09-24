export function spiral(matrix: number[][]): number[] {
  const result: number[] = [];
  let arr = JSON.parse(JSON.stringify(matrix));

  while (arr.length !== 0) {
    result.push(...arr.shift());
    arr = rotateMatrix(arr, true);
  }

  return result;
}

export function rotateMatrix<T>(matrix: T[][], rotateLeft?: boolean): T[][] {
  if (matrix && matrix[0] && matrix[0].length === 0) {
    return matrix;
  }

  return matrix && matrix.length
    ? matrix[0].map((columnItem, columnIndex, column) =>
        matrix.map((rowItem, rowIndex, row) =>
          rotateLeft
            ? matrix[rowIndex][column.length - columnIndex - 1]
            : matrix[row.length - rowIndex - 1][columnIndex]
        )
      )
    : [];
}
