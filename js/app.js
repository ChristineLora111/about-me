'use strict';
let correctcount = 0;

let username = prompt('What\'s your name?');

alert('Hello ' + username);


let answer0ne = prompt('Do you think I like sushi? Yes or no').toLowerCase();

function sushiQuestionOne() {
    if (answer0ne === 'yes' || answer0ne === 'y') {
        alert('Yassss, you got that right! I LOVE sushi!');
        correctcount++;
    } else if (answer0ne === 'no' || answer0ne === 'n') {
        alert('Sorry, you\'re incorrect');
    } else {
        alert('Answers need to be yes or no')
    }
}

sushiQuestionOne();


let areDogsCute = prompt('Are dogs cute? Pls answer with a yes or no');

let dogsUpperCase = areDogsCute.toUpperCase();

function dogsQuestionTwo() {
    if (dogsUpperCase === 'YES' || dogsUpperCase === 'YAS') {
        alert('Heck yeah, dogs are cute!');
        correctcount++;
    } else if (dogsUpperCase === 'NO' || dogsUpperCase === 'n') {
        alert('WOW, you couldn\'t be more wrong :(')
    }
}

dogsQuestionTwo();


let doWorkOut = prompt('Do I enjoy working out? Yes or no');

function workOutQuestionThree() {
    if (doWorkOut === 'yes' || doWorkOut === 'y') {
        alert('You are absolutely right. Wow, you already know so much about me :)');
        correctcount++;
    } else if (doWorkOut === 'no' || doWorkOut === 'n') {
        alert('It\'s like you don\'t know me at all')
    }
}

workOutQuestionThree();

let plantMom = prompt('Am I a plant mom to 50+ house plants?');

function plantQuestionFour() {
    if (plantMom === 'yes' || plantMom === 'y') {
        alert('You already know! Thank you for being correct');
        correctcount++;
    } else if (plantMom === 'no' || plantMom === 'n') {
        alert('Aw c\'mon, try again!')
    }
}

plantQuestionFour(); 


let petDogs = prompt('Do I try to pet every day I come across?');

function pettingDogsQuestionFive() {
    if (petDogs === 'yes' || petDogs === 'y') {
        alert('Yep, I really do. You are correct');
        correctcount++;
    } else if (petDogs === 'no' || petDogs === 'n') {
        alert('I\'m almost offended you would think no. Try again.')
    }
}

pettingDogsQuestionFive(); 

let myFavoriteNumber = 5;
let usersGuess = +prompt('What is my favorite number? Hint: Less than 10, greater than 2. You have 4 tries to guess!');

let attemptsRemaining = 3;
let attemptsMade = 3;

function favoriteNumberQuestionSix() {
    while (attemptsRemaining) {
        for (let i = 0; i < attemptsMade; i++) {
            if (usersGuess === myFavoriteNumber) {
                attemptsRemaining = 0;
                alert(`You're correct!`);
                correctcount++;
                break;
            } 
            else if (usersGuess < myFavoriteNumber) {
                alert(`That's too low, try again! You have ${attemptsRemaining} attempts remaining.`);

                usersGuess = +prompt('Can you guess again?');
            }
            else if (usersGuess > myFavoriteNumber) {
                alert(`That's too high, guess again! You have ${attemptsRemaining} attempts remaining.`);
                usersGuess = +prompt(`Please try another number`);
            }
            attemptsRemaining--;
            if (attemptsRemaining === 0 && usersGuess !== myFavoriteNumber) { 
                alert('The correct answer is ' + myFavoriteNumber); 
            } 
        } 
    } 
}

favoriteNumberQuestionSix();


let myFavoriteAnimals = ['cats', 'dogs', 'penguins', 'octopus'];
let userInput = prompt('what is my favorite animal?');
let attempts = 5;
let guessedCorrectly = false;

function AnimalQuestionSeven() {
    while (attempts) {
        if (!attempts) {
            alert(`You're out of attempts`);
            break;
        }
        for (let i = 0; i < myFavoriteAnimals.length; i++) {
            if (userInput === myFavoriteAnimals[i]) {
                alert(`You got it right!`);
                correctcount++;
                guessedCorrectly = true; 
                break; 
            } 
        } 
        if (guessedCorrectly) { 
            correctcount++;
            attempts = 0; 
            break; 
        }
        alert(`Please try again, you have ${attempts} attempts remaining`);
            userInput = prompt(`What's my favorite animal?`);
            attempts--;
    } 
}

AnimalQuestionSeven(); 


alert(`Your possible answers were ${myFavoriteAnimals}`);
alert(`You scored ${correctcount} out of 7 on my about me quiz!! YASSSS!`);


