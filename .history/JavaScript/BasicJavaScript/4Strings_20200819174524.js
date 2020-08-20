//Lesson 21
//Declare String Variables
var myFirstName = "Bob";
var myLastName = "Smith";

//Lesson 22
//Basic JavaScript: Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Lesson 23
//Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Lesson 24
//Escape Sequences in Strings
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

//Lesson 25
//Concatenating Strings with Plus OperatorPassed
var myStr = "This is the start. " + "This is the end.";

//Lesson 26
//Concatenating Strings with the Plus Equals Operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//Lesson 27
//Constructing Strings with Variables
var myName = "Bob";
var myStr = "My name is " + myName + " and I am well!";

//Lesson 28
//Appending Variables to Strings
var someAdjective = "what you make of it.";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Lesson 29
//Find the Length of a String
lastNameLength = lastName.length;

//Lesson 30
//Use Bracket Notation to Find the First Character in a String
firstLetterOfLastName = lastName[0];

//Lesson 31
//Understand String Immutability
myStr = "Hello World";

/*The why? : As the Lesson stated, immutability meaning unable to change,
so with that being said, you would have to change the whole value of
myStr instead of their idea of changing by index. As we've seen before
the program will go from top to bottom when reading, so when it
hits the variable of myStr a second time, it will take on that value as the
value of myStr*/

//Lesson 32
//Use Bracket Notation to Find the Nth Character in a String
var thirdLetterOfLastName = lastName[2];

//Lesson 33
//Use Bracket Notation to Find the Last Character in a String
var lastLetterOfLastName = lastName[lastName.length -1];

//Lesson 34
//Use Bracket Notation to Find the Nth-to-Last Character in a String
var secondToLastLetterOfLastName = lastName[lastName.length -2];

//Lesson 35
//Madlib: Word Blanks
"My" + myAdjective + " brown " + myNoun + " Bob, " + myVerb + " home " + myAdverb + ".";
// When concatenating strings as above, do ensure you had spaces between your variables or add an empty space: " ", as when it parses it doenst add the space for you.
