class GameState {
    constructor(good_letters, bad_letters, correct_letters) {
        this.good_letters = good_letters;
        this.bad_letters = bad_letters;
        this.correct_letters = correct_letters;
    }
}

function wordleHelper(state) {
    // your solution here
    /* ... Your implementation here ... */
    // import the NodeJS modules
    const fs = require('fs'); // module for file I/O
    const readline = require("readline"); // module for reading line-by-line from file
    var words = new Array();
    var potentials = new Array();

    // create input streams
    let possible_words = fs.readFileSync("five-letter-words.txt", "utf8");

    // sort and organize words (common words first, delete '*')
    possible_words.split("\n").forEach(row => {
        if (row.trim().length != 0) {
            words.push(row);
        }
    });
    words.sort()
    words = words.map(v => ((v.length - 5 == 0) ? v : v.slice(1)));
    var good_letters_real = state.good_letters.filter(t => t); //get rid of undefined ones in array

    //each word in array
    for (let i = 0; i < words.length; i++) {
        var letters = words[i].split('');
        var has_correct_letters = true;
        var good_letters_used = new Set();

        //each letter in word
        for (let j = 0; j < 5; j++) {
            //break if the correct letters don't correspond with word
            if (state.correct_letters[j] && state.correct_letters[j] != words[i][j]) {
                has_correct_letters = false;
                break;
            }
            //if a letter is good, add it to set
            if (good_letters_real.includes(words[i][j])) good_letters_used.add(words[i][j]);
            //break if there is a bad letter in there
            if (state.bad_letters.includes(words[i][j])) {
                has_correct_letters = false;
                break;
            }
        }

        if (good_letters_used.size == good_letters_real.length && has_correct_letters) {
            potentials.push(words[i]);
        }

    }
    return potentials;
}

state = {
    good_letters: ["L", "E", "G", "I"],
    bad_letters: ["R", "T", "Y", "O", "P", "A", "S", "D", "H", "C", "X", "M", "K"],
    correct_letters: [undefined, undefined, undefined, "E", undefined]

}
console.log(wordleHelper(state))