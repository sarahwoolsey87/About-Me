function greeting() {
  let refer;
  
  refer = prompt("Hey there, what's your name? If you press 'cancel', I'm gonna call you 'null'");
  alert("Welcome to my page " + refer + "! I hope you're having a great day!");
  
  let answer1 = confirm("Press OK if you intended to visit my website?");
  
  if (answer1) {
    alert("Awesome - it's great to have you here!");
  } else {
    alert("Why don't you stay anyway?");
  }
  }
  
greeting();
  
function loner() {
let friend = prompt ("Are we friends? Please answer yes/no or y/n only").toLowerCase();
  
while (friend != "yes" && friend != "no" && friend != "y" && friend != "n") {
alert("Please answer yes/no or y/n only");
friend = prompt("Are we friends? Please answer yes/no or y/n only").toLowerCase();
}
  
  if (friend === "yes" || friend === "y") {
alert("Awesome - let's party like it's 1969");
} else if (friend === "no" || friend === "n") {
alert("Aw man, that sucks. We should change that.");
}
}

loner();
  
function bullshit() {
let language = prompt ("Do you believe that I can speak fluent Cantonese? Please answer yes/no or y/n only").toLowerCase();
  
while (language != "yes" && language != "no" && language != "y" && language != "n") {
alert("Please answer yes/no or y/n only");
language = prompt("Do you believe that I can speak fluent Cantonese?").toLowerCase();
}
  
if (language === "yes" || language === "y") {
alert("Wow - you think too highly of me. Have you seen how bad I am at pushing a simple Git?");
} else if (language === "no" || language === "n") {
alert("You're 100% correct although I'm a little offended.");
}
}
  
bullshit();
  
function cheeseLover() {
let cheese = prompt ("Do you consume at least one type of cheese at least once per day? Please answer yes/no or y/n only").toLowerCase();
  
while (cheese != "yes" && cheese != "no" && cheese != "y" && cheese != "n") {
alert("Please answer yes/no or y/n only");
cheese = prompt("Do you consume at least one type of cheese at least once per day? Please answer yes/no or y/n only").toLowerCase();
}
  
if (cheese === "yes" || cheese === "y") {
alert("Isn't it the best? I enjoy it at least once per hour.");
} else if (cheese === "no" || cheese === "n") {
alert("That's the saddest story I've cheddar heard.");
}
}
  
cheeseLover();
  
let lowerLimit = 1;
let upperLimit = 25;
let tries = 4;
let answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
let guess = '';
let message = 'Guess which number I\'m thinking of between ' + lowerLimit + ' and ' + upperLimit + ':';
  
while (tries > 0) {
guess = prompt(message, guess);

if (guess === null) {
alert('Okay then, spoilsport!');
break;
} else if (isFinite(guess) && guess !== '') {
guess = +guess;
  
if (guess < lowerLimit) {
alert('Can you not read? I said it shouldn\'t be lower than ' + lowerLimit + '.');
} else if (guess > upperLimit) {
alert('Can you not read? I said it can\'t be higher than ' + upperLimit + '.');
} else if (guess > answer) {
alert('Nope - your guess is too high.');
} else if (guess < answer) {
alert('Nope - your guess is too low.');
} else {
alert('Awesome guess - gold star for you!');
break;
}
} else {
alert('That is not a number, now is it?');
}

tries--;
}
  
if (tries === 0) {
alert('Sorry, you ran out of attempts. The correct answer was ' + answer + '.');
}
  