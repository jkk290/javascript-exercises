const fibonacci = function(number) {
  let fNumber = parseInt(number);

  if (fNumber >= 0) {
    let fArray = [0,1];
    let num1 = 0;
    let num2 = 1;
    let tempNum = 0;
    let i = 0;

    while (i < fNumber) {
      tempNum = num1 + num2;
      fArray.push(tempNum);
      num1 = num2;
      num2 = tempNum;
      i++;
    } return fArray.at(fNumber);

  } return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
