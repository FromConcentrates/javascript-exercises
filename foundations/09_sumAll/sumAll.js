const sumAll = function(num1, num2) {
  
    if (num1 <= 0 || num2 <= 0) {
        return 'ERROR'
    } else if (!Number.isSafeInteger(num1) || !Number.isSafeInteger(num2)) {
        return 'ERROR'
    } else if (num2 > num1) {
        return ((num2 - num1)+1) * (num1 + num2) / 2
    }
    else if (num1 > num2) {
         return ((num1 - num2)+1) * (num1 + num2) / 2
    } else {return 'ERROR'}

};



// Do not edit below this line
module.exports = sumAll;
