const repeatString = function(string, num) {
    //let variable = string;
    let initialValue = '';
if (num < 0) {
    return 'ERROR';
}
for (i = 0; i < num; i++) {
    initialValue += string
}
return initialValue
};
console.log(repeatString('hey', -1));
// Do not edit below this line
module.exports = repeatString;
