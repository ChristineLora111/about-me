'use strict';
let correctcount = 0;
// ask the users name to greet them
let username = prompt('What\'s your name?');

//greeting the user back
alert('Hello ' + username);

// QUESTION 1:
function questionOne() {
// about my favorite food:
  let answer0ne = prompt('Do you think I like sushi? Yes or no').toLowerCase();

  // console.log('user answer to question 1: ' + answer0ne);

  // response to the users answer:
  if (answer0ne === 'yes' || answer0ne === 'y') {
    alert('Yassss, you got that right! I LOVE sushi!');
    correctcount++;
  } else if (answer0ne === 'no' || answer0ne === 'n') {
    alert('Sorry, you\'re incorrect');
  } else {
    alert('Answers need to be yes or no');
  }
}

// QUESTION 2:
function questionTwo() {
  let areDogsCute = prompt('Are dogs cute? Pls answer with a yes or no');
  // console.log('user answer: ' + areDogsCute);
  let dogsUpperCase = areDogsCute.toUpperCase();

  // console.log(dogsUpperCase);

  if (dogsUpperCase === 'YES' || dogsUpperCase === 'YAS') {
    alert('Heck yeah, dogs are cute!');
    correctcount++;
  } else if (dogsUpperCase === 'NO' || dogsUpperCase === 'n') {
    alert('WOW, you couldn\'t be more wrong :(');
  }
}

function questionThree() {
  // QUESTION 3:
  let doWorkOut = prompt('Do I enjoy working out? Yes or no');

  // console.log('users answer ' + doWorkOut);

  // response to the users answer:
  if (doWorkOut === 'yes' || doWorkOut === 'y') {
    alert('You are absolutely right. Wow, you already know so much about me :)');
    correctcount++;
  } else if (doWorkOut === 'no' || doWorkOut === 'n') {
    alert('It\'s like you don\'t know me at all')
  }
}

function questionFour() {
  // QUESTION 4:
  let plantMom = prompt('Am I a plant mom to 50+ house plants?');

  // console.log('user answer ' + plantMom);

  // response to users answer:
  if (plantMom === 'yes' || plantMom === 'y') {
    alert('You already know! Thank you for being correct');
    correctcount++;
  } else if (plantMom === 'no' || plantMom === 'n') {
    alert('Aw c\'mon, try again!')
  }
}

// QUESTION 5:
let petDogs = prompt('Do I try to pet every day I come across?');

// console.log('users answer ' + petDogs);

if (petDogs === 'yes' || petDogs === 'y') {
    alert('Yep, I really do. You are correct');
    correctcount++;
} else if (petDogs === 'no' || petDogs === 'n') {
    alert('I\'m almost offended you would think no. Try again.')
}

// - Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// - Indicates through an alert if the guess is “too high” or “too low”.
// - It should give the user exactly four opportunities to get the correct answer.
// - After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// QUESTION 6: 
let myFavoriteNumber = 5;
let usersGuess = +prompt('What is my favorite number? Hint: Less than 10, greater than 2. You have 4 tries to guess!');

let attemptsRemaining = 3;
let attemptsMade = 3;

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

// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

// QUESTION 7:
let myFavoriteAnimals = ['cats', 'dogs', 'penguins', 'octopus'];
let userInput = prompt('what is my favorite animal?');
let attempts = 5;
let guessedCorrectly = false;

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
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

alert(`Your possible answers were ${myFavoriteAnimals}`);
alert(`You scored ${correctcount} out of 7 on my about me quiz!! YASSSS!`);


