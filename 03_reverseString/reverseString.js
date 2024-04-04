const reverseString = function(str) {
    if (str == "") return str;
    return str.at(-1) + reverseString(str.slice(0, -1));
};

// Do not edit below this line
module.exports = reverseString;
