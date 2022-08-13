// DESCRIPTION:

    // Input
    // Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

    // Output
    // Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

    // Example
    // input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
    // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// URL:

    // https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

// SOLUTION:

function openOrSenior(data){

    for (i = 0; i < data.length; i = i+1 ) {

        if (data[i][0] >= 55 && data[i][1] >= 8) {
            data[i] = 'Senior'      
        } else {
            data[i] = "Open"
        }
    }
    return data
  }