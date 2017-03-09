// This function takes a string as an input and converts all capital letters to lowercase and vice versa. Other characters do not change.

function toggleCase(input) {
    var inputArray = input.split("");
    inputArray.forEach(function (element, index, array) {
        if (element == element.toUpperCase()) {
            inputArray.splice(index, 1, element.toLowerCase());
        } else {
            inputArray.splice(index, 1, element.toUpperCase());
        }
    });
    newString = inputArray.join("");
    return newString;
}


// ---------------------------------------------------------------------


// This function takes a string ending with numerals and compares the length of the string to the value of the appended number. If they match, it returns "Yes". If not, it returns "No". If the string does not end in a number, it logs a message asking for the proper syntax.

function lengthCheck(input) {
    var numberArray = [],
        numberStr;

    if (isNaN(parseInt(input[input.length - 1]))) {
        console.log("Please input a string ending with numerals.\nEx: 'abcd5'");
    } else {
        for (var i = (input.length - 1); i >= 0; i--) {
            if (!isNaN(parseInt(input[i]))) {
                numberArray.unshift(input[i]);
            } else {
                break;
            }
        }

        numberStr = numberArray.join("");

        if (parseInt(numberStr) == input.length) {
            return "Yes";
        } else {
            return "No";
        }
    }
}