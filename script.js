// const arr = [5, 8, [23, 50, [45, 100]]]
// console.log(arr[2][2][0])

// function add(a, b) {
//    return a + b
// }
// let result = add(3, 6)

// function multiply(x) {
//    console.log(x * 2)
// }

// multiply(result)

// function voter(age) {
// if(age >= 18) {
//     return "eligible for vote"
// }else {
//     return "not eligible for vote"
// }
// }
// let result = voter( 12)
// console.log(result)

// function eligibility (age) {
// if(age < 0) {
//     console.log("invalid input")
// }else if(age >= 18) {
//     console.log("eligible for vote")
// }else {
//     console.log("not eligible for vote")
// }
// }
// eligibility(12)
// eligibility(20)
// eligibility(22)
// eligibility(-1)

// function evenOdd(num) {
//     if(num % 2 === 0) {
//         console.log("even")
//     } else{
//         console.log("odd")
//     }
// }
// evenOdd()

// const arr = [2, 3, 4, 5, 6, 78, 9];

// function findIndex(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findIndex(arr, 4));

// const arr = [-2, 3, -4, 5, -6, 78, -9];

// function minusNumberTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       total = total + 1;
//     }
//   }
//   return total;
// }

// console.log(minusNumberTotal(arr));

// const arr = [2, 3, 4, 5, 6, 78, 9];

// function findLargestNumber(arr) {
//   let largest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log(findLargestNumber(arr));

// const arr = [-2, 3, -4, 5, -6, 78, 9];

// function findLargestNumber(arr) {
//   let smallest = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// console.log(findLargestNumber(arr));

// const arr = [-2, 3, -4, 5, -6, 78, 9];

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

// const arr = [-2, 3, -4, 5, -6, 78, 9];

// function findLargestNumber(arr) {
//   let smallest = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (smallest > arr[i]) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// console.log(findLargestNumber(arr));

//TOPIC: Second Largest
// const arr = [3, 4, 7, 3, 9, 2, 4, 7];

// function findSecondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(findSecondLargest(arr));

// for(let i =0; i< 3; i++) {
//     for(let j= 0; j< 3; j++) {
//         console.log("i =" + i, "j =" +j)
//     }
// }

// for(let i = 0; i< 3; i++) {
//     for(let j = 0; j< i; j++) {
//         console.log(i, j)
//     }
// }

// for(let i = 0; i< 5; i++) {
//     for(let j = 0; j <= i; j++) {
//         console.log(i,j)
//     }
// }

// for(let i = 0; i< 3; i++) {
//     for(let j = i; j> 0; j--) {
//         console.log(i,j)
//     }
// }

// for(let i = 0; i< 3; i++) {
//     for(let j = i; j>= 0; j--) {
//         console.log(i,j)
//     }
// }

// for(let i = 5; i > 0; i--) {
//     for(let j = 0; j < i; j++) {
//         console.log(i,j)
//     }
// }
