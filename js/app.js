'use strict';

// ask the users name to greet them
let username = prompt('What\'s your name?');

//greeting the user back
alert('Hello ' + username);

// QUESTION 1:
// about my favorite food:
let answer0ne = prompt('Do you think I like sushi? Yes or no').toLowerCase();

// console.log('user answer to question 1: ' + answer0ne);

// response to the users answer:
if (answer0ne === 'yes' || answer0ne === 'y') {
    alert('Yassss, you got that right! I LOVE sushi!');
} else if (answer0ne === 'no' || answer0ne === 'n') {
    alert('Sorry, you\'re incorrect');
} else {
    alert('Answers need to be yes or no')
}

// QUESTION 2:
let areDogsCute = prompt('Are dogs cute? Pls answer with a yes or no');

// console.log('user answer: ' + areDogsCute);

let dogsUpperCase = areDogsCute.toUpperCase();

// console.log(dogsUpperCase);

if (dogsUpperCase === 'YES' || dogsUpperCase === 'YAS') {
  alert('Heck yeah, dogs are cute!');
} else if (dogsUpperCase === 'NO' || dogsUpperCase === 'n') { 
    alert('WOW, you couldn\'t be more wrong :(')
}

// QUESTION 3:
let doWorkOut = prompt('Do I enjoy working out? Yes or no');

// console.log('users answer ' + doWorkOut);

// response to the users answer:
if (doWorkOut === 'yes' || doWorkOut === 'y') {
    alert('You are absolutely right. Wow, you already know so much about me :)');
} else if (doWorkOut === 'no' || doWorkOut === 'n') {
    alert('It\'s like you don\'t know me at all')
}

// QUESTION 4:
let plantMom = prompt('Am I a plant mom to 50+ house plants?');

// console.log('user answer ' + plantMom);

// response to users answer:
if (plantMom === 'yes' || plantMom === 'y') {
    alert('You already know! Thank you for being correct');
} else if (plantMom === 'no' || plantMom === 'n') {
    alert('Aw c\'mon, try again!')
}

// QUESTION 5:
let petDogs = prompt('Do I try to pet every day I come across?');

// console.log('users answer ' + petDogs);

if (petDogs === 'yes' || petDogs === 'y') {
    alert('Yep, I really do. You are correct');
} else if (petDogs === 'no' || petDogs === 'n') {
    alert('I\'m almost offended you would think no. Try again.')
}










