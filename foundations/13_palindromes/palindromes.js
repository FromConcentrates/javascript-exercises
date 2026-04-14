

const palindromes = function (phrase) {
let cleanedPhrase = phrase.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
let reversePhrase = cleanedPhrase.split('').reverse().join('');
if (cleanedPhrase === reversePhrase) {
    return true }
    else {return false}

};



// Do not edit below this line
module.exports = palindromes;
