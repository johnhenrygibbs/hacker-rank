function insertNodeAtPosition(head, data, position) {

    let node = new SinglyLinkedListNode(data);
    let count = 0;
    let temp = head;

    // Begin by setting temp to head and incrementing its position along with the counter while the count is less than the desired position.

    while (count < position - 1) {

        temp = temp.next;
        count++;

    }

    // Once the loop completes set next node and temp values and return head.

    node.next = temp.next;
    temp.next = node;

    return head;

}