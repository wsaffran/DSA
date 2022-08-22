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

// Turn Linked List into Indicies
function turnLinkedListIntoIndices(head) {
    let output = head;
    let index = 0;

    while (head) {
        head.value = index;
        index += 1;
        head = head.next;
    }

    return output;
}

// Linked List Remove All Values Except Target
function removeAllValuesNotTarget(head, target = 0) {
    let dummy = new ListNode('dummy', head);
    let dummyHead = dummy;

    while (dummy && dummy.next) {
        if (dummy.next.value !== target) {
            dummy.next = dummy.next.next;
        }
        else dummy = dummy.next;
    }

    return dummyHead.next;
}

// Linked List Fibonacci
function linkedListFibonacci(k) {
    if (k === 0) return null;

    let head = new ListNode(1);
    let current = head;
    let prev = 0;
    let i = 1 // 2

    while (i < k) { // <= k
        current.next = new ListNode(current.value + prev);
        prev = current.value;
        current = current.next;
        i += 1;
    }

    return head;
}

// Linked List Remove Every Other Nodes
function removeEveryOtherLL(head) {
    let current = head;

    while (current && current.next) {
        current.next = current.next.next;
        current = current.next;
    }

    return head;
}

// Linked List Remove Every Kth Node
function removeEveryKthLL(head, k) {
    if (!head || k <= 1) return null;

    let current = head;
    let i = 1;

    while (current && current.next) {
        if (i % (k - 1) === 0) {
            current.next = current.next.next;
        }

        current = current.next;
        i += 1;
    }

    return head;
}

const LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const LL2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

listToArray(removeEveryKthLL(null));
listToArray(removeEveryKthLL(LL1, 1));
listToArray(removeEveryKthLL(LL2, 3));
