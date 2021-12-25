31;
let a = 5;
let b = 3;
let c = 8;
let d = 10;

function findBiggest(a, b, c, d) {
  let newArr = [a, b, c, d];
  let biggesone = newArr[0];
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] > biggesone) {
      biggesone = newArr[i];
    } else {
      continue;
    }
  }
  return biggesone;
}

console.log(findBiggest(a, b, c, d));

32;
let a = 5;
let b = 3;
let c = 8;
let d = 1;

function findSmalllest(a, b, c, d) {
  let newArr = [a, b, c, d];
  let smallestOne = newArr[0];
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] < smallestOne) {
      smallestOne = newArr[i];
    } else {
      continue;
    }
  }
  return smallestOne;
}

console.log(findSmalllest(a, b, c, d));

33;
let a = 5;
let b = 3;
let c = 8;
let d = 10;

function findNumOne(a, b, c, d) {
  let newArr = [a, b, c, d];
  let bool = false;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == 1) {
      bool = true;
      break;
    }
  }
  return bool;
}

console.log(findNumOne(a, b, c, d));

34;

let a = 2;
let b = 5;
let c = 9;
let d = 6;

function sumOfTwo(a, b, c, d) {
  if (a + b == c + d || a + c == b + d || a + d == b + c) {
    return true;
  } else {
    return false;
  }
}
console.log(sumOfTwo(a, b, c, d));

35;
let a = 2;
let b = 3;
let c = 9;
let d = 9;

function findSum(a, b, c, d) {
  if (a == b + c + d) {
    return true;
  } else if (b == a + c + d) {
    return true;
  } else if (c == a + b + d) {
    return true;
  } else if (d == a + b + c) {
    return true;
  } else {
    return false;
  }
}

console.log(findSum(a, b, c, d));

36;

let a = 4;
let b = 7;
let c = 8;
let d = 9;

function findOdds(a, b, c, d) {
  let arr = [a, b, c, d];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      sum++;
    } else if (arr[i] == 1) {
      sum++;
    } else {
      continue;
    }
    if (sum >= 2) {
      return 1;
    } else {
      return 0;
    }
  }
}

console.log(findOdds(a, b, c, d));
