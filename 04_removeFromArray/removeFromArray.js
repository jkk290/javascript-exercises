const removeFromArray = function(initialArray, ...removeItem) {
    const result = initialArray.filter(function(element) {
        return !removeItem.includes(element);
    })
    return(result);
};

// Do not edit below this line
module.exports = removeFromArray;
