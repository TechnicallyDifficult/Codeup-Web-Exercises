"use strict";

var leftField = document.getElementById("left-field"),
    middleField = document.getElementById("middle-field"),
    rightField = document.getElementById("right-field"),
    answerField = document.getElementById("answer-field"),
    leftFieldValue = "",
    middleFieldValue = "",
    rightFieldValue = "",
    answerFieldValue = "",
    numberButtons = document.getElementsByClassName("numberKey"),
    numberSystem = 10,
    baseField = document.getElementById("number-system"),
    numbers = true;


// This function is not my code.
function parseFloat(string, radix)
{
    //split the string at the decimal point
    string = string.split(/\./);

    //if there is nothing before the decimal point, make it 0
    if (string[0] == '') {
        string[0] = "0";
    }

    //if there was a decimal point & something after it
    if (string.length > 1 && string[1] != '') {
        var fractionLength = string[1].length;
        string[1] = parseInt(string[1], radix);
        string[1] *= Math.pow(radix, -fractionLength);
        return parseInt(string[0], radix) + string[1];
    }

    //if there wasn't a decimal point or there was but nothing was after it
    return parseInt(string[0], radix);
}

function clickNumberButton() {
    if (parseInt(this.innerText, numberSystem) < numberSystem) {
        if (answerFieldValue != "") {
            clearAllFields();
        }
        if (middleFieldValue == "") {
            leftFieldValue += this.innerText;
            leftField.setAttribute("value", leftFieldValue.toUpperCase());
            leftFieldValue = leftFieldValue.toLowerCase();
        } else if (middleFieldValue != "sqrt") {
            rightFieldValue += this.innerText;
            rightField.setAttribute("value", rightFieldValue.toUpperCase());
            rightFieldValue = rightFieldValue.toLowerCase();
        }
    }
}

function clickSecondF() {
    if (numbers) {
        numberButtons[0].innerText = "A";
        numberButtons[1].innerText = "B";
        numberButtons[2].innerText = "C";
        numberButtons[3].innerText = "D";
        numberButtons[4].innerText = "E";
        numberButtons[5].innerText = "F";
        numberButtons[6].innerText = "";
        numberButtons[7].innerText = "";
        numberButtons[8].innerText = "";
        numbers = false
    } else {
        numberButtons[0].innerText = "1";
        numberButtons[1].innerText = "2";
        numberButtons[2].innerText = "3";
        numberButtons[3].innerText = "4";
        numberButtons[4].innerText = "5";
        numberButtons[5].innerText = "6";
        numberButtons[6].innerText = "7";
        numberButtons[7].innerText = "8";
        numberButtons[8].innerText = "9";
        numbers = true
    }
}

function clickNegative() {
    if (answerFieldValue != "") {
        leftFieldValue = answerFieldValue;
        clearField("middle");
        clearField("right");
        clearField("answer");
    }
    if (middleFieldValue == "") {
        if (leftFieldValue == "") {
            leftFieldValue += "-";
            leftField.setAttribute("value", leftFieldValue);
        } else if (leftFieldValue == "-") {
            leftFieldValue = "";
            leftField.setAttribute("value", leftFieldValue);
        } else {
            leftFieldValue = (parseFloat(leftFieldValue, 10) * -1).toString(numberSystem);
            leftField.setAttribute("value", leftFieldValue);
        }
    } else {
        if (rightFieldValue == "") {
            rightFieldValue += "-";
            rightField.setAttribute("value", rightFieldValue);
        } else if (rightFieldValue == "-") {
            rightFieldValue = "";
            rightField.setAttribute("value", rightFieldValue);
        } else {
            rightFieldValue = (parseFloat(rightFieldValue, 10) * -1).toString(numberSystem);
            rightField.setAttribute("value", rightFieldValue);
        }
    }
}

function hasPoint(value) {
    var array = value.split(""),
        point = false;
        array.forEach(function (element, index, array) {
            if (element == ".") {
                point = true;
***REMOVED***
        });
        return point;

}

function clickPoint() {
    if (numberSystem = 10) {
        if (answerFieldValue != "") {
            clearAllFields();
            leftFieldValue += "0";
        }
        if (middleFieldValue == "") {
            if (leftFieldValue == "") {
                leftFieldValue += "0";
***REMOVED***
            if (!hasPoint(leftFieldValue)) {
                leftFieldValue += ".";
                leftField.setAttribute("value", leftFieldValue);
***REMOVED***
        } else if (middleFieldValue != "sqrt") {
            if (rightFieldValue == "") {
                rightFieldValue += "0";
***REMOVED***
            if (!hasPoint(rightFieldValue)) {
                rightFieldValue += ".";
                rightField.setAttribute("value", rightFieldValue);
***REMOVED***
        }
    }
}

function clickOperator() {
    if (leftFieldValue == "") {
        leftFieldValue = "0";
        leftField.setAttribute("value", leftFieldValue);
    }
    if (answerFieldValue != "") {
        leftFieldValue = answerFieldValue;
        leftField.setAttribute("value", leftFieldValue.toUpperCase());
        clearField("right");
        clearField("answer");
    }
}

function clickPlus() {
    clickOperator();
    middleFieldValue = "plus";
    middleField.setAttribute("value", "+");
}

function clickMinus() {
    clickOperator();
    middleFieldValue = "minus";
    middleField.setAttribute("value", "−");
}

function clickTimes() {
    clickOperator();
    middleFieldValue = "times";
    middleField.setAttribute("value", "×");
}

function clickDivide() {
    clickOperator();
    middleFieldValue = "divide";
    middleField.setAttribute("value", "÷");
}

function clickPower() {
    clickOperator();
    middleFieldValue = "power";
    middleField.setAttribute("value", "^");
}

function clickSqrt() {
    clickOperator();
    middleFieldValue = "sqrt";
    middleField.setAttribute("value", "√");
}

function clickPercent() {
    clickOperator();
    middleFieldValue = "percent";
    middleField.setAttribute("value", "%");
}

function convertBase(x) {
    if (leftFieldValue != "" && leftFieldValue != "-") {
        leftFieldValue = parseFloat(leftFieldValue, numberSystem).toString(x);
        leftField.setAttribute("value", leftFieldValue.toUpperCase());
    }
    if (rightFieldValue != "" && rightFieldValue != "-") {
        rightFieldValue = parseFloat(rightFieldValue, numberSystem).toString(x);
        rightField.setAttribute("value", rightFieldValue.toUpperCase());
    }
    if (answerFieldValue != "") {
        answerFieldValue = parseFloat(answerFieldValue, numberSystem).toString(x);
        answerField.setAttribute("value", answerFieldValue.toUpperCase());
    }
}

function convertToHex() {
    if (numberSystem != 16 && !hasPoint(leftFieldValue) && !hasPoint(rightFieldValue) && !hasPoint(answerFieldValue)) {
        baseField.setAttribute("value", "Hex");
        convertBase(16);
        numberSystem = 16;
    }
}

function convertToBin() {
    if (numberSystem != 2 && !hasPoint(leftFieldValue) && !hasPoint(rightFieldValue) && !hasPoint(answerFieldValue)) {
        baseField.setAttribute("value", "Bin");
        convertBase(2);
        numberSystem = 2;
    }
}

function convertToDec() {
    if (numberSystem != 10 && !hasPoint(leftFieldValue) && !hasPoint(rightFieldValue) && !hasPoint(answerFieldValue)) {
        baseField.setAttribute("value", "Dec");
        convertBase(10);
        numberSystem = 10;
    }
}

function convertToOct() {
    if (numberSystem != 8 && !hasPoint(leftFieldValue) && !hasPoint(rightFieldValue) && !hasPoint(answerFieldValue)) {
        baseField.setAttribute("value", "Oct");
        convertBase(8);
        numberSystem = 8;
    }
}

function clearField(fieldToClear) {
    switch (fieldToClear) {
        case "left":
            leftFieldValue = "";
            leftField.setAttribute("value", leftFieldValue);
        case "middle":
            middleFieldValue = "";
            middleField.setAttribute("value", middleFieldValue);
        case "right":
            rightFieldValue = "";
            rightField.setAttribute("value", rightFieldValue);
        case "answer":
            answerFieldValue = "";
            answerField.setAttribute("value", answerFieldValue);
    }
}

function clearAllFields() {
    leftFieldValue = "";
    middleFieldValue = "";
    rightFieldValue = "";
    answerFieldValue = "";
    leftField.setAttribute("value", leftFieldValue);
    middleField.setAttribute("value", middleFieldValue);
    rightField.setAttribute("value", rightFieldValue);
    answerField.setAttribute("value", answerFieldValue);
}

function performOperation(a, b, operator) {
    switch (operator) {
        case "equals":
            return (parseFloat(a, numberSystem)).toString(numberSystem);
        case "plus":
            return (parseFloat(a, numberSystem) + parseFloat(b, numberSystem)).toString(numberSystem);
        case "minus":
            return (parseFloat(a, numberSystem) - parseFloat(b, numberSystem)).toString(numberSystem);
        case "times":
            return (parseFloat(a, numberSystem) * parseFloat(b, numberSystem)).toString(numberSystem);
        case "divide":
            if (b == 0) {
                return "Don't. You. Dare.";
***REMOVED*** else {
                return (parseFloat(a, numberSystem) / parseFloat(b, numberSystem)).toString(numberSystem);
***REMOVED***
        case "power":
            return power(parseFloat(a, numberSystem), parseFloat(b, numberSystem)).toString(numberSystem);
        case "sqrt":
            return Math.sqrt(a);
        case "percent":
            return ((parseFloat(a, numberSystem) * parseFloat(b, numberSystem)) / 100).toString(numberSystem);
    }
}

function power(a, b) {
    var c = a;
    if (b == 0) {
        return 1;
    } else if (b == 1) {
        return a;
    } else {
        for (var i = 1; i < b; i++) {
            c *= a;
        }
        return c;
    }
}

function clickEquals() {
    if (leftFieldValue == "") {
        leftFieldValue = "0";
        leftField.setAttribute("value", leftFieldValue);
    }
    if (middleFieldValue == "") {
        middleFieldValue = "equals";
        middleField.setAttribute("value", "=");
    } else if (answerFieldValue != "") {
        leftFieldValue = answerFieldValue;
        leftField.setAttribute("value", leftFieldValue);
        middleFieldValue = "equals";
        middleField.setAttribute("value", "=");
        clearField("right");
    } else if (rightFieldValue == "" && middleFieldValue != "sqrt") {
        rightFieldValue = "0";
        rightField.setAttribute("value", rightFieldValue);
    }
    answerFieldValue = performOperation(leftFieldValue, rightFieldValue, middleFieldValue);
    answerField.setAttribute("value", answerFieldValue.toUpperCase());
}

for (var i = 0; i < numberButtons.length; i++) {
    var numberButton = numberButtons[i];
        numberButton.addEventListener("click", clickNumberButton, false);
}

document.getElementById("btn-point").addEventListener("click", clickPoint, false);
document.getElementById("btn-plus").addEventListener("click", clickPlus, false);
document.getElementById("btn-minus").addEventListener("click", clickMinus, false);
document.getElementById("btn-times").addEventListener("click", clickTimes, false);
document.getElementById("btn-divide").addEventListener("click", clickDivide, false);
document.getElementById("btn-clear").addEventListener("click", clearAllFields, false);
document.getElementById("btn-equals").addEventListener("click", clickEquals, false);
document.getElementById("btn-power").addEventListener("click", clickPower, false);
document.getElementById("btn-sqrt").addEventListener("click", clickSqrt, false);
document.getElementById("btn-negative").addEventListener("click", clickNegative, false);
document.getElementById("btn-percent").addEventListener("click", clickPercent, false);
document.getElementById("btn-hex").addEventListener("click", convertToHex, false);
document.getElementById("btn-bin").addEventListener("click", convertToBin, false);
document.getElementById("btn-dec").addEventListener("click", convertToDec, false);
document.getElementById("btn-oct").addEventListener("click", convertToOct, false);
document.getElementById("btn-scnd").addEventListener("click", clickSecondF, false);

document.addEventListener("keypress", function (e) {
    // console.log(e.key);
    if (numbers) {
        switch (e.key) {
            case "1":
                numberButtons[0].click();
                break;
            case "2":
                numberButtons[1].click();
                break;
            case "3":
                numberButtons[2].click();
                break;
            case "4":
                numberButtons[3].click();
                break;
            case "5":
                numberButtons[4].click();
                break;
            case "6":
                numberButtons[5].click();
                break;
            case "7":
                numberButtons[6].click();
                break;
            case "8":
                numberButtons[7].click();
                break;
            case "9":
                numberButtons[8].click();
                break;
        }
    }
    if (!numbers) {
        switch (e.key) {
            case "a":
                numberButtons[0].click();
                break;
            case "b":
                numberButtons[1].click();
                break;
            case "c":
                numberButtons[2].click();
                break;
            case "d":
                numberButtons[3].click();
                break;
            case "e":
                numberButtons[4].click();
                break;
            case "f":
                numberButtons[5].click();
                break;
        }
    }
    switch (e.key) {
        case "0":
            numberButtons[9].click();
            break;
        case "+":
            document.getElementById("btn-plus").click();
            break;
        case "-":
            document.getElementById("btn-minus").click();
            break;
        case "*":
            document.getElementById("btn-times").click();
            break;
        case "/":
            document.getElementById("btn-divide").click();
            break;
        case "=":
            document.getElementById("btn-equals").click();
            break;
        case "Enter":
            document.getElementById("btn-equals").click();
            break;
        case "^":
            document.getElementById("btn-power").click();
            break;
        case ".":
            document.getElementById("btn-point").click();
            break;
        case "_":
            document.getElementById("btn-negative").click();
    }
});