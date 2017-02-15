"use strict";

var numberOutput;

for (var i = 1; i <= 10; i++) {
    numberOutput = (i % 10);
    for (var j = 1; j < i; j++) {
        numberOutput += String(i % 10);
        }
    console.log(numberOutput);
}


// ------------------------------------


var baseNumber = Math.floor((Math.random()* 10) + 1);

for (var k = 1; k <= 10; k++) {
    console.log(baseNumber + "x" + k + "=" + baseNumber*k);
}


// ------------------------------------


var oddOrEven;

for (var l = 0; l < 10; l++) {
    oddOrEven = Math.floor((Math.random()* 181) + 20);
    if (oddOrEven % 2 == 0) {
        console.log(oddOrEven + " is even.");
    } else {
        console.log(oddOrEven + " is odd.");
    }
}


// ------------------------------------


for (var m = 100; m > 0; m -= 5) {
    console.log(m);
}