// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// SOLUTION:

// checks if parameter is a letter
function isLetter(i) {
    return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
}

function sameCase(a, b){
  
  // checks if both a and b are letters
  if (isLetter(a) == false || isLetter(b) == false) {
    return -1
  }

  // if a is uppercase AND b is uppercase
  if (a === a.toUpperCase() && b === b.toUpperCase()) {
    return 1;
    }
  
  // if a is lowercase AND b is lowercase
 else if (a === a.toLowerCase() && b === b.toLowerCase()){
    return 1; 
  }
  
  // if a is uppercarse and b is not uppercase
  else if (a == a.toUpperCase() && b !== b.toUpperCase()){
    return 0;
  }
  
  // if a is lowercase and b is not lowercase
 else  if (a == a.toLowerCase() && b !== b.toLowerCase()){
    return 0;
  }
}