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

/**
 * We've been given a linked list of integer values from 0 - 2^32, and we want to delete all of the nodes that are even and return the list's head.
We should return the modified input linked list as our result.
Function Signature: 
function deleteEvenNodes(head)
Target runtime and space complexity:
 O(n)
 */

function deleteEvenNodes(head) {
    let dummy = new ListNode('dummmy', head);
    const dummyHead = dummy;

    while (dummy.next) {
        if (dummy.next.value % 2 === 0) {
            dummy.next = dummy.next.next;
        }
        else dummy = dummy.next;
    }

    return dummyHead.next;
}

function deleteEvenNodesTD(head) {
    if (!head) return head;

    if (head.value % 2 === 0) {
        return deleteEvenNodesTD(head.next);
    }

    head.next = deleteEvenNodesTD(head.next);
    return head;
}

const LL1 = new ListNode(1, new ListNode(2, new ListNode(3)));

listToArray(deleteEvenNodesTD(LL1));
