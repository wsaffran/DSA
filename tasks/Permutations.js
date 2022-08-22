function permute(nums) {
    function backtrack(first = 0) {
        if (first === n) output.push(nums.slice());

        for (let i = first; i < n; i++) {
            [ nums[first], nums[i] ] = [ nums[i], nums[first] ];

            backtrack(first + 1);

            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }

    let n = nums.length;
    let output = [];
    backtrack();
    return output;
}

console.log(permute([1,2,3]));
