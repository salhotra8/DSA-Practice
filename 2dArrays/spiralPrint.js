// Main
function spiralPrint(M) {
  let leftCol = 0,
    rightCol = M[0].length - 1,
    topRow = 0,
    bottomRow = M.length - 1;

  while (leftCol <= rightCol && topRow <= bottomRow) {
    // Print top row (left to right)
    for (let i = leftCol; i <= rightCol; i++) {
      console.log(M[topRow][i]);
    }
    topRow++;

    // Break if rows boundaries have crossed
    if (topRow > bottomRow) break;

    // Print right column (top to bottom)
    for (let i = topRow; i <= bottomRow; i++) {
      console.log(M[i][rightCol]);
    }
    rightCol--;

    // Break if column boundaries have crossed
    if (leftCol > rightCol) break;

    // Print bottom row (right to left)
    for (let i = rightCol; i >= leftCol; i--) {
      console.log(M[bottomRow][i]);
    }
    bottomRow--;

    // Print left column (bottom to top)
    for (let i = bottomRow; i >= topRow; i--) {
      console.log(M[i][leftCol]);
    }
    leftCol++;
  }
}
var M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
spiralPrint(M);