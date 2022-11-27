public class JavaQuestion {
    public int findMaxConsecutiveNumbers(int[] nums) {
	    /* your solution goes here */
        int max_overall = 0;
        int max_local = 0;
        for (int i = 0; i < nums.length; i++){
            if (nums[i] == 125){
                max_local = max_local + 1;
                if (max_local > max_overall) {
                    max_overall = max_local;
                }
            } else {
                max_local = 0;
            }
        }
        return max_overall;
	}
}
