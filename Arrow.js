// a)Print odd numbers in an array
printOdd = (num) => {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  printOdd(30);

// b) Convert all the strings to title caps in a string array
toTitleCase = (string) => {
    string = string.toLowerCase().split(' ');
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
  }
  console.log(toTitleCase("WELCOME TO GUVI GEEK "));


// c) Sum of all numbers in an array
  let sumArray3 = (array) => {
    const ourArray3 = [-9,-7,-5,-3,-1,2,4,6,8,10,12,17,300];
    let sum = 0;
   for (let i = 0; i < ourArray3.length; i ++) {
      sum += ourArray3[i];
    }
    return sum;
  }
console.log(sumArray3());

// d) Return all the prime numbers in an array
returnPrime = (num) => {

    let prime_num1 = [],
        prime_num2 = [];
    for (let i = 0; i <= num; i++) {
      prime_num2.push(true);
    }
    for (let i = 2; i <= num; i++) {
      if (prime_num2[i]) {
        prime_num1.push(i);
        for (let j = 1; i * j <= num; j++) {
          prime_num2[i * j] = false;
        }
      }
    }
  return prime_num1;
  }
  
  console.log(returnPrime(5))
  console.log(returnPrime(11))
  console.log(returnPrime(19))
  console.log(returnPrime(29))
  
// e) Return all the palindromes in an array
checkPalindrome = (string) =>  {
const len = string.length;
  for (let i = 0; i < len / 2; i++) {
  if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
  }
  const string2 = ("malayalam");
  const value2 = checkPalindrome(string2);
   console.log(value2);