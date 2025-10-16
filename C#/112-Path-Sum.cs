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
    public bool HasPathSum(TreeNode root, int targetSum) {
        return Traverse(root, 0, targetSum);

    }
    
    public bool Traverse(TreeNode node, int currSum, int targetSum){
        if (node == null)
        {
            return false;
        }

        if (node.left == null && node.right == null)
        {
            if (currSum + node.val == targetSum)
            {
                return true;
            }
        }

        return Traverse(node.left, currSum + node.val, targetSum) 
            || Traverse(node.right, currSum + node.val, targetSum);
      
    }
}