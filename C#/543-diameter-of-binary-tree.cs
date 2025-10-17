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
    public int MaxLength = 0;
    public int DiameterOfBinaryTree(TreeNode root) {
        GetLength(root);
        return MaxLength;
    }

    public int GetLength(TreeNode node){
        if (node.left is null && node.right is null){
            return 0;
        }
        var left = node.left is null ? 0 : GetLength(node.left) + 1;
        var right = node.right is null ? 0 : GetLength(node.right) + 1;

        if (left + right >= MaxLength){
            MaxLength = left + right;
        }
        return Math.Max(left, right);
    }
}