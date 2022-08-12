// DESCRIPTION:

//     This time no story, no theory. The examples below show you how to write function accum:

//     Examples:
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
//     The parameter of accum is a string which includes only letters from a..z and A..Z.

// URL:
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039



function accum(s) {

    var stutterArray = [];
    var convert = Array.from(s);          
   

    for (let i = 0; i < convert.length; i++) {      

    var stutter = ((convert[i]).toLowerCase()).repeat(i+1);

    stutterArray.push(stutter);

    stutterArray[i] = stutterArray[i].charAt(0).toUpperCase() + stutterArray[i].slice(1)


    }


    return (stutterArray.join('-'));            

}