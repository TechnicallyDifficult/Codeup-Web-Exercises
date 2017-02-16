"use strict";

function log(valueToLog) {
    console.log(valueToLog);
}

var result = log();

typeof result;

// Undefined


// -----------------------------------------------------------


function identity(valueToReturn) {
    return valueToReturn;
}

var result = identity();

typeof result;

// Type is the same as whatever you put in the function.


// -----------------------------------------------------------


function getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// -----------------------------------------------------------


function isNumeric(input) {
    return !isNaN(input);
}


// -----------------------------------------------------------


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function square(a) {
    return multiply(a, a);
}

function sumOfSquares(a, b) {
    return add(square(a), square(b));
}