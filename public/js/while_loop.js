"use strict";

// This code generates a random number of cones to sell between 50 and 100 inclusive, logs that number, then begins simulating selling them by generating a random number between 1 and 5 inclusive, logging a message, and subtracting that number from the cone total. When all the cones are "sold", a message is logged saying so.
// If the total is less than the cones to sell, it logs a message saying so and subtracts nothing.
// An extra pair of if/else statements allows for grammatical correctness when dealing with only 1 cone.
// Additionally, every 3 loops, a message is logged saying how many cones are left


// Generating a random number of cones, as well as i which will serve a small purpose later
var allCones = Math.floor(Math.random() * 50) + 50,
    cones,
    i = 1;

// This function logs an ASCII image of a cone to the console
function printCone(conesToPrint) {
    switch (conesToPrint) {
        case 1:
            console.log("      ######\n   #   `   `  #\n # `  `   `  `  #\n#   `   `  ` `  `#\n# `  ` `  `   `  #\n#   `   `  ` `  `#\n # `  `   `  `  #\n  \\/\\/\\/\\/\\/\\/\\/\n   \\/\\/\\/\\/\\/\\/\n    \\/\\/\\/\\/\\/\n     \\/\\/\\/\\/\n      \\/\\/\\/\n       \\/\\/\n        \\/");
            break;
        case 2:
            console.log("      ######              ######\n   #   `   `  #        #   `   `  #\n # `  `   `  `  #    # `  `   `  `  #\n#   `   `  ` `  `#  #   `   `  ` `  `#\n# `  ` `  `   `  #  # `  ` `  `   `  #\n#   `   `  ` `  `#  #   `   `  ` `  `#\n # `  `   `  `  #    # `  `   `  `  #\n  \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/\n   \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/\n    \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/\n     \\/\\/\\/\\/            \\/\\/\\/\\/\n      \\/\\/\\/              \\/\\/\\/\n       \\/\\/                \\/\\/\n        \\/                  \\/");
            break;
        case 3:
            console.log("      ######              ######              ######\n   #   `   `  #        #   `   `  #        #   `   `  #\n # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #\n#   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#\n# `  ` `  `   `  #  # `  ` `  `   `  #  # `  ` `  `   `  #\n#   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#\n # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #\n  \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/\n   \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/\n    \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/\n     \\/\\/\\/\\/            \\/\\/\\/\\/            \\/\\/\\/\\/\n      \\/\\/\\/              \\/\\/\\/              \\/\\/\\/\n       \\/\\/                \\/\\/                \\/\\/\n        \\/                  \\/                  \\/");
            break;
        case 4:
            console.log("      ######              ######              ######              ######\n   #   `   `  #        #   `   `  #        #   `   `  #        #   `   `  #\n # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #\n#   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#\n# `  ` `  `   `  #  # `  ` `  `   `  #  # `  ` `  `   `  #  # `  ` `  `   `  #\n#   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#\n # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #\n  \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/\n   \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/\n    \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/\n     \\/\\/\\/\\/            \\/\\/\\/\\/            \\/\\/\\/\\/            \\/\\/\\/\\/\n      \\/\\/\\/              \\/\\/\\/              \\/\\/\\/              \\/\\/\\/\n       \\/\\/                \\/\\/                \\/\\/                \\/\\/\n        \\/                  \\/                  \\/                  \\/");
            break;
        case 5:
            console.log("      ######              ######              ######              ######              ######\n   #   `   `  #        #   `   `  #        #   `   `  #        #   `   `  #        #   `   `  #\n # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #\n#   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#\n# `  ` `  `   `  #  # `  ` `  `   `  #  # `  ` `  `   `  #  # `  ` `  `   `  #  # `  ` `  `   `  #\n#   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#  #   `   `  ` `  `#\n # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #    # `  `   `  `  #\n  \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/      \\/\\/\\/\\/\\/\\/\\/\n   \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/        \\/\\/\\/\\/\\/\\/\n    \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/          \\/\\/\\/\\/\\/\n     \\/\\/\\/\\/            \\/\\/\\/\\/            \\/\\/\\/\\/            \\/\\/\\/\\/            \\/\\/\\/\\/\n      \\/\\/\\/              \\/\\/\\/              \\/\\/\\/              \\/\\/\\/              \\/\\/\\/\n       \\/\\/                \\/\\/                \\/\\/                \\/\\/                \\/\\/\n        \\/                  \\/                  \\/                  \\/                  \\/");
    }
}

console.log(allCones + " cones to sell...");

do {
    cones = Math.floor(Math.random() * 5) + 1;
    if (allCones >= cones && cones != 1) {
        console.log(cones + " cones sold...");
        allCones -= cones;
        printCone(cones)
    } else if (allCones >= cones && cones == 1) {
        console.log(cones + " cone sold...");
        allCones -= cones;
        printCone(cones)
    } else {
        console.log("Cannot sell you " + cones + " cones -- only have " + allCones + "...");
    }
    if (i % 3 == 0 && allCones != 1) {
        console.log(allCones + " cones left...");
    } else if (i % 3 == 0 && allCones == 1) {
        console.log(allCones + " cone left...")
    }
    i++;
} while (allCones > 0);

console.log("Yay! I sold them all!");


// ------------------------------------------------------


// This code uses a while loop to log all powers of 2 between 2 and 65536 inclusive.


var x = 1;

while (x < 65536) {
    x *= 2;
    console.log(x);
}

// ------------------------------------------------------


// This code generates a random even number every time the page is refreshed and logs it to the console

function getRandomInt(min, max) {
  min = Math.ceil(2);
  max = Math.floor(1024);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt())