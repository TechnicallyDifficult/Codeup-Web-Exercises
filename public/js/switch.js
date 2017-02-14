"use strict"

var luckyNumber = Math.floor(Math.random()* 6),
    finalPay,
    discountAmount,
    customerPay;

function calculateFinalPay(discountAmount) {
    var discountAmount = (customerPay * discountAmount) / 100;
    var amountAfterDiscount = customerPay - discountAmount;
    return amountAfterDiscount;
}

customerPay = 60

console.log("Your total is: $" + customerPay);
console.log("Your lucky number is... *drumroll*")
console.log(luckyNumber + "!")

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
        break;
}

switch (finalPay) {
    case 0:
        console.log("Have a nice day. OwO")
        break;
    default:
        console.log("Your final total is: $" + finalPay)
}


// ---------------------------------------------------------


var monthNumber = (Math.floor(Math.random()* 12)) + 1,
    month

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
        break;
}

console.log(month);