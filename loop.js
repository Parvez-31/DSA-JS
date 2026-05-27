// for (let i = 0; i < 5; i++) {
//   console.log("hello world");
// }

// for (let count = 3; count < 5; ++count) {
//   console.log(count);
// }

// let x = 10;

// let a = x++;
// let b = ++x;

// console.log(a); // 10
// console.log(b); // 12
// console.log(x); // 12

// let a = 5;
// let z = a++ + 6;
// console.log(z);

// let x = 5;

// let y = x++ + ++x; // 5 + 7

// console.log(y); // 11

// for (let i = 2; i < 9; i = i + 2) {
//   console.log("hello world " + i);
// }

// for (let i = 5; i > 0; i--) {
//   console.log("hello world " + i);
// }

// for (let i = 1; i > 0; i++) {
//   console.log("hello world " + i);
// }

// let arr = [2, 3, 4, 5, 7, 8];
// console.log(arr[arr.length - 1]);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i]);
//   }
// }

// let i = 0;
// while (arr.length > i) {
//   console.log(arr[i]);
//   i++;
// }

// QUESTION: 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function searchElement(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(searchElement(arr, arr[arr.length - 1]));

// QUESTION: 2
// let arr = [1, -2, -4, 7, -9, -8, 6, 90, -7];

// function negativeNumbers(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       total++;
//     }
//   }
//   return total;
// }
// console.log(negativeNumbers(arr));

// QUESTION: 3
// let arr = [1, 2, 3, 467, 34, 23];
// function findLargestNumber(arr) {
//   let largest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log(findLargestNumber(arr));

// QUESTION: 4
// let arr = [-1, 2, 3, -467, 34, -23];
// function findLargestNumber(arr) {
//   let largest = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (largest > arr[i]) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log(findLargestNumber(arr));

// QUESTION: 5
// let arr = [3, 4, 6, 12, 23];

// function findSecondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] < largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(findSecondLargest(arr));

// TOPIC: -> star pattern
// console.log(typeof (" " + "*"));
// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
