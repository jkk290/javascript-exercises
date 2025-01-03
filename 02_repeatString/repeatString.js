const repeatString = function(string, num) {
    let i = 0;
    let repeatedString = "";
    if (num >= 0) {
        while (i < num) {
        repeatedString += string;
            i++;
        }
    } else {
        return("ERROR");
    }
    return(repeatedString);
};

// Do not edit below this line
module.exports = repeatString;
