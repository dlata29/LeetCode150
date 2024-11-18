var pairSum = function (head) {
  // Step 1: Find the middle of the linked list using slow and fast pointers
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list starting from slow
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // Step 3: Calculate the maximum twin sum
  let maxSum = 0;
  let start = head;
  while (prev) {
    // Adjust property names if needed, e.g., use `start.val` if the property is `val` instead of `value`
    maxSum = Math.max(maxSum, start.value + prev.value);
    start = start.next;
    prev = prev.next;
  }

  return maxSum;
};
