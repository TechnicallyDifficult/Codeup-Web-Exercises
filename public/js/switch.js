"use strict"

// This code generates a random "lucky number" between 0 and 6 inclusive, then calculates and applies a discount based on that number. The price before the discount is applied is hardcoded for the purposes of this exercise.


// Generating our "lucky number"
var luckyNumber = Math.floor(Math.random()* 6),
    finalPay,
    discountAmount,
    customerPay;

// The function that calculates the discount and returns the total after the discount is applied. Takes the discount percentage (represented as an interger) as parameters.
function calculateFinalPay(discountAmount) {
    var discountAmount = (customerPay * discountAmount) / 100;
    var amountAfterDiscount = customerPay - discountAmount;
    return amountAfterDiscount;
}

// The hardcoded customer pay value
customerPay = 60

// Some fancy messages
console.log("Your total is: $" + customerPay);
console.log("Your lucky number is... *drumroll*")
console.log(luckyNumber + "!")

// The switch statement that calls the funcions with the proper parameters and logs a message based on the "lucky number"
switch (luckyNumber) {
    case 0:
        finalPay = customerPay;
        console.log("You get no discount... =(");
        break;
    case 1:
        finalPay = calculateFinalPay(10)
        console.log("You get a 10% discount. =)");
        break;
    case 2:
        finalPay = calculateFinalPay(25)
        console.log("You get a 25% discount! ^_^")
        break;
    case 3:
        finalPay = calculateFinalPay(35)
        console.log("You get a 35% discount!! :D")
        break;
    case 4:
        finalPay = calculateFinalPay(50)
        console.log("You get a 50% discount!!! (*^v^*)")
        break;
    case 5:
        finalPay = 0
        console.log("You get it all for free?!? O_O")
}

// And a switch statement to choose the final message depending on whether the items are free or not
switch (finalPay) {
    case 0:
        console.log("Have a nice day. OwO")
        break;
    default:
        console.log("Your final total is: $" + finalPay)
}


// ---------------------------------------------------------


// This code generates a random number between 1 and 12 inclusive and then logs a message consisting of the name of a month based on that number.


// Generating our random number
var monthNumber = (Math.floor(Math.random()* 12)) + 1,
    month

// Assigning the name of the corresponding month to a variable
switch (monthNumber) {
    case 1:
        month = "January"
        break;
    case 2:
        month = "February"
        break;
    case 3:
        month = "March"
        break;
    case 4:
        month = "April"
        break;
    case 5:
        month = "May"
        break;
    case 6:
        month = "June"
        break;
    case 7:
        month = "July"
        break;
    case 8:
        month = "August"
        break;
    case 9:
        month = "September"
        break;
    case 10:
        month = "October"
        break;
    case 11:
        month = "November"
        break;
    case 12:
        month = "December"
}

// Logging the message
console.log(month);