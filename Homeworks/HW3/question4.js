let fs = require("fs");


class GameState{
	constructor(good_letters, bad_letters, correct_letters){
		this.good_letters = good_letters;
		this.bad_letters = bad_letters;
		this.correct_letters = correct_letters;
	}
}


function wordleHelper(gameState){
	// create input streams
    let valid_words = fs.readFileSync("five-letter-words.txt","utf8");        
    let all_words = valid_words.split("\n");
    let common_words = all_words.filter(x => x[0] === "*");
    let uncommon_words = all_words.filter(x => x[0] !== "*");

    

}


let state = new GameState(
	["A","B"],
	["Z"],
	["A", undefined, undefined, undefined, undefined]
);

wordleHelper(state);