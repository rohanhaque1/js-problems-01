// Problem -- 01: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseStr(str) {
    let output = "";
    for (let i = str.length - 1; i >= 0; i--){
        output += str[i]
    }
    return output;
}

const inputStr = "Hello World"
const result = reverseStr(inputStr)



// Problem -- 02: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumArr(myArr) {
    let sumOfArr = 0;
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] > 0) {
            sumOfArr += myArr[i]
        }
    }
    return sumOfArr;
}

const arr = [2, -5, 8, 4, 14, -5, -3, 12]
const sum = sumArr(arr)



// Problem -- 03: Write a JavaScript program to find the most frequent element in an array and return it. 

function frequentElement(arr) {
    const frequentMap = {};
    let maxElement = arr[0]
    let maxCount = 1;

    for (let i = 0; i < arr.length; i++){
        const element = arr[i]
        if (frequentMap[element]) {
            frequentMap[element]++;
        }
        else {
            frequentMap[element] = 1;
        }

        if (frequentMap[element] > maxCount) {
            maxElement = element;
            maxCount = frequentMap[element]
        }
    }
    return maxElement;
}
const myArray = [3, 5, 1, 5, 2, 5, 3, 2, 5, 5, 4];
frequentElement(myArray);



// Problem -- 04: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function simpleCalculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2
    }
    else if (operator === "-") {
        return num1 - num2
    }
    else if (operator === "*") {
        return num1 * num2
    }
    else if (operator === "/") {
        return num1 / num2
    }
}

simpleCalculator(15, '-', 12)



// Problem -- 05: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallElement(arr) {
    const sortedArr = arr.sort((a, b) => a - b)[1]
    return sortedArr
}
const myArr = [12, 34, 8, 5, 13, 20, 17]
secondSmallElement(myArr)



// Problem -- 06: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = '!@#$%^&*()_-+=[]{}|:;"<>,.?/';

  const allChars =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

const passwordLength = 6;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);