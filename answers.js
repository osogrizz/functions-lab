function maxOfTwoNumbers(x, y) {
    if (x > y) {
        console.log(x);
    } else {
    console.log(y);
    }
};

maxOfTwoNumbers(5,200);


function maxOfThree(x, y, z) {
    if(x > y && x > z) {
    console.log(x);
}  else if  (y > x && y > z) {  
    console.log(y);
}  else {
    console.log(z);
  }
};

console.log(maxOfThree(5,7,10));


function Vowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1
}

console.log(Vowel("a"));

   
var sumArray = [1, 2, 3, 4].reduce(function(a, b) {
  return a + b;
});

console.log(sumArray)


var multiplyArray = [1, 2, 3, 4].reduce(function(a, b) {
  return a * b;
});

console.log(multiplyArray)