//Lesson 1
//Explore Differences Between the var and let Keywords
let catName;
let quote;

//Lesson 2
//Compare Scopes of the var and let Keywords
let i = 'function scope';
if (true) {
  let i = 'block scope';
}

//Lesson 3
//Declare a Read-Only Variable with the const Keyword
const SENTENCE = str + " is cool!";
for (let i = 0; i < str.length; i+=2) {
  console.log(SENTENCE);
}

//Lesson 4
//Mutate an Array Declared with const
s[0] = 2;
s[1] = 5;
s[2] = 7;

//Lesson 5
//Prevent Object Mutataion
Object.freeze(MATH_CONSTANTS);
