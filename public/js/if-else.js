"use strict"

function add(a, b) {
    return a + b;
}

var studentGrades = [70, 80, 95];

if (((studentGrades.reduce(add, 0)) / studentGrades.length) > 80) {
    console.log("You're awesome");
} else {
    console.log("You need to practice more");
}


// ------------------------------------------------


var customerName;
var customerPayment;
var amountAfterDiscount;
var finalAmount;

function calculateDiscount() {
    if (customerPayment > 200) {
        amountAfterDiscount = (((customerPayment - 200) * 35) / 100) + 200;
    } else {
        amountAfterDiscount = customerPayment;
    }
    return amountAfterDiscount;
}

function logCustomerPaymentInfo() {
    console.log(customerName + " bought $" + customerPayment.toFixed(2) + " of groceries.");
    if (finalAmount > 200) {
        console.log("Discount was applied.");
    }
    console.log("Final payment: $" + finalAmount.toFixed(2));
}


customerName = "Cameron";
customerPayment = 180;
finalAmount = calculateDiscount();
logCustomerPaymentInfo();

customerName = "Ryan";
customerPayment = 250;
finalAmount = calculateDiscount();
logCustomerPaymentInfo();

customerName = "George";
customerPayment = 320;
finalAmount = calculateDiscount();
logCustomerPaymentInfo();


// ------------------------------------------------


var flipACoin = Math.floor(Math.random()* 2);

(flipACoin == 0) ? console.log("Buy a car") : console.log("Buy a house");