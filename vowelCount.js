// DESCRIPTION:

//     Return the number (count) of vowels in the given string.

//     We will consider a, e, i, o, u as vowels for this Kata (but not y).

//     The input string will only consist of lower case letters and/or spaces.

// URL: 

//     https://www.codewars.com/kata/54ff3102c1bad923760001f3

// SOLUTION:

function getCount(str) {  
  
    var count=0
    input = str.split("")  
    
    input.forEach(function(letter){
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
      count = count+1     
    })
    return(count)
  }