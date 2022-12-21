function reverse(head) {

    // An iterative solution wants the next pointer of the current node to be set to the previous node, then we redefine our previous and current variables.

    let prev = null;

    while (head !== null) {

        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;

    }

    return prev;

}