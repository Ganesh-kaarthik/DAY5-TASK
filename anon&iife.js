//  a) Print odd numbers in an array
// anonymous function

let printOdd = function(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        let numarr = [];
        numarr += i;
        console.log(numarr);
      }
    }
  }
  printOdd(10);


// IIFE function
(function printOdd(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  })(20);

//   b) Convert all the strings to title caps in a string array
// ANONYMOUS FUNCTION
 let toTitleCase = function (string) {
    string = string.toLowerCase().split(' ');
    for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
  } ;
  console.log(toTitleCase("WELCOME TO GUVI"));

  //IIFE
  (function toTitleCase(string) {
    string = string.toLowerCase().split(' ');
    for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
     return string.join(' ');  
  }) ;
  console.log(toTitleCase("WELCOME TO GUVI"))

//   c) Sum of all numbers in an array
// anonymous function
var sumArray1 = function (array) {
    const ourArray1 = [-9,-7,-5,-3,-1,2,4,6,8,10,12,17,200];
    let sum = 0;
  
    for (let i = 0; i < ourArray1.length; i += 1) {
      sum += ourArray1[i];
    }
    
    return sum;
  }
  
  console.log(sumArray1([]));
// IIFE function
var sumArray2 = (function(){
    const ourArray2 = [-9,-7,-5,-3,-1,2,4,6,8,10,12,15,400];
    let sum = 0;
  
    for (let i = 0; i < ourArray2.length; i += 1) {
      sum += ourArray2[i];
    }
    
    return sum;
  })
  console.log(sumArray2([]));

//   d) Return all the prime numbers in an array
// ANONYMOUS FUNCTION
 let returnPrime = function (num) {
  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
};

console.log(returnPrime(5));
console.log(returnPrime(11));
console.log(returnPrime(19));

//IIFE
(function returnPrime(num) {

    var prime_num1 = [],
        prime_num2 = [];
    for (var i = 0; i <= num; i++) {
      prime_num2.push(true);
    }
    for (var i = 2; i <= num; i++) {
      if (prime_num2[i]) {
        prime_num1.push(i);
        for (var j = 1; i * j <= num; j++) {
          prime_num2[i * j] = false;
        }
      }
    }
  
    return prime_num1;
  })
  
  console.log(returnPrime(5))
  console.log(returnPrime(11))
  console.log(returnPrime(19))
  
//   e) Return all the palindromes in an array
//ANONYMOUS FUNCTION
 let check = function (string) {
  const len = string.length;
      for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
  }
  const string1 = ("racecar");
  const value1 = check(string1);
  console.log(value1);

  //IIFE
function checkPalindrome(string) {
  const len = string.length;
      for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
  }
  const string2 = ("racecar");
  const value2 = checkPalindrome(string1);
  console.log(value1);
  
//   f) Return median of two sorted arrays of the same size
let median = (a, b) => 
{
let c = [...a, ...b].sort((a, b) => a - b);
  let half = c.length / 2 | 0;
if (c.length % 2) return c[half];
  return (c[half] + c[half - 1]) / 2;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(median(arr1, arr2));

//   g) Remove duplicates from an array
// Anonymous function
let once = function (arr){
  let Arr = [];
 for(let i of arr) {
     if(Arr.indexOf(i) === -1) {
         Arr.push(i);
     }
 }
 console.log(Arr);
}
const arrayi = [1, 2, 3, 2, 3, 5, 5];
once(arrayi);

// IIFE
function dup(arr){
     let Arr = [];
    for(let i of arr) {
        if(Arr.indexOf(i) === -1) {
            Arr.push(i);
        }
    }
    console.log(Arr);
  }
  const array = [1, 2, 3, 2, 3, 5, 5];
   dup(array);


  // h) rotate array by k times
  // Anonymous function
  array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  k = 5;
  let rotate2 =  ((array2, k) => {
      for (let i = 0; i < k; i++){
          let lastItem = array2[array2.length - 1];
          for (let j = array2.length - 2; j >= 0; j--) {
              array2[j + 1] = array2[j];
          }
          array2[0] = lastItem;
      }
      return array2;
  })
  
  console.log(rotate2(array2, k))

 // IIFE
let rotate =  ((array2, k) => {
    for (let i = 0; i < k; i++){
        let lastItem = array2[array2.length - 1];
        for (let j = array2.length - 2; j >= 0; j--) {
            array2[j + 1] = array2[j];
        }
        array2[0] = lastItem;
    }
    return array2;
})(array2, 5)

console.log(rotate)

      