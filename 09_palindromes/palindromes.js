const palindromes = function (str) {
    let clearString = str.split(",").join("").split("");
    if (clearString.at(clearString.length - 1) == "." || 
        clearString.at(clearString.length - 1) == "?" ||
        clearString.at(clearString.length - 1) == "!") {
        clearString.splice(clearString.length - 1, 1);
    }
    clearString = clearString.join("").split(" ").join("").toLowerCase();

    if (clearString === clearString.split("").reverse().join("")) return true;

    return false;
};

palindromes('racecar')

// Do not edit below this line
module.exports = palindromes;
