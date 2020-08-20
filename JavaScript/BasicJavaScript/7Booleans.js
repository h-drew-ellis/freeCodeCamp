//Lesson 55
//Understanding Boolean Values
return true;

//Lesson 56
//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";

  }

//Lesson 57
//Comparison with the Equality Operator
if (val == 12)

//Lesson 58
//Conparison with the Strict Equality Operator
if (val === 7)

//Lesson 59
//Practice Comparing Different Values
if (a === b)

//Lesson 60
//Comparison with the Inequalitty Operator
if (val != 99)

//Lesson 61
//Comparison with the Strict Inequality Operator
if (val !== 17)

//Lesson 62
//Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }

//Lesson 63
//Comparison with the Greater Than or Equal to Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
//Lesson 64
//Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }

//Lesson 65
//Comparison with the Less Than or Equal to Operator
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }

//Lesson 66
//Comparisons with the Logical "And" Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
      }
    // Only change code above this line
    return "No";
  }

//Lesson 67
//Comparisons with the Logical or Operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }

//Lesson 68
//Introducing Else Statements
if (val > 5) {
    return "Bigger than 5";
  }else {
    return "5 or Smaller";
  }

//Lesson 69
//Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
    return "Between 5 and 10";
    }
}

//Lesson 70
//Logical Order in If Else Statements
if (val < 5) {
    return "Less than 5";
    } else if (val < 10) {
    return "Less than 10";
    } else { 
    return "Greater than or equal to 10";
  }

//Lesson 71
//Chaining If Else Statments
 if (num < 5) {
    return "Tiny";
 } else  if (num < 10) {
    return "Small";
 } else if (num < 15) {
    return "Medium";
 } else if (num < 20) {
    return "Large";
 } else if (num >= 20) {
    return "Huge";
 } else {
    return "Change Me";
 }

//Lesson 72
//Golf Code
if (strokes == 1) {
    return "Hole-in-one!";
 } else  if (strokes <= par - 2) {
    return "Eagle";
 } else if (strokes == par - 1) {
    return "Birdie";
 } else if (strokes == par) {
    return "Par";
 } else if (strokes == par + 1) {
    return "Bogey";
 }else if (strokes == par + 2) {
    return "Double Bogey";
 }else if (strokes >= par + 3) {
    return "Go Home!";
 } else {
    return "Change Me";
 }