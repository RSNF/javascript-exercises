const sumAll = function(num, range) {
    if (num == range) return num;
    if (num < 0 || typeof range != "number") return "ERROR";
    if (num > range) return sumAll(range, num);
    return num + sumAll(num + 1, range);
};

// Do not edit below this line
module.exports = sumAll;
