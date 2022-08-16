// DESCRIPTION:

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// URL:

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// SOLUTION 1: 


function century(year) {

    // Create an array of numbers from the input year + 100
    var arrRes = Array.from(String(year + 100))

    // If the total is less than 100, it is automatically the 0th century
    if ((year + 100) < 101) {
        return 0;
    }
    // If the total has three digits (235), the century is defined by its first character (2)
    if (arrRes.length == 3) {
        return Number(arrRes[0])
    }
    // If the result has 4 digits (1996), and its last two digits are 0s
    if (arrRes.length == 4 && arrRes[arrRes.length - 1] == 0 && arrRes[arrRes.length - 2] == 0) {
        return Number(arrRes[0] + arrRes[1]) - 1
    }
    // else if they are anything else other than 0s
    else if (arrRes.length == 4) {
        return Number(arrRes[0] + arrRes[1])
    }

    // If the result has 5 digits (1996), and its last two digits are 0s
    if (arrRes.length == 5 && arrRes[arrRes.length - 1] == 0 && arrRes[arrRes.length - 2] == 0) {
        return Number(arrRes[0] + arrRes[1] + arrRes[2]) - 1
    }
    // else if they are anything else other than 0s
    else if (arrRes.length == 5) {
        return Number(arrRes[0] + arrRes[1] + arrRes[2])
    }

    // If the result has 6 digits (1996), and its last two digits are 0s
    if (arrRes.length == 6 && arrRes[arrRes.length - 1] == 0 && arrRes[arrRes.length - 2] == 0) {
        return Number(arrRes[0] + arrRes[1] + arrRes[2] + arrRes[3]) - 1
    }
    // else if they are anything else other than 0s
    else if (arrRes.length == 6) {
        return Number(arrRes[0] + arrRes[1] + arrRes[2] + arrRes[3])
    }
}

// SOLUTION 2:


function century(year) {
    str = String(year)

    if (str.slice(str.length - 2, str.length) == '00') {
        return Number(str.slice(0, str.length - 2))

    } else {
        return Number(str.slice(0, str.length - 2)) + 1
    }
}