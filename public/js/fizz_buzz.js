"use strict";

for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// ----------------------------------------------------


// This code is supposed to be the same as the above, but with only two conditionals. However, it doesn't work right yet.

// for (var j = 1; j <= 100; j++) {
//     var fizzBuzz = "";
//     if (j % 3 == 0) {
//         fizzBuzz += "Fizz"
//         console.log(fizzBuzz);
//     }
//     if (j % 5 == 0) {
//         fizzBuzz += "Buzz"
//         console.log(fizzBuzz);
//     } else {
//         console.log(j);
//     }
// }