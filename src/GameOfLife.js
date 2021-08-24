var firstGeneration = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "*", ".", ".", "."],
  [".", ".", ".", "*", "*", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
];

var secondGeneration = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
];

const rows = 4,
  columns = 8;

function getNeighbours(x, y) {
  var arr = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];

  return arr;
}

function isOnBoard(x, y) {
  var x_pos = x >= 0 && x < rows;
  var y_pos = y >= 0 && y < columns;

  return x_pos && y_pos;
}

function countNeightbours(x, y) {
  var neightbours = getNeighbours(x, y);
  var totalNeighbours = 0;
  neightbours.forEach((coord) => {
    if (
      isOnBoard(coord[0], coord[1]) &&
      firstGeneration[coord[0]][coord[1]] == "*"
    ) {
      totalNeighbours += 1;
    }
  });

  return totalNeighbours;
}

function applyRules(neightbours, x, y) {
  if (firstGeneration[x][y] == "*" && (neightbours < 2 || neightbours > 3)) {
    secondGeneration[x][y] = ".";
  } else if (firstGeneration[x][y] == "." && neightbours == 3) {
    secondGeneration[x][y] = "*";
  } else {
    secondGeneration[x][y] = firstGeneration[x][y];
  }
}

function getNextGeneration() {
  firstGeneration.forEach((row, x) => {
    row.forEach((_column, y) => {
      var livingNeighbours = countNeightbours(x, y);
      applyRules(livingNeighbours, x, y);
    });
  });
}

function printGrid(arrCells) {
  arrCells.forEach((row) => {
    console.log(row.join(" "));
  });
}

console.log("1st Generation");
printGrid(firstGeneration);
getNextGeneration();
console.log("2nd Generation");
printGrid(secondGeneration);
