"use strict";

var leftField = document.getElementById("left-field"),
    middleField = document.getElementById("middle-field"),
    rightField = document.getElementById("right-field"),
    answerField = document.getElementById("answer-field"),
    leftFieldValue = "",
    middleFieldValue = "",
    rightFieldValue = "",
    answerFieldValue = "",
    numberButtons = document.getElementsByClassName("numberKey");

function clickNumberButton() {
    if (answerFieldValue != "") {
        clearAllFields();
    }
    if (middleFieldValue == "") {
        leftFieldValue += this.innerHTML;
        leftField.setAttribute("value", leftFieldValue);
    } else if (middleFieldValue != "sqrt") {
        rightFieldValue += this.innerHTML;
        rightField.setAttribute("value", rightFieldValue);
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
        } else {
            leftFieldValue = (parseFloat(leftFieldValue) * -1).toString();
            leftField.setAttribute("value", leftFieldValue);
        }
    } else {
        if (rightFieldValue == "") {
            rightFieldValue += "-";
            rightField.setAttribute("value", rightFieldValue);
        } else {
            rightFieldValue = (parseFloat(rightFieldValue) * -1).toString();
            rightField.setAttribute("value", rightFieldValue);
        }
    }
}

function clickPoint() {
    var leftFieldArray,
        rightFieldArray,
        point;
    if (answerFieldValue != "") {
        clearAllFields();
        leftFieldValue += "0";
    }
    if (middleFieldValue == "") {
        if (leftFieldValue == "") {
            leftFieldValue += "0";
        }
        leftFieldArray = leftFieldValue.split("");
        point = false;
        leftFieldArray.forEach(function (element, index, array) {
            if (element == ".") {
                point = true;
***REMOVED***
        });
        if (!point) {
            leftFieldValue += ".";
            leftField.setAttribute("value", leftFieldValue);
        }
    } else if (middleFieldValue != "sqrt") {
        if (rightFieldValue == "") {
            rightFieldValue += "0";
        }
        rightFieldArray = rightFieldValue.split(""),
        point = false;
        rightFieldArray.forEach(function (element, index, array) {
            if (element == ".") {
                point = true;
***REMOVED***
        });
        if (!point) {
            rightFieldValue += ".";
            rightField.setAttribute("value", rightFieldValue);
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
        leftField.setAttribute("value", leftFieldValue);
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
            return (parseFloat(a)).toString();
        case "plus":
            return (parseFloat(a) + parseFloat(b)).toString();
        case "minus":
            return (parseFloat(a) - parseFloat(b)).toString();
        case "times":
            return (parseFloat(a) * parseFloat(b)).toString();
        case "divide":
            if (b == 0) {
                return "Don't. You. Dare.";
***REMOVED*** else {
                return (parseFloat(a) / parseFloat(b)).toString();
***REMOVED***
        case "power":
            return power(a, b);
        case "sqrt":
            return Math.sqrt(a);
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
    answerField.setAttribute("value", answerFieldValue);
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