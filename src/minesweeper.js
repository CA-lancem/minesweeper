const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    const row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

generatePlayerBoard(3,3);

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    const row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(numberOfRows * Math.random()); 
    const randomColumnIndex = Math.floor(numberOfColumns * Math.random()); 
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++; 
    
    // Has potential to place bombs on top of existing bombs. To be fixed in future lesson.

  }

  return board;
};

const printBoard = board => {
  console.log(board.map(row =>
    row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3, 4);
const bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);
