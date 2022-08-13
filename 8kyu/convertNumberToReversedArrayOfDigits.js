// DESCRIPTION:

    // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

    // Example(Input => Output):
    // 348597 => [7,9,5,8,4,3]
    // 0 => [0]

// URL:

    // https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// SOLUTION:

function digitize(n) {
    numbers = Array.from(String(n)).reverse()
     for (i = 0; i < numbers.length; i+= 1 ) {
       numbers[i] = Number(numbers[i])};
         return numbers
   }