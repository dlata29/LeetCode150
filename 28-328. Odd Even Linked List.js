if (head == null || head.next == null) return head;
let oddPointer = head,
  arr = [];
while (oddPointer != null) {
  arr.push(oddPointer.value);
  if (oddPointer.next == null) break;
  oddPointer = oddPointer.next.next;
}
let evenPointer = head.next;
while (evenPointer != null) {
  arr.push(evenPointer.value);
  if (evenPointer.next == null) break;
  evenPointer = evenPointer.next.next;
}
let i = 0,
  curr = head;
while (curr != null) {
  curr.value = arr[i];
  curr = curr.next;
  i++;
}
return head;
