//Lesson 6
//Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
    return new Date();
  };

//Lesson 7
//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };

//Lesson 8
//Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

//Lesson 9
//Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

