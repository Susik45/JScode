// alert("smthing");
// console.log("ok button");

// let my_str = "first string";
// let my_str_1 = "second string";
// let my_str_2 = `third string`;

// let num1 = 26;
// num1 = 4;
// let num2 = 2;

// let my_name = "George";
// let book_title = 'Book \'title is "Nemo"';

// //alert(book_title)

// let x = 5;
// x--;

// alert(x);

// let x = 5;
// x = x + 1;

// alert(x);

// let x = 37;
// x *= 5;
// x += 50;
// x *= 20;
// x += 2021;
// x -= 1000;
// x -= 2006;

// alert(x);

// let my_name = prompt("Enter your name");
// let my_age = 15;

// let common_string = "My name is " + my_name + " I'm " + my_age;
// let string2 = `My name is ${my_name}`;

// alert(string2);

// let my_text_promt = prompt("Enter your name");
// alert(string2);

// const my_name = "John"; //cannot change

// let my_var = +prompt("enter something"); //gets numeric value

// let my_name = prompt("Enter your name");
// let my_age = +prompt("Enter your age, please.");

// if (my_age < 0) {
//   alert("Age can't be less than 0");
// } else if (my_age > 100) {
//   alert("Youre good");
// } else {
//   alert(`Fine, ${my_name}`);
// }

// let my_var = prompt("Enter some value");
// switch (my_var) {
//   case "value1":
//     {
//       alert("Ok");
//     }
//     break;
//   case "value2":
//     {
//       alert("ok");
//     }
//     break;
//   default: {
//     alert("No action");
//   }
// }

// inline;

// console.log(1);
// console.log(2);

// for (let i = 0; i <= 100; i++) {
//   for (let j = 0; j < i / 2; j++) {
//     if (i % j === 0) {
//     }
//   }
// }

// let my_str = prompt("Enter some text");

// console.log(`String lenght is ${my_str.length}`);
// console.log(`First element is ${my_str.charAt(1)}`);
// console.log(`Last element is ${my_str.charAt(my_str.length - 1)}`);

// let new_str = "";
// for (let i = 0; i < my_str.length; i++) {
//   console.log(`Symbol at position ${i} is ${my_str.charAt(i)}`);
//   if (my_str.charAt(i) !== "a") {
//     new_str += my_str.charAt(i);
//   }
// }

// console.log(`Initial text is ${my_str}`);
// console.log(`Filtered text is ${new_str}`);

// let my_str = prompt("Enter some text");
// console.log(`String lenght is ${my_str.length}`);
// console.log(`First element is ${my_str.charAt(1)}`);
// console.log(`Last element is ${my_str.charAt(my_str.length - 1)}`);
// let new_str = "";

// for (let i = 0; i < my_str.length; i++) {
//   new_str += my_str.charAt(my_str.length - 1 - i);
// }

// console.log(new_str);

// //a - $ b - #

// let my_str = prompt("Enter some text");
// let new_str = "";

// for (let i = 0; i < my_str.length; i++) {
//   if (my_str.charAt(i) == "a") {
//     new_str += "$";
//   } else if (my_str.charAt(i) == "b") {
//     new_str += "#";
//   } else {
//     new_str += my_str.charAt(i);
//   }
// }

// switch (my_str.charAt(i)) {
//   case "a":
//     {
//       new_str += "$";
//     }
//     break;
//   case "b":
//     {
//       new_str += "#";
//     }
//     break;
//   default:
//     new_str += my_str.charAt(i);
//     break;
// }
// console.log(new_str);

// let n = +prompt("How many numbers do you want");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += +prompt(`Enter your ${i} number`);
// }

// alert(sum / n);

// //First exercise The Fortune Teller

// function tellFortune(children, partner, location, job) {
//   alert(
//     `You'll be a ${job} in ${location}, and married to ${partner} with ${children} children`
//   );
// }

// tellFortune(4, "John", "America", "journalist");
// tellFortune(2, "Aram", "Armenia", "programmer");
// tellFortune(3, "Mike", "France", "designer");

// //Second exercise The Puppy Age Calculator

// function calculateDogAge(puppy_age) {
//   let age = puppy_age * 7;
//   alert(age);
// }

// calculateDogAge(3);
// calculateDogAge(2);
// calculateDogAge(5);

// // Third exercise The Lifetime Supply Calculator

// function calculateSupply(age, amount) {
//   let sum = 365 * amount * age;
//   alert(`You need ${sum}$ for your whole life`);
// }

// calculateSupply(76, 100);
// calculateSupply(14, 786);
// calculateSupply(80, 200);

// //Fourth exercise The Temperature Converter

// function celsiusToFahrenheit(celsius) {
//   let tofar = (celsius / 5) * 9 + 32;
//   alert(`${celsius} Celsius in Fahrenheit = ${tofar}`);
// }

// celsiusToFahrenheit(220);
// celsiusToFahrenheit(65);
// celsiusToFahrenheit(125);

// // Fifth exercise The Geometrizer

// function calcCircumfrence(radius) {
//   let pi = 3.14;
//   let circumfrence = 2 * pi * radius;
//   alert(circumfrence);
// }

// calcCircumfrence(2);
// calcCircumfrence(10);
// let x = -17;

// if (x < 0) {
//   alert((x *= -1));
// } else {
//   alert(x);
// }

// for (let i = 0; i < 17; i++) {
//   console.log(i);
// }

// for (i = 17; i > 0; i--) {
//   console.log(i);
// }

// let x = 15;

// switch (x) {
//   case 12: {
//     alert("text1");
//     break;
//   }
//   case 15: {
//     alert("text2");
//     break;
//   }
//   case 123: {
//     alert("text3");
//     break;
//   }
//   default: {
//     alert("default");
//   }
// }

// let sum = 0;

// for (let i = 0; i < 5; i++) {
//   let sum = 0;
//   sum++;
// }

// console.log(sum);

// console.log.typeof()(1 + "2" + "2" - 1);

// let sum = 0;
// let sum = 0;
// for (let i = 1; i < 15; i++) {
//   if (i % 2 == 0) {
//     sum += 1;
//   } else {
//     continue;
//   }
// }

// alert(sum);

// let x = 26;
// let y = 18;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function splitArray1(arr) {
//   let odd_arr = [];
//   let even_arr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even_arr.push(arr[i]);
//     } else if (arr[i] % 2 === 1) {
//       odd_arr.push(arr[i]);
//     }
//   }
//   console.log(
//     `Odd elements are in ${odd_arr} and even elements ar ${even_arr}`
//   );
// }
// splitArray1(arr);

// let str = prompt("Enter some text");
// let sum = 0;

// for (i = 0; i < str.length; i++) {
//   if (str[i] == "a") {
//     sum += 1;
//   }
// }

// console.log(sum);

// //ex 3

// let arr = [1, null, 2, undefined, "", 3, 0, "ashkdjj", true, false];

// function getGoodElements(arr) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] == null ||
//       arr[i] == undefined ||
//       arr[i] == false ||
//       arr[i] == 0 ||
//       arr[i] == ""
//     ) {
//       continue;
//     } else {
//       arr1.push([arr[i]]);
//     }
//   }
//   return arr1;
// }
// let arr1 = getGoodElements(arr);
// console.log(arr1);

// function fill(arr_length, value) {
//   let arr = [];
//   for (let i = 0; i < arr_length; i++) {
//     arr.push(value);
//   }
//   return arr;
// }

// console.log(fill(10, "ajdhajd"));

// let arr = [1, 2, 3, 4, 5];

// function reverseNumbers(arr) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push([arr[arr.length - 1 - i]]);
//   }
//   return arr1;
// }

// let arr1 = reverseNumbers(arr);
// console.log(arr1);

// let arr = [1, 2, 3, 4, 3, 6, 1];

// function clearArr(arr) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] == 1 || arr[i] == 2)) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
// }

// console.log(clearArr(arr));

// // console.log(arr1)

// 3;
// let arr = [1, 2, 3];
// let arr1 = [1, 2, 3];

// function compare(arr, arr1) {
//   let x;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === arr1[i]) {
//       x = true;
//     } else {
//       x = false;
//       break;
//     }
//   }
//   return x;
// }

// console.log(compare(arr, arr1));

// let arr = [1, 2, 7, 8, 3];
// let arr1 = [2, 3, 6];

// function testingSameValue(arr, arr1) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr1[j]) {
//         newArr.push(arr[i]);
//       }
//     }
//   }
//   return newArr;
// }

// function aaaa() {
//   console.log(testingSameValue(arr, arr1));
// }

// let object1 = {
//   name: "Susik",
//   age: 15,
// };

// object1 = 5;
// function checkType(obj1) {
//   let isObject = true;

//   if (typeof obj1 === "object") {
//     if (obj1 === null || Array.isArray(obj1)) {
//       isObject = false;
//     }
//     return isObject;
//   } else {
//     console.log("invalid argument");
//   }
// }

// console.log(checkType(object1));

// let x = [3, 2, 5, 12, 7, 1, 9, 4];

// function biggestOne(y) {
//   let biggest = y[0];
//   for (i = 0; i < y.length; i++) {
//     if (y[i] > biggest) {
//       biggest = y[i];
//     }
//   }
//   return biggest;
// }

// console.log(biggestOne(x));

// let string1 = "paryap";

// function checkLetters(y) {
//   let isPalendro = true;
//   for (i = 0; i < y.length / 2; i++) {
//     // console.log(y[i])
//     // console.log(y[y.length-i-1])
//     if (y[i] === y[y.length - i - 1]) {
//       isPalendro = true;
//     } else {
//       isPalendro = false;
//       break;
//     }
//   }
//   return isPalendro;
// }

// console.log(checkLetters(string1));

// function makeStr(str, count) {
//   let newStr = "";
//   for (let i = 0; i < count; i++) {
//     newStr += str;
//   }
//   return newStr;
// }

// console.log(makeStr("a", 5));
// function caesarCipher(s, k) {
//   let newStr = "";
//   for (let i = 0; i < s.length; i++) {
//     newStr += String.fromCharCode(s.charCodeAt(i) + k);
//   }
//   return newStr;
// }
// console.log(caesarCipher("abcd", 2));

// function caesarCipher(s, k) {
//   let newStr = "";
//   let newPosition;
//   let stepLeft;
//   for (let i = 0; i < s.length; i++) {
//     let charPosition = s.charCodeAt(i);
//     if (charPosition >= 97 && charPosition <= 122) {
//       if (charPosition + k > 122) {
//         stepLeft = k - (122 - charPosition);
//         newPosition = 97 + ((stepLeft % 26) - 1);
//         newStr += String.fromCharCode(newPosition);
//       } else {
//         newStr += String.fromCharCode(s.charCodeAt(i) + k);
//       }
//     } else if (charPosition >= 65 && charPosition <= 90) {
//       if (charPosition + k > 90) {
//         stepLeft = k - (90 - charPosition);
//         newPosition = 65 + ((stepLeft % 26) - 1);
//         newStr += String.fromCharCode(newPosition);
//       } else {
//         newStr += String.fromCharCode(s.charCodeAt(i) + k);
//       }
//     } else {
//       newStr += s.charAt(i);
//     }
//   }
//   return newStr;
// }
// console.log(caesarCipher("abc", 1));

// 21;
// variant1;
// function findBiggestOne(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(findBiggestOne(4, 8));

// variant2;
// let arr = [8, 95, 4, 10, 1, 5, 2, 24, 5, 7, 3];
// function findBiggestOne(arr1) {
//   let biggest_one = arr[0];
//   for (let i = 0; i < arr1.length; i++) {
//     if (biggest_one > arr1[i]) {
//       continue;
//     } else {
//       biggest_one = arr1[i];
//     }
//   }
//   return biggest_one;
// }
// console.log(findBiggestOne(arr));

// 22;
// function findBiggestOne(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(findBiggestOne(4, 8));

// 23;
// let arr = [2, 3, 4, 1, 5, 6];

// function findNumOne(n) {
//   let value;
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] === 1) {
//       value = true;
//       break;
//     } else {
//       value = false;
//     }
//   }
//   return value;
// }

// console.log(findNumOne(arr));

// // 24

// // let arr = [2, 3, 4, 2, 5, 6, 7, 8];

// // function findTwo(n) {
// //   let sum = 0;
// //   let bool = false;
// //   for (let i = 0; i < n.length; i++) {
// //     // if ((n[i] == 2) && (== 2)) {
// //         bool = true;
// //         break;
// //     }
// //   }
// //   return bool;
// // }

// // console.log(findTwo(arr));

// // 25

// function triangle(a, b, c) {
//   let y;
//   if (a + b > c) {
//     if (a + c > b) {
//       if (c + b > a) {
//         y = 1;
//       } else {
//         y = 2;
//       }
//     } else {
//       y = 2;
//     }
//   } else {
//     y = 2;
//   }
//   return y;
// }

// console.log(triangle(3, 87, 5));

// 26;

// let arr = [1, 3, 5, 7, 9, 10, 11, 13];

// function evenNums(nums) {
//   let sum;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//       sum = 1;
//       break;
//     } else {
//       sum = 2;
//     }
//   }
//   return sum;
// }

// console.log(evenNums(arr));

// 27;
// let arr = [1, 3, 5, 7, 9, 11, 13];

// function progression(nums) {
//   debugger;
//   let d = nums[1] - nums[0];
//   let bool;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + d == nums[i + 1]) {
//       bool = true;
//     } else {
//       bool = false;
//     }
//   }
//   return bool;
// }
// console.log(progression(arr));

// 28 ?? 29;
// let arr = [5, 2, 8, 6, 4, 1];

// //version 1
// let sortednumbers = arr.sort((a, b) => a - b);
// console.log(sortednumbers);

// //version 2
// function sortNumbers(nums) {
//   let largest = nums[0];
//   let arr1 = [];
//   for (let i = 1; i < nums.length; i++) {
//     if (largest > nums[i]) {
//       arr1.push(nums[i]);
//       largest = nums[i];
//     } else {
//       continue;
//     }
//   }
//   return arr1;
// }
// console.log(sortNumbers(arr));

// 30;
// let arr = [5, 2, 8, 6, 4, 1];

// //version 1
// let sortednumbers = arr.sort((a, b) => b - a);
// console.log(sortednumbers);
// let arr = [0, 0, -1, 1, 1];
// function plusMinus(arr) {
//   let qnty = arr.length;
//   let min = 0;
//   let plus = 0;
//   let zero = 0;
//   let answer = [];
//   for (let i = 0; i < qnty; i++) {
//     if (arr[i] > 0) {
//       plus++;
//     } else if (arr[i] < 0) {
//       min++;
//     } else {
//       zero++;
//     }
//   }
//   answer = [plus / qnty, min / qnty, zero / qnty];
//   return answer;
// }
// console.log(plusMinus(arr));

// let s = "aabcdd";
// function super_reduced_string(s) {
//   var chars = s.split("");
//   for (let i = 0; i < chars.length; i++) {
//     if (chars[i] === chars[i + 1]) {
//       chars.splice(i, 1);
//       return super_reduced_string(chars.join(""));
//     }
//   }
//   return s.length > 0 ? s : "Empty String";
// }

// 31;
// let a = 5;
// let b = 3;
// let c = 8;
// let d = 10;

// function findBiggest(a, b, c, d) {
//   let newArr = [a, b, c, d];
//   let biggesone = newArr[0];
//   for (let i = 1; i < newArr.length; i++) {
//     if (newArr[i] > biggesone) {
//       biggesone = newArr[i];
//     } else {
//       continue;
//     }
//   }
//   return biggesone;
// }

// console.log(findBiggest(a, b, c, d));

// 32;
// let a = 5;
// let b = 3;
// let c = 8;
// let d = 1;

// function findSmalllest(a, b, c, d) {
//   let newArr = [a, b, c, d];
//   let smallestOne = newArr[0];
//   for (let i = 1; i < newArr.length; i++) {
//     if (newArr[i] < smallestOne) {
//       smallestOne = newArr[i];
//     } else {
//       continue;
//     }
//   }
//   return smallestOne;
// }

// console.log(findSmalllest(a, b, c, d));

//33
// let a = 5;
// let b = 3;
// let c = 8;
// let d = 10;

// function findNumOne(a, b, c, d) {
//   let newArr = [a, b, c, d];
//   let bool = false;
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] == 1) {
//       bool = true;
//       break;
//     }
//   }
//   return bool;
// }

// console.log(findNumOne(a, b, c, d));

//34

// let a = 2;
// let b = 5;
// let c = 9;
// let d = 6;

// function sumOfTwo(a, b, c, d) {
//   if (a + b == c + d || a + c == b + d || a + d == b + c) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(sumOfTwo(a, b, c, d));

//35
// let a = 2;
// let b = 3;
// let c = 9;
// let d = 9;

// function findSum(a, b, c, d) {
//   if (a == b + c + d) {
//     return true;
//   } else if (b == a + c + d) {
//     return true;
//   } else if (c == a + b + d) {
//     return true;
//   } else if (d == a + b + c) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(findSum(a, b, c, d));

//36

// let a = 4;
// let b = 7;
// let c = 8;
// let d = 9;

// function findOdds(a, b, c, d) {
//   let arr = [a, b, c, d];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       sum++;
//     } else if (arr[i] == 1) {
//       sum++;
//     } else{
//         continue;
//     }
//     if (sum >= 2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
// }

// console.log(findOdds(a, b, c, d));