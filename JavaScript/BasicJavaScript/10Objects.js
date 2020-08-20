//Lesson 80
//Build JavaScript Objects
var myDog = {
    "name": "Spot",
    "legs": 4,
    "tails": 1,
    "friends": ["Man", "Cats"]
}

//Lesson 81
//Accessing Object Properties with Dot Notation
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Lesson 82
//Object Properties with Bracket Notation
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

//Lesson 83
//Accessing Object Properties with Variables
var playerNumber = 16;       
var player = testObj[playerNumber];

//Lesson 84
//Updating Object Properties
myDog.name = "Happy Coder";

//Lesson 85
//Add New Properties to a JavaScript Object
myDog.bark = "woof";

//Lesson 86
//Delete Properties from a JavaScript Object
delete myDog.tails;

//Lesson 87
//Using Objects for Lookups
var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
result = lookup[val];

//Lesson 88
//Testing Objects for Properties
if (obj.hasOwnProperty(checkProp)) 
    return obj[checkProp];

return "Not Found";

//Lesson 89
//Manipulating Complex Objects
{
    "artist": "The Rolling Stones",
    "title": "Mother's Little Helper",
    "release_year": 1966,
    "formats": [
        "LP",
        "Album"
    ]
}

//Lesson 90
//Accessing Nested Objects
var gloveBoxContents = myStorage.car.inside["glove box"];

//Lesson 91
//Accessing Nested Arrays
var secondTree = myPlants[1].list[1];

//Lesson 92
//Record Collection
function updateRecords(id, prop, value) {
    if (collection[id].hasOwnProperty(prop)){
      if (value === "") {
        delete collection[id][prop];
      } else if (prop == "tracks") {
        collection[id][prop].push(value);
      } else { 
          collection[id][prop]= value;
      }
    } else {
      if (value != "") {
        if(prop == "tracks") {
          collection[id][prop] = [value];
        } else {
          collection[id][prop] = value;
        }
      }
    }
    
    return collection;
  }