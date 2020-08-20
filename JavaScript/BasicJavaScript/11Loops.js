//Lesson 93
//Iterate with JavaScript While Loops
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

//Lesson 94
//Iterate with JavaScript For Loops
for (var i = 1; i < 6 ; i++) {
    myArray.push(i);
}
//Lesson 95
//Iterate Odd Numbers With a For Loop
for (var i = 1; i < 10 ; i += 2) {
    myArray.push(i);
}

//Lesson 96
//Count Backwards With a For Loop
for (var i = 9; i > 0 ; i -= 2) {
    myArray.push(i);
}

//Lesson 97
//Iterate Through an Array with a For Loop
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total = (myArr[i]);
}

//Lesson 98
//Nesting For Loops
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }

//Lesson 99
//Iterate with JavaScript Do...While Loops
do {
    myArray.push(i);
    i++;
  }
  while (i < 11);

//Lesson 100
//Replace Loops using Recursion
function sum(arr, n) {
    if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
}
}

//Lesson 101
//Profile Lookup
function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
      if (name === contacts[i].firstName) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }