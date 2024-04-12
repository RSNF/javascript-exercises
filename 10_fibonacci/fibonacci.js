const fibonacci = function(num) {

    if (num < 0) {
        return "OOPS";
    }
    
    let prev0 = 0;
    let prev1 = 1;
    let fib = 0;
    for (let i = 0; i < num; i++) {

        prev0 = prev1;

        prev1 = fib;

        fib = prev0 + prev1;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
