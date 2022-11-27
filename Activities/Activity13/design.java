public class Board {
    Array board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    
    static void checkWinner() {
        for(int i = 0; i < 3; i++){
            if board[i] = [0,0,0] {
                //Computer win
            }else if board[i] = [1,1,1] {
                // user win
            }
        }
        for(int i = 0; i < 3; i++){
            if (board[0][i] = [0,0,0]) || (board[1][i] = [0,0,0]) || (board[2][i] = [0,0,0]) {
                //Computer win
            }else if (board[0][i] = [1,1,1]) || (board[1][i] = [1,1,1]) || (board[2][i] = [1,1,1]) {
                // user win
            }
        }
    }

    static computerTurn(){
        var x = rand(0,2)
        var y = rand(0,2)
        //check x and y if already there
        board[x][y] = 0
    }

    static userTurn(){
        var x = rand(0,2)
        var y = rand(0,2)
        //check x and y if already there
        board[x][y] = 1
    }
}