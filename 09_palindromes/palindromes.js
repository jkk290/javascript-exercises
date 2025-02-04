const palindromes = function (string) {
   let reversedArray = Array.from(string).reverse(); 
   let reversedString = reversedArray.join('');

   if (string.toLowerCase() === reversedString.toLowerCase()) {
        return true;
   } return false;
};

// Do not edit below this line
module.exports = palindromes;
