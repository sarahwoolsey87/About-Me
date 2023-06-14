


console.log ("testing");

let refer;

refer = prompt("Hey there, what's your name?");
alert("Welcome to my page " +refer+ " I hope you're having a great day!");
   
let answer1 = confirm ("Press OK if you intended to visit my website?");
//console.log(answer1);

if (answer1) {
//console.log("Awesome -it's great to have you here");
alert("Awesome - it's great to have you here!");
} else {
//console.log("Why don't you stay anyway!");
alert("Why don't you stay anyway?");
}

let friend = prompt ("Are we friends? Please answer yes/no or y/n only").toLowerCase();

while (friend != "yes" && friend != "no" && friend != "y" && friend != "n") {
  alert("Please answer yes/no or y/n only");
  friend = prompt("Are we friends? Please answer yes/no or y/n only").toLowerCase();
}

if (friend === "yes" || friend === "y") {
//console.log("Awesome - let's party like it's 1969!");
alert("Awesome - let's party like it's 1969");

} else if (friend === "no" || friend === "n") {
//console.log("Aw man, that sucks. We should change that");
alert("Aw man, that sucks. We should change that.");
}

let language = prompt ("Do you believe that I can speak fluent Cantonese? Please answer yes/no or y/n only").toLowerCase();

while (language != "yes" && language != "no" && language != "y" && language != "n") {
  alert("Please answer yes/no or y/n only");
  language = prompt("Do you believe that I can speak fluent Cantonese?").toLowerCase();
}

if (language === "yes" || language === "y") {
//console.log("Wow - you think too highly of me. Have you seen how bad I am at pushing a simple Git?");
alert("Wow - you think too highly of me. Have you seen how bad I am at pushing a simple Git?");

} else if (language === "no" || language === "n") 
//console.log("You're 100% correct although I'm a little offended.");
alert("You're 100% correct although I'm a little offended.");

let cheese = prompt ("Do you consume at least one type of cheese at least once per day? Please answer yes/no or y/n only").toLowerCase();

while (cheese != "yes" && cheese != "no" && cheese != "y" && cheese != "n") {
  alert("Please answer yes/no or y/n only");
  cheese = prompt("Do you consume at least one type of cheese at least once per day? Please answer yes/no or y/n only").toLowerCase();
}

if (cheese === "yes" || cheese === "y") {
//console.log("Awesome - let's party like it's 1969!");
alert("Isn't it the best? I enjoy it at least once per hour.");

} else if (cheese === "no" || cheese === "n") {
//console.log("Aw man, that sucks. We should change that");
alert("That's the saddest story I've cheddar heard.");
}

// Initial setup of variables.
let lowerLimit = 1;
let upperLimit = 25;
let tries = 4;
let answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
let guess = '';
let message = 'Guess which number I\'m thinking of between ' + lowerLimit + ' and ' + upperLimit + ':';

// Keep prompting the user for a guess until the game ends.
while (tries > 0) {
  // Prompt the user for a guess.
  guess = prompt(message, guess);

  // If the cancel button was pushed, let the user know the game is ending and break out of the loop.
  if (guess === null) {
    alert('Okay then, spoilsport!');
    break;
  }
  // If the guess is a number...
  else if (isFinite(guess) && guess !== '') {
    // Make sure the guess is converted into a number.
    guess = +guess;

    // If the guess is less than the range, let the user know.
    if (guess < lowerLimit) {
      alert('Can you not read? I said it shouldn\'t be lower than ' + lowerLimit + '.');
    }
    // If the guess is greater than the range, let the user know.
    else if (guess > upperLimit) {
      alert('Can you not read? I said it can\'t be higher than ' + upperLimit + '.');
    }
    // If the guess is too high, let the user know.
    else if (guess > answer) {
      alert('Nope - your guess is too high.');
    }
    // If the guess is too low, let the user know.
    else if (guess < answer) {
      alert('Nope - your guess is too low.');
    }
    // If none of the other cases were true, the answer must have been guessed, so let the user know and break out of the loop.
    else {
      alert('Awesome guess - gold star for you!');
      break;
    }
  }
  // If the guess is not a number, let the user know.
  else {
    alert('That is not a number, now is it?');
  }

  tries--;
}

// Define the question and possible answers
let question = "Name one of the coolest countries I have visited.";
let possibleAnswers = ["Japan", "Italy", "Jamaica"];

// Display the question prompt and available attempts
let attempts = 6;
while (attempts > 0) {
  let userAnswer = prompt(question + "\nYou have " + attempts + " attempts remaining.");

  // Check if the user's answer is correct
  let isCorrect = false;
  for (let i = 0; i < possibleAnswers.length; i++) {
    if (userAnswer.toLowerCase() === possibleAnswers[i].toLowerCase()) {
      isCorrect = true;
      break;
    }
  }

  if (isCorrect) {
    alert("Spot on - I love that place!");
    break;
  } else {
    alert("Maybe cool but not in my top three");
    attempts--;
  }
}

// Display all possible correct answers
alert("The possible correct answers are: " + possibleAnswers.join(", "));
