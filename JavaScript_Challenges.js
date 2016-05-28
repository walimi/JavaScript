// Challenge 1
// Given a number such as 42, 57, 90 return array of the following:
// 42 => [40, 35, 30, 25, 20, 15, 10, 5, 0]
// 37 => [35, 30, 25, 20, 15, 5, 0]
// 5 => [5, 0]

function mod5(number) {
  
  var remainder = number % 5;
  var initialValue = number - remainder;
  var myArray = [];
  //myArray.push(initialValue);
  var nextValue;
  for(var i=initialValue; i >= 0; i-=5)
    {
      
      myArray.push(i);
    }
  
  console.log(initialValue); 
  
  return myArray;
}

var result = mod5(42);

console.log(result);
