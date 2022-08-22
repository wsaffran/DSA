/**
 * You are given an integer array cards of length 4. You have four cards, each containing a number in the range [1, 9].
 * You should arrange the numbers on these cards in a mathematical expression using the operators ['+', '-', '*', '/']
 * and the parentheses '(' and ')' to get the value 24.
 * 
 * You are restricted with the following rules:
 *      The division operator '/' represents real division, not integer division.
 *          For example, 4 / (1 - 2 / 3) = 4 / (1 / 3) = 12.
 *      Every operation done is between two numbers. In particular, we cannot use '-' as a unary operator.
 *          For example, if cards = [1, 1, 1, 1], the expression "-1 - 1 - 1 - 1" is not allowed.
 *      You cannot concatenate numbers together
 *          For example, if cards = [1, 2, 1, 2], the expression "12 + 12" is not valid.
 * 
 * Return true if you can get such expression that evaluates to 24, and false otherwise.
 */

function generateExpressionValues(a, b) {
    const results = [a + b, a * b, a - b, b - a];

    if (a) results.push(b / a);
    if (b) results.push(a / b);

    return results;
}

function twentyFour(nums) {
    if (nums.length === 1) return Math.abs(24 - nums[0]) <= 0.1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const newNums = nums.filter((_, idx) => idx !== i && idx !== j);
            
            const possibleNums = generateExpressionValues(nums[i], nums[j]);

            for (const num of possibleNums) {
                newNums.push(num);

                if (twentyFour(newNums)) return true;

                newNums.pop();
            }
        }
    }

    return false;
}

console.log(twentyFour([1,2,3,4]));







































function generatePossibleResults(a, b) {
    let res = [ a + b, a - b, b - a, a * b ];

    if (a) res.push(b / a);
    if (b) res.push(a / b);

    return res;
}

function solve24(cards) {
    if (cards.length === 1) return Math.abs(cards[0] - 24) <= 0.1;

    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            let newCards = [];

            // Choose the "other" two numbers that are not going to be computed togetehr
            for (let k = 0; k < cards.length; k++) {
                if (k != i && k != j) newCards.push(cards[k]);
            }

            // for the computing numbers, find all possiblities
            let results = generatePossibleResults(cards[i], cards[j]);
            for (const result of results) {
                newCards.push(result);
                
                if (solve24(newCards)) return true;
                
                newCards.pop();
            }
        }
    }

    return false;
}

// console.log(solve24([5,5,5,5])) // (5 * 5) - (5 / 5) = 24
