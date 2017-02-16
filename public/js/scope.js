"use strict";

(function () {
    var myNameIs = 'Jacob';

    function sayHello(name) {
        console.log("Hello from " + name + ".");
    }

    sayHello(myNameIs);

    // Don't modify the following line
    // It generates a random number between 1 and 100 and stores it in random
    var random = Math.floor((Math.random()*100)+1);


    function isOdd(number) {
        var answer = (number % 2 == 1) ? true : false;
        return answer;
    }

    if (isOdd(random)) {
        console.log("The number " + random + " is odd.");
    } else {
        console.log("The number " + random + " is even.");
    }
})();