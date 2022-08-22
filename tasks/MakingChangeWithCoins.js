/**
 * Given a N cents, write a function to determine the number of ways of using pennies, nickels, dimes, and quarters to represent it.
 * (Pennies are worth 1 cent; nickels, 5; dimes, 10; quarters, 25.)
 */

function numberOfPossibleChangeOptions(n) {
    const COINS = [25, 10, 5, 1];

    function backtrack(path = [], sum = 0) {
        if (sum > n) return;

        if (sum === n) {
            if (cache.has(path.length)) return;
    
            cache.add(path.length);
            count += 1;
            return;
        }

        for (let coin of COINS) {
            path.push(coin);
            sum += coin;

            backtrack(path, sum);

            sum -= coin;
            path.pop();
        }
    }

    let count = 0;
    let cache = new Set();

    backtrack();

    return count;
}

function numberOfPossibleChangeOptions2(n) {
    const COINS = [25, 10, 5, 1];

    function backtrack(path = [], sum = 0, index = 0) {
        if (sum > n) return;

        if (sum === n) {
            count += 1;
            return;
        }

        for (let i = index; i < COINS.length; i++) {
            path.push(COINS[i]);
            sum += COINS[i];

            backtrack(path, sum, i);

            sum -= COINS[i];
            path.pop();
        }
    }

    let count = 0;

    backtrack();

    return count;
}

console.log(numberOfPossibleChangeOptions2(26));
