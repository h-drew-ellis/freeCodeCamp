//Lesson 10
//Use the Spread Operator to Evaluate Arrays In-Place
arr2 = [...arr1];

//Lesson 11
//Use Destructuring Assignment to Extract Values from Objects
const { today, tomorrow } = HIGH_TEMPERATURES;

//Lesson 12
//Use Destructuring Assignment to Assign Variables from Objects
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//Lesson 13
//Use Destructuring Assignment to Assign Variables from Nested Objects
const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST;

//Lesson 14
//Use Destructuring Assignment to Assign Variables from Arrays
[b, a] = [a, b]

//Lesson 15
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const [a, b, ...arr] = list;

//Lesson 16
//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const half = ({max, min}) => (max + min) / 2.0;