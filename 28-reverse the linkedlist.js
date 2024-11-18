var reverseLinkedList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextTemp = curr.next; // Save the next node
    curr.next = prev; // Reverse the current node's pointer
    prev = curr; // Move 'prev' one step forward
    curr = nextTemp; // Move 'curr' one step forward
  }

  return prev; // 'prev' is the new head of the reversed list
};
