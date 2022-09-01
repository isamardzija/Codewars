// DESCRIPTION:

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// URL:

// https://www.codewars.com/kata/525caa5c1bf619d28c000335

// SOLUTION :

let board = [
  [1, 2, 1],
  [1, 1, 2],
  [2, 2, 0],
];

function isSolved(board) {
  for (i = 0; i <= 2; i++) {
    //
    //
    // HORIZONTAL WINS:
    //
    //

    if (
      board[i][0] == board[i][1] &&
      board[i][0] == board[i][2] &&
      board[i][0] == "1"
    ) {
      //   console.log("Horizontal Win for X");
      return 1;
    }
    if (
      board[i][0] == board[i][1] &&
      board[i][0] == board[i][2] &&
      board[i][0] == "2"
    ) {
      //   console.log("Horizontal Win for O");
      return 2;
      //
      //
      // VERTICAL WINS:
      //
      //
    }
    if (
      board[0][i] == board[1][i] &&
      board[0][i] == board[2][i] &&
      board[0][i] == "1"
    ) {
      //   console.log("Vertical Win for X");
      return 1;
    }
    if (
      board[0][i] == board[1][i] &&
      board[0][i] == board[2][i] &&
      board[0][i] == "2"
    ) {
      //   console.log("Vertical Win for O");
      return 2;
      //
      //
      // HORIZONTAL WINS:
      //
      //
    }
    if (
      board[0][0] == board[1][1] &&
      board[0][0] == board[2][2] &&
      board[0][0] == "1"
    ) {
      //   console.log("Horizontal Win for X");
      return 1;
    }
    if (
      board[0][0] == board[1][1] &&
      board[0][0] == board[2][2] &&
      board[0][0] == "2"
    ) {
      //   console.log("Horizontal Win for O");
      return 2;
    }
  }
  for (i = 0; i <= 2; i++) {
    if (board[i].includes(0)) {
      return -1;
    }
  }
  for (i = 0; i <= 2; i++) {
    if (board[i].includes(0) == false) {
      return 0;
    }
  }
}

isSolved(board);
