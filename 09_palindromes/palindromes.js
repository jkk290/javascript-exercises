const palindromes = function (string) {
   let stringArray = Array.from(string);
   function isPunctuation(char) {
      return !char.match(/[ .,:!?@#$%^&*()-=';"+_]/);
   };

   let noPunctuationArray = stringArray.filter(isPunctuation);
   let noPunctuationString = noPunctuationArray.join('');
   let reversedArray = Array.from(noPunctuationString).reverse(); 
   let reversedString = reversedArray.join('');

   if (noPunctuationString.toLowerCase() === reversedString.toLowerCase()) {
        return true;
   } return false;
};

// Do not edit below this line
module.exports = palindromes;
