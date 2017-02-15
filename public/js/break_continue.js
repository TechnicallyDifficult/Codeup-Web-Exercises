"use strict";

var skip = 0;

while (skip % 2 != 1) {
    skip = Math.floor((Math.random()*50)+1);
}

console.log("Random odd number to skip is: " + skip);

for (var i = 1; i < 50; i += 2) {
    if (i == skip) {
        console.log("Yikes! Skipping number: " + skip);
        continue;
    }
    console.log("Here is an odd number: " + i);
}