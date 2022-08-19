// DESCIPTION:

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
    const inputArray = string.split('')
    const outputArray = [];
    inputArray.forEach((letter, i) => {
        letter !== letter.toUpperCase() ? outputArray.push(letter) : outputArray.push(' ', letter)
    });
    return outputArray.join('')
    
}

solution('jaSamIvanNikoBiko')

