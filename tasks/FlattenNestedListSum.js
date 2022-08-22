/**
 * Given a nested array where each element may be
 *  1) an integer or
 *  2) an array, whose elements themselves may be integers or further arrays, compute the sum of all the integers in the nested array.
 * 
 * What is the shape or pattern of this nested array structure?
 * 
 * As a follow on, modify this code to multiply each list sum by it's depth in the nesting.
 *  [1, 2] returns 3 since (1 + 2) is only inside of one array.
 *  But [1, [2, 3]] now evaluates to 11 because the (2 + 3) is at depth 2, so 5 * 2 is 10, then add the one for 11.
 */

function flattenedSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += flattenedSum(array[i]);
        }
        
        else sum += array[i];
    }

    return sum;
}

function flattenedProduct(array, depth = 1) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += flattenedProduct(array[i], depth + 1);
        }

        else sum += array[i];
    }

    return sum * depth;
}

console.log(flattenedProduct([1, [2, 3, [1]], [2]]))
