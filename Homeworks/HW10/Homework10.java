public class Homework10 {
    public static void main(String[] args) {
        int[] nums = new int[] {125,125,125,25,2,1,125,125, 125, 125};
        System.out.println(findMaxConsecutiveNumbers(nums));
      }
    
      public static int findMaxConsecutiveNumbers(int[] nums) {
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
    // public static void main(String[] args) {
    //     int i = 1;
    //     int j = 2;
    //     boolean x = (i==j);
    //     System.out.println(x);
    // }
    // public static void main(String[] args) {
    //     char correctPositions[];
    //     String word;
    //     correctPositions = new char[]{ '*', '*', '*', '*', '*'};
    //     word = "PARADIGMS";
    //     System.out.println(myMethod(correctPositions, word));
    //     }

    //     static String myMethod(char[] correctPositions, String word) {
    //     // code to be executed
    //     for(int i = 0; i < correctPositions.length; i++) {
    //         if ((correctPositions[i] != word.charAt(i)) && (correctPositions[i] != '*')) {
    //             return "false";
    //         }
    //     }
    //     return "true";
    //     }
    
}
