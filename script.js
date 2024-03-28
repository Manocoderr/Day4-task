// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array:-

// //anonymous ---------------------------------------------------------------------------
// var result =[]
// var a=function (arr){
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0)
//     {
//          result.push(arr[i])
//     }
//   }
//   return result
// }
// console.log(a([1,2,3,4,5,6,7,8,9,10]));


//using IIFE function----------------------------------------------------------------------
// var result = [];
// (function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// })
// ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// //using arrow function--------------------------------------------------------------------
// var result =[];
//  var odd=(arr)=>{
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0)
//     {
//          result.push(arr[i])
//     }
//   }
//   return result
// }
// console.log(odd([1,2,3,4,5,6,7,8,9,10]));


// b.Convert all the strings to title caps in a string array :-

// // using anonymous -------------------------------------------------------------------------

// const stringArray = ["hi","this", "is", "manoj kumar", "developer"];

// const titleCasedArray = stringArray.map(function(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// });

// console.log(titleCasedArray); // ["Hi","This", "Is", "Manoj kumar", "Developer"]


// // using IIFE function----------------------------------------------------------------------

// (function() {
//     const strArray = ["hi","this", "is", "manoj kumar", "developer"];

//     const titleCaseArray = strArray.map((str) => {
//       return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//     });
  
//     console.log(titleCaseArray); // ["Hi","This", "Is", "Manoj kumar", "Developer"]
//   })();


// //using arrow function----------------------------------------------------------------------

// const stringArray = ["hi","this", "is", "manoj kumar", "developer"];

// const titleCaseArray = stringArray.map((str) => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// });

// console.log(titleCaseArray);  // ["Hi","This", "Is", "Manoj kumar", "Developer"]

// c.Sum of all numbers in an array

// // using anonymous --------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // 15

// // using IIFE function----------------------------------------------------------------------
// (function() {
//     const arr = [1, 2, 3, 4, 5];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     console.log(sum); // 15
//   })();

// //using arrow function----------------------------------------------------------------------
// const sumArray = (numbers) => numbers.reduce((a, b) => a + b, 0);

// const numbers = [1, 2, 3, 4, 5];

// const sum = sumArray(numbers);

// console.log(sum); // 15

// d.Return all the prime numbers in an array

// // using anonymous --------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const primeNumbers = numbers.filter(function(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// });

// console.log(primeNumbers); // [2, 3, 5, 7]

// // using IIFE function------------------------------------------------------------------------
// const primeNumbers = (function() {
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      
//     function isPrime(number) {
//       for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     const primeNumbers = numbers.filter(isPrime);
    
//     return primeNumbers;
//   })();
  
//   console.log(primeNumbers); // [2, 3, 5, 7]

// // //using arrow function----------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isPrime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const primeNumbers = numbers.filter(isPrime);

// console.log(primeNumbers); // [2, 3, 5, 7]

//e.Return all the palindromes in an array

// // using anonymous --------------------------------------------------------------------------
// const arr = ["racecar", "madam", "hello", "world","honorable"];

// const isPalindrome = (str) => {
//   return str === str.split("").reverse().join("");
// };

// const palindromes = arr.filter(isPalindrome);

// console.log(palindromes); // ["racecar", "madam"]

// // // using IIFE function------------------------------------------------------------------------

// (function() {
//     const inputArray = ["hello", "racecar", "madam", "hello world"];
//     const palindromes = inputArray.filter((word) => {
//       return word.split("").reverse().join("") === word;
//     });
  
//     console.log(palindromes); // ["racecar", "madam"]
//   })();


// // //using arrow function----------------------------------------------------------------------

// const isPalindrome = (str) => {
   
//     const normalizedStr = str.toLowerCase().replace(/\s/g, "");
  
//     const reversedStr = normalizedStr.split("").reverse().join("");
  
//     return normalizedStr === reversedStr;
//   };

//   const strings = ["racecar", "madam", "hello", "world"];
 
//   const palindromes = strings.filter(isPalindrome);
  
//   console.log(palindromes);

// f.Return median of two sorted arrays of the same size.

// // using anonymous ----------------------------------------------------------------------------

  
// const findMedian = (arr1, arr2) => {
//     
//     const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  
//     const median = mergedArray[Math.floor(mergedArray.length / 2)];
  
//     return median;
//   };
  
//   const arr1 = [1, 3, 5, 7, 9];
//   const arr2 = [2, 4, 6, 8, 10];
//   const median = findMedian(arr1, arr2);
//   console.log(median); // 6

  // // // using IIFE function------------------------------------------------------------------------

//   (function() {
   
//     function findMedian(arr1, arr2) {
      
//       if (arr1.length !== arr2.length) {
//         throw new Error("Arrays must be the same size");
//       }
        
//       const mergedArr = arr1.concat(arr2);
//       mergedArr.sort((a, b) => a - b);
       
//       const middleIndex = Math.floor(mergedArr.length / 2);
  
//       return mergedArr[middleIndex];
//     }
   
//     const arr1 = [1, 3, 5, 7, 9];
//     const arr2 = [2, 4, 6, 8, 10];
 
//     const median = findMedian(arr1, arr2);
  
//     console.log(median); // 6
//   })();

// g.Remove duplicates from an array

// using anonymous ----------------------------------------------------------------------------
// const removeDuplicates = (arr) => {
//     const seen = new Set();
//     return arr.filter((item) => {
//       if (!seen.has(item)) {
//         seen.add(item);
//         return true;
//       }
//       return false;
//     });
//   };
  
//   const arr = [1, 2, 3, 4, 5, 1, 2, 3];
//   const uniqueArr = removeDuplicates(arr);
  
//   console.log(uniqueArr); // [1, 2, 3, 4, 5]

// // using IIFE function------------------------------------------------------------------------

//   (function() {
//     const arr = [1, 2, 3, 4, 5, 1, 2, 3];
//     const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
//     console.log(uniqueArr); // [1, 2, 3, 4, 5]
//   })();

//h.Rotate an array by k times

// using anonymous ----------------------------------------------------------------------------------
// const rotateArray = (nums, k) => {
//     k %= nums.length;
  
//     const rotated = new Array(nums.length);

//     for (let i = 0; i < nums.length; i++) {
//       rotated[(i + k) % nums.length] = nums[i];
//     }
  
//      for (let i = 0; i < nums.length; i++) {
//       nums[i] = rotated[i];
//     }
  
//     return nums;
//   };

// const nums = [1, 2, 3, 4, 5];

// const rotatedArray = rotateArray(nums, 2);

// console.log(rotatedArray); // [4, 5, 1, 2, 3]

// // using IIFE function---------------------------------------------------------------------------

(function() {
    // Create an array
    const arr = [1, 2, 3, 4, 5];
  
    // Rotate the array by k times
    const rotateArray = (arr, k) => {
      for (let i = 0; i < k; i++) {
        // Remove the last element from the array
        const lastElement = arr.pop();
  
        // Add the last element to the beginning of the array
        arr.unshift(lastElement);
      }
  
      // Return the rotated array
      return arr;
    };
  
    // Rotate the array by 2 times
    const rotatedArray = rotateArray(arr, 2);
  
    // Print the rotated array
    console.log(rotatedArray); // [4, 5, 1, 2, 3]
  })();

