function reverse(head) {

    // This is basically the same as reversing a linked list, except that now you have to set previous and next pointers, since each node contains both.

    let temp = null;

    while (head !== null) {

        [head.next, head.prev] = [head.prev, head.next];
        temp = head;
        head = head.prev;

    }

    return temp;

}