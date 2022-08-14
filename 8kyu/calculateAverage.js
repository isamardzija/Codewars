// DESCRIPTION:
  // Write a function which calculates the average of the numbers in a given list.

  // Note: Empty arrays should return 0.

// URL:
  // https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// SOLUTION:

function find_average(array) {
  
  let sum = 0  
  if (array.length == 0) {
    return 0;    
  }
  array.forEach((number) => {
               sum += number;})
  
  return sum / array.length;
}
