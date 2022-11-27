public class Homework10 {
    public boolean check(char[] correctPositions, String word) {
        /* your solution goes here */
        for(int i = 0; i < correctPositions.length; i++) {
            if ((correctPositions[i] != word.charAt(i)) && (correctPositions[i] != '*')) {
                return true;
            }
        }
        return false;
    }
}
