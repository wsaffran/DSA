class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function listToArray(head) {
    let output = [];

    while (head) {
        output.push(head.value);
        head = head.next;
    }

    console.log(output);
}

/*
 * Given a linked list and an integer, find whether the integer exists in the list. Return a boolean.
 * Given a linked list and an integer, return how many times the integer exists in the list.
 * Find mean of a list of integers
 * Replace all negative values with a 0
 * Reverse the list
 */

function exists(head, num) {
    if (!head) return false;
    return head.value === num || exists(head.next, num);
}

function frequency(head, num) {
    if (!head) return 0;
    return Number(head.value === num) + frequency(head.next, num);
}

function mean(head, count = 0, sum = 0) {
    if (!head) {
        if (count === 0) return 0;
        return sum / count;
    }

    return mean(head.next, count + 1, sum + head.value);
}

function replaceNegatives(head, node = head) {
    if (!node) return head;

    if (node.value < 0) node.value = 0;

    return replaceNegatives(head, node.next);
}

function reverse(head) {
    if (!head || !head.next) return head;

    let newHead = reverse(head.next); // 2 -- store the new Head to later return it
    console.log('1', { newHead, head })
    // head.next = null;
    // newHead.next = head;
    // cant manipulate newHead bc then we'd be updating the next variable each time
    // overwriting the previous next. We need to use the current head, not the
    // pointer to the output;
    /* flip the arrow */
    head.next.next = head;
    head.next = null; // only to clean up circular
    console.log('2', { newHead, head })
    return newHead; // we want to keep the newHead so passing this newHead down
    // for each recursive call back up the stack
}

const LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const LL2 = new ListNode(1, new ListNode(-1, new ListNode(0, new ListNode(-4, new ListNode(4)))));

// console.log(replaceNegatives(new ListNode(-9)));
listToArray(reverse(LL1));
