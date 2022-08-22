/**
 * Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s.
 * For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.
 * 
 * You are given an array of strings words and another array of query strings queries.
 * For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.
 * 
 * Return an integer array answer, where each answer[i] is the answer to the ith query.
 */

function smallestCharacterFrequency(string) {
    let min = Infinity;
    let count = 0

    for (const char of string) {
        let charValue = char.charCodeAt(0);

        if (charValue < min) {
            min = charValue;
            count = 0;
        }

        if (charValue === min) {
            count += 1;
        }
    }

    return count;
}

function numSmallerByFrequency(queries, words) {
    const wordFrequencies = words.map(word => smallestCharacterFrequency(word));
    const queryFrequencies = queries.map(query => smallestCharacterFrequency(query));

    const result = [];

    for (const queryFrequency of queryFrequencies) {
        let count = 0;

        for (const wordFrequency of wordFrequencies) {
            if (queryFrequency < wordFrequency) {
                count += 1;
            }
        }

        result.push(count)
    }

    return result;
}

console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
console.log(numSmallerByFrequency(["bbb","cc"], ["a","aa","aaa","aaaa"]));
