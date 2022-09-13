// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/

// SOLUTION 1:

function reverseWords(str) {
  var result = [];
  str.split(" ").forEach((word) => {
    // Array.from(word).reverse().join("");
    var oneWord = Array.from(word).reverse().join("");
    result.push(oneWord);
  });
  return result.join(" ");
}

// SOLUTION 2:
function reverseWords(str) {
  arr = [];
  arr2 = [];
  str.split(" ").forEach((word) => {
    arr.push(Array.from(word).reverse());
  });
  arr.forEach((word) => {
    arr2.push(word.join(""));
  });
  console.log(arr2.join(" "));
  return arr2.join(" ");
}
