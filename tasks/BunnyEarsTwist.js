/**
 * We have bunnies standing in a line, numbered 1, 2, ...
 * The odd bunnies (1, 3, ..) have the usual 2 ears.
 * The even bunnies (2, 4, ..) we'll say have 3 ears because they each have a raised foot.
 * Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
 */

function bunnyEarsTwist(bunnies) {
    if (!bunnies) return 0;

    return (bunnies % 2 === 0 ? 3 : 2) + bunnyEarsTwist(bunnies - 1);
}

console.log(bunnyEarsTwist(5));
