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

// Undefined


// -----------------------------------------------------------


function getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// -----------------------------------------------------------


function isNumeric(input) {
    var answer = (!isNaN(input)) ? true : false;
    return answer;
}


// -----------------------------------------------------------


function add(a, b) {
    var answer = a + b;
    return answer;
}

function subtract(a, b) {
    var answer = a - b;
    return answer;
}

function multiply(a, b) {
    var answer = a * b;
    return answer;
}

function divide(a, b) {
    var answer = a / b;
    return answer;
}

function square(a) {
    answer = multiply(a, a);
    return answer;
}

function sumOfSquares(a, b) {
    answer = add(multiply(a, a), multiply(b, b));
    return answer;
}