const findTheOldest = function(arr) {
    return arr.reduce((a, c) => {

        let cond0 = !("yearOfDeath" in c) && (a.yearOfDeath - a.yearOfBirth) < (new Date().getFullYear() - c.yearOfBirth);
        let cond1 = !("yearOfDeath" in a) && (new Date().getFullYear() - a.yearOfBirth) < (c.yearOfDeath - c.yearOfBirth);
        let cond2 = (a.yearOfDeath - a.yearOfBirth) < (c.yearOfDeath - c.yearOfBirth);

        if (cond0 || cond1 || cond2) {
            a = c;
        }

        return a;
    }, {name: "Foo", yearOfBirth: 1, yearOfDeath: 1});
};

// Do not edit below this line
module.exports = findTheOldest;
