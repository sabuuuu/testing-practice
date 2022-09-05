// takes a string and returns it with the first character capitalized
function capitalize(str) {
    return str = (str.charAt(0)).toUpperCase() + str.slice(1);
}

//takes a string and returns it reversed
function reverseString(str) {
    return str.split("").reverse().join("");
}

//a calculator object that contains functions for the basic operations
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
})();

//function that takes a string and returns it with each character “shifted”
function caesarCipher(str) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const cipher = "bcdefghijklmnopqrstuvwxyza";

    const isLowerCase = (letter) => {
        if (letter == letter.toLowerCase() && letter != letter.toUpperCase()) {
            return true;
        }
        return false;
    }

    const isUpperCase = (letter) => {
        if (letter == letter.toUpperCase() && letter != letter.toLowerCase()) {
            return true;
        }
        return false;
    }

    const lowercipher = (letter) => {
        const index = letters.indexOf(letter);
        let cipherChararacter = cipher[index];
        return cipherChararacter;
    }

    if (typeof str !== "string") {
        return "not a string";
    }

    let cipherOutput = "";

    for (let i = 0; i < str.length; i++) {
        if (isUpperCase(str[i]) || isLowerCase(str[i])) {
            if (isLowerCase(str[i])) {
                cipherOutput += lowercipher(str[i]);
            } else if (isUpperCase(str[i])) {
                cipherOutput += lowercipher(str[i].toLowerCase()).toUpperCase();
            }
        } else {
            cipherOutput += str[i];
        }
    }
    return cipherOutput;
}

//function that takes an array of numbers and returns an object with the following properties: average, min, max, and length
function analyzeArray(inputArray) {
    const avg = inputArray.reduce((a, b) => a + b) / inputArray.length;
    const minimum = Math.min(...inputArray);
    const maximum = Math.max(...inputArray);
    const len = inputArray.length;

    const OutputObject = {
        average: avg,
        min: minimum,
        max: maximum,
        length: len
    };
    return OutputObject;
}

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
module.exports.caesarCipher = caesarCipher;
module.exports.analyzeArray = analyzeArray;