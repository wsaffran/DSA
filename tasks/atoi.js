/**
 * Given a base-10 integer as a string, parse the integer and return it as an int.
 * This problem can be done iteratively and recursively and it's worth doing both!
 */

const map = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
};

function getInt(num, base = 1, result = 0) {
    if (!num.length) return result;

    const lastDigit = map[num.slice(-1)];

    return getInt(num.slice(0, -1), base * 10, result + lastDigit * base);
}

function atoi(num) {
    let sign = 1;
    let cleanedNum = num;

    if (!cleanedNum.length) return 0;

    if (cleanedNum[0] === '-') {
        sign *= -1;
        cleanedNum = cleanedNum.slice(1);
    }

    const int = getInt(cleanedNum)

    return sign * int;
}

console.log(atoi('123'));
