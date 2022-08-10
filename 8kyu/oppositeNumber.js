// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// SOLUTION:

function opposite(number) {
    if (number < 0) {
      oppositeNumber = Number(String(number).substring(1))
        return oppositeNumber ;
    }
    else if (number == 0) {
        return number;
    }
    else {
        oppositeNumber = Number("-" + String(number));
        return oppositeNumber;
    }
  }