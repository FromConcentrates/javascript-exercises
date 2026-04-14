

const fibonacci = function(num) {
    let fromString = Number(num);
    if (fromString === 0) {
        return 0
    } else if (fromString === 1) {
        return 1
    }
    else if (fromString < 0) {
        return "OOPS"
    }
    let first = 0;
    let second = 1;
    let next;

for (let i = 0; i < fromString - 1; i++) {
    next = first + second;
    first = second;
    second = next;
}
return next;
};

// F[n] = F[n - 1] + F[n - 2]
/*
F[0] = 0
F[1] = 1


*/
// Do not edit below this line
module.exports = fibonacci;