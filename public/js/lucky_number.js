'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber,
    i = 0,
    zero = 0,
    one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0;

while (i < 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    switch (luckyNumber) {
        case 0:
            zero++;
            break;
        case 1:
            one++;
            break;
        case 2:
            two++;
            break;
        case 3:
            three++;
            break;
        case 4:
            four++;
            break;
        case 5:
            five++;
    }
    i++
}

console.log("0 appeared " + zero + " times.");
console.log("1 appeared " + one + " times.");
console.log("2 appeared " + two + " times.");
console.log("3 appeared " + three + " times.");
console.log("4 appeared " + four + " times.");
console.log("5 appeared " + five + " times.");