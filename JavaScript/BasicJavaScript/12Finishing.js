//Lesson 102
//Generate Random Fractions with JavaScript
return Math.random();

//Lesson 103
//Generate Whole Numbers with JavaScript
return Math.floor(Math.random() * 10);

//Lesson 104
//Generate Whole Numbers Within a Range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//Lesson 105
//Use the parseInt Function
return parseInt(str);

//Lesson 106
//Use the parseInt Function with a Radix
function convertToInteger(str) {
 return parseInt(str, 2);
}

//Lesson 107
//Use the Conditional (Ternary) Operator
return (a == b) ? "Equal" : "Not Equal";

//Lesson 108
//Use Multiple Conditional (Ternary) Operators
return (num === 0) ? "zero" :
        (num > 0) ? "positive" : "negative";

//Lesson 109
//Use Recursion to Create a Countdown
function countdown(n){
    if (n >= 1) {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    } else {
        return [];
    }
}

//Lesson 110
//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum) {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    } else {
        return [];
    }
  }