const ListNode = require('../utils')
/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
    * Input: l1 = [2,4,3], l2 = [5,6,4]
    * Output: [7,0,8]
    * Explanation: 342 + 465 = 807.
 */

// class ListNode {
//     constructor(value = 0, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }
// function listToArray(head) {
//     let array = [];

//     while (head) {
//         array.push(head.value);
//         head = head.next;
//     }

//     return array;
// }

// Iterative Approach

function addTwoNumbers(head1, head2) {
    let dummy = new ListNode('dummy');
    let head = dummy;
    let carry = 0;

    while (head1 || head2 || carry) {
        let sum = (head1 ? head1.value : 0) + (head2 ? head2.value : 0) + carry;
        let digit = sum % 10;

        carry = Math.floor(sum / 10);

        dummy.next = new ListNode(digit);
        dummy = dummy.next;

        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
    }

    return head.next;
}


// Recursive Approach
function addTwoNumbersRecursively(head1, head2, carry = 0) {
    const sum = head1.value + head2.value + carry;
    const digit = sum % 10;
    carry = (sum - digit) / 10;
    const result = new ListNode(digit);

    if (head1.next || head1.next || carry) {
        if (!head1.next) head1.next = new ListNode(0);
        if (!head2.next) head2.next = new ListNode(0);
        result.next = addTwoNumbersRecursively(head1.next, head2.next, carry);
    }

    return result;
}

const L1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const L2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(listToArray(addTwoNumbers(L1, L2)));
console.log(listToArray(addTwoNumbersRecursively(L1, L2)));
