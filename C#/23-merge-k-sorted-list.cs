/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeKLists(ListNode[] lists) {
        var minHeap = new PriorityQueue<ListNode, int>();
        for (var i = 0; i < lists.Length; i++){
            var head = lists[i];
            var current= head;
            while(current != null){
                var next = current.next;
                current.next = null;
                minHeap.Enqueue(current, current.val);
                current = next;
            }
        }

        if (minHeap.Count == 0){
            return null;
        }

        var mergeListHead = minHeap.Dequeue();
        var curr = mergeListHead;
        while(minHeap.Count > 0){
            curr.next = minHeap.Dequeue();
            curr = curr.next;
        }
        return mergeListHead;
    }
    
}