const sumAll = function(start, end) {

   if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number' || start % 1 !== 0 || end % 1 !== 0) {
        return 'ERROR';
    }

    let sum = 0;

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start; i <= (end - start + 1); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
