/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int MaxDepth(TreeNode root) {
        return depth(root);
    }

    public int depth(TreeNode node){
        if (node == null){
            return 0;
        }
        var leftDepth = 1 + depth(node.left);
        var rightDepth = 1 + depth(node.right);

        return Math.Max(leftDepth, rightDepth);
    }
}