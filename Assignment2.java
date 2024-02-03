/*package whatever //do not write package name here */

import java.io.*;

class GFG {
        
    public static int getMaxSubArray(int[] arr){
        int n = arr.length;
        int max_so_far = Integer.MIN_VALUE;
        int max_till_here = 0;
        for(int i=0;i<n;i++){
            max_till_here = max_till_here + arr[i];
            if(max_till_here > max_so_far)
                max_so_far = max_till_here;
            if(max_till_here < 0)
                max_till_here = 0;
        }
        return max_so_far;
    }
    
	public static void main (String[] args) {
	    int[] arr = new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4};
	    int resutl = getMaxSubArray(arr);
		System.out.println(resutl);
	}
}