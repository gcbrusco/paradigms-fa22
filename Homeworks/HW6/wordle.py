#!/usr/bin/env python3
import random

class GameState:
    def __init__(self, words):
        self.word = random.choice(words)
        self.good_letters = []
        self.bad_letters = []
        self.correct_letters = [""]*5
        self.attempts = 0

        fp = open("answer.txt", "w")
        fp.write(str(self.word))
        fp.close()

def analyze_attempt(state, word):
    if state.word == word:
        return True

    for letter in range(0,5):
        # compare each letter of the attempted letter

        if word[letter] in state.word:
            if word[letter] not in state.good_letters:
                state.good_letters.append(word[letter])
            if word[letter] == state.word[letter]:
                state.correct_letters[letter] = word[letter]
        elif word[letter] not in state.bad_letters:
                state.bad_letters.append(word[letter])

    return False

def main():
    # download file
    fp = open("./words.txt")
    words = []
    for line in fp:
        words.append(line.rstrip())
    fp.close()
    
    # start game & user input
    state = GameState(words)
    while state.attempts < 6 and "" in state.correct_letters:
        word_attempt = input("Attempt #" + str(state.attempts+1) + ": ").upper()
        if len(word_attempt) != 5 or not word_attempt.isalpha() or word_attempt not in words:
            print("ERROR! Please input a valid 5 letter word.\n")
            continue
        state.attempts += 1
        if analyze_attempt(state, word_attempt):
            print("Congratulations, you correctly identified the word after " + str(state.attempts) + " attempts\n")
            return
        else:
            print("Good Letters = " + str(state.good_letters))
            print("Bad Letters = " + str(state.bad_letters))
            print("Correct Letters = " + str(state.correct_letters))
        print("")
    
    print("The answer is " + str(state.word) + ". You did not correctly guess it within 6 tries.\n")

main()