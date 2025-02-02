const add = function(addNum1, addNum2) {
  let addedNums = addNum1 + addNum2;
  return addedNums; 
};

const subtract = function(subtractedNum1, subtractedNum2) {
	let subtractedNums = subtractedNum1 - subtractedNum2;
  return subtractedNums;
};

const sum = function(arr) {
	let arrSum = 0;
  arr.forEach(arrNum => {
    arrSum += arrNum;
  });
  return arrSum;
};

const multiply = function(arr) {
  let arrayMultiply = 1;
  arr.forEach(arrNum => {
    arrayMultiply *= arrNum;
  });
  return arrayMultiply;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num1) {
	let result = 1;
  for (let i = 1; i <= num1; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
