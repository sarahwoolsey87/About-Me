


console.log ("testing");

let refer;

refer = prompt("Hey there, what's your name?");
alert("Welcome to my page " +refer+ "I hope you're having a great day!");
   
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

function guessNumber() {
  let secretNumber = 35;
  let numbGuess = prompt("Can you guess my age? (Hint - it's between 1-50)");

while (numbGuess != secretNumber) {
  if (numbGuess < secretNumber) {
      alert("Too low, try again!")
      guessNumber()
  } else {
      alert("Too high, try again!")
      guessNumber()
  };
}
alert("You guessed my age!");
}

guessNumber()