//Lesson 77 
//Returning Boolean Values from Functions
return a <= b;

//Lesson 78
//Return Early Pattern for Functions
if (a < 0 || b < 0) {
    return undefined
  }

//Lesson 79
//Counting Cards
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }