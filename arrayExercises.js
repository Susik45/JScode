// 211;
// let n = [-1, -3, 0, 5, 3, -8, 6];

// function positiveNumsArithmeticAverage(arr) {
//   let sum = 0;
//   let qnty = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//       qnty++;
//     }
//   }
//   return sum / qnty;
// }

// console.log(positiveArithmeticAverage(n));

// 212;
// let n = [-1, -3, 0, 5, -8, 5];

// function positiveNumsAverage(arr) {
//   let sum = 0;
//   let qnty = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i] ** 2;
//       qnty++;
//     }
//   }
//   return Math.sqrt(sum / qnty);
// }

// console.log(positiveNumsAverage(n));

// 213;

// let n = [-1, -3, 0, 5, 3, -8, 6];

// function negativeArithmeticAverage(arr) {
//   let sum = 0;
//   let qnty = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       sum += arr[i];
//       qnty++;
//     }
//   }
//   return sum / qnty;
// }

// console.log(negativeArithmeticAverage(n));

// 214;
// let n = [1, 3, 0, -5, 8, -5];

// function negativeNumsAverage(arr) {
//   let sum = 0;
//   let qnty = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       sum += arr[i] ** 2;
//       qnty++;
//     }
//   }
//   return Math.sqrt(sum / qnty);
// }

// console.log(positiveNumsAverage(n));

// 215;
// let n = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// function evenIndexSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(evenIndexSum(n));

// 216;

// let n = [1, 1, 2, 3, 4, 5, 6];

// function evenIndexProduct(arr) {
//   let sum = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       sum *= arr[i];
//     }
//   }
//   return sum;
// }

// console.log(evenIndexProduct(n));

// 217;

// let n = [0, 1, 2, 3, 4, 5];

// function oddIndexSquaresProduct(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 1) {
//       product *= arr[i] ** 2;
//     }
//   }
//   return product;
// }

// console.log(oddIndexSquaresProduct(n));

// 218;

// let n = [-1, -2, -3, 0, 1, 2, 3, -5];

// function sumOfAbsoluteValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 1) {
//       if (arr[i] >= 0) {
//         sum += arr[i];
//       } else {
//         sum += arr[i] * -1;
//       }
//     }
//   }
//   return sum;
// }

// console.log(sumOfAbsoluteValues(n));

//219

// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function qntyOfMultiple(arr, k) {
//   let qnty = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % k == 0) {
//       qnty++;
//     }
//   }
//   return qnty;
// }

// console.log(qntyOfMultiple(n, 2));

// 220;

// let n = [-1, -8, -2, 0, 2, 5, -4, 7];

// function findNegativePositiveNums(arr) {
//   let sumOfPositive = 0;
//   let sumOfNegative = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sumOfPositive++;
//     } else if (arr[i] < 0) {
//       sumOfNegative++;
//     }
//   }
//   return { sumOfPositive, sumOfNegative };
// }

// console.log(findNegativePositiveNums(n));

// 224;

// let n = [1, 2, -3, 3, -2, 5, -8, 1, 4];

// function cubesSum(arr, k) {
//   let sum = 0;
//   let positiveNum;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       positiveNum = arr[i] * -1;
//       if (positiveNum < k) {
//         sum += positiveNum ** 3;
//       }
//     } else {
//       if (arr[i] < k) {
//         sum += arr[i] ** 3;
//       }
//     }
//   }
//   return sum;
// }

// console.log(cubesSum(n, 4));

// 225;

// let n = [1, 2, -3, 3, -2, 5, -2, -8, 1, 4];

// function product(arr, t) {
//   let product = 1;
//   let absoluteValue;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       absoluteValue = arr[i] * -1;
//       if (absoluteValue < t) {
//         product *= absoluteValue;
//       }
//     } else {
//       if (arr[i] < t) {
//         product *= arr[i];
//       }
//     }
//   }
//   return product;
// }

// console.log(product(n, 4));

// 226;

// let n = [1, 2, -5, 3, -6, 4];

// function sum(arr, k) {
//   let sum1 = 0;
//   let absoluteValue;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       absoluteValue = arr[i] * -1;
//       if (absoluteValue < k) {
//         sum1++;
//       }
//     } else {
//       if (arr[i] < k) {
//         sum1++;
//       }
//     }
//   }
//   return sum1;
// }

// console.log(sum(n, 5));

// 228;

// let n = [1, 2, 3, 9, 4, 5, 6, 7, 8];

// function sum(arr, k) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % k == 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sum(n, 3));

// 229;

// let n = [1, 2, -3, 4, -5, 0, 7];

// function product(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] - i > 0) {
//       product *= arr[i];
//     }
//   }
//   return product;
// }

// console.log(product(n));

//  221, 222, 223, 227, 230;

//227 

let n = [1, 2, 3, 4, 5, 6, 7, 8]

function arithmeticAverage(arr, k){
    let sum = 0
    let qnty = 0
    for(let i = 0; i<arr.length; i++){
        if(i % 2 == 0){
            sum+= arr[i]
            qnty++
        }
    }
    return sum/qnty
}

console.log(arithmeticAverage(n, 2))