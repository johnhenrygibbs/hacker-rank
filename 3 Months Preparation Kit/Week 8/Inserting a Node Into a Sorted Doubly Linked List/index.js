function sortedInsert(head, data) {

    let node = new DoublyLinkedListNode(data);
    let temp = head;

    // While the value of temp node is less than the value of the input data, progress temp node.

    while (temp.data < data) {

        // If you reach the end of the linked list, break the while loop.

        if (temp.next == null) {

            break;

        } else {

            temp = temp.next;

        }

    }

    // First case handles insertions before the head of the linked list.

    if (temp.prev == null) {

        temp.prev = node;
        node.next = temp;

        return node;

    // Second case handles insertions in the middle of the linked list.

    } else if (temp.data >= data) {

        let before = temp.prev
        let after = temp

        before.next = node;
        node.prev = before;

        after.prev = node;
        node.next = after;

        return head;

    // Third case handles insertions after the tail of the linked list.

    } else {

        temp.next = node;
        node.prev = temp;
        
        return head;

    }

}