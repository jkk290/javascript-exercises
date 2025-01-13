const sumAll = function(num1, num2) {
    if ((num1 < 0) || (num2 < 0)) {
        return("ERROR");
    } else if ((!Number.isInteger(num1)) || (!Number.isInteger(num2))) {
        return("ERROR")
    } else {
        let minNum = Math.min(num1, num2);
        let maxNum = Math.max(num1, num2);
        let runningTotal = 0;
        for (let i = minNum; i <= maxNum; i++ ) {
            runningTotal += i;
        };
        return(runningTotal);
    };
    
};

// Do not edit below this line
module.exports = sumAll;
