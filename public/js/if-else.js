"use strict"

// This code takes an array with a set of grades (hardcoded for the purposes of this exercise), averages them together, and logs a message depending on whether or not the calculated average is greater than 80.

// Function for later adding the grades in the array together
function add(a, b) {
    return a + b;
}

// The (hardcoded) array for the grades
var studentGrades = [70, 80, 95],
// Now we average the grades together and record that in a variable
    gradeAverage = (studentGrades.reduce(add)) / studentGrades.length;

// Which message do we send?
if (gradeAverage > 80) {
    console.log("You're awesome");
} else {
    console.log("You need to practice more");
}


// ------------------------------------------------


// This code calculates how much a customer must pay if they receive a 35% discount for every dollar they pay over 200. It then logs a message containing the customer's name and their total (before the discount is applied), then another if any discount was applied, and finally one last message telling their final payment.

// Customer name and payment before the discount are all hardcoded variables for the purposes of this exercise.


var customerName,
    customerPayment,
    amountAfterDiscount,
    finalAmount;

// The function that calculates the discount
function calculateDiscount() {
    if (customerPayment > 200) {
        amountAfterDiscount = (((customerPayment - 200) * 35) / 100) + 200;
    } else {
        amountAfterDiscount = customerPayment;
    }
    return amountAfterDiscount;
}

// The function that logs the messages.
function logCustomerPaymentInfo() {
    console.log(customerName + " bought $" + customerPayment.toFixed(2) + " of groceries.");
    if (finalAmount > 200) {
        console.log("Discount was applied.");
    }
    console.log("Final payment: $" + finalAmount.toFixed(2));
}

// Hardcoded variables for Cameron as well as function calls for calculating his discount and logging the messages
customerName = "Cameron";
customerPayment = 180;
finalAmount = calculateDiscount();
logCustomerPaymentInfo();

// Same for Ryan
customerName = "Ryan";
customerPayment = 250;
finalAmount = calculateDiscount();
logCustomerPaymentInfo();

// Same for George
customerName = "George";
customerPayment = 320;
finalAmount = calculateDiscount();
logCustomerPaymentInfo();


// ------------------------------------------------


// This code generates a random number, 0 or 1, and logs a message based on the result using the tenary operator.


var flipACoin = Math.floor(Math.random()* 2);

(flipACoin == 0) ? console.log("Buy a car") : console.log("Buy a house");