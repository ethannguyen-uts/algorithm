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
    public int Max = 0;
    public int LongestUnivaluePath(TreeNode root) {
        if (root == null){
            return 0;
        }
        dfs(root);
        return Max;
    }

    public int dfs(TreeNode node){
        
        var left = node.left != null ? dfs(node.left) : 0;
        var right = node.right != null ? dfs(node.right) : 0;

        var leftPathLength = node.left != null && node.val == node.left.val ? 1 + left : 0;
        var rightPathLength = node.right != null && node.val == node.right.val ? 1 + right : 0;
        var totalLength = leftPathLength + rightPathLength;
        Max = Math.Max(totalLength, Max);
        return Math.Max(leftPathLength, rightPathLength);
    }
}