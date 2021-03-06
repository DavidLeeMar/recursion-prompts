/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  //if number is negative, return null
  if (n < 0) {
    return null;
  }

  //if number is zero, return 1
  if (n === 0) {
    return 1;
  }

  //** Base Case **, if n === 1, return 1;
  if (n === 1) {
    return 1;
  } else {
  //the result is equal to n * the factorial of n-1
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {

  let newArray = array.slice();

  //** Base Case ** array.length = 0, return 0;
  //pop a number off the array and add it to sum
  //call the function again using the modified array
  if (newArray.length === 0) {
    return 0;
  } else {
    return newArray.pop() + sum(newArray);
  }

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //make a copy of the input array
  let newArray = array.slice();

  //** Base Case ** array.length === 0, return 0;
  if (newArray.length === 0) {
    return 0;
  }

  //pop off an element and assign to element
  let element = newArray.pop();

  //if element is a number
    //return number + arraySum(newArray)
  //else, it will be an array
    // return arraySum(element) + arraySum(newArray)
  if (typeof element === 'number') {
    return element + arraySum(newArray);
  } else {
    return arraySum(element) + arraySum(newArray);
  }

};

// 4. Check if a number is even.
var isEven = function(n) {
  //if number is negative, change to positive
  if (n < 0) {
    n = n * -1;
  }

  //if number is zero, return true
  if (n === 0) {
    return true;
  }
  //if number is one, return false
  if (n === 1) {
    return false;
  }

  //return isEven(n-2)
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //if number is negative, make the number postive and the change the result back to negative to return result
  if (n < 0) {
    return sumBelow(n * -1) * -1;
  }

  //**Base Case**  n === 0, return 0
  if (n === 0) {
    return 0;
  } else {
  //**Recursive Function */
  //recursively invoke function(n-1) until base case is reaching and adding that result to n-1
  return (n-1) + sumBelow(n-1);
  };

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

var range = function(x, y) {
  //edge case handling
  if (x === y) {
    return [];
  }

  if (x < y) {
    //**Base Case**  (x + 1) === y return []
    if (x + 1 === y) {
      return [];
    } else {
    //**recursive call
    //keep invoking a recursive call until reaching base case by incrementing x
    //when base case is reached and an empty array is returned
    //unshift the value onto the array and return the final result
    let result = range(x + 1, y)
    result.unshift(x + 1);
    return result;
    };
  } else {
    //**Base Case**  (x - 1) === y return []
    if (x - 1 === y) {
      return [];
    } else {
    //**recursive call
    //keep invoking a recursive call until reaching base case by decrementing x
    //when base case is reached and an empty array is returned
    //unshift the value onto the array and return the final result
    let result = range(x - 1, y)
    result.unshift(x - 1);
    return result;
    };
  }
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //if exp is negative, compute as if it were positive and then compute reciprocal
  if (exp < 0) {
    return 1 / exponent(base, exp * -1);
  };

  //**Base Case**  exp === 0, return 1
  if (exp === 0) {
    return 1;
  } else {
  //**Recursive Function**
  //return base times exponent(base, exp-1)
  return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //edge case of 0
  if (n === 0) {
    return false;
  }
  //a number is a powerOfTwo if we can evenly divide it by 2 until it becomes 1,
  //**Base Case**  n === 1, return true
  if (n === 1) {
    return true;
  } else {
    // if n % 2 is equal to 0
      // return the value of invoking powerOfTwo(n/2)
    //otherwise
      // return false
    if (n % 2 === 0) {
      return powerOfTwo(n / 2);
    } else {
      return false;
    }
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  //**Base Case**  length === 0, return empty string
  if (string.length === 0) {
    return '';
  }

  //split the string into an array
  // pop off the last element
  // join array into string
  let array = string.split('');
  let element = array.pop();
  let shortenedString = array.join('');


  // invoke the recursive function with the remainder of string
    //split the result
    // unshift the element back onto the string
    //return the joined result
  let reversedString = reverse(shortenedString);
  let reversedArray = reversedString.split('');
  reversedArray.unshift(element);
  return reversedArray.join('');
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  let upperCaseString = string.toUpperCase();
  let length = upperCaseString.length;

  //**Base Case** string.length === 0 or 1
  //return true

  if ((length === 0) || (length === 1)) {
    return true;
  }

//If the first and last characters match,
  //slice the remaining characters and call palindrome agin
//otherwise, return false
  if (upperCaseString[0] === upperCaseString[length - 1]) {
    return palindrome(upperCaseString.slice(1, length - 1));
  } else {
    return false;
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo () operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  function abs(num) {
    if (num > 0) {
      return num;
    } else if (num === 0) {
      return 0;
    } else {
      return 1 + abs(num+1);
    }
  }
  function toNeg(negNum) {
    if (negNum === 0) {
      return 0;
    } else {
      return -1 + toNeg(negNum - 1);
    }
  }

  if (y === 0) {
    return NaN;
  } else if (x === 0){
    return 0;
  } else if ((x < 0) && (y < 0)) {
    return toNeg(modulo(abs(x),abs(y)));
  } else if ((x < 0) && (y > 0)) {
    return toNeg(modulo(abs(x),abs(y)));
  } else if ((x > 0) && (y < 0)) {
    return modulo(abs(x),abs(y));
  } else if ((x > 0) && (y > 0)) {
      if (x < y) {
        return x;
      } else {
        return modulo(x - y, y);
      };
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  function abs(num) {
    if (num > 0) {
      return num;
    } else if (num === 0) {
      return 0;
    } else {
      return 1 + abs(num+1);
    }
  }
  function toNeg(negNum) {
    if (negNum === 0) {
      return 0;
    } else {
      return -1 + toNeg(negNum - 1);
    }
  }

  if (y === 0) {
    return 0;
  } else if (x === 0) {
    return 0;
  } else if ((x < 0) && (y < 0)) {
    return multiply(abs(x),abs(y));
  } else if ((x < 0) && (y > 0)) {
    return toNeg(multiply(abs(x),abs(y)));
  } else if ((x > 0) && (y < 0)) {
    return toNeg(multiply(abs(x),abs(y)));
  } else if ((x > 0) && (y > 0)) {
      return x + multiply(x, y -1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  function abs(num) {
    if (num > 0) {
      return num;
    } else if (num === 0) {
      return 0;
    } else {
      return 1 + abs(num+1);
    }
  }
  function toNeg(negNum) {
    if (negNum === 0) {
      return 0;
    } else {
      return -1 + toNeg(negNum - 1);
    }
  }

  if ((x < 0) && (y < 0)) {
    return divide(abs(x), abs(y));
  } else if (((x < 0) && (y > 0)) || ((x > 0) && (y < 0))) {
    return toNeg(divide(abs(x), abs(y)));
  } else if ((x === 0) && (y === 0)) {
    return NaN;
  } else if (y === 0) {
    return 'infinity';
  } else if (x === 0) {
    return 0;
  } else if ((x - y) >= 0) {
    return 1 + divide(x - y, y)
  } else {
    return 0;
  }

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if ((x < 0) || (y < 0)) {
    return null;
  } else if (x === 0) {
    return y;
  } else if (y === 0) {
    return x;
  } else {
    let remainder = x % y;
    return gcd(y, remainder);
  }


};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if ((str1.length === 0) && (str2.length === 0)) {
    return true;
  }

  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  } else {
    let resultArray = createArray(str.slice(1, str.length));
    resultArray.unshift(str[0]);
    return resultArray;
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  let length = array.length;

  if (length === 0) {
    return [];
  } else {
    let element = array.pop();
    let result = reverseArr(array);
    result.unshift(element);
    return result;
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  } else {
    let array = buildList(value, length -1);
    array.push(value);
    return array;
  }

};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  } else {
    if ((n % 5 === 0) && (n % 3 === 0)) {
      let result = fizzBuzz(n - 1);
      result.push('FizzBuzz');
      return result;
    } else if (n % 5 === 0) {
      let result = fizzBuzz(n - 1);
      result.push('Buzz');
      return result;
    } else if (n % 3 === 0) {
      let result = fizzBuzz(n - 1);
      result.push('Fizz');
      return result;
    } else {
      let result = fizzBuzz(n - 1);
      result.push(n.toString());
      return result;
    }
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

  if (array.length === 0) {
    return 0;
  } else {
    let element = array.pop();
    if (element === value) {
      return 1 + countOccurrence(array, value);
    } else {
      return countOccurrence(array, value);
    }
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else {
    let result = rMap(array.slice(1, array.length), callback);
    result.unshift(callback(array[0]));
    return result;
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  //declare a variable count
  let count = 0;

  //iterate through the first level of obj with a for in loop
    //check if each key matches the key passed in, and increment count if it does
    //determine if the value for each key is an object
      //if so, do a recursive call
      //add the return value to the count
  for (let x in obj) {
    if (x === key) {
      count++;
    }

    if ((typeof obj[x] === 'object') && (Array.isArray(obj[x]) === false)) {
      count += countKeysInObj(obj[x], key);
    }
  }

  //return count
  return count;

};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;

  for (let key in obj) {
    if (obj[key] === value) {
      count++;
    }

    if ((typeof obj[key] === 'object') && (Array.isArray(obj[key]) === false)) {
      count += countValuesInObj(obj[key], value);
    }
  }

  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (let key in obj) {


    if ((typeof obj[key] === 'object') && (Array.isArray(obj[key]) === false)) {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }

    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return null;
  } else if (n === 1) {
    return [0, 1]
  } else {
    let result = fibonacci(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
};
  //each number is the sum of the previous two numbers
  //if the argument is n, we need n +1 elements
  // we create an array up the number of element n+1
  // we can start with [0,1] so that we have values to calculate from
  // our base case would be when n = 1, we stop creating elements
  // f(0) f(1), we manually set those up
  //f(2)
      // call f(1), gets [0,1]
      // index(length -1,) + index(length-2) push it onto the array


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    let result = capitalizeWords(array.slice(1, array.length));
    result.unshift(array[0].toUpperCase());
    return result;
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    let result = capitalizeFirst(array.slice(1, array.length));
    let word = array[0];
    let newWord = word[0].toUpperCase() + word.slice(1, word.length);
    result.unshift(newWord);
    return result;
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;

  for (let key in obj) {
    if ((typeof obj[key] === 'object') && (Array.isArray(obj[key]) === false)) {
      sum += nestedEvenSum(obj[key]);
    }
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  //**Base Case**  is when the length of the array is 0
  if (array.length === 0) {
    return [];
  } else {
    //a copy of array is created without the element at index 0, and flatten is called on the rest of the array
    //eventually, this causes our base case to match and we can handle each element separately
    let result = flatten(array.slice(1, array.length));
    //creating an alias for the element at index 0
    let firstElement = array[0];
    //if the element is an array with a length of 0, we can simply discard it
    if ((Array.isArray(firstElement)) && (firstElement.length === 0)) {
      return result;
      //if the element is an array that has only one element
    } else if ((Array.isArray(firstElement)) && (firstElement.length === 1)) {
      //these three lines work to remove a single element nested inside arrays
      firstElement = flatten(firstElement);
      firstElement = firstElement[0];
      result.unshift(firstElement);
      return result;
      //if the element is an array that has multiple elements
    } else if ((Array.isArray(firstElement)) && (firstElement.length > 1)) {
      firstElement = flatten(firstElement);
      merge(firstElement, result);
      return result;
      //if the element is not an array, it will unshift it on the the flattened array
    } else {
      result.unshift(firstElement);
      return result;
    }

  };

  function merge(arr1, arr2) {
    if (arr1.length === 0) {
      return arr2;
    } else {
      let result = merge(arr1.slice(1, arr1.length),arr2);
      result.unshift(arr1[0]);
      return result;
    }
  };

};
// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (str.length === 0) {
    return {};
  } else {
    obj = letterTally(str.slice(1, str.length));

    obj[str[0]] === undefined ? obj[str[0]] = 1 : obj[str[0]]++;
    return obj;
  };
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  let arrayCopy = list.slice();

  if (arrayCopy.length === 0) {
    return [];
  } else {
    let value = arrayCopy.shift();
    if (value === arrayCopy[0]) {
      return compress(arrayCopy);
    } else {
      let result = compress(arrayCopy);
      result.unshift(value);
      return result;
    }
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  let arrayCopy = array.slice();

  if (arrayCopy.length === 0) {
    return [];
  } else {
    let value = arrayCopy.shift();
    if (Array.isArray(value) === true) {
      value.push(aug);
    };
    let result = augmentElements(arrayCopy, aug);
    result.unshift(value);
    return result;
  }

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  let arrayCopy = array.slice();

  if (array.length === 0) {
    return [];
  } else {
    if ((arrayCopy[0] === 0) && (arrayCopy[1] === 0)) {
      arrayCopy.shift();
      return minimizeZeroes(arrayCopy);
    } else {
      let value = arrayCopy.shift();
      let result = minimizeZeroes(arrayCopy)
      result.unshift(value);
      return result;
    }
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  let newArray = array.slice();

  if (newArray.length === 0) {
    return [];
  } else if (newArray.length === 1) {
    let element1 = newArray.shift();
    element1 = Math.abs(element1);
    let result = alternateSign(newArray);
    newArray.unshift(element1);
    return result;
  } else {
    let element1 = newArray.shift();
    let element2 = newArray.shift();
    element1 = Math.abs(element1);
    element2 = Math.abs(element2) * -1;
    let result = alternateSign(newArray);
    result.unshift(element2);
    result.unshift(element1);
    return result;
  }


};


// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //base case is when string's length is zero
  //return an empty string
  if (str.length === 0) {
    return '';
  }

  //create an object with the property matching 0-9 as words
  let numValues = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };

//take the element at index zero, check to see if it is defined in the object num Value
//append the text equivalent to the string returned by calling
//numToText when slicing elements 1 to str.length
//if the result is not a number
//append the string to the string returned by calling numToText
  if (numValues[str[0]] === undefined) {
    let characters = numToText(str.slice(1,str.length)).split('');
    characters.unshift(str[0]);
    return characters.join('');
  } else {
    let characters = numToText(str.slice(1,str.length)).split('');
    characters.unshift(numValues[str[0]]);
    return characters.join('');
  }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
